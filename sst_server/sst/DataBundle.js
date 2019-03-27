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

        if(!data_obj) {
            return;
        }

        this.addProxyForObject(data_obj, root_proxy_name);
    }

    // todo 处理 Map 和 Array
    addProxyForObject(data_obj, data_path, parent) {
        for(let key in data_obj) {
            if(data_obj.hasOwnProperty(key)) {
                let pro = data_obj[key];
                if(pro === null) {
                    continue;
                }

                if(typeof pro === "object") {
                    let path = `${data_path}/${key}`;
                    let p = this.addProxyForObject(data_obj, path);
                    this.proxies.add(path, p);
                }

            }

        }

        let handler = this.getObjectHandler(data_obj, data_path);
        let proxy = new Proxy(data_obj, handler);
        this.proxies.add(data_path, proxy);
    }

    getObjectHandler(data_obj, data_path) {
        let self = this;
        return {
            set: function(target, propKey, value, receiver) {
                let res = Reflect.get(target, propKey);
                let prop_path = data_path + propKey;
                if(typeof res === "object") {
                    self.proxies.del(prop_path);
                }
                Reflect.set(target, propKey, value);
                self.addBaseAssignment(prop_path, value);
            },

            get: function(target, propKey, receiver) {
                let res = Reflect.get(target, propKey);
                if(typeof res === "object") {
                    return self.proxies.get(data_path + propKey);
                }
                return res;
            }
        }
    }

    /**
     * Add modification recoard
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

    // 将一组改动应用到数据集
    pushModification(modification) {
        for(let mod in modification) {
            if(mod instanceof sst.AssignmentMod) {
                this.assignDataByPath(mod.path, mod.data);
            }
        }
    }

    assignDataByPath(path, data) {
        path = path.split(path, "/");
        let prop_name = path.pop();
        let parent;
        for(let key in path) {
            let p = path[key];
            if(p === ".") {
                parent = this._data;
            } else {
                parent = parent[p];
            }
        }

        delete parent[prop_name];
        parent[prop_name] = data;

    }

}

module.exports = DataBundle;