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
var field_select_exports = {};
__export(field_select_exports, {
  Select: () => Select
});
module.exports = __toCommonJS(field_select_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var Select = (function() {
  class Select2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this.ev_onchange = this.ev_onchange.bind(this);
      this.attrs = this.attrs.bind(this);
      this.option = this.option.bind(this);
      this.view = this.view.bind(this);
    }
    ev_onchange(ev) {
      boundMethodCheck(this, Select2);
      this.attribute.value(ev.target.value);
      if (this.onchange) {
        return this.onchange(ev.target.value);
      }
    }
    attrs() {
      var attrs;
      boundMethodCheck(this, Select2);
      attrs = {
        onchange: this.ev_onchange,
        value: this.attribute.value()
      };
      if (this.disabled) {
        attrs.disabled = true;
      }
      if (this.readonly) {
        attrs.readonly = true;
      }
      return attrs;
    }
    option(option) {
      boundMethodCheck(this, Select2);
      return (0, import_mithril.m)("option", {
        value: option.id
      }, option.name);
    }
    view(vnode) {
      var option;
      boundMethodCheck(this, Select2);
      return (0, import_mithril.m)(`.field.select.${this.handle}`, this.label ? (0, import_mithril.m)("label", this.label) : void 0, (0, import_mithril.m)("select", this.attrs(), this.include_blank ? typeof this.include_blank === "string" ? (0, import_mithril.m)("option", this.include_blank) : (0, import_mithril.m)("option") : void 0, (function() {
        var i, len, ref, results;
        ref = this.options;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          option = ref[i];
          results.push(this.option(option));
        }
        return results;
      }).call(this)), vnode.children);
    }
  }
  ;
  Select2.prototype.expects = {
    attribute: true,
    options: true,
    handle: true,
    label: {
      allow_nil: true
    },
    onchange: {
      allow_nil: true
    },
    include_blank: {
      allow_nil: true
    },
    disabled: {
      allow_nil: true
    },
    readonly: {
      allow_nil: true
    }
  };
  return Select2;
}).call(void 0);
