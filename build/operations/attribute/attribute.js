"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attribute = void 0;

var _stream = _interopRequireDefault(require("mithril/stream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Attribute = function () {
  var Attribute = function Attribute() {
    _classCallCheck(this, Attribute);

    this.value = (0, _stream["default"])(null);
    this.errors = (0, _stream["default"])([]);
  };

  ;
  Attribute.prototype._attribute_type = 'Attribute';
  return Attribute;
}.call(void 0);

exports.Attribute = Attribute;