let UserManager = require("./UserManager");
let WebSocketServer = require('ws').Server;
let webSocketServer = new WebSocketServer({port: 8080});
let HashMap = require('hashmap');

let connectNum = 0;

let MsgType = {
    login: "login",
    logout: "logout",
    reconnect: "reconnect",
    business: "business"
};

let user_manager = new UserManager();

// connection
webSocketServer.on('connection', function(client) {
    ++connectNum;
    console.log('A client has connected. current connect num is : ' + connectNum);

    client.on('message', function(message) {
        try{
        message = JSON.parse(message);

        }catch(e) {
            client
        }

        switch(message.type) {
            case MsgType.login:
                user_manager.user_connect(client);
                break;

        }
    });

    client.on('close', function(message) {

    });
});