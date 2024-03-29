"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  Checkbox: function () {
    return Checkbox;
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
var _checkbox = require("../../types/components/checkbox");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
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
var Checkbox = _react.default.forwardRef(function (_param, ref) {
  var color = _param.color,
    label = _param.label,
    icon = _param.icon,
    ripple = _param.ripple,
    className = _param.className,
    disabled = _param.disabled,
    containerProps = _param.containerProps,
    labelProps = _param.labelProps,
    iconProps = _param.iconProps,
    inputRef = _param.inputRef,
    rest = _objectWithoutProperties(_param, [
      "color",
      "label",
      "icon",
      "ripple",
      "className",
      "disabled",
      "containerProps",
      "labelProps",
      "iconProps",
      "inputRef",
    ]);
  var checkbox = (0, _theme.useTheme)().checkbox;
  var defaultProps = checkbox.defaultProps,
    valid = checkbox.valid,
    styles = checkbox.styles;
  var base = styles.base,
    colors = styles.colors;
  var checkboxId = _react.default.useId();
  color = color !== null && color !== void 0 ? color : defaultProps.color;
  label = label !== null && label !== void 0 ? label : defaultProps.label;
  icon = icon !== null && icon !== void 0 ? icon : defaultProps.icon;
  ripple = ripple !== null && ripple !== void 0 ? ripple : defaultProps.ripple;
  className =
    className !== null && className !== void 0
      ? className
      : defaultProps.className;
  disabled =
    disabled !== null && disabled !== void 0 ? disabled : defaultProps.disabled;
  containerProps =
    containerProps !== null && containerProps !== void 0
      ? containerProps
      : defaultProps.containerProps;
  labelProps =
    labelProps !== null && labelProps !== void 0
      ? labelProps
      : defaultProps.labelProps;
  iconProps =
    iconProps !== null && iconProps !== void 0
      ? iconProps
      : defaultProps.iconProps;
  var rippleEffect =
    ripple !== undefined && new _materialRippleEffects.default();
  var rootClasses = (0, _classnames.default)(
    (0, _objectsToString.default)(base.root),
    _defineProperty({}, (0, _objectsToString.default)(base.disabled), disabled)
  );
  var containerClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base.container)),
    containerProps === null || containerProps === void 0
      ? void 0
      : containerProps.className
  );
  var inputClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)(
      (0, _objectsToString.default)(base.input),
      (0, _objectsToString.default)(
        colors[(0, _findMatch.default)(valid.colors, color, "gray")]
      )
    ),
    className
  );
  var labelClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base.label)),
    labelProps === null || labelProps === void 0 ? void 0 : labelProps.className
  );
  var iconContainerClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base.icon)),
    iconProps === null || iconProps === void 0 ? void 0 : iconProps.className
  );
  return _react.default.createElement(
    "div",
    { ref: ref, className: rootClasses },
    _react.default.createElement(
      "label",
      _extends({}, containerProps, {
        className: containerClasses,
        htmlFor: rest.id || checkboxId,
        onMouseDown: function (e) {
          var onMouseDown =
            containerProps === null || containerProps === void 0
              ? void 0
              : containerProps.onMouseDown;
          if (ripple) {
            rippleEffect.create(e, "dark");
          }
          return typeof onMouseDown === "function" && onMouseDown(e);
        },
      }),
      _react.default.createElement(
        "input",
        _extends({}, rest, {
          ref: inputRef,
          type: "checkbox",
          disabled: disabled,
          className: inputClasses,
          id: rest.id || checkboxId,
        })
      ),
      _react.default.createElement(
        "span",
        { className: iconContainerClasses },
        icon ||
          _react.default.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-3.5 w-3.5",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: 1,
            },
            _react.default.createElement("path", {
              fillRule: "evenodd",
              d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
              clipRule: "evenodd",
            })
          )
      )
    ),
    label &&
      _react.default.createElement(
        "label",
        _extends({}, labelProps, {
          className: labelClasses,
          htmlFor: rest.id || checkboxId,
        }),
        label
      )
  );
});
Checkbox.propTypes = {
  color: _propTypes.default.oneOf(_checkbox.propTypesColor),
  label: _checkbox.propTypesLabel,
  icon: _checkbox.propTypesIcon,
  ripple: _checkbox.propTypesRipple,
  className: _checkbox.propTypesClassName,
  disabled: _checkbox.propTypesDisabled,
  containerProps: _checkbox.propTypesObject,
  labelProps: _checkbox.propTypesObject,
};
Checkbox.displayName = "MaterialTailwind.Checkbox";
var _default = Checkbox;
