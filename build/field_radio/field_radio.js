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
var field_radio_exports = {};
__export(field_radio_exports, {
  Radio: () => Radio
});
module.exports = __toCommonJS(field_radio_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var Radio = (function() {
  class Radio2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this.ev_onchange = this.ev_onchange.bind(this);
      this.view = this.view.bind(this);
    }
    ev_onchange(ev) {
      boundMethodCheck(this, Radio2);
      return this.attribute.value(this.value);
    }
    attrs() {
      var attrs;
      attrs = {
        onchange: this.ev_onchange,
        name: this.name
      };
      if (this.attribute.value() === this.value) {
        attrs.checked = true;
      }
      return attrs;
    }
    view(vnode) {
      boundMethodCheck(this, Radio2);
      return (0, import_mithril.m)(`.field.radio.${this.handle}`, (0, import_mithril.m)("input[type='radio']", this.attrs()), this.label ? (0, import_mithril.m)("label", this.label) : void 0, vnode.children);
    }
  }
  ;
  Radio2.prototype.expects = {
    attribute: true,
    handle: true,
    name: true,
    value: true,
    label: {
      allow_nil: true
    }
  };
  return Radio2;
}).call(void 0);
