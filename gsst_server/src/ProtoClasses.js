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
    
        sst_server.main = (function() {
    
            /**
             * Namespace main.
             * @memberof sst_server
             * @namespace
             */
            var main = {};
    
            main.SignUp = (function() {
    
                /**
                 * Properties of a SignUp.
                 * @memberof sst_server.main
                 * @interface ISignUp
                 * @property {string|null} [token] SignUp token
                 * @property {string|null} [user_name] SignUp user_name
                 * @property {string|null} [pass_word] SignUp pass_word
                 */
    
                /**
                 * Constructs a new SignUp.
                 * @memberof sst_server.main
                 * @classdesc Represents a SignUp.
                 * @implements ISignUp
                 * @constructor
                 * @param {sst_server.main.ISignUp=} [properties] Properties to set
                 */
                function SignUp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SignUp token.
                 * @member {string} token
                 * @memberof sst_server.main.SignUp
                 * @instance
                 */
                SignUp.prototype.token = "";
    
                /**
                 * SignUp user_name.
                 * @member {string} user_name
                 * @memberof sst_server.main.SignUp
                 * @instance
                 */
                SignUp.prototype.user_name = "";
    
                /**
                 * SignUp pass_word.
                 * @member {string} pass_word
                 * @memberof sst_server.main.SignUp
                 * @instance
                 */
                SignUp.prototype.pass_word = "";
    
                /**
                 * Creates a new SignUp instance using the specified properties.
                 * @function create
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {sst_server.main.ISignUp=} [properties] Properties to set
                 * @returns {sst_server.main.SignUp} SignUp instance
                 */
                SignUp.create = function create(properties) {
                    return new SignUp(properties);
                };
    
                /**
                 * Encodes the specified SignUp message. Does not implicitly {@link sst_server.main.SignUp.verify|verify} messages.
                 * @function encode
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {sst_server.main.ISignUp} message SignUp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignUp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && message.hasOwnProperty("token"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                    if (message.user_name != null && message.hasOwnProperty("user_name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_name);
                    if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.pass_word);
                    return writer;
                };
    
                /**
                 * Encodes the specified SignUp message, length delimited. Does not implicitly {@link sst_server.main.SignUp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {sst_server.main.ISignUp} message SignUp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignUp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SignUp message from the specified reader or buffer.
                 * @function decode
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sst_server.main.SignUp} SignUp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignUp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.main.SignUp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.token = reader.string();
                            break;
                        case 2:
                            message.user_name = reader.string();
                            break;
                        case 3:
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
                 * Decodes a SignUp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sst_server.main.SignUp} SignUp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignUp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SignUp message.
                 * @function verify
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignUp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.user_name != null && message.hasOwnProperty("user_name"))
                        if (!$util.isString(message.user_name))
                            return "user_name: string expected";
                    if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                        if (!$util.isString(message.pass_word))
                            return "pass_word: string expected";
                    return null;
                };
    
                /**
                 * Creates a SignUp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sst_server.main.SignUp} SignUp
                 */
                SignUp.fromObject = function fromObject(object) {
                    if (object instanceof $root.sst_server.main.SignUp)
                        return object;
                    var message = new $root.sst_server.main.SignUp();
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.user_name != null)
                        message.user_name = String(object.user_name);
                    if (object.pass_word != null)
                        message.pass_word = String(object.pass_word);
                    return message;
                };
    
                /**
                 * Creates a plain object from a SignUp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sst_server.main.SignUp
                 * @static
                 * @param {sst_server.main.SignUp} message SignUp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignUp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.token = "";
                        object.user_name = "";
                        object.pass_word = "";
                    }
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.user_name != null && message.hasOwnProperty("user_name"))
                        object.user_name = message.user_name;
                    if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                        object.pass_word = message.pass_word;
                    return object;
                };
    
                /**
                 * Converts this SignUp to JSON.
                 * @function toJSON
                 * @memberof sst_server.main.SignUp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignUp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SignUp;
            })();
    
            main.SignIn = (function() {
    
                /**
                 * Properties of a SignIn.
                 * @memberof sst_server.main
                 * @interface ISignIn
                 * @property {string|null} [user_name] SignIn user_name
                 * @property {string|null} [pass_word] SignIn pass_word
                 */
    
                /**
                 * Constructs a new SignIn.
                 * @memberof sst_server.main
                 * @classdesc Represents a SignIn.
                 * @implements ISignIn
                 * @constructor
                 * @param {sst_server.main.ISignIn=} [properties] Properties to set
                 */
                function SignIn(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SignIn user_name.
                 * @member {string} user_name
                 * @memberof sst_server.main.SignIn
                 * @instance
                 */
                SignIn.prototype.user_name = "";
    
                /**
                 * SignIn pass_word.
                 * @member {string} pass_word
                 * @memberof sst_server.main.SignIn
                 * @instance
                 */
                SignIn.prototype.pass_word = "";
    
                /**
                 * Creates a new SignIn instance using the specified properties.
                 * @function create
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {sst_server.main.ISignIn=} [properties] Properties to set
                 * @returns {sst_server.main.SignIn} SignIn instance
                 */
                SignIn.create = function create(properties) {
                    return new SignIn(properties);
                };
    
                /**
                 * Encodes the specified SignIn message. Does not implicitly {@link sst_server.main.SignIn.verify|verify} messages.
                 * @function encode
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {sst_server.main.ISignIn} message SignIn message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignIn.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user_name != null && message.hasOwnProperty("user_name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
                    if (message.pass_word != null && message.hasOwnProperty("pass_word"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.pass_word);
                    return writer;
                };
    
                /**
                 * Encodes the specified SignIn message, length delimited. Does not implicitly {@link sst_server.main.SignIn.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {sst_server.main.ISignIn} message SignIn message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignIn.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SignIn message from the specified reader or buffer.
                 * @function decode
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sst_server.main.SignIn} SignIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignIn.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.main.SignIn();
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
                 * Decodes a SignIn message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sst_server.main.SignIn} SignIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignIn.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SignIn message.
                 * @function verify
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignIn.verify = function verify(message) {
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
                 * Creates a SignIn message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sst_server.main.SignIn} SignIn
                 */
                SignIn.fromObject = function fromObject(object) {
                    if (object instanceof $root.sst_server.main.SignIn)
                        return object;
                    var message = new $root.sst_server.main.SignIn();
                    if (object.user_name != null)
                        message.user_name = String(object.user_name);
                    if (object.pass_word != null)
                        message.pass_word = String(object.pass_word);
                    return message;
                };
    
                /**
                 * Creates a plain object from a SignIn message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sst_server.main.SignIn
                 * @static
                 * @param {sst_server.main.SignIn} message SignIn
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignIn.toObject = function toObject(message, options) {
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
                 * Converts this SignIn to JSON.
                 * @function toJSON
                 * @memberof sst_server.main.SignIn
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignIn.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SignIn;
            })();
    
            main.Test = (function() {
    
                /**
                 * Properties of a Test.
                 * @memberof sst_server.main
                 * @interface ITest
                 */
    
                /**
                 * Constructs a new Test.
                 * @memberof sst_server.main
                 * @classdesc Represents a Test.
                 * @implements ITest
                 * @constructor
                 * @param {sst_server.main.ITest=} [properties] Properties to set
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
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {sst_server.main.ITest=} [properties] Properties to set
                 * @returns {sst_server.main.Test} Test instance
                 */
                Test.create = function create(properties) {
                    return new Test(properties);
                };
    
                /**
                 * Encodes the specified Test message. Does not implicitly {@link sst_server.main.Test.verify|verify} messages.
                 * @function encode
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {sst_server.main.ITest} message Test message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Test.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
    
                /**
                 * Encodes the specified Test message, length delimited. Does not implicitly {@link sst_server.main.Test.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {sst_server.main.ITest} message Test message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Test.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Test message from the specified reader or buffer.
                 * @function decode
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sst_server.main.Test} Test
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Test.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.main.Test();
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
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sst_server.main.Test} Test
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
                 * @memberof sst_server.main.Test
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
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sst_server.main.Test} Test
                 */
                Test.fromObject = function fromObject(object) {
                    if (object instanceof $root.sst_server.main.Test)
                        return object;
                    return new $root.sst_server.main.Test();
                };
    
                /**
                 * Creates a plain object from a Test message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sst_server.main.Test
                 * @static
                 * @param {sst_server.main.Test} message Test
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Test.toObject = function toObject() {
                    return {};
                };
    
                /**
                 * Converts this Test to JSON.
                 * @function toJSON
                 * @memberof sst_server.main.Test
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Test.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Test;
            })();
    
            return main;
        })();
    
        sst_server.user_base = (function() {
    
            /**
             * Namespace user_base.
             * @memberof sst_server
             * @namespace
             */
            var user_base = {};
    
            user_base.UserBaseInfo = (function() {
    
                /**
                 * Properties of a UserBaseInfo.
                 * @memberof sst_server.user_base
                 * @interface IUserBaseInfo
                 * @property {string|null} [user_name] UserBaseInfo user_name
                 * @property {string|null} [pass_word] UserBaseInfo pass_word
                 * @property {Array.<sst_server.resource.IResource>|null} [resources] UserBaseInfo resources
                 */
    
                /**
                 * Constructs a new UserBaseInfo.
                 * @memberof sst_server.user_base
                 * @classdesc base info of an user
                 * @implements IUserBaseInfo
                 * @constructor
                 * @param {sst_server.user_base.IUserBaseInfo=} [properties] Properties to set
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
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @instance
                 */
                UserBaseInfo.prototype.user_name = "";
    
                /**
                 * UserBaseInfo pass_word.
                 * @member {string} pass_word
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @instance
                 */
                UserBaseInfo.prototype.pass_word = "";
    
                /**
                 * UserBaseInfo resources.
                 * @member {Array.<sst_server.resource.IResource>} resources
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @instance
                 */
                UserBaseInfo.prototype.resources = $util.emptyArray;
    
                /**
                 * Creates a new UserBaseInfo instance using the specified properties.
                 * @function create
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {sst_server.user_base.IUserBaseInfo=} [properties] Properties to set
                 * @returns {sst_server.user_base.UserBaseInfo} UserBaseInfo instance
                 */
                UserBaseInfo.create = function create(properties) {
                    return new UserBaseInfo(properties);
                };
    
                /**
                 * Encodes the specified UserBaseInfo message. Does not implicitly {@link sst_server.user_base.UserBaseInfo.verify|verify} messages.
                 * @function encode
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {sst_server.user_base.IUserBaseInfo} message UserBaseInfo message or plain object to encode
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
                            $root.sst_server.resource.Resource.encode(message.resources[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link sst_server.user_base.UserBaseInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {sst_server.user_base.IUserBaseInfo} message UserBaseInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UserBaseInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sst_server.user_base.UserBaseInfo} UserBaseInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserBaseInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.user_base.UserBaseInfo();
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
                            message.resources.push($root.sst_server.resource.Resource.decode(reader, reader.uint32()));
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
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sst_server.user_base.UserBaseInfo} UserBaseInfo
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
                 * @memberof sst_server.user_base.UserBaseInfo
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
                            var error = $root.sst_server.resource.Resource.verify(message.resources[i]);
                            if (error)
                                return "resources." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sst_server.user_base.UserBaseInfo} UserBaseInfo
                 */
                UserBaseInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.sst_server.user_base.UserBaseInfo)
                        return object;
                    var message = new $root.sst_server.user_base.UserBaseInfo();
                    if (object.user_name != null)
                        message.user_name = String(object.user_name);
                    if (object.pass_word != null)
                        message.pass_word = String(object.pass_word);
                    if (object.resources) {
                        if (!Array.isArray(object.resources))
                            throw TypeError(".sst_server.user_base.UserBaseInfo.resources: array expected");
                        message.resources = [];
                        for (var i = 0; i < object.resources.length; ++i) {
                            if (typeof object.resources[i] !== "object")
                                throw TypeError(".sst_server.user_base.UserBaseInfo.resources: object expected");
                            message.resources[i] = $root.sst_server.resource.Resource.fromObject(object.resources[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @static
                 * @param {sst_server.user_base.UserBaseInfo} message UserBaseInfo
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
                            object.resources[j] = $root.sst_server.resource.Resource.toObject(message.resources[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this UserBaseInfo to JSON.
                 * @function toJSON
                 * @memberof sst_server.user_base.UserBaseInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserBaseInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UserBaseInfo;
            })();
    
            return user_base;
        })();
    
        sst_server.resource = (function() {
    
            /**
             * Namespace resource.
             * @memberof sst_server
             * @namespace
             */
            var resource = {};
    
            /**
             * ResourceType enum.
             * @name sst_server.resource.ResourceType
             * @enum {string}
             * @property {number} MATERIAL=0 MATERIAL value
             * @property {number} OPERATION_COUNT=1 OPERATION_COUNT value
             * @property {number} CURRENCY=2 CURRENCY value
             */
            resource.ResourceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MATERIAL"] = 0;
                values[valuesById[1] = "OPERATION_COUNT"] = 1;
                values[valuesById[2] = "CURRENCY"] = 2;
                return values;
            })();
    
            /**
             * ResourceDef enum.
             * @name sst_server.resource.ResourceDef
             * @enum {string}
             */
            resource.ResourceDef = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                return values;
            })();
    
            resource.Resource = (function() {
    
                /**
                 * Properties of a Resource.
                 * @memberof sst_server.resource
                 * @interface IResource
                 * @property {sst_server.resource.ResourceType|null} [type] Resource type
                 * @property {number|null} [id] Resource id
                 * @property {number|Long|null} [num] Resource num
                 */
    
                /**
                 * Constructs a new Resource.
                 * @memberof sst_server.resource
                 * @classdesc Represents a Resource.
                 * @implements IResource
                 * @constructor
                 * @param {sst_server.resource.IResource=} [properties] Properties to set
                 */
                function Resource(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Resource type.
                 * @member {sst_server.resource.ResourceType} type
                 * @memberof sst_server.resource.Resource
                 * @instance
                 */
                Resource.prototype.type = 0;
    
                /**
                 * Resource id.
                 * @member {number} id
                 * @memberof sst_server.resource.Resource
                 * @instance
                 */
                Resource.prototype.id = 0;
    
                /**
                 * Resource num.
                 * @member {number|Long} num
                 * @memberof sst_server.resource.Resource
                 * @instance
                 */
                Resource.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Resource instance using the specified properties.
                 * @function create
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {sst_server.resource.IResource=} [properties] Properties to set
                 * @returns {sst_server.resource.Resource} Resource instance
                 */
                Resource.create = function create(properties) {
                    return new Resource(properties);
                };
    
                /**
                 * Encodes the specified Resource message. Does not implicitly {@link sst_server.resource.Resource.verify|verify} messages.
                 * @function encode
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {sst_server.resource.IResource} message Resource message or plain object to encode
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
                 * Encodes the specified Resource message, length delimited. Does not implicitly {@link sst_server.resource.Resource.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {sst_server.resource.IResource} message Resource message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Resource.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Resource message from the specified reader or buffer.
                 * @function decode
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sst_server.resource.Resource} Resource
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Resource.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.resource.Resource();
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
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sst_server.resource.Resource} Resource
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
                 * @memberof sst_server.resource.Resource
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
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sst_server.resource.Resource} Resource
                 */
                Resource.fromObject = function fromObject(object) {
                    if (object instanceof $root.sst_server.resource.Resource)
                        return object;
                    var message = new $root.sst_server.resource.Resource();
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
                 * @memberof sst_server.resource.Resource
                 * @static
                 * @param {sst_server.resource.Resource} message Resource
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
                        object.type = options.enums === String ? $root.sst_server.resource.ResourceType[message.type] : message.type;
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
                 * @memberof sst_server.resource.Resource
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Resource.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Resource;
            })();
    
            return resource;
        })();
    
        sst_server.msg = (function() {
    
            /**
             * Namespace msg.
             * @memberof sst_server
             * @namespace
             */
            var msg = {};
    
            msg.Msg = (function() {
    
                /**
                 * Properties of a Msg.
                 * @memberof sst_server.msg
                 * @interface IMsg
                 * @property {sst_server.main.ISignUp|null} [user_sign_up] Msg user_sign_up
                 * @property {sst_server.main.ISignIn|null} [user_sign_in] Msg user_sign_in
                 * @property {google.protobuf.IAny|null} [user_sign_out] Msg user_sign_out
                 */
    
                /**
                 * Constructs a new Msg.
                 * @memberof sst_server.msg
                 * @classdesc Represents a Msg.
                 * @implements IMsg
                 * @constructor
                 * @param {sst_server.msg.IMsg=} [properties] Properties to set
                 */
                function Msg(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Msg user_sign_up.
                 * @member {sst_server.main.ISignUp|null|undefined} user_sign_up
                 * @memberof sst_server.msg.Msg
                 * @instance
                 */
                Msg.prototype.user_sign_up = null;
    
                /**
                 * Msg user_sign_in.
                 * @member {sst_server.main.ISignIn|null|undefined} user_sign_in
                 * @memberof sst_server.msg.Msg
                 * @instance
                 */
                Msg.prototype.user_sign_in = null;
    
                /**
                 * Msg user_sign_out.
                 * @member {google.protobuf.IAny|null|undefined} user_sign_out
                 * @memberof sst_server.msg.Msg
                 * @instance
                 */
                Msg.prototype.user_sign_out = null;
    
                /**
                 * Creates a new Msg instance using the specified properties.
                 * @function create
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {sst_server.msg.IMsg=} [properties] Properties to set
                 * @returns {sst_server.msg.Msg} Msg instance
                 */
                Msg.create = function create(properties) {
                    return new Msg(properties);
                };
    
                /**
                 * Encodes the specified Msg message. Does not implicitly {@link sst_server.msg.Msg.verify|verify} messages.
                 * @function encode
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {sst_server.msg.IMsg} message Msg message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Msg.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user_sign_up != null && message.hasOwnProperty("user_sign_up"))
                        $root.sst_server.main.SignUp.encode(message.user_sign_up, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.user_sign_in != null && message.hasOwnProperty("user_sign_in"))
                        $root.sst_server.main.SignIn.encode(message.user_sign_in, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.user_sign_out != null && message.hasOwnProperty("user_sign_out"))
                        $root.google.protobuf.Any.encode(message.user_sign_out, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Msg message, length delimited. Does not implicitly {@link sst_server.msg.Msg.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {sst_server.msg.IMsg} message Msg message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Msg.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Msg message from the specified reader or buffer.
                 * @function decode
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sst_server.msg.Msg} Msg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Msg.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst_server.msg.Msg();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user_sign_up = $root.sst_server.main.SignUp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.user_sign_in = $root.sst_server.main.SignIn.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.user_sign_out = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Msg message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sst_server.msg.Msg} Msg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Msg.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Msg message.
                 * @function verify
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Msg.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user_sign_up != null && message.hasOwnProperty("user_sign_up")) {
                        var error = $root.sst_server.main.SignUp.verify(message.user_sign_up);
                        if (error)
                            return "user_sign_up." + error;
                    }
                    if (message.user_sign_in != null && message.hasOwnProperty("user_sign_in")) {
                        var error = $root.sst_server.main.SignIn.verify(message.user_sign_in);
                        if (error)
                            return "user_sign_in." + error;
                    }
                    if (message.user_sign_out != null && message.hasOwnProperty("user_sign_out")) {
                        var error = $root.google.protobuf.Any.verify(message.user_sign_out);
                        if (error)
                            return "user_sign_out." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a Msg message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sst_server.msg.Msg} Msg
                 */
                Msg.fromObject = function fromObject(object) {
                    if (object instanceof $root.sst_server.msg.Msg)
                        return object;
                    var message = new $root.sst_server.msg.Msg();
                    if (object.user_sign_up != null) {
                        if (typeof object.user_sign_up !== "object")
                            throw TypeError(".sst_server.msg.Msg.user_sign_up: object expected");
                        message.user_sign_up = $root.sst_server.main.SignUp.fromObject(object.user_sign_up);
                    }
                    if (object.user_sign_in != null) {
                        if (typeof object.user_sign_in !== "object")
                            throw TypeError(".sst_server.msg.Msg.user_sign_in: object expected");
                        message.user_sign_in = $root.sst_server.main.SignIn.fromObject(object.user_sign_in);
                    }
                    if (object.user_sign_out != null) {
                        if (typeof object.user_sign_out !== "object")
                            throw TypeError(".sst_server.msg.Msg.user_sign_out: object expected");
                        message.user_sign_out = $root.google.protobuf.Any.fromObject(object.user_sign_out);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Msg message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sst_server.msg.Msg
                 * @static
                 * @param {sst_server.msg.Msg} message Msg
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Msg.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user_sign_up = null;
                        object.user_sign_in = null;
                        object.user_sign_out = null;
                    }
                    if (message.user_sign_up != null && message.hasOwnProperty("user_sign_up"))
                        object.user_sign_up = $root.sst_server.main.SignUp.toObject(message.user_sign_up, options);
                    if (message.user_sign_in != null && message.hasOwnProperty("user_sign_in"))
                        object.user_sign_in = $root.sst_server.main.SignIn.toObject(message.user_sign_in, options);
                    if (message.user_sign_out != null && message.hasOwnProperty("user_sign_out"))
                        object.user_sign_out = $root.google.protobuf.Any.toObject(message.user_sign_out, options);
                    return object;
                };
    
                /**
                 * Converts this Msg to JSON.
                 * @function toJSON
                 * @memberof sst_server.msg.Msg
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Msg.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Msg;
            })();
    
            return msg;
        })();
    
        return sst_server;
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
