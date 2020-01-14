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
    
        sst.ArrayMod = (function() {
    
            /**
             * Properties of an ArrayMod.
             * @memberof sst
             * @interface IArrayMod
             * @property {number|null} [origin_start] ArrayMod origin_start
             * @property {number|null} [origin_end] ArrayMod origin_end
             * @property {number|null} [result_start] ArrayMod result_start
             * @property {number|null} [result_end] ArrayMod result_end
             * @property {Array.<google.protobuf.IAny>|null} [data] ArrayMod data
             * @property {string|null} [path] ArrayMod path
             */
    
            /**
             * Constructs a new ArrayMod.
             * @memberof sst
             * @classdesc Represents an ArrayMod.
             * @implements IArrayMod
             * @constructor
             * @param {sst.IArrayMod=} [properties] Properties to set
             */
            function ArrayMod(properties) {
                this.data = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ArrayMod origin_start.
             * @member {number} origin_start
             * @memberof sst.ArrayMod
             * @instance
             */
            ArrayMod.prototype.origin_start = 0;
    
            /**
             * ArrayMod origin_end.
             * @member {number} origin_end
             * @memberof sst.ArrayMod
             * @instance
             */
            ArrayMod.prototype.origin_end = 0;
    
            /**
             * ArrayMod result_start.
             * @member {number} result_start
             * @memberof sst.ArrayMod
             * @instance
             */
            ArrayMod.prototype.result_start = 0;
    
            /**
             * ArrayMod result_end.
             * @member {number} result_end
             * @memberof sst.ArrayMod
             * @instance
             */
            ArrayMod.prototype.result_end = 0;
    
            /**
             * ArrayMod data.
             * @member {Array.<google.protobuf.IAny>} data
             * @memberof sst.ArrayMod
             * @instance
             */
            ArrayMod.prototype.data = $util.emptyArray;
    
            /**
             * ArrayMod path.
             * @member {string} path
             * @memberof sst.ArrayMod
             * @instance
             */
            ArrayMod.prototype.path = "";
    
            /**
             * Creates a new ArrayMod instance using the specified properties.
             * @function create
             * @memberof sst.ArrayMod
             * @static
             * @param {sst.IArrayMod=} [properties] Properties to set
             * @returns {sst.ArrayMod} ArrayMod instance
             */
            ArrayMod.create = function create(properties) {
                return new ArrayMod(properties);
            };
    
            /**
             * Encodes the specified ArrayMod message. Does not implicitly {@link sst.ArrayMod.verify|verify} messages.
             * @function encode
             * @memberof sst.ArrayMod
             * @static
             * @param {sst.IArrayMod} message ArrayMod message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ArrayMod.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.origin_start != null && message.hasOwnProperty("origin_start"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.origin_start);
                if (message.origin_end != null && message.hasOwnProperty("origin_end"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.origin_end);
                if (message.result_start != null && message.hasOwnProperty("result_start"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result_start);
                if (message.result_end != null && message.hasOwnProperty("result_end"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result_end);
                if (message.data != null && message.data.length)
                    for (var i = 0; i < message.data.length; ++i)
                        $root.google.protobuf.Any.encode(message.data[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.path);
                return writer;
            };
    
            /**
             * Encodes the specified ArrayMod message, length delimited. Does not implicitly {@link sst.ArrayMod.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.ArrayMod
             * @static
             * @param {sst.IArrayMod} message ArrayMod message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ArrayMod.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ArrayMod message from the specified reader or buffer.
             * @function decode
             * @memberof sst.ArrayMod
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.ArrayMod} ArrayMod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ArrayMod.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.ArrayMod();
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
                    case 4:
                        message.result_end = reader.int32();
                        break;
                    case 5:
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ArrayMod message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst.ArrayMod
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.ArrayMod} ArrayMod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ArrayMod.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ArrayMod message.
             * @function verify
             * @memberof sst.ArrayMod
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ArrayMod.verify = function verify(message) {
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
                if (message.result_end != null && message.hasOwnProperty("result_end"))
                    if (!$util.isInteger(message.result_end))
                        return "result_end: integer expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    if (!Array.isArray(message.data))
                        return "data: array expected";
                    for (var i = 0; i < message.data.length; ++i) {
                        var error = $root.google.protobuf.Any.verify(message.data[i]);
                        if (error)
                            return "data." + error;
                    }
                }
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };
    
            /**
             * Creates an ArrayMod message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst.ArrayMod
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.ArrayMod} ArrayMod
             */
            ArrayMod.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.ArrayMod)
                    return object;
                var message = new $root.sst.ArrayMod();
                if (object.origin_start != null)
                    message.origin_start = object.origin_start | 0;
                if (object.origin_end != null)
                    message.origin_end = object.origin_end | 0;
                if (object.result_start != null)
                    message.result_start = object.result_start | 0;
                if (object.result_end != null)
                    message.result_end = object.result_end | 0;
                if (object.data) {
                    if (!Array.isArray(object.data))
                        throw TypeError(".sst.ArrayMod.data: array expected");
                    message.data = [];
                    for (var i = 0; i < object.data.length; ++i) {
                        if (typeof object.data[i] !== "object")
                            throw TypeError(".sst.ArrayMod.data: object expected");
                        message.data[i] = $root.google.protobuf.Any.fromObject(object.data[i]);
                    }
                }
                if (object.path != null)
                    message.path = String(object.path);
                return message;
            };
    
            /**
             * Creates a plain object from an ArrayMod message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.ArrayMod
             * @static
             * @param {sst.ArrayMod} message ArrayMod
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ArrayMod.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.data = [];
                if (options.defaults) {
                    object.origin_start = 0;
                    object.origin_end = 0;
                    object.result_start = 0;
                    object.result_end = 0;
                    object.path = "";
                }
                if (message.origin_start != null && message.hasOwnProperty("origin_start"))
                    object.origin_start = message.origin_start;
                if (message.origin_end != null && message.hasOwnProperty("origin_end"))
                    object.origin_end = message.origin_end;
                if (message.result_start != null && message.hasOwnProperty("result_start"))
                    object.result_start = message.result_start;
                if (message.result_end != null && message.hasOwnProperty("result_end"))
                    object.result_end = message.result_end;
                if (message.data && message.data.length) {
                    object.data = [];
                    for (var j = 0; j < message.data.length; ++j)
                        object.data[j] = $root.google.protobuf.Any.toObject(message.data[j], options);
                }
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                return object;
            };
    
            /**
             * Converts this ArrayMod to JSON.
             * @function toJSON
             * @memberof sst.ArrayMod
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ArrayMod.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ArrayMod;
        })();
    
        sst.AssignmentMod = (function() {
    
            /**
             * Properties of an AssignmentMod.
             * @memberof sst
             * @interface IAssignmentMod
             * @property {string|null} [path] AssignmentMod path
             * @property {google.protobuf.IAny|null} [data] AssignmentMod data
             */
    
            /**
             * Constructs a new AssignmentMod.
             * @memberof sst
             * @classdesc Represents an AssignmentMod.
             * @implements IAssignmentMod
             * @constructor
             * @param {sst.IAssignmentMod=} [properties] Properties to set
             */
            function AssignmentMod(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AssignmentMod path.
             * @member {string} path
             * @memberof sst.AssignmentMod
             * @instance
             */
            AssignmentMod.prototype.path = "";
    
            /**
             * AssignmentMod data.
             * @member {google.protobuf.IAny|null|undefined} data
             * @memberof sst.AssignmentMod
             * @instance
             */
            AssignmentMod.prototype.data = null;
    
            /**
             * Creates a new AssignmentMod instance using the specified properties.
             * @function create
             * @memberof sst.AssignmentMod
             * @static
             * @param {sst.IAssignmentMod=} [properties] Properties to set
             * @returns {sst.AssignmentMod} AssignmentMod instance
             */
            AssignmentMod.create = function create(properties) {
                return new AssignmentMod(properties);
            };
    
            /**
             * Encodes the specified AssignmentMod message. Does not implicitly {@link sst.AssignmentMod.verify|verify} messages.
             * @function encode
             * @memberof sst.AssignmentMod
             * @static
             * @param {sst.IAssignmentMod} message AssignmentMod message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AssignmentMod.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                if (message.data != null && message.hasOwnProperty("data"))
                    $root.google.protobuf.Any.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified AssignmentMod message, length delimited. Does not implicitly {@link sst.AssignmentMod.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.AssignmentMod
             * @static
             * @param {sst.IAssignmentMod} message AssignmentMod message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AssignmentMod.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AssignmentMod message from the specified reader or buffer.
             * @function decode
             * @memberof sst.AssignmentMod
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.AssignmentMod} AssignmentMod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AssignmentMod.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.AssignmentMod();
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
             * Decodes an AssignmentMod message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst.AssignmentMod
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.AssignmentMod} AssignmentMod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AssignmentMod.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AssignmentMod message.
             * @function verify
             * @memberof sst.AssignmentMod
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AssignmentMod.verify = function verify(message) {
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
             * Creates an AssignmentMod message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst.AssignmentMod
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.AssignmentMod} AssignmentMod
             */
            AssignmentMod.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.AssignmentMod)
                    return object;
                var message = new $root.sst.AssignmentMod();
                if (object.path != null)
                    message.path = String(object.path);
                if (object.data != null) {
                    if (typeof object.data !== "object")
                        throw TypeError(".sst.AssignmentMod.data: object expected");
                    message.data = $root.google.protobuf.Any.fromObject(object.data);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an AssignmentMod message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.AssignmentMod
             * @static
             * @param {sst.AssignmentMod} message AssignmentMod
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AssignmentMod.toObject = function toObject(message, options) {
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
             * Converts this AssignmentMod to JSON.
             * @function toJSON
             * @memberof sst.AssignmentMod
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AssignmentMod.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AssignmentMod;
        })();
    
        sst.DeleteMod = (function() {
    
            /**
             * Properties of a DeleteMod.
             * @memberof sst
             * @interface IDeleteMod
             * @property {string|null} [path] DeleteMod path
             */
    
            /**
             * Constructs a new DeleteMod.
             * @memberof sst
             * @classdesc Represents a DeleteMod.
             * @implements IDeleteMod
             * @constructor
             * @param {sst.IDeleteMod=} [properties] Properties to set
             */
            function DeleteMod(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeleteMod path.
             * @member {string} path
             * @memberof sst.DeleteMod
             * @instance
             */
            DeleteMod.prototype.path = "";
    
            /**
             * Creates a new DeleteMod instance using the specified properties.
             * @function create
             * @memberof sst.DeleteMod
             * @static
             * @param {sst.IDeleteMod=} [properties] Properties to set
             * @returns {sst.DeleteMod} DeleteMod instance
             */
            DeleteMod.create = function create(properties) {
                return new DeleteMod(properties);
            };
    
            /**
             * Encodes the specified DeleteMod message. Does not implicitly {@link sst.DeleteMod.verify|verify} messages.
             * @function encode
             * @memberof sst.DeleteMod
             * @static
             * @param {sst.IDeleteMod} message DeleteMod message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteMod.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                return writer;
            };
    
            /**
             * Encodes the specified DeleteMod message, length delimited. Does not implicitly {@link sst.DeleteMod.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sst.DeleteMod
             * @static
             * @param {sst.IDeleteMod} message DeleteMod message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteMod.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteMod message from the specified reader or buffer.
             * @function decode
             * @memberof sst.DeleteMod
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sst.DeleteMod} DeleteMod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteMod.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sst.DeleteMod();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeleteMod message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sst.DeleteMod
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sst.DeleteMod} DeleteMod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteMod.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteMod message.
             * @function verify
             * @memberof sst.DeleteMod
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteMod.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };
    
            /**
             * Creates a DeleteMod message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sst.DeleteMod
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sst.DeleteMod} DeleteMod
             */
            DeleteMod.fromObject = function fromObject(object) {
                if (object instanceof $root.sst.DeleteMod)
                    return object;
                var message = new $root.sst.DeleteMod();
                if (object.path != null)
                    message.path = String(object.path);
                return message;
            };
    
            /**
             * Creates a plain object from a DeleteMod message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sst.DeleteMod
             * @static
             * @param {sst.DeleteMod} message DeleteMod
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteMod.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.path = "";
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                return object;
            };
    
            /**
             * Converts this DeleteMod to JSON.
             * @function toJSON
             * @memberof sst.DeleteMod
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteMod.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeleteMod;
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
