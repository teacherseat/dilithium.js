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
var location_exports = {};
__export(location_exports, {
  $location: () => $location
});
module.exports = __toCommonJS(location_exports);
var $location = function(input) {
  var i, len, p, pair, pairs, result;
  pairs = location.search.slice(1).split("&");
  result = {};
  for (i = 0, len = pairs.length; i < len; i++) {
    pair = pairs[i];
    p = pair.split("=");
    if (p[0] !== "") {
      result[p[0]] = decodeURIComponent(p[1] || "");
    }
  }
  return result;
};
