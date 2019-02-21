let WebSocket = require('ws');

let ws = new WebSocket("ws://localhost:8080");

let is_connected = false;

ws.onopen = function(e) {
    console.log('Connection to server opened');
    is_connected = true;
    let runner = (function* () {
        while(true) {
            yield setTimeout(function() {
                runner.next();
            }, 1234);
            if(is_connected) {
                sendMessage();
            } else {
                break;
            }
        }
    })();
    runner.next();
};

ws.onmessage = function(event) {
    console.log('\nClient received a message', event.data);
};

ws.onclose = function(e) {
    console.log('connection closed.');
    is_connected = false;
};

function sendMessage() {
    ws.send("Client time: " + new Date());
}