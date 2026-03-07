var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var api_exports = {};
__export(api_exports, {
  ApiBase: () => ApiBase
});
module.exports = __toCommonJS(api_exports);
var m = __toESM(require("mithril"));
var import_events = require("./../events/events.js");
var File, form_object_to_form_data, has_attached_file, parameter_name, request_wrap, hasProp = {}.hasOwnProperty;
parameter_name = function(root) {
  var name;
  name = root[0];
  if (root.length > 1) {
    name += "[" + root.slice(1).join("][") + "]";
  }
  return name;
};
if (typeof File === "undefined") {
  File = class File {
    constructor() {
    }
  };
}
has_attached_file = function(value) {
  var j, k, len, result, v, vv;
  result = false;
  if (Array.isArray(value)) {
    for (j = 0, len = value.length; j < len; j++) {
      vv = value[j];
      result |= has_attached_file(vv);
    }
  } else if (typeof value === "object" && !(value instanceof Blob)) {
    for (k in value) {
      if (!hasProp.call(value, k)) continue;
      v = value[k];
      result |= has_attached_file(v);
    }
  } else {
    result |= value instanceof Blob;
  }
  return result;
};
form_object_to_form_data = function(value, fd = null, root = []) {
  var i, j, k, len, v, vv;
  if (!fd) {
    fd = new FormData();
  }
  if (Array.isArray(value)) {
    for (vv = j = 0, len = value.length; j < len; vv = ++j) {
      i = value[vv];
      form_object_to_form_data(vv, fd, root.concat([i]));
    }
  } else if (typeof value === "object" && !(value instanceof Blob)) {
    for (k in value) {
      if (!hasProp.call(value, k)) continue;
      v = value[k];
      form_object_to_form_data(v, fd, root.concat([k]));
    }
  } else {
    fd.append(parameter_name(root), value);
  }
  return fd;
};
request_wrap = (method) => {
  return (url, data, iso_path) => {
    return ApiBase._request(iso_path, method, url, void 0, data, void 0, void 0);
  };
};
var ApiBase = (function() {
  class ApiBase2 {
    constructor() {
      var options, ref, table_name;
      this._extract_id = this._extract_id.bind(this);
      this.path = this.path.bind(this);
      this._resource = this._resource.bind(this);
      this._collection = this._collection.bind(this);
      this._member = this._member.bind(this);
      ref = this.resources;
      for (table_name in ref) {
        options = ref[table_name];
        this._resource(table_name, options);
      }
    }
    static _request(iso_path, method, url, headers, data, opts = {}) {
      var attrs, error, extract, success;
      success = opts.success;
      error = opts.error;
      extract = opts.extract;
      attrs = opts.attrs;
      return new Promise(function(resolve, reject) {
        var ev_error, ev_request, ev_success, form_data, headers_attrs, iso_pathless, k, serialize, v;
        iso_pathless = iso_path === void 0;
        headers_attrs = {};
        for (k in headers) {
          v = headers[k];
          if (typeof v === "function") {
            headers_attrs[k] = v();
          } else {
            headers_attrs[k] = v;
          }
        }
        ev_request = function(response) {
          if (response.code === 200) {
            return ev_success(response.data);
          } else {
            return ev_error(response.code, response.data);
          }
        };
        ev_success = function(data2) {
          if (!iso_pathless) {
            (0, import_events.$broadcast)(iso_path, data2, attrs);
          }
          if (typeof success === "function") {
            success(data2, attrs);
          }
          return resolve(data2);
        };
        ev_error = function(code, data2) {
          var response;
          response = {
            code,
            response: data2
          };
          if (!iso_pathless) {
            (0, import_events.$broadcast)(`${iso_path}#err`, response, attrs);
          }
          if (typeof error === "function") {
            error(response, attrs);
          }
          return resolve("api_error");
        };
        if (has_attached_file(data)) {
          form_data = form_object_to_form_data(data);
          serialize = function(value) {
            return value;
          };
          attrs = {
            method,
            url,
            body: form_data,
            serialize,
            headers: headers_attrs
          };
          return m.request(attrs).then(ev_success, ev_error).catch((e) => {
            return ev_error("502", e);
          });
        } else {
          attrs = {
            method,
            url,
            headers: headers_attrs
          };
          if (method === "GET") {
            attrs.params = data;
          } else {
            attrs.body = data;
          }
          attrs.extract = (xhr) => {
            var response;
            response = {
              xhr,
              code: xhr.status,
              data: JSON.parse(xhr.responseText)
            };
            if (extract) {
              response = extract(response);
            }
            return response;
          };
          return m.request(attrs).then(ev_request).catch((e) => {
            return ev_error("502", e);
          });
        }
      });
    }
    _extract_id(model) {
      if (typeof model === "string" || typeof model === "number") {
        return model;
      } else {
        if (typeof model.id === "function") {
          return model.id();
        } else {
          return model.id;
        }
      }
    }
    path(...args) {
      var host, namespace, path;
      if (typeof this.namespace === "function") {
        namespace = this.namespace();
      } else {
        namespace = this.namespace;
      }
      if (typeof this.host === "function") {
        host = this.host();
      } else {
        host = this.host;
      }
      if (args[0] instanceof Array) {
        path = args[0];
        if (args[1]) {
          namespace = args[1];
        }
      } else {
        path = args;
      }
      if (namespace) {
        path.unshift(namespace);
      }
      path = path.join("/");
      path = path.charAt(0) === "/" ? path : `/${path}`;
      if (host) {
        return `${host}${path}`;
      } else {
        return path;
      }
    }
    _resource(tn, options) {
      var action, j, len, method, ns, o, only, ref, ref1, ref2, results;
      ns = options.namespace;
      only = {
        index: true,
        new: true,
        create: true,
        show: true,
        edit: true,
        update: true,
        destroy: true
      };
      if (typeof options === "string") {
        only = {
          index: false,
          new: false,
          create: false,
          show: false,
          edit: false,
          update: false,
          destroy: false
        };
        ref = options.split(" ");
        for (j = 0, len = ref.length; j < len; j++) {
          o = ref[j];
          only[o] = true;
        }
      }
      this[tn] = {};
      this[tn].index = (pms, opts) => {
        if (only.index) {
          return ApiBase2._request(`${tn}/index`, "GET", this.path([tn], ns), this.headers, pms, opts);
        }
      };
      this[tn].new = (pms, opts) => {
        if (only.new) {
          return ApiBase2._request(`${tn}/new`, "GET", this.path([tn, "new"], ns), this.headers, pms, opts);
        }
      };
      this[tn].create = (pms, opts) => {
        if (only.create) {
          return ApiBase2._request(`${tn}/create`, "POST", this.path([tn], ns), this.headers, pms, opts);
        }
      };
      this[tn].show = (model, pms, opts) => {
        if (only.show) {
          return ApiBase2._request(`${tn}/show`, "GET", this.path([tn, this._extract_id(model)], ns), this.headers, pms, opts);
        }
      };
      this[tn].edit = (model, pms, opts) => {
        if (only.edit) {
          return ApiBase2._request(`${tn}/edit`, "GET", this.path([tn, this._extract_id(model), "edit"], ns), this.headers, pms, opts);
        }
      };
      this[tn].update = (model, pms, opts) => {
        if (only.update) {
          return ApiBase2._request(`${tn}/update`, "PUT", this.path([tn, this._extract_id(model)], ns), this.headers, pms, opts);
        }
      };
      this[tn].destroy = (model, pms, opts) => {
        if (only.destroy) {
          return ApiBase2._request(`${tn}/destroy`, "DELETE", this.path([tn, this._extract_id(model)], ns), this.headers, pms, opts);
        }
      };
      ref1 = options.collection;
      for (action in ref1) {
        method = ref1[action];
        this._collection(tn, action, method, ns);
      }
      ref2 = options.member;
      results = [];
      for (action in ref2) {
        method = ref2[action];
        results.push(this._member(tn, action, method, ns));
      }
      return results;
    }
    _collection(tn, a, method, ns) {
      return this[tn][a] = (params, opts) => {
        return ApiBase2._request(`${tn}/${a}`, method.toUpperCase(), this.path([tn, a], ns), this.headers, params, opts);
      };
    }
    _member(tn, a, method, ns) {
      return this[tn][a] = (model, params, opts) => {
        return ApiBase2._request(`${tn}/${a}`, method.toUpperCase(), this.path([tn, model.id, a], ns), this.headers, params, opts);
      };
    }
  }
  ;
  ApiBase2.prototype.get = request_wrap("GET");
  ApiBase2.prototype.post = request_wrap("POST");
  ApiBase2.prototype.put = request_wrap("PUT");
  ApiBase2.prototype.delete = request_wrap("DELETE");
  return ApiBase2;
}).call(void 0);
