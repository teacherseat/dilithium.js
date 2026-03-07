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
var attribute_model_array_exports = {};
__export(attribute_model_array_exports, {
  AttributeModelArray: () => AttributeModelArray
});
module.exports = __toCommonJS(attribute_model_array_exports);
var import_stream = __toESM(require("mithril/stream"));
var AttributeModelArray = (function() {
  class AttributeModelArray2 {
    constructor() {
      this.at = this.at.bind(this);
      this.reset = this.reset.bind(this);
      this.values = this.values.bind(this);
      this.array = [];
      this.value = (0, import_stream.default)(null);
    }
    at(v) {
      return this.array[v];
    }
    reset(size, model) {
      var i, ref, results, v;
      this.array = [];
      results = [];
      for (v = i = 0, ref = size - 1; 0 <= ref ? i <= ref : i >= ref; v = 0 <= ref ? ++i : --i) {
        results.push(this.array.push(new model()));
      }
      return results;
    }
    values(opts) {
      var a, i, len, ref, values;
      values = [];
      ref = this.array;
      for (i = 0, len = ref.length; i < len; i++) {
        a = ref[i];
        values.push(a.params(opts));
      }
      return values;
    }
  }
  ;
  AttributeModelArray2.prototype._attribute_type = "AttributeModelArray";
  return AttributeModelArray2;
}).call(void 0);
