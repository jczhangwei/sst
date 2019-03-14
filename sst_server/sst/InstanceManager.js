class InstanceManager {

    static get instance() {
        if(!this._instance) {
            this._instance = new InstanceManager();
        }
        return this._instance;
    }

    constructor() {
        this._instances = null;

    }

    addDataInstance(name, data_instance) {

    }

}

module.exports = InstanceManager;