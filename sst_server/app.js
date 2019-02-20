let WebSocketServer = require('ws').Server;
let schedule = require('node-schedule');

let UserManager = require("./UserManager");
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
let connects = [];

function removeClient(client) {

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
            client
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
            connect.client.close();
        }
    }
});