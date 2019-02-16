var WebSocket = require('ws');

var ws = new WebSocket("ws://localhost:8080");

ws.onopen = function(e) {
    console.log('Connection to server opened');
    var runner = (function* () {
        while(true) {
            yield setTimeout(function() {
               runner.next();
            }, 1234);
            sendMessage();
        }
    })();
    runner.next();
};
ws.onmessage = function(event) {
    console.log('\nClient received a message', event.data);
};
ws.onclose = function(e) {
    console.log('connection closed.');
};

function sendMessage() {
    ws.send("Client time: " + new Date());
}