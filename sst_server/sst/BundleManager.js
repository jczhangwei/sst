class BundleManager {

    static get instance() {
        if(!this._instance) {
            this._instance = new BundleManager();
        }
        return this._instance;
    }

    constructor() {

    }

    addDataBundle(bundle_name, data_bundle) {
        this.preprocessDataBundle(data_bundle);
    }

    preprocessDataBundle(data_bundle) {

    }

}

module.exports = BundleManager;