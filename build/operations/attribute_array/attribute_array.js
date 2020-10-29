"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttributeArray = void 0;

var _stream = _interopRequireDefault(require("mithril/stream"));

var _attribute = require("./../attribute/attribute.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Represent an array of attributes
// eg. a list of checkboxes
var AttributeArray =
/*#__PURE__*/
function () {
  function AttributeArray() {
    _classCallCheck(this, AttributeArray);

    this.at = this.at.bind(this);
    this.reset = this.reset.bind(this);
    this.values = this.values.bind(this);
    this.array = [];
    this.value = (0, _stream["default"])(null);
  }

  _createClass(AttributeArray, [{
    key: "at",
    value: function at(v) {
      return this.array[v];
    }
  }, {
    key: "reset",
    value: function reset(size) {
      var i, ref, results, v;
      this.array = [];
      results = [];

      for (v = i = 0, ref = size - 1; 0 <= ref ? i <= ref : i >= ref; v = 0 <= ref ? ++i : --i) {
        results.push(this.array.push(new _attribute.Attribute()));
      }

      return results;
    }
  }, {
    key: "values",
    value: function values() {
      var a, i, len, ref, values;
      values = [];
      ref = this.array;

      for (i = 0, len = ref.length; i < len; i++) {
        a = ref[i];

        if (a.value()) {
          values.push(a.value());
        }
      }

      return values;
    }
  }]);

  return AttributeArray;
}();

exports.AttributeArray = AttributeArray;