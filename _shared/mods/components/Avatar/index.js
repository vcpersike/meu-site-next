"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  Avatar: function () {
    return Avatar;
  },
  default: function () {
    return _default;
  },
});
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _tailwindMerge = require("tailwind-merge");
var _findMatch = _interopRequireDefault(require("../../utils/findMatch"));
var _objectsToString = _interopRequireDefault(
  require("../../utils/objectsToString")
);
var _theme = require("../../context/theme");
var _avatar = require("../../types/components/avatar");
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
var Avatar = _react.default.forwardRef(function (_param, ref) {
  var variant = _param.variant,
    size = _param.size,
    className = _param.className,
    color = _param.color,
    withBorder = _param.withBorder,
    rest = _objectWithoutProperties(_param, [
      "variant",
      "size",
      "className",
      "color",
      "withBorder",
    ]);
  var avatar = (0, _theme.useTheme)().avatar;
  var valid = avatar.valid,
    defaultProps = avatar.defaultProps,
    styles = avatar.styles;
  var base = styles.base,
    variants = styles.variants,
    sizes = styles.sizes,
    borderColor = styles.borderColor;
  variant =
    variant !== null && variant !== void 0 ? variant : defaultProps.variant;
  size = size !== null && size !== void 0 ? size : defaultProps.size;
  className =
    className !== null && className !== void 0
      ? className
      : defaultProps.className;
  withBorder =
    withBorder !== null && withBorder !== void 0
      ? withBorder
      : defaultProps.withBorder;
  color = color !== null && color !== void 0 ? color : defaultProps.color;
  var avatarVariant = (0, _objectsToString.default)(
    variants[(0, _findMatch.default)(valid.variants, variant, "rounded")]
  );
  var avatarSize = (0, _objectsToString.default)(
    sizes[(0, _findMatch.default)(valid.sizes, size, "md")]
  );
  var avatarBorderColor = (0, _objectsToString.default)(
    borderColor[(0, _findMatch.default)(valid.colors, color, "gray")]
  );
  var _obj;
  var classes = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)(
      (0, _objectsToString.default)(base.initial),
      avatarVariant,
      avatarSize,
      ((_obj = {}),
      _defineProperty(
        _obj,
        (0, _objectsToString.default)(base.withBorder),
        withBorder
      ),
      _defineProperty(_obj, avatarBorderColor, withBorder),
      _obj)
    ),
    className
  );
  return _react.default.createElement(
    "img",
    _extends({}, rest, { ref: ref, className: classes })
  );
});
Avatar.propTypes = {
  variant: _propTypes.default.oneOf(_avatar.propTypesVariant),
  size: _propTypes.default.oneOf(_avatar.propTypesSize),
  className: _avatar.propTypesClassName,
  withBorder: _avatar.propTypesWithBorder,
  color: _propTypes.default.oneOf(_avatar.propTypesColor),
};
Avatar.displayName = "MaterialTailwind.Avatar";
var _default = Avatar;
