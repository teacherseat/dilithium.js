var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var attribute_exports = {};
__export(attribute_exports, {
  Attribute: () => Attribute
});
module.exports = __toCommonJS(attribute_exports);
var import_stream = __toESM(require("mithril/stream"));
var Attribute = (function() {
  class Attribute2 {
    constructor(attrs) {
      this.value = this.value.bind(this);
      this.kind = (0, import_stream.default)();
      this._value = (0, import_stream.default)(null);
      this.errors = (0, import_stream.default)([]);
    }
    value(value) {
      if (value === void 0) {
        return this._value();
      } else if (typeof value === "string" && value.trim() === "") {
        return this._value(null);
      } else if (value === null) {
        return this._value(null);
      } else {
        return this._value(value);
      }
    }
  }
  ;
  Attribute2.prototype._attribute_type = "Attribute";
  return Attribute2;
}).call(void 0);
