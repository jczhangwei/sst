let User = require("./User");

class UserManager {
    get clients() {
        return this._clients;
    }

    set clients(value) {
        this._clients = value;
    }

    constructor() {
        this._clients = new Map();

    }

    user_connect(client, suid) {
        let user = new User(suid);
        this.clients.set(user, client);
    }

}

module.exports = UserManager;