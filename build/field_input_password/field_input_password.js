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
var field_input_password_exports = {};
__export(field_input_password_exports, {
  InputPassword: () => InputPassword
});
module.exports = __toCommonJS(field_input_password_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var InputPassword = (function() {
  class InputPassword2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this._onchange = this._onchange.bind(this);
      this.attrs = this.attrs.bind(this);
      this.classes = this.classes.bind(this);
      this.view = this.view.bind(this);
    }
    _onchange(ev) {
      boundMethodCheck(this, InputPassword2);
      this.attribute.value(ev.target.value);
      if (this.onchange) {
        return this.onchange();
      }
    }
    attrs() {
      var attrs;
      boundMethodCheck(this, InputPassword2);
      attrs = {
        onchange: this._onchange,
        value: this.attribute.value()
      };
      if (this.placeholder) {
        attrs.placeholder = this.placeholder;
      }
      if (this.inputmode) {
        attrs.inputmode = this.inputmode;
      }
      if (this.pattern) {
        attrs.pattern = this.pattern;
      }
      if (this.autocomplete) {
        attrs.autocomplete = this.autocomplete;
      }
      if (this.disabled) {
        attrs.disabled = true;
      }
      if (this.readonly) {
        attrs.readonly = true;
      }
      return attrs;
    }
    classes() {
      boundMethodCheck(this, InputPassword2);
      if (this.attribute.errors().length > 0) {
        return "err";
      } else {
        return "";
      }
    }
    view(vnode) {
      boundMethodCheck(this, InputPassword2);
      return (0, import_mithril.m)(`.field.password_field.${this.handle}`, {
        class: this.classes()
      }, this.label ? (0, import_mithril.m)("label", this.label) : void 0, (0, import_mithril.m)("input[type='password']", this.attrs()), vnode.children);
    }
  }
  ;
  InputPassword2.prototype.expects = {
    attribute: true,
    handle: true,
    label: {
      allow_nil: true
    },
    placeholder: {
      allow_nil: true
    },
    inputmode: {
      allow_nil: true
    },
    pattern: {
      allow_nil: true
    },
    autocomplete: {
      allow_nil: true
    },
    onchange: {
      allow_nil: true
    },
    disabled: {
      allow_nil: true
    },
    readonly: {
      allow_nil: true
    }
  };
  return InputPassword2;
}).call(void 0);
