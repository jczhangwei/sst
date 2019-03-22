class Util {
    static printStack() {
        try {
            throw new Error();
        } catch(e) {
            this.log("Print Stack: ", e.stack);
        }
    }

    static printTimestamp(time_stp, name) {
        name = name || "";
        let date;
        if(typeof time_stp === "number") {
            date = new Date(time_stp * 1000);
        } else if(time_stp instanceof Date) {
            date = time_stp;
        }
        this.log("Timestamp " + name + ": " + date.toString());
    }

    static printError(e) {
        this.log("JsError: ", e.message, e.stack);
    }

    static log() {
        let objToString = function(obj, str) {
            str = str || "";
            if(typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") {
                str += "\n" + obj;
            } else if(typeof obj === "object") {
                try {
                    str += "\n" + JSON.stringify(obj, null, 4);
                } catch(e) {
                    Util.printError(e);
                }
            }

            return str;
        };

        let str = ">>>>";
        for(let key in arguments) {
            let arg = arguments[key];
            str += objToString(arg);
        }

        str += "\n";
        let strs = str.split("\n");
        for(let k in strs) {
            let s = strs[k];
            console.log(s);
        }
    };
}

module.exports = Util;