class DataBundle {
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

        let proxy = this.getProxyForObject(data_obj, "");
        this.proxy = proxy;

    }

    // todo 处理 Map 和 Array
    getProxyForObject(data_obj, data_path, parent) {
        let handler = this.getObjectHandler(data_obj, data_path);
        let proxy = new Proxy(data_obj, handler);

        for(let key in data_obj) {
            if(data_obj.hasOwnProperty(key)) {
                let pro = data_obj[key];
                if(pro === null) {
                    continue;
                }

                if(typeof pro === "object") {
                    let p = this.getProxyForObject(data_obj, `${data_path}/${key}`);

                }

            }

        }

        return proxy;

    }

    getObjectHandler(data_obj, data_path) {
        return {
            set: function(target, propKey, receiver) {

            }
        }
    }

    reprocessBaseData(obj, property_name, data_path) {
        let value = obj[property_name];

        let self = this;
        Object.defineProperty(obj, property_name, {
            enumerable: true,
            configurable: false,
            get: function() {
                return value;
            },
            set: function(v) {
                value = v;
                self.addBaseAssignment(data_path, value);
            },
        });

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