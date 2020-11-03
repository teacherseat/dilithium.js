"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

var _stream = _interopRequireDefault(require("mithril/stream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Model);

    var k, ref, v;
    this.errors = this.errors.bind(this); // exclude - allows you to exclude params
    // eg. exclude: ['exams']
    // rename - allows you to change the name of the param
    // eg. rename: {exams: 'exam_ids' }

    this.params = this.params.bind(this);
    this.reset = this.reset.bind(this);
    this.id = (0, _stream["default"])(attrs.id || null);
    ref = this.attributes;

    for (k in ref) {
      v = ref[k];
      this[k] = v();
    }
  }

  _createClass(Model, [{
    key: "errors",
    value: function errors() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var k, results, v;
      results = [];

      for (k in attributes) {
        v = attributes[k];

        if (this[k]) {
          results.push(this[k].errors(v));
        } else {
          results.push(void 0);
        }
      }

      return results;
    }
  }, {
    key: "params",
    value: function params() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attrs, k, key, ref, v;
      attrs = {};
      attrs.id = this.id();
      ref = this.attributes;

      for (k in ref) {
        v = ref[k];

        if (!!opts.exclude === false || opts.exclude && opts.exclude.indexOf(k) === -1) {
          // rename key
          key = opts.rename ? opts.rename[k] || k : k;

          if (v === 'ArrayModelAttribute') {
            attrs[key] = this[k].values();
          } else if (v === 'ArrayAttribute') {
            attrs[key] = this[k].values();
          } else {
            attrs[key] = this[k].value();
          }
        }
      }

      return attrs;
    }
  }, {
    key: "reset",
    value: function reset() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var k, ref, results, v;
      this.id(attrs.id || null);
      ref = this.attributes;
      results = [];

      for (k in ref) {
        v = ref[k];

        if (attrs[k]) {
          results.push(this[k].value(attrs[k]));
        } else {
          results.push(this[k].value(''));
        }
      }

      return results;
    }
  }]);

  return Model;
}();

exports.Model = Model;