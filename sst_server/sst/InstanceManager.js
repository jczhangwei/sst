class BoundleManager {

    static get instance() {
        if(!this._instance) {
            this._instance = new BoundleManager();
        }
        return this._instance;
    }

    constructor() {
        this._instances = null;

    }

    addDataInstance(name, data_instance) {

    }

}

module.exports = BoundleManager;