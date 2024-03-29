"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  propTypesColors: function () {
    return propTypesColors;
  },
  propTypesAnimation: function () {
    return propTypesAnimation;
  },
  propTypesDismissType: function () {
    return propTypesDismissType;
  },
  propTypesOffsetType: function () {
    return propTypesOffsetType;
  },
  propTypesPlacements: function () {
    return propTypesPlacements;
  },
});
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var propTypesColors = [
  "blue-gray",
  "gray",
  "brown",
  "deep-orange",
  "orange",
  "amber",
  "yellow",
  "lime",
  "light-green",
  "green",
  "teal",
  "cyan",
  "light-blue",
  "blue",
  "indigo",
  "deep-purple",
  "purple",
  "pink",
  "red",
];
var propTypesAnimation = _propTypes.default.shape({
  mount: _propTypes.default.instanceOf(Object),
  unmount: _propTypes.default.instanceOf(Object),
});
var propTypesDismissType = _propTypes.default.shape({
  enabled: _propTypes.default.bool,
  escapeKey: _propTypes.default.bool,
  referencePress: _propTypes.default.bool,
  referencePressEvent: _propTypes.default.oneOf([
    "pointerdown",
    "mousedown",
    "click",
  ]),
  outsidePress: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.func,
  ]),
  outsidePressEvent: _propTypes.default.oneOf([
    "pointerdown",
    "mousedown",
    "click",
  ]),
  ancestorScroll: _propTypes.default.bool,
  bubbles: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.shape({
      escapeKey: _propTypes.default.bool,
      outsidePress: _propTypes.default.bool,
    }),
  ]),
});
var propTypesOffsetType = _propTypes.default.oneOfType([
  _propTypes.default.number,
  _propTypes.default.shape({
    mainAxis: _propTypes.default.number,
    crossAxis: _propTypes.default.number,
    alignmentAxis: _propTypes.default.number,
  }),
]);
var propTypesPlacements = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
];
