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
var field_input_text_exports = {};
__export(field_input_text_exports, {
  InputText: () => InputText
});
module.exports = __toCommonJS(field_input_text_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var InputText = (function() {
  class InputText2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this._onkeyup = this._onkeyup.bind(this);
      this._onkeydown = this._onkeydown.bind(this);
      this._onkeypress = this._onkeypress.bind(this);
      this._oninput = this._oninput.bind(this);
      this._onchange = this._onchange.bind(this);
      this.attrs = this.attrs.bind(this);
      this.classes = this.classes.bind(this);
      this.render = this.render.bind(this);
    }
    _onkeyup(ev) {
      boundMethodCheck(this, InputText2);
      if (this.onkeyup) {
        return this.onkeyup(ev);
      }
    }
    _onkeydown(ev) {
      boundMethodCheck(this, InputText2);
      if (this.onkeydown) {
        return this.onkeydown(ev);
      }
    }
    _onkeypress(ev) {
      boundMethodCheck(this, InputText2);
      if (this.onkeypress) {
        return this.onkeypress(ev);
      }
    }
    _oninput(ev) {
      boundMethodCheck(this, InputText2);
      this.attribute.value(ev.target.value);
      if (this.oninput) {
        return this.oninput(ev);
      }
    }
    _onchange(ev) {
      boundMethodCheck(this, InputText2);
      this.attribute.value(ev.target.value);
      if (this.onchange) {
        return this.onchange(ev);
      }
    }
    attrs() {
      var attrs;
      boundMethodCheck(this, InputText2);
      attrs = {
        onchange: this._onchange,
        oninput: this._oninput,
        onkeyup: this._onkeyup,
        onkeypress: this._onkeypress,
        onkeydown: this._onkeydown,
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
      boundMethodCheck(this, InputText2);
      if (this.attribute.errors().length > 0) {
        return "err";
      } else {
        return "";
      }
    }
    render(vnode) {
      boundMethodCheck(this, InputText2);
      return (0, import_mithril.m)(`.field.text_field.${this.handle}`, {
        class: this.classes()
      }, this.label ? (0, import_mithril.m)("label", this.label) : void 0, (0, import_mithril.m)("input[type='text']", this.attrs()), vnode.children);
    }
  }
  ;
  InputText2.prototype.expects = {
    attribute: true,
    handle: true,
    label: {
      allow_nil: true
    },
    oninput: {
      allow_nil: true
    },
    onchange: {
      allow_nil: true
    },
    onkeyup: {
      allow_nil: true
    },
    onkeydown: {
      allow_nil: true
    },
    onkeypress: {
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
    disabled: {
      allow_nil: true
    },
    readonly: {
      allow_nil: true
    }
  };
  return InputText2;
}).call(void 0);
