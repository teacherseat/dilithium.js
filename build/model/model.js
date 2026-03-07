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
var model_exports = {};
__export(model_exports, {
  Model: () => Model
});
module.exports = __toCommonJS(model_exports);
var import_stream = __toESM(require("mithril/stream"));
var Model = class Model2 {
  constructor(attrs = {}) {
    var k, ref, v;
    this.errors = this.errors.bind(this);
    this.params = this.params.bind(this);
    this.reset = this.reset.bind(this);
    this.id = (0, import_stream.default)(attrs.id || null);
    ref = this.attributes;
    for (k in ref) {
      v = ref[k];
      this[k] = v();
    }
  }
  errors(attributes = {}) {
    var k, results, v;
    results = [];
    for (k in attributes) {
      v = attributes[k];
      if (this[k]) {
        results.push(this[k].errors(v));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }
  params(opts = {}) {
    var attribute_fun, attrs, k, key, ref;
    attrs = {};
    attrs.id = this.id();
    ref = this.attributes;
    for (k in ref) {
      attribute_fun = ref[k];
      if (!!opts.exclude === false || opts.exclude && opts.exclude.indexOf(k) === -1) {
        key = opts.rename ? opts.rename[k] || k : k;
        switch (attribute_fun()._attribute_type) {
          case "AttributeModelArray":
            attrs[key] = this[k].values();
            break;
          case "AttributeArray":
            attrs[key] = this[k].values();
            break;
          case "Attribute":
            attrs[key] = this[k].value();
        }
      }
    }
    return attrs;
  }
  reset(attrs = {}) {
    var k, ref, results, v;
    this.id(attrs.id || null);
    ref = this.attributes;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (typeof attrs[k] === "boolean" || attrs[k]) {
        results.push(this[k].value(attrs[k]));
      } else {
        results.push(this[k].value(""));
      }
    }
    return results;
  }
};
