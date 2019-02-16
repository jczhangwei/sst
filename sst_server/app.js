let WebSocketServer = require('ws').Server;
let webSocketServer = new WebSocketServer({port: 8080});
let HashMap = require('hashmap');

// record the client
let userConnectionMap = new HashMap();
let connectNum = 0;

// connection
webSocketServer.on('connection', function(client) {
    ++connectNum;
    console.log('A client has connected. current connect num is : ' + connectNum);

    client.on('message', function(message) {
        console.log("Receive message: ", message);
        client.send("Receive your message.");
    });

    client.on('close', function(message) {

    });
});