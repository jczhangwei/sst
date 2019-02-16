var WebSocketServer = require('ws').Server;
var webSocketServer = new WebSocketServer({port: 8080});
var HashMap = require('hashmap');

// record the client
var userConnectionMap = new HashMap();
var connectNum = 0;

// connection
webSocketServer.on('connection', function(client) {
    ++connectNum;
    console.log('A client has connected. current connect num is : ' + connectNum);

    client.on('message', function(message) {
        console.log("Receive message: ", message);
        client.send("Receive your message.");
    });

    client.on('close', function(message) {
        var objMessage = JSON.parse(message);
        userConnectionMap.remove(objMessage['from']);
    });
});