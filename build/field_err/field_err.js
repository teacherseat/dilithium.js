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
var field_err_exports = {};
__export(field_err_exports, {
  ErrorMsg: () => ErrorMsg
});
module.exports = __toCommonJS(field_err_exports);
var import_mithril = require("mithril");
var import_component = require("./../component/component.js");
var boundMethodCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error("Bound instance method accessed before binding");
  }
};
var ErrorMsg = (function() {
  class ErrorMsg2 extends import_component.Component {
    constructor() {
      super(...arguments);
      this.render = this.render.bind(this);
    }
    render() {
      var err;
      boundMethodCheck(this, ErrorMsg2);
      if (!(this.errors().length > 0)) {
        return;
      }
      return (0, import_mithril.m)(".err_msg.err", (function() {
        var i, len, ref, results;
        ref = this.errors();
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          err = ref[i];
          if (this.overrides && this.overrides[err]) {
            results.push((0, import_mithril.m)(".err", this.overrides[err]));
          } else {
            results.push((0, import_mithril.m)(".err", `${this.title} ${err}`));
          }
        }
        return results;
      }).call(this));
    }
  }
  ;
  ErrorMsg2.prototype.expects = {
    errors: true,
    title: true,
    overrides: {
      allow_nil: true
    }
  };
  return ErrorMsg2;
}).call(void 0);
