const assert = require('assert');
let sst = require("../ProtoClasses").sst;
let util = require("../util/Util");

let root_proxy_name = ".";

class DataBundle {
    get proxies() {
        return this._proxies;
    }

    get proxy() {
        return this._proxies.get(root_proxy_name);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get data() {
        return this._data;
    }

    /**
     * A bundle has only one data;
     * @param data
     */
    set data(data) {
        this._data = data;
        this.initDataProxy();
    }

    constructor() {
        this._data = null;
        this._proxies = new Map();
        this._name = null;
        this._modification = new Set();
    }

    /**
     * Add watcher to monitoring all modification of the data_obj bundle
     * data_obj 的内部属性被赋值时，会调用此类中的回调，记录修改，data_obj 本身被重新赋值时，在此类中做另外的处理
     */
    initDataProxy() {
        let data_obj = this.data;

        if (!data_obj) {
            return;
        }
        this.addProxyForObject(data_obj, root_proxy_name);
    }

    // todo 和 Array
    addProxyForObject(data_obj, data_path, parent) {

        let handler = this.getObjectHandler(data_obj, data_path);
        let proxy = new Proxy(data_obj, handler);
        this.proxies.set(data_path, proxy);

        // add proxy for array
        if (data_obj instanceof Array) {
            this.addProxyForArray(data_obj, data_path);
        }

        // add proxy for children
        for (let key in data_obj) {
            if (data_obj.hasOwnProperty(key)) {
                let pro = data_obj[key];
                if (pro === null) {
                    continue;
                }

                if (typeof pro === "object") {
                    let path = `${data_path}/${key}`;
                    let p = this.addProxyForObject(pro, path);
                }

            }

        }

    }

    addProxyForArray(data_obj, data_path) {
        // func push
        {
            let key = "push";
            let func = data_obj[key];
            let path = `${data_path}/${key}`;
            let proxy = new Proxy(func, {
                apply: function (target, ctx, args) {
                    let mod = new sst.ArrayMod();
                    mod.origin_start = ctx.length;
                    mod.origin_end = ctx.length;
                    mod.result_start = ctx.length;
                    mod.result_end = ctx.length + args.length;
                    mod.data = args;
                    return Reflect.apply(target, ctx, args);
                }
            });
            this.proxies.set(path, proxy);
        }
        // func pop
        {
            let key = "pop";
            let func = data_obj[key];
            let path = `${data_path}/${key}`;
            let proxy = new Proxy(func, {
                apply: function (target, ctx, args) {
                    let mod = new sst.ArrayMod();
                    mod.origin_start = ctx.length - 1;
                    mod.origin_end = ctx.length;
                    mod.result_start = ctx.length - 1;
                    mod.result_end = ctx.length - 1;
                    return Reflect.apply(target, ctx, args);
                }
            });
            this.proxies.set(path, proxy);
        }
    }

    getArrayHandler(data_obj, data_path) {
        let self = this;
        return {
            set: function (target, propKey, value, receiver) {
                let res = Reflect.get(target, propKey);
                let prop_path = data_path + "/" + propKey;
                let ins = parseInt(propKey);
                util.log("set_handler_of_array");
                let mod = new sst.ArrayMod();
                let prop_path = data_path;
                mod.origin_start = ins;
                mod.origin_end = ins + 1;
                mod.result_start = ins;
                mod.result_end = ins + 1;
                mod.data = value;
                mod.path = prop_path;
                self._modification.add(mod);

                target[ins] = value;
                return true;
            },

            get: function (target, propKey, receiver) {
                let res = Reflect.get(target, propKey);
                if (typeof res === "object") {
                    return self.proxies.get(data_path + "/" + propKey);
                }
                return res;
            },

            deleteProperty: function (target, propKey) {
                if (target instanceof Array) {
                    util.log("deleteProperty_for_array", target, propKey);
                }
            }

        }
    }

    getObjectHandler(data_obj, data_path) {
        let self = this;
        return {
            set: function (target, propKey, value, receiver) {
                let res = Reflect.get(target, propKey);
                let prop_path = data_path + "/" + propKey;
                let ins = parseInt(propKey);
                if (target instanceof Array && !isNaN(ins)) {
                    util.log("set_handler_of_object");
                    let mod = new sst.ArrayMod();
                    let prop_path = data_path;
                    mod.origin_start = ins;
                    mod.origin_end = ins + 1;
                    mod.result_start = ins;
                    mod.result_end = ins + 1;
                    mod.data = [value];
                    mod.path = prop_path;
                    self._modification.add(mod);

                    target[ins] = value;
                    return true;
                } else {
                    if (typeof res === "object") {
                        self.proxies.del(prop_path);
                    }
                    self.addBaseAssignment(prop_path, value);
                    return Reflect.set(target, propKey, value);
                }

            },

            get: function (target, propKey, receiver) {
                let res = Reflect.get(target, propKey);
                if (typeof res === "object") {
                    return self.proxies.get(data_path + "/" + propKey);
                }
                return res;
            },

            deleteProperty: function (target, propKey) {
                if (target instanceof Array) {
                    util.log("deleteProperty_for_array", target, propKey);
                }
            }

        }
    }

    /**
     * Add modification record
     * @param path
     * @param value
     */
    addBaseAssignment(path, value) {
        let ass = new sst.AssignmentMod();
        ass.path = path;
        ass.data = value;
        this._modification.add(ass);
    }

    getModification() {
        return this._modification;
    }

    clearModification() {
        this._modification = new Set();
    }

    getParentByPath(path) {
        path = path.split("/");
        path.pop();
        let parent;
        for (let key in path) {
            let p = path[key];
            if (p === ".") {
                parent = this._data;
            } else {
                parent = parent[p];
            }
        }

        return parent;
    }

    getObjectByPath(path) {
        path = path.split("/");
        let obj;
        for (let key in path) {
            let p = path[key];
            if (p === ".") {
                obj = this._data;
            } else {
                obj = obj[p];
            }
        }

        return obj;
    }

    getNameByPath(path) {
        path = path.split("/");
        return path.pop();
    }

    // 将一组改动应用到数据集
    applyModification(modification) {
        modification.forEach(function (mod) {
            util.log("applay modification ", mod);
            if (mod instanceof sst.AssignmentMod) {
                this.assignDataByPath(mod.path, mod.data);
            } else if (mod instanceof sst.DeleteMod) {
                this.deleteDataByPath();
            } else if (mod instanceof sst.ArrayMod) {
                this.applyArrayMod(mod);
            }
        }, this);
    }

    applyArrayMod(mod) {
        let prop_name = this.getNameByPath(mod.path);
        let arr = this.getObjectByPath(mod.path);
        arr.splice.apply(arr, [mod.origin_end, mod.origin_end - mod.origin_start].concat(mod.data))

    }

    assignDataByPath(path, data) {
        let prop_name = this.getNameByPath(path);
        let parent = this.getParentByPath(path);
        delete parent[prop_name];
        parent[prop_name] = data;
    }

    deleteDataByPath() {
        let prop_name = this.getNameByPath(path);
        let parent = this.getParentByPath(path);
        delete parent[prop_name];
    }

}

module.exports = DataBundle;