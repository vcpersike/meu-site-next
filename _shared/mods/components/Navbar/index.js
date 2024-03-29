"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  Navbar: function () {
    return Navbar;
  },
  MobileNav: function () {
    return _mobileNav.MobileNav;
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
var _mobileNav = require("./MobileNav");
var _navbar = require("../../types/components/navbar");
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
var Navbar = _react.default.forwardRef(function (_param, ref) {
  var variant = _param.variant,
    color = _param.color,
    shadow = _param.shadow,
    blurred = _param.blurred,
    fullWidth = _param.fullWidth,
    className = _param.className,
    children = _param.children,
    rest = _objectWithoutProperties(_param, [
      "variant",
      "color",
      "shadow",
      "blurred",
      "fullWidth",
      "className",
      "children",
    ]);
  var navbar = (0, _theme.useTheme)().navbar;
  var defaultProps = navbar.defaultProps,
    valid = navbar.valid,
    styles = navbar.styles;
  var base = styles.base,
    variants = styles.variants;
  variant =
    variant !== null && variant !== void 0 ? variant : defaultProps.variant;
  color = color !== null && color !== void 0 ? color : defaultProps.color;
  shadow = shadow !== null && shadow !== void 0 ? shadow : defaultProps.shadow;
  blurred =
    blurred !== null && blurred !== void 0 ? blurred : defaultProps.blurred;
  fullWidth =
    fullWidth !== null && fullWidth !== void 0
      ? fullWidth
      : defaultProps.fullWidth;
  className =
    className !== null && className !== void 0
      ? className
      : defaultProps.className;
  var _obj;
  var navbarRoot = (0, _classnames.default)(
    (0, _objectsToString.default)(base.navbar.initial),
    ((_obj = {}),
    _defineProperty(
      _obj,
      (0, _objectsToString.default)(base.navbar.shadow),
      shadow
    ),
    _defineProperty(
      _obj,
      (0, _objectsToString.default)(base.navbar.blurred),
      blurred && color === "white"
    ),
    _defineProperty(
      _obj,
      (0, _objectsToString.default)(base.navbar.fullWidth),
      fullWidth
    ),
    _obj)
  );
  var navbarVariant = (0, _classnames.default)(
    (0, _objectsToString.default)(
      variants[(0, _findMatch.default)(valid.variants, variant, "filled")][
        (0, _findMatch.default)(valid.colors, color, "white")
      ]
    )
  );
  var navbarClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)(navbarRoot, navbarVariant),
    className
  );
  return _react.default.createElement(
    "nav",
    _extends({}, rest, { ref: ref, className: navbarClasses }),
    children
  );
});
Navbar.propTypes = {
  variant: _propTypes.default.oneOf(_navbar.propTypesVariant),
  color: _propTypes.default.oneOf(_navbar.propTypesColor),
  shadow: _navbar.propTypesShadow,
  blurred: _navbar.propTypesBlurred,
  fullWidth: _navbar.propTypesFullWidth,
  className: _navbar.propTypesClassName,
  children: _navbar.propTypesChildren,
};
Navbar.displayName = "MaterialTailwind.Navbar";
var _default = Object.assign(Navbar, { MobileNav: _mobileNav.MobileNav });
