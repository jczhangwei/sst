let NetworkManager = require("NetworkManager");

let network_manager = new NetworkManager();
network_manager.connect("localhost", "8080");