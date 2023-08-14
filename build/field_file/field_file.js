"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileField = void 0;
var _mithril = require("mithril");
var _component = require("./../component/component.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Generated by CoffeeScript 2.7.0
var boundMethodCheck = function boundMethodCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error('Bound instance method accessed before binding');
  }
};
var FileField = function () {
  var FileField = /*#__PURE__*/function (_Component) {
    _inherits(FileField, _Component);
    var _super = _createSuper(FileField);
    function FileField() {
      var _this;
      _classCallCheck(this, FileField);
      _this = _super.apply(this, arguments);
      _this._onchange = _this._onchange.bind(_assertThisInitialized(_this));
      _this.click = _this.click.bind(_assertThisInitialized(_this));
      _this.attrs = _this.attrs.bind(_assertThisInitialized(_this));
      _this.classes = _this.classes.bind(_assertThisInitialized(_this));
      _this.render = _this.render.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass(FileField, [{
      key: "_onchange",
      value: function _onchange(ev) {
        var file, filelist, files, i, len;
        boundMethodCheck(this, FileField);
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
    }, {
      key: "click",
      value: function click(vnode) {
        boundMethodCheck(this, FileField);
        return function (ev) {
          return document.querySelector('.field.file_field input').click();
        };
      }
    }, {
      key: "attrs",
      value: function attrs() {
        var attrs;
        boundMethodCheck(this, FileField);
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
    }, {
      key: "classes",
      value: function classes() {
        boundMethodCheck(this, FileField);
        if (this.attribute.errors().length > 0) {
          return 'err';
        } else {
          return '';
        }
      }
    }, {
      key: "render",
      value: function render(vnode) {
        boundMethodCheck(this, FileField);
        return (0, _mithril.m)(".field.file_field.".concat(this.handle), {
          "class": this.classes()
        }, this.label ? (0, _mithril.m)('label', this.label) : void 0, this.button_label ? (0, _mithril.m)('.upload.button.bttn', {
          onclick: this.click(vnode)
        }, this.button_label) : void 0, (0, _mithril.m)("input[type='file']", this.attrs()), vnode.children);
      }
    }]);
    return FileField;
  }(_component.Component);
  ;
  FileField.prototype.expects = {
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
  return FileField;
}.call(void 0);
exports.FileField = FileField;