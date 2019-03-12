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

    sst.User = (function() {

        /**
         * Properties of a User.
         * @memberof sst
         * @interface IUser
         * @property {string|null} [user_name] User user_name
         * @property {string|null} [pass_word] User pass_word
         * @property {Array.<sst.IResource>|null} [resources] User resources
         */

        /**
         * Constructs a new User.
         * @memberof sst
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {sst.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.resources = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User user_name.
         * @member {string} user_name
         * @memberof sst.User
         * @instance
         */
        User.prototype.user_name = "";

        /**
         * User pass_word.
         * @member {string} pass_word
         * @memberof sst.User
         * @instance
         */
        User.prototype.pass_word = "";

        /**
         * User resources.
         * @member {Array.<sst.IResource>} resources
         * @memberof sst.User
         * @instance
         */
        User.prototype.resources = $util.emptyArray;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof sst.User
         * @static
         * @param {sst.IUser=} [properties] Properties to set
         * @returns {sst.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link sst.User.verify|verify} messages.
         * @function encode
         * @memberof sst.User
         * @static
         * @param {sst.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
            if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pass_word);
            if (message.resources != null && message.resources.length)
                for (let i = 0; i < message.resources.length; ++i)
                    $root.sst.Resource.encode(message.resources[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link sst.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sst.User
         * @static
         * @param {sst.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof sst.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sst.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_name = reader.string();
                    break;
                case 2:
                    message.pass_word = reader.string();
                    break;
                case 3:
                    if (!(message.resources && message.resources.length))
                        message.resources = [];
                    message.resources.push($root.sst.Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sst.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sst.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof sst.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                if (!$util.isString(message.user_name))
                    return "user_name: string expected";
            if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                if (!$util.isString(message.pass_word))
                    return "pass_word: string expected";
            if (message.resources != null && message.hasOwnProperty("resources")) {
                if (!Array.isArray(message.resources))
                    return "resources: array expected";
                for (let i = 0; i < message.resources.length; ++i) {
                    let error = $root.sst.Resource.verify(message.resources[i]);
                    if (error)
                        return "resources." + error;
                }
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sst.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sst.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.sst.User)
                return object;
            let message = new $root.sst.User();
            if (object.user_name != null)
                message.user_name = String(object.user_name);
            if (object.pass_word != null)
                message.pass_word = String(object.pass_word);
            if (object.resources) {
                if (!Array.isArray(object.resources))
                    throw TypeError(".sst.User.resources: array expected");
                message.resources = [];
                for (let i = 0; i < object.resources.length; ++i) {
                    if (typeof object.resources[i] !== "object")
                        throw TypeError(".sst.User.resources: object expected");
                    message.resources[i] = $root.sst.Resource.fromObject(object.resources[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sst.User
         * @static
         * @param {sst.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.resources = [];
            if (options.defaults) {
                object.user_name = "";
                object.pass_word = "";
            }
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                object.user_name = message.user_name;
            if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                object.pass_word = message.pass_word;
            if (message.resources && message.resources.length) {
                object.resources = [];
                for (let j = 0; j < message.resources.length; ++j)
                    object.resources[j] = $root.sst.Resource.toObject(message.resources[j], options);
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof sst.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    /**
     * ResourceType enum.
     * @name sst.ResourceType
     * @enum {string}
     * @property {number} MATERIAL=0 MATERIAL value
     * @property {number} OPERATION_COUNT=1 OPERATION_COUNT value
     * @property {number} CURRENCY=2 CURRENCY value
     */
    sst.ResourceType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MATERIAL"] = 0;
        values[valuesById[1] = "OPERATION_COUNT"] = 1;
        values[valuesById[2] = "CURRENCY"] = 2;
        return values;
    })();

    /**
     * ResourceDef enum.
     * @name sst.ResourceDef
     * @enum {string}
     */
    sst.ResourceDef = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        return values;
    })();

    sst.Resource = (function() {

        /**
         * Properties of a Resource.
         * @memberof sst
         * @interface IResource
         * @property {sst.ResourceType|null} [type] Resource type
         * @property {number|null} [id] Resource id
         * @property {number|Long|null} [num] Resource num
         */

        /**
         * Constructs a new Resource.
         * @memberof sst
         * @classdesc Represents a Resource.
         * @implements IResource
         * @constructor
         * @param {sst.IResource=} [properties] Properties to set
         */
        function Resource(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Resource type.
         * @member {sst.ResourceType} type
         * @memberof sst.Resource
         * @instance
         */
        Resource.prototype.type = 0;

        /**
         * Resource id.
         * @member {number} id
         * @memberof sst.Resource
         * @instance
         */
        Resource.prototype.id = 0;

        /**
         * Resource num.
         * @member {number|Long} num
         * @memberof sst.Resource
         * @instance
         */
        Resource.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Resource instance using the specified properties.
         * @function create
         * @memberof sst.Resource
         * @static
         * @param {sst.IResource=} [properties] Properties to set
         * @returns {sst.Resource} Resource instance
         */
        Resource.create = function create(properties) {
            return new Resource(properties);
        };

        /**
         * Encodes the specified Resource message. Does not implicitly {@link sst.Resource.verify|verify} messages.
         * @function encode
         * @memberof sst.Resource
         * @static
         * @param {sst.IResource} message Resource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.num);
            return writer;
        };

        /**
         * Encodes the specified Resource message, length delimited. Does not implicitly {@link sst.Resource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sst.Resource
         * @static
         * @param {sst.IResource} message Resource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Resource message from the specified reader or buffer.
         * @function decode
         * @memberof sst.Resource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sst.Resource} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.Resource();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.num = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Resource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sst.Resource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sst.Resource} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Resource message.
         * @function verify
         * @memberof sst.Resource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Resource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            return null;
        };

        /**
         * Creates a Resource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sst.Resource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sst.Resource} Resource
         */
        Resource.fromObject = function fromObject(object) {
            if (object instanceof $root.sst.Resource)
                return object;
            let message = new $root.sst.Resource();
            switch (object.type) {
            case "MATERIAL":
            case 0:
                message.type = 0;
                break;
            case "OPERATION_COUNT":
            case 1:
                message.type = 1;
                break;
            case "CURRENCY":
            case 2:
                message.type = 2;
                break;
            }
            if (object.id != null)
                message.id = object.id | 0;
            if (object.num != null)
                if ($util.Long)
                    (message.num = $util.Long.fromValue(object.num)).unsigned = false;
                else if (typeof object.num === "string")
                    message.num = parseInt(object.num, 10);
                else if (typeof object.num === "number")
                    message.num = object.num;
                else if (typeof object.num === "object")
                    message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Resource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sst.Resource
         * @static
         * @param {sst.Resource} message Resource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Resource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "MATERIAL" : 0;
                object.id = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.sst.ResourceType[message.type] : message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            return object;
        };

        /**
         * Converts this Resource to JSON.
         * @function toJSON
         * @memberof sst.Resource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Resource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Resource;
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