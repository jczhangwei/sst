let schedule = require('node-schedule');

let util = require("../util/Util");

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
        this._temp_clients = new Set();

        schedule.scheduleJob("0-59 * * * * *", function () {
            util.log("schedule...");
            let out_time = 3000;
            for (let client of this._temp_clients) {
                if (this.users.get(client)) {
                    this._temp_clients.delete(client);
                } else if (!client.timestamp || Date.now() - client.timestamp >= out_time) {
                    client.close();
                    this._temp_clients.delete(client);
                }
            }
        }.bind(this));

        RouteManager.instance.registerRoute("user_sign_in", function () {

        }, this);

    }

    get users() {
        return this._users;
    }

    set users(value) {
        this._users = value;
    }

    clientConnect(client) {
        client.timestamp = Date.now();
        this._temp_clients.add(client);
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
        if (callback) {
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