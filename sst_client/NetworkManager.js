let WebSocket = require('ws');
let util = require('util');

let MsgType = {
    login: "login",
    logout: "logout",
    reconnect: "reconnect",
    business: "business"
};

class NetworkManager {
    get is_connected() {
        return this._is_connected;
    }

    set is_connected(value) {
        this._is_connected = value;
    }

    constructor() {
        this._ws = null;
        this._is_connected = false;
    }

    connect(url, port) {
        let ws = this.ws = new WebSocket(util.format("ws://%s:%s", url, port));

        ws.onopen = function(e) {
            console.log('Connection to server opened');
            this.is_connected = true;
            let runner = (function* () {
                while(true) {
                    yield setTimeout(function() {
                        runner.next();
                    }, 1234);
                    if(this.is_connected) {
                        this.sendTestMessage();
                    } else {
                        break;
                    }
                }
            }.bind(this))();
            runner.next();
        }.bind(this);

        ws.onmessage = function(event) {
            console.log('\nClient received a message', event.data);
        };

        ws.onclose = function(e) {
            console.log('connection closed.');
            this.is_connected = false;
        };

    }

    sendTestMessage() {
        ws.send("Client time: " + new Date());
    }

    login(suid, passwd) {

    }

    send() {

    }

    get ws() {
        return this._ws;
    }

    set ws(value) {
        this._ws = value;
    }
}


module.exports = NetworkManager;