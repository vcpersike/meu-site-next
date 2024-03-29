"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  propTypesVariant: function () {
    return propTypesVariant;
  },
  propTypesColor: function () {
    return propTypesColor;
  },
  propTypesIcon: function () {
    return propTypesIcon;
  },
  propTypesOpen: function () {
    return propTypesOpen;
  },
  propTypesOnClose: function () {
    return propTypesOnClose;
  },
  propTypesAction: function () {
    return propTypesAction;
  },
  propTypesAnimate: function () {
    return propTypesAnimate;
  },
  propTypesClassName: function () {
    return propTypesClassName;
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
var propTypesVariant = ["filled", "gradient", "outlined", "ghost"];
var propTypesColor = _generic.propTypesColors;
var propTypesIcon = _propTypes.default.node;
var propTypesOpen = _propTypes.default.bool;
var propTypesOnClose = _propTypes.default.func;
var propTypesAction = _propTypes.default.node;
var propTypesAnimate = _generic.propTypesAnimation;
var propTypesClassName = _propTypes.default.string;
var propTypesChildren = _propTypes.default.node.isRequired;
