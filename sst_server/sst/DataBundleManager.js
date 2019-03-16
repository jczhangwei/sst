let DataBundle = require("./DataBundle");

class DataBundleManager {

    static get instance() {
        if(!this._instance) {
            this._instance = new DataBundleManager();
        }
        return this._instance;
    }

    constructor() {
        this.bundles = new Map();
    }

    addDataBundle(bundle_name, data) {
        let bundle = new DataBundle();
        bundle.name = bundle_name;
        bundle.data = data;

        this.bundles.set(bundle_name, bundle);
    }


}

module.exports = DataBundleManager;