
let RouteTable = {
    
};

class RouteManager {
    static get instance() {
        if (!this._instance) {
            this._instance = new RouteManager();
        }
        return this._instance;
    }

    constructor() {
        this.init();
    }

    init() {

    }

    dist(route, data) {
        
    }
    
};

module.exports = RouteManager;