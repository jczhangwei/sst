class DataBundle {
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
        this.preprocessData()
    }

    constructor() {
        this._data = null;
        this._name = null;
    }

    /**
     * Add watcher to monitoring all modification of the data bundle
     * data 的内部属性被赋值时，会调用此类中的回调，记录修改，data 本身被重新赋值时，在此类中做另外的处理
     */
    preprocessData(data) {
        data = data || this.data;

        if(!data === null) {
            return;
        }

        let type = typeof data;
        switch(type) {
            case "undefined":           // Undefined
            case "function":            // function
            case "boolean":             // Boolean
            case "number":              // Number
            case "string":              // String
            case "symbol":              // Symbol
                break;
            case "object":              // 任何其他对象
                for(let key in data) {
                    if(data.hasOwnProperty(key)) {
                        let pro = data[key];
                        if(pro === null) {
                            continue;
                        }

                        let type = typeof data;
                        switch(type) {
                            case "undefined":           // Undefined
                            case "function":            // function
                            case "boolean":             // Boolean
                            case "number":              // Number
                            case "string":              // String
                            case "symbol":              // Symbol
                                this.reprocessBaseData(data, key, key);
                                break;
                            case "object":              // 任何其他对象
                                this.processObjectProperty(data, key, key);
                                break;
                        }

                    }

                }
                break;

        }

    }

    // todo 处理 Map 和 Array
    processObjectProperty(obj, property_name, data_path) {
        var value = obj[property_name];

        switch(type) {
            case "undefined":           // Undefined
            case "function":            // function
                break;
            case "boolean":             // Boolean
            case "number":              // Number
            case "string":              // String
            case "symbol":              // Symbol
                this.reprocessBaseData(obj, property_name, data_path);
                break;
            case "object":              // 任何其他对象
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
                        self.addObjectAssignment(data_path, value);
                    },
                });

                this.processObjectProperty(obj, key, key);
                break;
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