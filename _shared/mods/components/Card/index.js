"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  Card: function () {
    return Card;
  },
  CardHeader: function () {
    return _cardHeader.CardHeader;
  },
  CardBody: function () {
    return _cardBody.CardBody;
  },
  CardFooter: function () {
    return _cardFooter.CardFooter;
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
var _cardHeader = require("./CardHeader");
var _cardBody = require("./CardBody");
var _cardFooter = require("./CardFooter");
var _card = require("../../types/components/card");
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
var Card = _react.default.forwardRef(function (_param, ref) {
  var variant = _param.variant,
    color = _param.color,
    shadow = _param.shadow,
    className = _param.className,
    children = _param.children,
    rest = _objectWithoutProperties(_param, [
      "variant",
      "color",
      "shadow",
      "className",
      "children",
    ]);
  var card = (0, _theme.useTheme)().card;
  var defaultProps = card.defaultProps,
    styles = card.styles,
    valid = card.valid;
  var base = styles.base,
    variants = styles.variants;
  variant =
    variant !== null && variant !== void 0 ? variant : defaultProps.variant;
  color = color !== null && color !== void 0 ? color : defaultProps.color;
  shadow = shadow !== null && shadow !== void 0 ? shadow : defaultProps.shadow;
  className =
    className !== null && className !== void 0
      ? className
      : defaultProps.className;
  var cardRoot = (0, _objectsToString.default)(base.initial);
  var cardVariant = (0, _objectsToString.default)(
    variants[(0, _findMatch.default)(valid.variants, variant, "filled")][
      (0, _findMatch.default)(valid.colors, color, "white")
    ]
  );
  var classes = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)(
      cardRoot,
      cardVariant,
      _defineProperty({}, (0, _objectsToString.default)(base.shadow), shadow)
    ),
    className
  );
  return _react.default.createElement(
    "div",
    _extends({}, rest, { ref: ref, className: classes }),
    children
  );
});
Card.propTypes = {
  variant: _propTypes.default.oneOf(_card.propTypesVariant),
  color: _propTypes.default.oneOf(_card.propTypesColor),
  shadow: _card.propTypesShadow,
  className: _card.propTypesClassName,
  children: _card.propTypesChildren,
};
Card.displayName = "MaterialTailwind.Card";
var _default = Object.assign(Card, {
  Header: _cardHeader.CardHeader,
  Body: _cardBody.CardBody,
  Footer: _cardFooter.CardFooter,
});
