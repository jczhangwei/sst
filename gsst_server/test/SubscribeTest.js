const assert = require('assert');
const gsst = require('gsst');

let DatabundleManager = gsst.DatabundleManager;
let sst_server = require("../src/ProtoClasses").sst_server;
let util = require("../util/Util");


let data_bundle_name = "test_data_bundle";

class SubscribeTest {
    static get instance() {
        if (!this._instance) {
            this._instance = new SubscribeTest();
        }
        return this._instance;
    }

    constructor() {

    }

    run() {
        let server_data = new sst_server.UserBaseInfo();
        let server_bundle_name = "server_data";
        let server_bundle = DatabundleManager.instance.addDataBundle(server_bundle_name, server_data);
        let server_proxy = server_bundle.proxy;

        let client_data = new sst_server.UserBaseInfo();
        let client_bundle_name = "client_data";
        let client_bundle = DatabundleManager.instance.addDataBundle(client_bundle_name, client_data);
        let client_proxy = client_bundle.proxy;

        assert.deepStrictEqual(server_data, client_data);

        server_proxy.pass_word = "1234123";
        let res = new sst_server.Resource();
        res.id = 11234;
        res.num = 10;
        res.type = 24;
        server_proxy.resources[0] = res;

        let mod = server_bundle.getModification();
        util.log("log_server_bundle:", mod);

        client_bundle.applyModification(mod);

        assert.deepStrictEqual(server_data, client_data);

    }

    initData() {

    }
}

module.exports = SubscribeTest;