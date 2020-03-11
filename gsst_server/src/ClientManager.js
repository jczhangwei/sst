let User = require("./User");

class ClientManager {
    static get instance() {
        if(!this._instance) {
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
    }

    get users() {
        return this._users;
    }

    set users(value) {
        this._users = value;
    }

    clientConnect(client, suid) {
        let user = new User(suid);
        this.clients.set(user, client);
        this.users.set(client, user);
    }

    userDisconnect(client) {

    }

    isLogin(client) {
        return this.users.has(client);
    }

}

module.exports = ClientManager;