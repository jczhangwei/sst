const assert = require('assert');
const us = require("underscore")

let sst_server = require("../src/ProtoClasses").sst_server;

let RouteTable = {
    
};

class RouteListener {
    constructor(callback, caller) {
        this.callback = callback;
        this.caller = caller;
    }
}

class RouteManager {
    static get instance() {
        if (!this._instance) {
            this._instance = new RouteManager();
        }
        return this._instance;
    }

    constructor() {
        this.route_table = new Map();
    }

    dist(msg_name, data) {
        let listeners = this.route_table.get(msg_name);
        if(listeners) {
            us.each(listeners, function(callback){
                callback.call(caller, data);
            }, this);
        }
    }

    registerRoute(msg_name, callback, caller) {
        let listeners = this.route_table.get(msg_name);
        if(!listeners) {
            listeners = new Set();
            this.route_table.set(msg_name, listeners);
        }

        listeners.add(new RouteListener(callback, caller));
    }
    
};

module.exports = RouteManager;