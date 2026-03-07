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
var events_exports = {};
__export(events_exports, {
  $broadcast: () => $broadcast,
  $deregister: () => $deregister,
  $register: () => $register
});
module.exports = __toCommonJS(events_exports);
var events;
events = {};
var $register = function(scope, name, fun) {
  if (events[name] == null) {
    events[name] = {};
  }
  return events[name][scope] = fun;
};
var $deregister = function(scope, name) {
  return delete events[name][scope];
};
var $broadcast = function(name, ...args) {
  var fun, key, ref, results;
  if (name !== "" && events[name]) {
    ref = events[name];
    results = [];
    for (key in ref) {
      fun = ref[key];
      if (fun) {
        results.push(fun(...args));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }
};
