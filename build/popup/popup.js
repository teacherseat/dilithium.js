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
var popup_exports = {};
__export(popup_exports, {
  Popup: () => Popup
});
module.exports = __toCommonJS(popup_exports);
var import_mithril = require("mithril");
var import_stream = __toESM(require("mithril/stream"));
var import_component = require("./../component/component");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var Popup = class Popup2 extends import_component.Component {
  constructor(args) {
    super(args);
    this.oninit = this.oninit.bind(this);
    this.onremove = this.onremove.bind(this);
    this.pop = this.pop.bind(this);
    this.reindex = this.reindex.bind(this);
    this.heading = this.heading.bind(this);
    this.close = this.close.bind(this);
    this.classes = this.classes.bind(this);
    this.view = this.view.bind(this);
    this.popped = (0, import_stream.default)(false);
  }
  oninit(vnode) {
    boundMethodCheck(this, Popup2);
    super.oninit(vnode);
    return this.$on(`${this.handle}#pop`, this.pop);
  }
  onremove(vnode) {
    boundMethodCheck(this, Popup2);
    super.onremove(vnode);
    return this.$off(`${this.handle}#pop`, this.pop);
  }
  pop(data) {
    boundMethodCheck(this, Popup2);
    this.popped(true);
    return this.reindex(data);
  }
  reindex(data) {
    boundMethodCheck(this, Popup2);
  }
  heading() {
    boundMethodCheck(this, Popup2);
  }
  close() {
    boundMethodCheck(this, Popup2);
    return this.popped(false);
  }
  classes() {
    var classes;
    boundMethodCheck(this, Popup2);
    classes = [];
    if (this.popped()) {
      classes.push("pop");
    }
    return classes.join(" ");
  }
  view(vnode) {
    boundMethodCheck(this, Popup2);
    if (!this.popped()) {
      return;
    }
    return (0, import_mithril.m)(`.popup_wrap.${this.handle}`, {
      class: this.classes()
    }, (0, import_mithril.m)(".popup", (0, import_mithril.m)(".popup_heading", (0, import_mithril.m)(".title", this.heading()), (0, import_mithril.m)(".bttn.close.fa.fa-times", {
      onclick: this.close
    })), (0, import_mithril.m)(".popup_content", this.render())));
  }
};
