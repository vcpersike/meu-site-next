"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  Collapse: function () {
    return Collapse;
  },
  default: function () {
    return _default;
  },
});
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _react1 = require("@floating-ui/react");
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _classnames = _interopRequireDefault(require("classnames"));
var _tailwindMerge = require("tailwind-merge");
var _objectsToString = _interopRequireDefault(
  require("../../utils/objectsToString")
);
var _theme = require("../../context/theme");
var _collapse = require("../../types/components/collapse");
function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Collapse = _react.default.forwardRef(function (_param, ref) {
  var open = _param.open,
    animate = _param.animate,
    className = _param.className,
    children = _param.children,
    rest = _objectWithoutProperties(_param, [
      "open",
      "animate",
      "className",
      "children",
    ]);
  var mobileNavRef = _react.default.useRef(null);
  var collapse = (0, _theme.useTheme)().collapse;
  var styles = collapse.styles;
  var base = styles.base;
  animate = animate !== null && animate !== void 0 ? animate : {};
  className = className !== null && className !== void 0 ? className : "";
  var classes = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base)),
    className
  );
  var mainAnimation = {
    unmount: {
      height: "0px",
      transition: { duration: 0.3, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      height: "auto",
      transition: { duration: 0.3, times: [0.4, 0, 0.2, 1] },
    },
  };
  var appliedAnimation = (0, _deepmerge.default)(mainAnimation, animate);
  var NewAnimatePresence = _framerMotion.AnimatePresence;
  var mergedRef = (0, _react1.useMergeRefs)([ref, mobileNavRef]);
  return _react.default.createElement(
    _framerMotion.LazyMotion,
    { features: _framerMotion.domAnimation },
    _react.default.createElement(
      NewAnimatePresence,
      null,
      _react.default.createElement(
        _framerMotion.m.div,
        _extends({}, rest, {
          ref: mergedRef,
          className: classes,
          initial: "unmount",
          exit: "unmount",
          animate: open ? "mount" : "unmount",
          variants: appliedAnimation,
        }),
        children
      )
    )
  );
});
Collapse.displayName = "MaterialTailwind.Collapse";
Collapse.propTypes = {
  open: _collapse.propTypesOpen,
  animate: _collapse.propTypesAnimate,
  className: _collapse.propTypesClassName,
  children: _collapse.propTypesChildren,
};
var _default = Collapse;
