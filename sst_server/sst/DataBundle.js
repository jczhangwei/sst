class DataBundle {
    get proxies() {
        return this._proxies;
    }

    get proxy() {
        return this._proxy;
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
        this._proxy = null;
        this._proxies = new Map();
        this._name = null;
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

        let path = ".";
        this.addProxyForObject(data_obj, path);
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

    }

    addObjectAssignment(path, value) {

    }

    getModification() {

    }

    clearModification() {

    }

}

module.exports = DataBundle;