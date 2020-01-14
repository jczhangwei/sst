let WebSocketServer = require('ws').Server;
let schedule = require('node-schedule');
let protobuf = require("protobufjs");
let HashMap = require('hashmap');

let ProtoManager = require("./src/ProtoManager");
let UserManager = require("./UserManager");

let webSocketServer = new WebSocketServer({port: 8080});

let connectNum = 0;

let MsgType = {
    login: "login",
    logout: "logout",
    reconnect: "reconnect",
    business: "business"
};

let user_manager = UserManager.instance;
var proto_namager = ProtoManager.instance;
let connects = [];

function removeClient(key) {
    key = parseInt(key);
    let connect = connects[key];
    connect.client.close();

    connects.splice(key, 1);
}


// connection
webSocketServer.on('connection', function(client) {
    ++connectNum;
    console.log('A client has connected. current connect num is : ' + connectNum);

    connects.push({
        client: client,
        timestamp: Date.now()
    });

    client.on('message', function(message) {
        try {
            message = JSON.parse(message);

        } catch(e) {

        }

        switch(message.type) {
            case MsgType.login:
                user_manager.userConnect(client);
                break;

        }
    });

    client.on('close', function(message) {

    });
});

schedule.scheduleJob("0-59 * * * * *", function() {
    let out_time = 2000;
    for(let key in connects) {
        let connect = connects[key];
        console.log("scheduleJob.check_login", connect.timestamp, Date.now());
        if(!user_manager.isLogin(connect.client) && Date.now() - connect.timestamp >= out_time) {
            removeClient(key);
        }
    }
});