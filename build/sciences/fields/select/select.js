"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _mithril = require("mithril");

var _component = require("./../../../operations/component/component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Generated by CoffeeScript 2.5.1
var boundMethodCheck = function boundMethodCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error('Bound instance method accessed before binding');
  }
};

var Select = function () {
  var Select = /*#__PURE__*/function (_Component) {
    _inherits(Select, _Component);

    var _super = _createSuper(Select);

    function Select() {
      var _this;

      _classCallCheck(this, Select);

      _this = _super.apply(this, arguments);
      _this.ev_onchange = _this.ev_onchange.bind(_assertThisInitialized(_this));
      _this.attrs = _this.attrs.bind(_assertThisInitialized(_this));
      _this.option = _this.option.bind(_assertThisInitialized(_this));
      _this.view = _this.view.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Select, [{
      key: "ev_onchange",
      value: function ev_onchange(ev) {
        boundMethodCheck(this, Select);
        this.attribute.value(ev.target.value);

        if (this.onchange) {
          return this.onchange(ev.target.value);
        }
      }
    }, {
      key: "attrs",
      value: function attrs() {
        var attrs;
        boundMethodCheck(this, Select);
        attrs = {
          onchange: this.ev_onchange,
          value: this.attribute.value()
        };
        return attrs;
      }
    }, {
      key: "option",
      value: function option(_option) {
        boundMethodCheck(this, Select);
        return (0, _mithril.m)('option', {
          value: _option.id
        }, _option.name);
      }
    }, {
      key: "view",
      value: function view(vnode) {
        var option;
        boundMethodCheck(this, Select);
        return (0, _mithril.m)(".field.select.".concat(this.handle), this.label ? (0, _mithril.m)('label', this.label) : void 0, (0, _mithril.m)("select", this.attrs(), this.include_blank ? (0, _mithril.m)('option') : void 0, function () {
          var i, len, ref, results;
          ref = this.options;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            option = ref[i];
            results.push(this.option(option));
          }

          return results;
        }.call(this)));
      }
    }]);

    return Select;
  }(_component.Component);

  ;
  Select.prototype.expects = {
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
    }
  };
  return Select;
}.call(void 0);

exports.Select = Select;