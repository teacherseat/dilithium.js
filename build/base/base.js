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
var base_exports = {};
__export(base_exports, {
  Base: () => Base
});
module.exports = __toCommonJS(base_exports);
var import_uuid = require("uuid");
var import_events = require("./../events/events.js");
var Base = class Base2 {
  constructor() {
    this.$on = this.$on.bind(this);
    this.$off = this.$off.bind(this);
    this.oninit = this.oninit.bind(this);
    this.onremove = this.onremove.bind(this);
  }
  // unique way of indentifying each components
  scope() {
    return (0, import_uuid.v4)();
  }
  $on(name, fun, opts = {}) {
    return (0, import_events.$register)(this._scope, name, fun);
  }
  $off(name) {
    return (0, import_events.$deregister)(this._scope, name);
  }
  oninit(vnode) {
    var func, name, ref;
    if (!vnode) {
      return;
    }
    this._scope = this.scope();
    ref = this.events;
    for (name in ref) {
      func = ref[name];
      this.$on(name, this[func]);
    }
    return true;
  }
  onremove(vnode) {
    var func, name, ref;
    ref = this.events;
    for (name in ref) {
      func = ref[name];
      this.$off(name, this[func]);
    }
    return true;
  }
  view(vnode) {
    return this.render(vnode);
  }
};
