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
var field_textarea_exports = {};
__export(field_textarea_exports, {
  Textarea: () => Textarea
});
module.exports = __toCommonJS(field_textarea_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var Textarea = (function() {
  class Textarea2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this._onkeyup = this._onkeyup.bind(this);
      this._onkeydown = this._onkeydown.bind(this);
      this._onkeypress = this._onkeypress.bind(this);
      this._oninput = this._oninput.bind(this);
      this._onchange = this._onchange.bind(this);
      this.attrs = this.attrs.bind(this);
      this.classes = this.classes.bind(this);
      this.view = this.view.bind(this);
    }
    _onkeyup(ev) {
      boundMethodCheck(this, Textarea2);
      if (this.onkeyup) {
        return this.onkeyup(ev);
      }
    }
    _onkeydown(ev) {
      boundMethodCheck(this, Textarea2);
      if (this.onkeydown) {
        return this.onkeydown(ev);
      }
    }
    _onkeypress(ev) {
      boundMethodCheck(this, Textarea2);
      if (this.onkeypress) {
        return this.onkeypress(ev);
      }
    }
    _oninput(ev) {
      boundMethodCheck(this, Textarea2);
      this.attribute.value(ev.target.value);
      if (this.oninput) {
        return this.oninput(ev);
      }
    }
    _onchange(ev) {
      boundMethodCheck(this, Textarea2);
      this.attribute.value(ev.target.value);
      if (this.onchange) {
        return this.onchange(ev);
      }
    }
    attrs() {
      var attrs;
      boundMethodCheck(this, Textarea2);
      attrs = {
        onchange: this._onchange,
        oninput: this._oninput,
        onkeyup: this._onkeyup,
        onkeypress: this._onkeypress,
        onkeydown: this._onkeydown,
        value: this.attribute.value()
      };
      if (this.disabled) {
        attrs.disabled = true;
      }
      if (this.readonly) {
        attrs.readonly = true;
      }
      if (this.placeholder) {
        attrs.placeholder = this.placeholder;
      }
      return attrs;
    }
    classes() {
      boundMethodCheck(this, Textarea2);
      if (this.attribute.errors().length > 0) {
        return "err";
      } else {
        return "";
      }
    }
    view(vnode) {
      boundMethodCheck(this, Textarea2);
      if (this.naked === true) {
        return (0, import_mithril.m)("textarea", this.attrs(), this.attribute.value());
      } else {
        return (0, import_mithril.m)(`.field.textarea.${this.handle}`, {
          class: this.classes()
        }, this.label ? (0, import_mithril.m)("label", this.label) : void 0, (0, import_mithril.m)("textarea", this.attrs()), vnode.children);
      }
    }
  }
  ;
  Textarea2.prototype.expects = {
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
    naked: {
      allow_nil: true
    },
    disabled: {
      allow_nil: true
    },
    readonly: {
      allow_nil: true
    }
  };
  return Textarea2;
}).call(void 0);
