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
var field_checkbox_exports = {};
__export(field_checkbox_exports, {
  Checkbox: () => Checkbox
});
module.exports = __toCommonJS(field_checkbox_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var Checkbox = (function() {
  class Checkbox2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this.ev_onclick = this.ev_onclick.bind(this);
      this.attrs = this.attrs.bind(this);
      this.render = this.render.bind(this);
    }
    ev_onclick(ev) {
      var index;
      boundMethodCheck(this, Checkbox2);
      switch (this.attribute._attribute_type) {
        case "AttributeArray":
          index = this.attribute.value().indexOf(this.value);
          if (index === -1) {
            return this.attribute.value().push(this.value);
          } else {
            return this.attribute.value().splice(index, 1);
          }
          break;
        case "Attribute":
          if (this.attribute.value()) {
            return this.attribute.value(this.value_unselected);
          } else {
            return this.attribute.value(this.value);
          }
      }
    }
    attrs() {
      var attrs;
      boundMethodCheck(this, Checkbox2);
      attrs = {
        onclick: this.ev_onclick
      };
      if (this.disabled) {
        attrs.disabled = true;
      }
      if (this.readonly) {
        attrs.readonly = true;
      }
      switch (this.attribute._attribute_type) {
        case "AttributeArray":
          attrs.value = this.attribute.value().indexOf(this.value) !== -1;
          if (this.attribute.value().indexOf(this.value) !== -1) {
            attrs.checked = true;
          }
          break;
        case "Attribute":
          attrs.value = this.attribute.value();
          if (this.attribute.value()) {
            attrs.checked = true;
          }
      }
      return attrs;
    }
    render(vnode) {
      boundMethodCheck(this, Checkbox2);
      return (0, import_mithril.m)(`.field.checkbox.${this.handle}`, (0, import_mithril.m)("label", this.label), (0, import_mithril.m)("input[type='checkbox']", this.attrs()), vnode.children);
    }
  }
  ;
  Checkbox2.prototype.expects = {
    attribute: true,
    handle: true,
    label: true,
    value: true,
    value_unselected: {
      allow_nil: true
    },
    disabled: {
      allow_nil: true
    },
    readonly: {
      allow_nil: true
    }
  };
  return Checkbox2;
}).call(void 0);
