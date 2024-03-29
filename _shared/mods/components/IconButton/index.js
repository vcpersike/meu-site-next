"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  IconButton: function () {
    return IconButton;
  },
  default: function () {
    return _default;
  },
});
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _materialRippleEffects = _interopRequireDefault(
  require("material-ripple-effects")
);
var _classnames = _interopRequireDefault(require("classnames"));
var _tailwindMerge = require("tailwind-merge");
var _findMatch = _interopRequireDefault(require("../../utils/findMatch"));
var _objectsToString = _interopRequireDefault(
  require("../../utils/objectsToString")
);
var _theme = require("../../context/theme");
var _button = require("../../types/components/button");
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
var IconButton = _react.default.forwardRef(function (_param, ref) {
  var variant = _param.variant,
    size = _param.size,
    color = _param.color,
    ripple = _param.ripple,
    className = _param.className,
    children = _param.children,
    fullWidth = _param.fullWidth,
    rest = _objectWithoutProperties(_param, [
      "variant",
      "size",
      "color",
      "ripple",
      "className",
      "children",
      "fullWidth",
    ]);
  var iconButton = (0, _theme.useTheme)().iconButton;
  var valid = iconButton.valid,
    defaultProps = iconButton.defaultProps,
    styles = iconButton.styles;
  var base = styles.base,
    variants = styles.variants,
    sizes = styles.sizes;
  variant =
    variant !== null && variant !== void 0 ? variant : defaultProps.variant;
  size = size !== null && size !== void 0 ? size : defaultProps.size;
  color = color !== null && color !== void 0 ? color : defaultProps.color;
  ripple = ripple !== null && ripple !== void 0 ? ripple : defaultProps.ripple;
  className =
    className !== null && className !== void 0
      ? className
      : defaultProps.className;
  var rippleEffect =
    ripple !== undefined && new _materialRippleEffects.default();
  var buttonBase = (0, _objectsToString.default)(base);
  var buttonVariant = (0, _objectsToString.default)(
    variants[(0, _findMatch.default)(valid.variants, variant, "filled")][
      (0, _findMatch.default)(valid.colors, color, "gray")
    ]
  );
  var buttonSize = (0, _objectsToString.default)(
    sizes[(0, _findMatch.default)(valid.sizes, size, "md")]
  );
  var classes = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)(buttonBase, buttonSize, buttonVariant),
    className
  );
  return _react.default.createElement(
    "button",
    _extends({}, rest, {
      ref: ref,
      className: classes,
      type: rest.type || "button",
      onMouseDown: function (e) {
        var onMouseDown =
          rest === null || rest === void 0 ? void 0 : rest.onMouseDown;
        if (ripple) {
          rippleEffect.create(
            e,
            (variant === "filled" || variant === "gradient") &&
              color !== "white"
              ? "light"
              : "dark"
          );
        }
        return typeof onMouseDown === "function" && onMouseDown(e);
      },
    }),
    _react.default.createElement(
      "span",
      {
        className:
          "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2",
      },
      children
    )
  );
});
IconButton.propTypes = {
  variant: _propTypes.default.oneOf(_button.propTypesVariant),
  size: _propTypes.default.oneOf(_button.propTypesSize),
  color: _propTypes.default.oneOf(_button.propTypesColor),
  ripple: _button.propTypesRipple,
  className: _button.propTypesClassName,
  children: _button.propTypesChildren,
};
IconButton.displayName = "MaterialTailwind.IconButton";
var _default = IconButton;
