"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  propTypesOpen: function () {
    return propTypesOpen;
  },
  propTypesIcon: function () {
    return propTypesIcon;
  },
  propTypesAnimate: function () {
    return propTypesAnimate;
  },
  propTypesDisabled: function () {
    return propTypesDisabled;
  },
  propTypesClassName: function () {
    return propTypesClassName;
  },
  propTypesValue: function () {
    return propTypesValue;
  },
  propTypesChildren: function () {
    return propTypesChildren;
  },
});
var _propTypes = _interopRequireDefault(require("prop-types"));
var _generic = require("../generic");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var propTypesOpen = _propTypes.default.bool.isRequired;
var propTypesIcon = _propTypes.default.node;
var propTypesAnimate = _generic.propTypesAnimation;
var propTypesDisabled = _propTypes.default.bool;
var propTypesClassName = _propTypes.default.string;
var propTypesValue = _propTypes.default.instanceOf(Object).isRequired;
var propTypesChildren = _propTypes.default.node.isRequired;
