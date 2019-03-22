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
    
    $root.sst = (function() {
    
        /**
         * Namespace sst.
         * @exports sst
         * @namespace
         */
        var sst = {};
    
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.Login();
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
                var message = new $root.sst.Login();
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
             * @memberof sst.Login
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Login.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Login;
        })();
    
        sst.Test = (function() {
    
            /**
             * Properties of a Test.
             * @memberof sst
             * @interface ITest
             */
    
            /**
             * Constructs a new Test.
             * @memberof sst
             * @classdesc Represents a Test.
             * @implements ITest
             * @constructor
             * @param {sst.ITest=} [properties] Properties to set
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
             * @memberof sst.Test
             * @static
             * @param {sst.ITest=} [properties] Properties to set
             * @returns {sst.Test} Test instance
             */
            Test.create = function create(properties) {
                return new Test(properties);
            };
    
            /**
             * Encodes the specified Test message. Does not implicitly {@link sst.Test.verify|verify} messages.
             * @function encode
             * @memberof sst.Test
             * @static
             * @param {sst.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Test message, length delimited. Does not implicitly {@link sst.Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.Test
             * @static
             * @param {sst.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer.
             * @function decode
             * @memberof sst.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.Test();
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
             * @memberof sst.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.Test} Test
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
             * @memberof sst.Test
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
             * @memberof sst.Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.Test} Test
             */
            Test.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.Test)
                    return object;
                return new $root.sst.Test();
            };
    
            /**
             * Creates a plain object from a Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.Test
             * @static
             * @param {sst.Test} message Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Test.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Test to JSON.
             * @function toJSON
             * @memberof sst.Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Test;
        })();
    
        sst.UserBaseInfo = (function() {
    
            /**
             * Properties of a UserBaseInfo.
             * @memberof sst
             * @interface IUserBaseInfo
             * @property {string|null} [user_name] UserBaseInfo user_name
             * @property {string|null} [pass_word] UserBaseInfo pass_word
             * @property {Array.<sst.IResource>|null} [resources] UserBaseInfo resources
             */
    
            /**
             * Constructs a new UserBaseInfo.
             * @memberof sst
             * @classdesc base info of an user
             * @implements IUserBaseInfo
             * @constructor
             * @param {sst.IUserBaseInfo=} [properties] Properties to set
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
             * @memberof sst.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.user_name = "";
    
            /**
             * UserBaseInfo pass_word.
             * @member {string} pass_word
             * @memberof sst.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.pass_word = "";
    
            /**
             * UserBaseInfo resources.
             * @member {Array.<sst.IResource>} resources
             * @memberof sst.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.resources = $util.emptyArray;
    
            /**
             * Creates a new UserBaseInfo instance using the specified properties.
             * @function create
             * @memberof sst.UserBaseInfo
             * @static
             * @param {sst.IUserBaseInfo=} [properties] Properties to set
             * @returns {sst.UserBaseInfo} UserBaseInfo instance
             */
            UserBaseInfo.create = function create(properties) {
                return new UserBaseInfo(properties);
            };
    
            /**
             * Encodes the specified UserBaseInfo message. Does not implicitly {@link sst.UserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof sst.UserBaseInfo
             * @static
             * @param {sst.IUserBaseInfo} message UserBaseInfo message or plain object to encode
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
                        $root.sst.Resource.encode(message.resources[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link sst.UserBaseInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.UserBaseInfo
             * @static
             * @param {sst.IUserBaseInfo} message UserBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof sst.UserBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.UserBaseInfo} UserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserBaseInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.UserBaseInfo();
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
             * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst.UserBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.UserBaseInfo} UserBaseInfo
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
             * @memberof sst.UserBaseInfo
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
                        var error = $root.sst.Resource.verify(message.resources[i]);
                        if (error)
                            return "resources." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst.UserBaseInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.UserBaseInfo} UserBaseInfo
             */
            UserBaseInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.UserBaseInfo)
                    return object;
                var message = new $root.sst.UserBaseInfo();
                if (object.user_name != null)
                    message.user_name = String(object.user_name);
                if (object.pass_word != null)
                    message.pass_word = String(object.pass_word);
                if (object.resources) {
                    if (!Array.isArray(object.resources))
                        throw TypeError(".sst.UserBaseInfo.resources: array expected");
                    message.resources = [];
                    for (var i = 0; i < object.resources.length; ++i) {
                        if (typeof object.resources[i] !== "object")
                            throw TypeError(".sst.UserBaseInfo.resources: object expected");
                        message.resources[i] = $root.sst.Resource.fromObject(object.resources[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.UserBaseInfo
             * @static
             * @param {sst.UserBaseInfo} message UserBaseInfo
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
                        object.resources[j] = $root.sst.Resource.toObject(message.resources[j], options);
                }
                return object;
            };
    
            /**
             * Converts this UserBaseInfo to JSON.
             * @function toJSON
             * @memberof sst.UserBaseInfo
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
         * @name sst.ResourceType
         * @enum {string}
         * @property {number} MATERIAL=0 MATERIAL value
         * @property {number} OPERATION_COUNT=1 OPERATION_COUNT value
         * @property {number} CURRENCY=2 CURRENCY value
         */
        sst.ResourceType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
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
            var valuesById = {}, values = Object.create(valuesById);
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.Resource();
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
                var message = new $root.sst.Resource();
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
    
        sst.ErrorStatus = (function() {
    
            /**
             * Properties of an ErrorStatus.
             * @memberof sst
             * @interface IErrorStatus
             * @property {string|null} [message] ErrorStatus message
             */
    
            /**
             * Constructs a new ErrorStatus.
             * @memberof sst
             * @classdesc Represents an ErrorStatus.
             * @implements IErrorStatus
             * @constructor
             * @param {sst.IErrorStatus=} [properties] Properties to set
             */
            function ErrorStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ErrorStatus message.
             * @member {string} message
             * @memberof sst.ErrorStatus
             * @instance
             */
            ErrorStatus.prototype.message = "";
    
            /**
             * Creates a new ErrorStatus instance using the specified properties.
             * @function create
             * @memberof sst.ErrorStatus
             * @static
             * @param {sst.IErrorStatus=} [properties] Properties to set
             * @returns {sst.ErrorStatus} ErrorStatus instance
             */
            ErrorStatus.create = function create(properties) {
                return new ErrorStatus(properties);
            };
    
            /**
             * Encodes the specified ErrorStatus message. Does not implicitly {@link sst.ErrorStatus.verify|verify} messages.
             * @function encode
             * @memberof sst.ErrorStatus
             * @static
             * @param {sst.IErrorStatus} message ErrorStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified ErrorStatus message, length delimited. Does not implicitly {@link sst.ErrorStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.ErrorStatus
             * @static
             * @param {sst.IErrorStatus} message ErrorStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ErrorStatus message from the specified reader or buffer.
             * @function decode
             * @memberof sst.ErrorStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.ErrorStatus} ErrorStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.ErrorStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ErrorStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst.ErrorStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.ErrorStatus} ErrorStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ErrorStatus message.
             * @function verify
             * @memberof sst.ErrorStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ErrorStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates an ErrorStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst.ErrorStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.ErrorStatus} ErrorStatus
             */
            ErrorStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.ErrorStatus)
                    return object;
                var message = new $root.sst.ErrorStatus();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from an ErrorStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.ErrorStatus
             * @static
             * @param {sst.ErrorStatus} message ErrorStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ErrorStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this ErrorStatus to JSON.
             * @function toJSON
             * @memberof sst.ErrorStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ErrorStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ErrorStatus;
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.ArrayDiff();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
                var message = new $root.sst.ArrayDiff();
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
                var object = {};
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
    
        sst.BaseAssignment = (function() {
    
            /**
             * Properties of a BaseAssignment.
             * @memberof sst
             * @interface IBaseAssignment
             * @property {string|null} [path] BaseAssignment path
             * @property {google.protobuf.IAny|null} [data] BaseAssignment data
             */
    
            /**
             * Constructs a new BaseAssignment.
             * @memberof sst
             * @classdesc Represents a BaseAssignment.
             * @implements IBaseAssignment
             * @constructor
             * @param {sst.IBaseAssignment=} [properties] Properties to set
             */
            function BaseAssignment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BaseAssignment path.
             * @member {string} path
             * @memberof sst.BaseAssignment
             * @instance
             */
            BaseAssignment.prototype.path = "";
    
            /**
             * BaseAssignment data.
             * @member {google.protobuf.IAny|null|undefined} data
             * @memberof sst.BaseAssignment
             * @instance
             */
            BaseAssignment.prototype.data = null;
    
            /**
             * Creates a new BaseAssignment instance using the specified properties.
             * @function create
             * @memberof sst.BaseAssignment
             * @static
             * @param {sst.IBaseAssignment=} [properties] Properties to set
             * @returns {sst.BaseAssignment} BaseAssignment instance
             */
            BaseAssignment.create = function create(properties) {
                return new BaseAssignment(properties);
            };
    
            /**
             * Encodes the specified BaseAssignment message. Does not implicitly {@link sst.BaseAssignment.verify|verify} messages.
             * @function encode
             * @memberof sst.BaseAssignment
             * @static
             * @param {sst.IBaseAssignment} message BaseAssignment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BaseAssignment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                if (message.data != null && message.hasOwnProperty("data"))
                    $root.google.protobuf.Any.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified BaseAssignment message, length delimited. Does not implicitly {@link sst.BaseAssignment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.BaseAssignment
             * @static
             * @param {sst.IBaseAssignment} message BaseAssignment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BaseAssignment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BaseAssignment message from the specified reader or buffer.
             * @function decode
             * @memberof sst.BaseAssignment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.BaseAssignment} BaseAssignment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BaseAssignment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.BaseAssignment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.path = reader.string();
                        break;
                    case 2:
                        message.data = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BaseAssignment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst.BaseAssignment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.BaseAssignment} BaseAssignment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BaseAssignment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BaseAssignment message.
             * @function verify
             * @memberof sst.BaseAssignment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BaseAssignment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    var error = $root.google.protobuf.Any.verify(message.data);
                    if (error)
                        return "data." + error;
                }
                return null;
            };
    
            /**
             * Creates a BaseAssignment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst.BaseAssignment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.BaseAssignment} BaseAssignment
             */
            BaseAssignment.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.BaseAssignment)
                    return object;
                var message = new $root.sst.BaseAssignment();
                if (object.path != null)
                    message.path = String(object.path);
                if (object.data != null) {
                    if (typeof object.data !== "object")
                        throw TypeError(".sst.BaseAssignment.data: object expected");
                    message.data = $root.google.protobuf.Any.fromObject(object.data);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BaseAssignment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.BaseAssignment
             * @static
             * @param {sst.BaseAssignment} message BaseAssignment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BaseAssignment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.path = "";
                    object.data = null;
                }
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = $root.google.protobuf.Any.toObject(message.data, options);
                return object;
            };
    
            /**
             * Converts this BaseAssignment to JSON.
             * @function toJSON
             * @memberof sst.BaseAssignment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BaseAssignment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BaseAssignment;
        })();
    
        return sst;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Any = (function() {
    
                /**
                 * Properties of an Any.
                 * @memberof google.protobuf
                 * @interface IAny
                 * @property {string|null} [type_url] Any type_url
                 * @property {Uint8Array|null} [value] Any value
                 */
    
                /**
                 * Constructs a new Any.
                 * @memberof google.protobuf
                 * @classdesc Represents an Any.
                 * @implements IAny
                 * @constructor
                 * @param {google.protobuf.IAny=} [properties] Properties to set
                 */
                function Any(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Any type_url.
                 * @member {string} type_url
                 * @memberof google.protobuf.Any
                 * @instance
                 */
                Any.prototype.type_url = "";
    
                /**
                 * Any value.
                 * @member {Uint8Array} value
                 * @memberof google.protobuf.Any
                 * @instance
                 */
                Any.prototype.value = $util.newBuffer([]);
    
                /**
                 * Creates a new Any instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny=} [properties] Properties to set
                 * @returns {google.protobuf.Any} Any instance
                 */
                Any.create = function create(properties) {
                    return new Any(properties);
                };
    
                /**
                 * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny} message Any message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Any.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny} message Any message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Any.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Any message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Any} Any
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Any.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type_url = reader.string();
                            break;
                        case 2:
                            message.value = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Any message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Any} Any
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Any.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Any message.
                 * @function verify
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Any.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        if (!$util.isString(message.type_url))
                            return "type_url: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                            return "value: buffer expected";
                    return null;
                };
    
                /**
                 * Creates an Any message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Any} Any
                 */
                Any.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Any)
                        return object;
                    var message = new $root.google.protobuf.Any();
                    if (object.type_url != null)
                        message.type_url = String(object.type_url);
                    if (object.value != null)
                        if (typeof object.value === "string")
                            $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                        else if (object.value.length)
                            message.value = object.value;
                    return message;
                };
    
                /**
                 * Creates a plain object from an Any message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.Any} message Any
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Any.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type_url = "";
                        if (options.bytes === String)
                            object.value = "";
                        else {
                            object.value = [];
                            if (options.bytes !== Array)
                                object.value = $util.newBuffer(object.value);
                        }
                    }
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        object.type_url = message.type_url;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this Any to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Any
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Any.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Any;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});