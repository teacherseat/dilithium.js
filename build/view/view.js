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
var view_exports = {};
__export(view_exports, {
  View: () => View
});
module.exports = __toCommonJS(view_exports);
var import_inflection = require("inflection");
var import_mithril = require("mithril");
var import_base = require("./../base/base.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var View = class View2 extends import_base.Base {
  constructor(args) {
    super(args);
    this.reindex = this.reindex.bind(this);
    this.onremove = this.onremove.bind(this);
    this.err = this.err.bind(this);
    this.success = this.success.bind(this);
  }
  oninit(vnode) {
    var body_location, body_view;
    super.oninit(vnode);
    this.reindex();
    if (this.body && this.body.location) {
      body_location = this.body.location;
    }
    body_location || (body_location = (0, import_inflection.underscore)(this.constructor.name));
    if (this.body && this.body.view) {
      body_view = this.body.view;
    }
    if (body_location) {
      document.body.setAttribute("location", body_location);
    }
    if (body_view) {
      document.body.setAttribute("view", body_view);
    }
    return true;
  }
  reindex() {
    boundMethodCheck(this, View2);
    this.loading = true;
    return this.success();
  }
  onremove(vnode) {
    boundMethodCheck(this, View2);
    document.body.removeAttribute("location");
    return document.body.removeAttribute("view");
  }
  err(err) {
    boundMethodCheck(this, View2);
    if (err.code === 403) {
      if (err.response && err.response.redirect_to) {
        return window.location.href = err.response.redirect_to;
      } else {
        return window.location.href = "/";
      }
    } else if (err.code === 404) {
      return window.location.href = "/";
    }
  }
  success(data = {}) {
    boundMethodCheck(this, View2);
    this.model = data;
    return this.loading = false;
  }
  view(vnode) {
    if (this.page_error && this.page_error.template) {
      return this.page_error.template(vnode);
    } else if (this.loading) {
      return (0, import_mithril.m)(".loading");
    } else {
      return this.render(vnode);
    }
  }
};
