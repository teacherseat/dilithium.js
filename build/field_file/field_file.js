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
var field_file_exports = {};
__export(field_file_exports, {
  FileField: () => FileField
});
module.exports = __toCommonJS(field_file_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var FileField = (function() {
  class FileField2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this._onchange = this._onchange.bind(this);
      this.click = this.click.bind(this);
      this.attrs = this.attrs.bind(this);
      this.classes = this.classes.bind(this);
      this.render = this.render.bind(this);
    }
    _onchange(ev) {
      var file, filelist, files, i, len;
      boundMethodCheck(this, FileField2);
      filelist = ev.target.files;
      files = null;
      if (this.multi) {
        if (filelist.length === 1) {
          files = [filelist[0]];
        } else if (filelist.length > 1) {
          files = [];
          for (i = 0, len = filelist.length; i < len; i++) {
            file = filelist[i];
            files.push(file);
          }
        }
      } else {
        if (filelist.length === 1) {
          files = filelist[0];
        }
      }
      this.attribute.value(files);
      if (this.onchange) {
        return this.onchange();
      }
    }
    click(vnode) {
      boundMethodCheck(this, FileField2);
      return function(ev) {
        return document.querySelector(".field.file_field input").click();
      };
    }
    attrs() {
      var attrs;
      boundMethodCheck(this, FileField2);
      attrs = {
        onchange: this._onchange
      };
      if (this.multi) {
        attrs.multiple = true;
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
      boundMethodCheck(this, FileField2);
      if (this.attribute.errors().length > 0) {
        return "err";
      } else {
        return "";
      }
    }
    render(vnode) {
      boundMethodCheck(this, FileField2);
      return (0, import_mithril.m)(`.field.file_field.${this.handle}`, {
        class: this.classes()
      }, this.label ? (0, import_mithril.m)("label", this.label) : void 0, this.button_label ? (0, import_mithril.m)(".upload.button.bttn", {
        onclick: this.click(vnode)
      }, this.button_label) : void 0, (0, import_mithril.m)("input[type='file']", this.attrs()), vnode.children);
    }
  }
  ;
  FileField2.prototype.expects = {
    attribute: true,
    handle: true,
    label: {
      allow_nil: true
    },
    button_label: {
      allow_nil: true
    },
    multi: {
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
  return FileField2;
}).call(void 0);
