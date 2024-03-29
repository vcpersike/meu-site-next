"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  MaterialTailwindTheme: function () {
    return MaterialTailwindTheme;
  },
  ThemeProvider: function () {
    return ThemeProvider;
  },
  useTheme: function () {
    return useTheme;
  },
});
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _index = _interopRequireDefault(require("../theme/index"));
var _combineMerge = _interopRequireDefault(require("../utils/combineMerge"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var MaterialTailwindTheme = (0, _react.createContext)(_index.default);
MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";
function ThemeProvider(param) {
  var _param_value = param.value,
    value = _param_value === void 0 ? _index.default : _param_value,
    children = param.children;
  var mergedValue = (0, _deepmerge.default)(_index.default, value, {
    arrayMerge: _combineMerge.default,
  });
  return _react.default.createElement(
    MaterialTailwindTheme.Provider,
    { value: mergedValue },
    children
  );
}
var useTheme = function () {
  return (0, _react.useContext)(MaterialTailwindTheme);
};
ThemeProvider.propTypes = {
  value: _propTypes.default.instanceOf(Object),
  children: _propTypes.default.node.isRequired,
};
