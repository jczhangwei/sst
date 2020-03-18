var ws;

var connect = function () {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        ws.close();
    }

    var ws = new WebSocket("ws://127.0.0.1:8080");
    ws.onopen = function () {
        console.log("ws open")
    }

    ws.onmessage = function (msg) {
        console.log("ws message");
        console.log(msg);
    }

    ws.onclose = function () {
        console.log("ws close");
    }

    ws.onerror = function () {
        console.log("ws error");
    }
}

var send = function (content) {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.log("Not connect.")
    }

    ws.send(content)
}

var start = function () {
    console.log("page start")
    connect();
}