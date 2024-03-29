"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
var _uuid = require("uuid");
var _events = require("./../events/events.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // Generated by CoffeeScript 2.7.0
var Base = /*#__PURE__*/function () {
  function Base() {
    _classCallCheck(this, Base);
    // register events and bind to instance methods
    // eg. @$on 'users/index', @success
    this.$on = this.$on.bind(this);
    this.$off = this.$off.bind(this);
    this.oninit = this.oninit.bind(this);
    this.onremove = this.onremove.bind(this);
  }

  // unique way of indentifying each components
  _createClass(Base, [{
    key: "scope",
    value: function scope() {
      return (0, _uuid.v4)();
    }
  }, {
    key: "$on",
    value: function $on(name, fun) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return (0, _events.$register)(this._scope, name, fun);
    }
  }, {
    key: "$off",
    value: function $off(name) {
      return (0, _events.$deregister)(this._scope, name);
    }
  }, {
    key: "oninit",
    value: function oninit(vnode) {
      var func, name, ref;
      if (!vnode) {
        return;
      }
      this._scope = this.scope();
      ref = this.events;
      for (name in ref) {
        func = ref[name];
        this.$on(name, this[func]);
      }
      return true;
    }
  }, {
    key: "onremove",
    value: function onremove(vnode) {
      var func, name, ref;
      ref = this.events;
      // remove events
      for (name in ref) {
        func = ref[name];
        this.$off(name, this[func]);
      }
      return true;
    }
  }, {
    key: "view",
    value: function view(vnode) {
      return this.render(vnode);
    }
  }]);
  return Base;
}();
exports.Base = Base;