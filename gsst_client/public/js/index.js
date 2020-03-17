var ws;
var util = require("src/util");

var connect = function () {
    if (ws && ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
    }

    var ws = new WebSocket("ws://127.0.0.1:8080");
    ws.onopen = function () {
        util.log("ws open")
    }

    ws.onmessage = function (msg) {
        util.log("ws message");
        util.log(msg);
    }

    ws.onclose = function () {
        util.log("ws close");
    }

    ws.onerror = function () {
        util.log("ws error");
    }
}

var send = function (content) {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
        util.log("Not connect.")
    }

    ws.send(content)
}

var start = function () {
    util.log("page start")
}