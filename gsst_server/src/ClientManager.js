let schedule = require('node-schedule');

let User = require("./User");
let RouteManager = require("./RouteManager");

class ClientManager {
    static get instance() {
        if (!this._instance) {
            this._instance = new ClientManager();
        }
        return this._instance;
    }

    get clients() {
        return this._clients;
    }

    set clients(value) {
        this._clients = value;
    }

    constructor() {
        this._clients = new Map();
        this._users = new Map();

        schedule.scheduleJob("0-59 * * * * *", function () {
            let out_time = 2000;
            for (let key in connects) {
                let connect = connects[key];
                if (!client_manager.isLogin(connect.client) && Date.now() - connect.timestamp >= out_time) {
                    removeClient(key);
                }
            }
        });

        RouteManager.instance.registerRoute("user_sign_in", function () {

        }, this);

    }

    get users() {
        return this._users;
    }

    set users(value) {
        this._users = value;
    }

    getSuid(user_name, pass_word) {
        // todo
        return user_name + pass_word;
    }

    userSignUp(client, user_name, pass_word, callback, caller) {
        
    }

    userSignIn(client, suid, pass_word, callback, caller) {
        // todo     pass world check

        let user = new User(suid);
        this.clients.set(user, client);
        this.users.set(client, user);
        if(callback) {
            callback.call(caller);
        }
    }

    userSignOut(client, suid, callback, caller) {

    }

    isLogin(client) {
        return this.users.has(client);
    }

}

module.exports = ClientManager;