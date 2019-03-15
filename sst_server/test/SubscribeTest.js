let BounderManager = require("../sst/BundleManager");
let sst = require("../ProtoClasses");


let data_bundle_name = "test_data_bundle";

class SubscribeTest {
    static get instance() {
        if(!this._instance) {
            this._instance = new SubscribeTest();
        }
        return this._instance;
    }

    constructor() {

    }

    run() {

    }

    initData () {
        let user_base_info = new sst.UserBaseInfo();
        let bundle_name           = "user_base_info";
        BundleManager.instance.addDataBundle(bundle_name, user_base_info);

        user_base_info.pass_word = "1234123"


    }
}

module.exports = SubscribeTest;