const assert = require('assert').strict;

let BundleManager = require("../sst/DataBundleManager");
let sst = require("../ProtoClasses");
let util = require("../util/Util");


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
        let server_data = new sst.UserBaseInfo();
        let server_bundle_name = "server_data";
        BundleManager.instance.addDataBundle(server_bundle_name, server_data);
        let server_bundle = BundleManager.instance.getBundleByName(server_bundle_name);
        let server_proxy = server_bundle.proxy;

        let client_data = new sst.UserBaseInfo();
        let client_bundle_name = "client_data";
        BundleManager.instance.addDataBundle(client_bundle_name, client_data);
        let client_bundle = BundleManager.instance.getBundleByName(client_bundle_name);
        let client_proxy = client_bundle.proxy;

        assert.deepStrictEqual(server_data, server_proxy);

        server_proxy.pass_word = "1234123";

        let mod = server_bundle.getModification();
        util.log(mod);

        client_bundle.pushModification(mod);

        // assert.deepStrictEqual(server_data, client_data);



    }

    initData() {


    }
}

module.exports = SubscribeTest;