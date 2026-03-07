var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var component_exports = {};
__export(component_exports, {
  Component: () => Component
});
module.exports = __toCommonJS(component_exports);
var import_base = require("./../base/base.js");
var import_util = require("./../util/util.js");
var ExpectedComponentAttributes, RenderUndefined, boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
RenderUndefined = function(message, component, scope) {
  this.message = message;
  this.component = component;
  return this.scope = scope;
};
ExpectedComponentAttributes = function(message, attribute, component, scope) {
  this.message = message;
  this.attribute = attribute;
  this.component = component;
  return this.scope = scope;
};
var Component = class Component2 extends import_base.Base {
  constructor(args) {
    super(args);
    this.oninit = this.oninit.bind(this);
    this.class = this.class.bind(this);
    this._map_attributes = this._map_attributes.bind(this);
    this._check_expected_attribute = this._check_expected_attribute.bind(this);
    this.render = this.render.bind(this);
    this._classes = [];
  }
  oninit(vnode) {
    var fun;
    boundMethodCheck(this, Component2);
    super.oninit(vnode);
    fun = import_util.Util.classes.bind(this);
    this._classes = fun(vnode.attrs.class);
    this._map_attributes(vnode.attrs);
    return true;
  }
  onbeforeupdate(vnode) {
    if (!vnode) {
      return;
    }
    this._classes = import_util.Util.classes(vnode.attrs.class);
    this._map_attributes(vnode.attrs);
    return true;
  }
  class(classes) {
    var fun;
    boundMethodCheck(this, Component2);
    fun = import_util.Util.classes.bind(this);
    return fun(classes).concat(this._classes).join(" ");
  }
  _map_attributes(attrs) {
    var k, ref, results, results1, v;
    boundMethodCheck(this, Component2);
    if (this.expects) {
      ref = this.expects;
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(this[k] = this._check_expected_attribute(k, attrs[k]));
      }
      return results;
    } else {
      results1 = [];
      for (k in attrs) {
        v = attrs[k];
        results1.push(this[k] = v);
      }
      return results1;
    }
  }
  _check_expected_attribute(attribute, value) {
    var check, component;
    boundMethodCheck(this, Component2);
    if (!this.expects) {
      return;
    }
    check = this.expects[attribute];
    if (check.allow_nil) {
      return value;
    }
    component = this.constructor.name;
    if (typeof check === "boolean" && value == null) {
      throw new ExpectedComponentAttributes("expected attribute to be present", attribute, component, this._scope);
    } else if (check.array && !import_util.Util.is_array(value)) {
      throw new ExpectedComponentAttributes("expected attribute to be an array", attribute, component, this._scope);
    }
    return value;
  }
  render(vnode) {
    var component;
    boundMethodCheck(this, Component2);
    component = this.constructor.name;
    throw new RenderUndefined("expected render function to be defined", component, this._scope);
  }
};
