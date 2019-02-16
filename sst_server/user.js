class User {
    _client = null;

    get client() {
        return this._client;
    }

    set client(value) {
        this._client = value;
    }

    constructor() {

    }

}

module.exports = User;