const assert = require('assert');
const gsst = require('gsst');

let sst_server = require("../src/ProtoClasses").sst_server;
let util = require("../util/Util");


class ProtoTest {
    static get instance() {
        if (!this._instance) {
            this._instance = new ProtoTest();
        }
        return this._instance;
    }

    constructor() {

    }

    run() {
        var UserBaseInfo = sst_server.user_base.UserBaseInfo;
        var info = new UserBaseInfo();
        info.user_name = "jjjjjjjjjjjjj";
        info.pass_word = "kkkkkkkkkkkkk";

        var info2 = new UserBaseInfo();
        info2.user_name = "1111111111";
        info2.pass_word = "2222222222"
        
        util.log("ProtoTest: ", info);

        var code = UserBaseInfo.encode(info).finish();
        
        util.log("Info Code: ", code);

        var dinfo = UserBaseInfo.decode(code);
        
        util.log("Info Decode: ", dinfo);
    }

    initData() {

    }
}

module.exports = ProtoTest;