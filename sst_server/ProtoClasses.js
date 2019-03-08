// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const sst = $root.sst = (() => {

    /**
     * Namespace sst.
     * @exports sst
     * @namespace
     */
    const sst = {};

    sst.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof sst
         * @interface ILogin
         * @property {string|null} [user_name] Login user_name
         * @property {string|null} [pass_word] Login pass_word
         */

        /**
         * Constructs a new Login.
         * @memberof sst
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {sst.ILogin=} [properties] Properties to set
         */
        function Login(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Login user_name.
         * @member {string} user_name
         * @memberof sst.Login
         * @instance
         */
        Login.prototype.user_name = "";

        /**
         * Login pass_word.
         * @member {string} pass_word
         * @memberof sst.Login
         * @instance
         */
        Login.prototype.pass_word = "";

        /**
         * Creates a new Login instance using the specified properties.
         * @function create
         * @memberof sst.Login
         * @static
         * @param {sst.ILogin=} [properties] Properties to set
         * @returns {sst.Login} Login instance
         */
        Login.create = function create(properties) {
            return new Login(properties);
        };

        /**
         * Encodes the specified Login message. Does not implicitly {@link sst.Login.verify|verify} messages.
         * @function encode
         * @memberof sst.Login
         * @static
         * @param {sst.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
            if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pass_word);
            return writer;
        };

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link sst.Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sst.Login
         * @static
         * @param {sst.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof sst.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sst.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.Login();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_name = reader.string();
                    break;
                case 2:
                    message.pass_word = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sst.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sst.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Login message.
         * @function verify
         * @memberof sst.Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                if (!$util.isString(message.user_name))
                    return "user_name: string expected";
            if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                if (!$util.isString(message.pass_word))
                    return "pass_word: string expected";
            return null;
        };

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sst.Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sst.Login} Login
         */
        Login.fromObject = function fromObject(object) {
            if (object instanceof $root.sst.Login)
                return object;
            let message = new $root.sst.Login();
            if (object.user_name != null)
                message.user_name = String(object.user_name);
            if (object.pass_word != null)
                message.pass_word = String(object.pass_word);
            return message;
        };

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sst.Login
         * @static
         * @param {sst.Login} message Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.user_name = "";
                object.pass_word = "";
            }
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                object.user_name = message.user_name;
            if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                object.pass_word = message.pass_word;
            return object;
        };

        /**
         * Converts this Login to JSON.
         * @function toJSON
         * @memberof sst.Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Login;
    })();

    sst.ArrayDiff = (function() {

        /**
         * Properties of an ArrayDiff.
         * @memberof sst
         * @interface IArrayDiff
         * @property {number|null} [origin_start] ArrayDiff origin_start
         * @property {number|null} [origin_end] ArrayDiff origin_end
         * @property {number|null} [result_start] ArrayDiff result_start
         */

        /**
         * Constructs a new ArrayDiff.
         * @memberof sst
         * @classdesc Represents an ArrayDiff.
         * @implements IArrayDiff
         * @constructor
         * @param {sst.IArrayDiff=} [properties] Properties to set
         */
        function ArrayDiff(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArrayDiff origin_start.
         * @member {number} origin_start
         * @memberof sst.ArrayDiff
         * @instance
         */
        ArrayDiff.prototype.origin_start = 0;

        /**
         * ArrayDiff origin_end.
         * @member {number} origin_end
         * @memberof sst.ArrayDiff
         * @instance
         */
        ArrayDiff.prototype.origin_end = 0;

        /**
         * ArrayDiff result_start.
         * @member {number} result_start
         * @memberof sst.ArrayDiff
         * @instance
         */
        ArrayDiff.prototype.result_start = 0;

        /**
         * Creates a new ArrayDiff instance using the specified properties.
         * @function create
         * @memberof sst.ArrayDiff
         * @static
         * @param {sst.IArrayDiff=} [properties] Properties to set
         * @returns {sst.ArrayDiff} ArrayDiff instance
         */
        ArrayDiff.create = function create(properties) {
            return new ArrayDiff(properties);
        };

        /**
         * Encodes the specified ArrayDiff message. Does not implicitly {@link sst.ArrayDiff.verify|verify} messages.
         * @function encode
         * @memberof sst.ArrayDiff
         * @static
         * @param {sst.IArrayDiff} message ArrayDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArrayDiff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.origin_start != null && message.hasOwnProperty("origin_start"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.origin_start);
            if (message.origin_end != null && message.hasOwnProperty("origin_end"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.origin_end);
            if (message.result_start != null && message.hasOwnProperty("result_start"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result_start);
            return writer;
        };

        /**
         * Encodes the specified ArrayDiff message, length delimited. Does not implicitly {@link sst.ArrayDiff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sst.ArrayDiff
         * @static
         * @param {sst.IArrayDiff} message ArrayDiff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArrayDiff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArrayDiff message from the specified reader or buffer.
         * @function decode
         * @memberof sst.ArrayDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sst.ArrayDiff} ArrayDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArrayDiff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.ArrayDiff();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.origin_start = reader.int32();
                    break;
                case 2:
                    message.origin_end = reader.int32();
                    break;
                case 3:
                    message.result_start = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArrayDiff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sst.ArrayDiff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sst.ArrayDiff} ArrayDiff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArrayDiff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArrayDiff message.
         * @function verify
         * @memberof sst.ArrayDiff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArrayDiff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.origin_start != null && message.hasOwnProperty("origin_start"))
                if (!$util.isInteger(message.origin_start))
                    return "origin_start: integer expected";
            if (message.origin_end != null && message.hasOwnProperty("origin_end"))
                if (!$util.isInteger(message.origin_end))
                    return "origin_end: integer expected";
            if (message.result_start != null && message.hasOwnProperty("result_start"))
                if (!$util.isInteger(message.result_start))
                    return "result_start: integer expected";
            return null;
        };

        /**
         * Creates an ArrayDiff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sst.ArrayDiff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sst.ArrayDiff} ArrayDiff
         */
        ArrayDiff.fromObject = function fromObject(object) {
            if (object instanceof $root.sst.ArrayDiff)
                return object;
            let message = new $root.sst.ArrayDiff();
            if (object.origin_start != null)
                message.origin_start = object.origin_start | 0;
            if (object.origin_end != null)
                message.origin_end = object.origin_end | 0;
            if (object.result_start != null)
                message.result_start = object.result_start | 0;
            return message;
        };

        /**
         * Creates a plain object from an ArrayDiff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sst.ArrayDiff
         * @static
         * @param {sst.ArrayDiff} message ArrayDiff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArrayDiff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.origin_start = 0;
                object.origin_end = 0;
                object.result_start = 0;
            }
            if (message.origin_start != null && message.hasOwnProperty("origin_start"))
                object.origin_start = message.origin_start;
            if (message.origin_end != null && message.hasOwnProperty("origin_end"))
                object.origin_end = message.origin_end;
            if (message.result_start != null && message.hasOwnProperty("result_start"))
                object.result_start = message.result_start;
            return object;
        };

        /**
         * Converts this ArrayDiff to JSON.
         * @function toJSON
         * @memberof sst.ArrayDiff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArrayDiff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArrayDiff;
    })();

    return sst;
})();