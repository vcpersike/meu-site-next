"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  AccordionBody: function () {
    return AccordionBody;
  },
  default: function () {
    return _default;
  },
});
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _classnames = _interopRequireDefault(require("classnames"));
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _objectsToString = _interopRequireDefault(
  require("../../utils/objectsToString")
);
var _tailwindMerge = require("tailwind-merge");
var _accordionContext = require("./AccordionContext");
var _theme = require("../../context/theme");
var _accordion = require("../../types/components/accordion");
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
var AccordionBody = _react.default.forwardRef(function (_param, ref) {
  var className = _param.className,
    children = _param.children,
    rest = _objectWithoutProperties(_param, ["className", "children"]);
  var _useAccordion = (0, _accordionContext.useAccordion)(),
    open = _useAccordion.open,
    animate = _useAccordion.animate;
  var accordion = (0, _theme.useTheme)().accordion;
  var base = accordion.styles.base;
  className = className !== null && className !== void 0 ? className : "";
  var bodyClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base.body)),
    className
  );
  var heightAnimation = {
    unmount: {
      height: "0px",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      height: "auto",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
  };
  var mainAnimation = {
    unmount: { transition: { duration: 0.3, ease: "linear" } },
    mount: { transition: { duration: 0.3, ease: "linear" } },
  };
  var appliedAnimation = (0, _deepmerge.default)(mainAnimation, animate);
  return _react.default.createElement(
    _framerMotion.LazyMotion,
    { features: _framerMotion.domAnimation },
    _react.default.createElement(
      _framerMotion.m.div,
      {
        className: "overflow-hidden",
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: heightAnimation,
      },
      _react.default.createElement(
        _framerMotion.m.div,
        _extends({}, rest, {
          ref: ref,
          className: bodyClasses,
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
AccordionBody.propTypes = {
  className: _accordion.propTypesClassName,
  children: _accordion.propTypesChildren,
};
AccordionBody.displayName = "MaterialTailwind.AccordionBody";
var _default = AccordionBody;
