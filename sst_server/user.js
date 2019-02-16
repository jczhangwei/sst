class User {
    _client = null;

    get client() {
        return this._client;
    }

    set client(value) {
        this._client = value;
    }

    constructor(client) {
        this.client = client;
    }

}

function user(client){
    return new User(client);
}

module.exports = user;