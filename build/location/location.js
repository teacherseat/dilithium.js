"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$location = void 0;
// Generated by CoffeeScript 2.7.0
var $location = function $location(input) {
  var i, len, p, pair, pairs, result;
  pairs = location.search.slice(1).split('&');
  result = {};
  for (i = 0, len = pairs.length; i < len; i++) {
    pair = pairs[i];
    p = pair.split('=');
    if (p[0] !== '') {
      result[p[0]] = decodeURIComponent(p[1] || '');
    }
  }
  return result;
};
exports.$location = $location;