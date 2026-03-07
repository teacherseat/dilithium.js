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
var util_exports = {};
__export(util_exports, {
  Util: () => Util
});
module.exports = __toCommonJS(util_exports);
var Util = {
  create: function(collection, data, opts = {}) {
    collection || (collection = []);
    if (opts.reverse) {
      collection.unshift(data);
    } else {
      collection.push(data);
    }
    return data;
  },
  update: function(collection, data) {
    var i, j, len, m, model;
    model = null;
    for (j = 0, len = collection.length; j < len; j++) {
      m = collection[j];
      if (data.id === m.id) {
        model = m;
      }
    }
    i = collection.indexOf(model);
    if (i === -1) {
      return null;
    }
    collection[i] = data;
    return collection[i];
  },
  destroy: function(collection, data) {
    var i, j, len, m, model;
    model = null;
    for (j = 0, len = collection.length; j < len; j++) {
      m = collection[j];
      if (data.id === m.id) {
        model = m;
      }
    }
    i = collection.indexOf(model);
    if (i === -1) {
      return null;
    }
    collection.splice(i, 1);
    return model;
  },
  find_by: function(key, collection, value) {
    var j, len, model, result;
    result = null;
    for (j = 0, len = collection.length; j < len; j++) {
      model = collection[j];
      if (model[key] === value) {
        result = model;
      }
    }
    return result;
  },
  find_by_id: function(collection, id) {
    var j, len, model, result;
    result = null;
    for (j = 0, len = collection.length; j < len; j++) {
      model = collection[j];
      if (model.id === id) {
        result = model;
      }
    }
    return result;
  },
  is_array: function(value) {
    return value && typeof value === "object" && value instanceof Array && typeof value.length === "number" && typeof value.splice === "function" && !value.propertyIsEnumerable("length");
  },
  // This utility is to provide a shorthand
  // when applying classes to html elements.
  // The key is the class that will be applied
  // The value is the expression to determine if the class should be applied
  // A boolean of true here would set a class called active:
  // eg. {'active': true}
  // An a javascript expression as the evaluator
  // eg. {'active': @hello is 'world'}
  // You can use the coffeescript nil expression on variable
  // eg. {'active': @active?}
  // You can have dynamic keys that are either variables or functions
  // They must be passed a string with the @ sign. If its a function
  // it will simplify be called. The function takes no arguments
  // If its a variable the string value will become the class name
  // {
  //   "@style": style?
  // }
  classes: function(hash) {
    var apply_class_name, class_name, classes, expression, property;
    if (!hash) {
      return [];
    }
    classes = [];
    for (class_name in hash) {
      expression = hash[class_name];
      apply_class_name = typeof expression === "function" && expression() === true || typeof expression === "boolean" && expression === true;
      if (apply_class_name) {
        if (class_name[0] === "@") {
          property = class_name.substr(1, class_name.length);
          if (this[property] != null) {
            if (typeof this[property] === "function") {
              classes.push(this[property]());
            } else {
              classes.push(this[property]);
            }
          }
        } else {
          classes.push(class_name);
        }
      }
    }
    return classes;
  }
};
