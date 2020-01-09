let protobuf = require("protobufjs");
protobuf.parse.defaults.keepCase = true;

class ProtoManager {
    static get instance() {
        if(!this._instance) {
            this._instance = new ProtoManager();
        }
        return this._instance;
    }

    constructor() {
        this.init();
    }

    init() {
        protobuf.load("proto/main.proto", function(err, root) {
            if(err) {
                console.log("JsError: ", err.message, err.stack);
            }

            // Obtain a message type
            let Login = root.lookupType("sst.Login");

            // Exemplary payload
            let payload = {
                user_name: "jcahndgwei",
                pass_word: "asdf"
            };

            // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
            let errMsg = Login.verify(payload);
            if(errMsg)
                throw Error(errMsg);

            // Create a new message
            let message = Login.create(payload); // or use .fromObject if conversion is necessary

            // Encode a message to an Uint8Array (browser) or Buffer (node)
            let buffer = Login.encode(message).finish();
            // ... do something with buffer

            // Decode an Uint8Array (browser) or Buffer (node) to a message
            message = Login.decode(buffer);
            // ... do something with message

            // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

            // Maybe convert the message back to a plain object
            let object = Login.toObject(message, {
                enums: String,  // enums as string names
                longs: String,  // longs as strings (requires long.js)
                bytes: String,  // bytes as base64 encoded strings
                defaults: true, // includes default values
                arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
                objects: true,  // populates empty objects (map fields) even if defaults=false
                oneofs: true    // includes virtual oneof fields set to the present field's name
                // see ConversionOptions
            });

            console.log(JSON.stringify(object, " ", 4));
        });
    }
};

module.exports = ProtoManager;