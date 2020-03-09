/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.sst_server = (function() {
    
        /**
         * Namespace sst_server.
         * @exports sst_server
         * @namespace
         */
        var sst_server = {};
    
        sst_server.Login = (function() {
    
            /**
             * Properties of a Login.
             * @memberof sst_server
             * @interface ILogin
             * @property {string|null} [user_name] Login user_name
             * @property {string|null} [pass_word] Login pass_word
             */
    
            /**
             * Constructs a new Login.
             * @memberof sst_server
             * @classdesc Represents a Login.
             * @implements ILogin
             * @constructor
             * @param {sst_server.ILogin=} [properties] Properties to set
             */
            function Login(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Login user_name.
             * @member {string} user_name
             * @memberof sst_server.Login
             * @instance
             */
            Login.prototype.user_name = "";
    
            /**
             * Login pass_word.
             * @member {string} pass_word
             * @memberof sst_server.Login
             * @instance
             */
            Login.prototype.pass_word = "";
    
            /**
             * Creates a new Login instance using the specified properties.
             * @function create
             * @memberof sst_server.Login
             * @static
             * @param {sst_server.ILogin=} [properties] Properties to set
             * @returns {sst_server.Login} Login instance
             */
            Login.create = function create(properties) {
                return new Login(properties);
            };
    
            /**
             * Encodes the specified Login message. Does not implicitly {@link sst_server.Login.verify|verify} messages.
             * @function encode
             * @memberof sst_server.Login
             * @static
             * @param {sst_server.ILogin} message Login message or plain object to encode
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
             * Encodes the specified Login message, length delimited. Does not implicitly {@link sst_server.Login.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst_server.Login
             * @static
             * @param {sst_server.ILogin} message Login message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Login.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Login message from the specified reader or buffer.
             * @function decode
             * @memberof sst_server.Login
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst_server.Login} Login
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Login.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.Login();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
             * @memberof sst_server.Login
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst_server.Login} Login
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
             * @memberof sst_server.Login
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
             * @memberof sst_server.Login
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst_server.Login} Login
             */
            Login.fromObject = function fromObject(object) {
                if (object instanceof $root.sst_server.Login)
                    return object;
                var message = new $root.sst_server.Login();
                if (object.user_name != null)
                    message.user_name = String(object.user_name);
                if (object.pass_word != null)
                    message.pass_word = String(object.pass_word);
                return message;
            };
    
            /**
             * Creates a plain object from a Login message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst_server.Login
             * @static
             * @param {sst_server.Login} message Login
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Login.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
             * @memberof sst_server.Login
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Login.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Login;
        })();
    
        sst_server.Test = (function() {
    
            /**
             * Properties of a Test.
             * @memberof sst_server
             * @interface ITest
             */
    
            /**
             * Constructs a new Test.
             * @memberof sst_server
             * @classdesc Represents a Test.
             * @implements ITest
             * @constructor
             * @param {sst_server.ITest=} [properties] Properties to set
             */
            function Test(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Test instance using the specified properties.
             * @function create
             * @memberof sst_server.Test
             * @static
             * @param {sst_server.ITest=} [properties] Properties to set
             * @returns {sst_server.Test} Test instance
             */
            Test.create = function create(properties) {
                return new Test(properties);
            };
    
            /**
             * Encodes the specified Test message. Does not implicitly {@link sst_server.Test.verify|verify} messages.
             * @function encode
             * @memberof sst_server.Test
             * @static
             * @param {sst_server.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Test message, length delimited. Does not implicitly {@link sst_server.Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst_server.Test
             * @static
             * @param {sst_server.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer.
             * @function decode
             * @memberof sst_server.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst_server.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.Test();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst_server.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst_server.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Test message.
             * @function verify
             * @memberof sst_server.Test
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Test.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Test message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst_server.Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst_server.Test} Test
             */
            Test.fromObject = function fromObject(object) {
                if (object instanceof $root.sst_server.Test)
                    return object;
                return new $root.sst_server.Test();
            };
    
            /**
             * Creates a plain object from a Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst_server.Test
             * @static
             * @param {sst_server.Test} message Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Test.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Test to JSON.
             * @function toJSON
             * @memberof sst_server.Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Test;
        })();
    
        sst_server.UserBaseInfo = (function() {
    
            /**
             * Properties of a UserBaseInfo.
             * @memberof sst_server
             * @interface IUserBaseInfo
             * @property {string|null} [user_name] UserBaseInfo user_name
             * @property {string|null} [pass_word] UserBaseInfo pass_word
             * @property {Array.<sst_server.IResource>|null} [resources] UserBaseInfo resources
             */
    
            /**
             * Constructs a new UserBaseInfo.
             * @memberof sst_server
             * @classdesc base info of an user
             * @implements IUserBaseInfo
             * @constructor
             * @param {sst_server.IUserBaseInfo=} [properties] Properties to set
             */
            function UserBaseInfo(properties) {
                this.resources = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserBaseInfo user_name.
             * @member {string} user_name
             * @memberof sst_server.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.user_name = "";
    
            /**
             * UserBaseInfo pass_word.
             * @member {string} pass_word
             * @memberof sst_server.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.pass_word = "";
    
            /**
             * UserBaseInfo resources.
             * @member {Array.<sst_server.IResource>} resources
             * @memberof sst_server.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.resources = $util.emptyArray;
    
            /**
             * Creates a new UserBaseInfo instance using the specified properties.
             * @function create
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {sst_server.IUserBaseInfo=} [properties] Properties to set
             * @returns {sst_server.UserBaseInfo} UserBaseInfo instance
             */
            UserBaseInfo.create = function create(properties) {
                return new UserBaseInfo(properties);
            };
    
            /**
             * Encodes the specified UserBaseInfo message. Does not implicitly {@link sst_server.UserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {sst_server.IUserBaseInfo} message UserBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserBaseInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user_name != null && message.hasOwnProperty("user_name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
                if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.pass_word);
                if (message.resources != null && message.resources.length)
                    for (var i = 0; i < message.resources.length; ++i)
                        $root.sst_server.Resource.encode(message.resources[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link sst_server.UserBaseInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {sst_server.IUserBaseInfo} message UserBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst_server.UserBaseInfo} UserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserBaseInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.UserBaseInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
                        message.resources.push($root.sst_server.Resource.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst_server.UserBaseInfo} UserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserBaseInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserBaseInfo message.
             * @function verify
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserBaseInfo.verify = function verify(message) {
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
                    for (var i = 0; i < message.resources.length; ++i) {
                        var error = $root.sst_server.Resource.verify(message.resources[i]);
                        if (error)
                            return "resources." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst_server.UserBaseInfo} UserBaseInfo
             */
            UserBaseInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.sst_server.UserBaseInfo)
                    return object;
                var message = new $root.sst_server.UserBaseInfo();
                if (object.user_name != null)
                    message.user_name = String(object.user_name);
                if (object.pass_word != null)
                    message.pass_word = String(object.pass_word);
                if (object.resources) {
                    if (!Array.isArray(object.resources))
                        throw TypeError(".sst_server.UserBaseInfo.resources: array expected");
                    message.resources = [];
                    for (var i = 0; i < object.resources.length; ++i) {
                        if (typeof object.resources[i] !== "object")
                            throw TypeError(".sst_server.UserBaseInfo.resources: object expected");
                        message.resources[i] = $root.sst_server.Resource.fromObject(object.resources[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst_server.UserBaseInfo
             * @static
             * @param {sst_server.UserBaseInfo} message UserBaseInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserBaseInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
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
                    for (var j = 0; j < message.resources.length; ++j)
                        object.resources[j] = $root.sst_server.Resource.toObject(message.resources[j], options);
                }
                return object;
            };
    
            /**
             * Converts this UserBaseInfo to JSON.
             * @function toJSON
             * @memberof sst_server.UserBaseInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserBaseInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserBaseInfo;
        })();
    
        /**
         * ResourceType enum.
         * @name sst_server.ResourceType
         * @enum {string}
         * @property {number} MATERIAL=0 MATERIAL value
         * @property {number} OPERATION_COUNT=1 OPERATION_COUNT value
         * @property {number} CURRENCY=2 CURRENCY value
         */
        sst_server.ResourceType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MATERIAL"] = 0;
            values[valuesById[1] = "OPERATION_COUNT"] = 1;
            values[valuesById[2] = "CURRENCY"] = 2;
            return values;
        })();
    
        /**
         * ResourceDef enum.
         * @name sst_server.ResourceDef
         * @enum {string}
         */
        sst_server.ResourceDef = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            return values;
        })();
    
        sst_server.Resource = (function() {
    
            /**
             * Properties of a Resource.
             * @memberof sst_server
             * @interface IResource
             * @property {sst_server.ResourceType|null} [type] Resource type
             * @property {number|null} [id] Resource id
             * @property {number|Long|null} [num] Resource num
             */
    
            /**
             * Constructs a new Resource.
             * @memberof sst_server
             * @classdesc Represents a Resource.
             * @implements IResource
             * @constructor
             * @param {sst_server.IResource=} [properties] Properties to set
             */
            function Resource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Resource type.
             * @member {sst_server.ResourceType} type
             * @memberof sst_server.Resource
             * @instance
             */
            Resource.prototype.type = 0;
    
            /**
             * Resource id.
             * @member {number} id
             * @memberof sst_server.Resource
             * @instance
             */
            Resource.prototype.id = 0;
    
            /**
             * Resource num.
             * @member {number|Long} num
             * @memberof sst_server.Resource
             * @instance
             */
            Resource.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new Resource instance using the specified properties.
             * @function create
             * @memberof sst_server.Resource
             * @static
             * @param {sst_server.IResource=} [properties] Properties to set
             * @returns {sst_server.Resource} Resource instance
             */
            Resource.create = function create(properties) {
                return new Resource(properties);
            };
    
            /**
             * Encodes the specified Resource message. Does not implicitly {@link sst_server.Resource.verify|verify} messages.
             * @function encode
             * @memberof sst_server.Resource
             * @static
             * @param {sst_server.IResource} message Resource message or plain object to encode
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
             * Encodes the specified Resource message, length delimited. Does not implicitly {@link sst_server.Resource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst_server.Resource
             * @static
             * @param {sst_server.IResource} message Resource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Resource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Resource message from the specified reader or buffer.
             * @function decode
             * @memberof sst_server.Resource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst_server.Resource} Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Resource.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.Resource();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
             * @memberof sst_server.Resource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst_server.Resource} Resource
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
             * @memberof sst_server.Resource
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
             * @memberof sst_server.Resource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst_server.Resource} Resource
             */
            Resource.fromObject = function fromObject(object) {
                if (object instanceof $root.sst_server.Resource)
                    return object;
                var message = new $root.sst_server.Resource();
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
             * @memberof sst_server.Resource
             * @static
             * @param {sst_server.Resource} message Resource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Resource.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "MATERIAL" : 0;
                    object.id = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.num = options.longs === String ? "0" : 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.sst_server.ResourceType[message.type] : message.type;
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
             * @memberof sst_server.Resource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Resource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Resource;
        })();
    
        return sst_server;
    })();

    return $root;
});
