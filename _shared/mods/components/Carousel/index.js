"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, { enumerable: true, get: all[name] });
}
_export(exports, {
  Carousel: function () {
    return Carousel;
  },
  default: function () {
    return _default;
  },
});
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _react1 = require("@floating-ui/react");
var _classnames = _interopRequireDefault(require("classnames"));
var _tailwindMerge = require("tailwind-merge");
var _objectsToString = _interopRequireDefault(
  require("../../utils/objectsToString")
);
var _theme = require("../../context/theme");
var _carousel = require("../../types/components/carousel");
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
var Carousel = _react.default.forwardRef(function (_param, ref) {
  var children = _param.children,
    prevArrow = _param.prevArrow,
    nextArrow = _param.nextArrow,
    navigation = _param.navigation,
    autoplay = _param.autoplay,
    autoplayDelay = _param.autoplayDelay,
    transition = _param.transition,
    loop = _param.loop,
    className = _param.className,
    slideRef = _param.slideRef,
    rest = _objectWithoutProperties(_param, [
      "children",
      "prevArrow",
      "nextArrow",
      "navigation",
      "autoplay",
      "autoplayDelay",
      "transition",
      "loop",
      "className",
      "slideRef",
    ]);
  var carousel = (0, _theme.useTheme)().carousel;
  var defaultProps = carousel.defaultProps,
    base = carousel.styles.base;
  var x = (0, _framerMotion.useMotionValue)(0);
  var containerRef = _react.default.useRef(null);
  var _React_useState = _slicedToArray(_react.default.useState(0), 2),
    index = _React_useState[0],
    setIndex = _React_useState[1];
  var childrens = _react.default.Children.toArray(children);
  className =
    className !== null && className !== void 0
      ? className
      : defaultProps.className;
  prevArrow =
    prevArrow !== null && prevArrow !== void 0
      ? prevArrow
      : defaultProps.prevArrow;
  nextArrow =
    nextArrow !== null && nextArrow !== void 0
      ? nextArrow
      : defaultProps.nextArrow;
  navigation =
    navigation !== null && navigation !== void 0
      ? navigation
      : defaultProps.navigation;
  autoplay =
    autoplay !== null && autoplay !== void 0 ? autoplay : defaultProps.autoplay;
  autoplayDelay =
    autoplayDelay !== null && autoplayDelay !== void 0
      ? autoplayDelay
      : defaultProps.autoplayDelay;
  transition =
    transition !== null && transition !== void 0
      ? transition
      : defaultProps.transition;
  loop = loop !== null && loop !== void 0 ? loop : defaultProps.loop;
  var carouselClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base.carousel)),
    className
  );
  var slideClasses = (0, _tailwindMerge.twMerge)(
    (0, _classnames.default)((0, _objectsToString.default)(base.slide))
  );
  var calculateNewX = _react.default.useCallback(
    function () {
      var _containerRef_current;
      return (
        -index *
        (((_containerRef_current = containerRef.current) === null ||
        _containerRef_current === void 0
          ? void 0
          : _containerRef_current.clientWidth) || 0)
      );
    },
    [index]
  );
  var handleNext = _react.default.useCallback(
    function () {
      var idx = loop ? 0 : index;
      setIndex(index + 1 === childrens.length ? idx : index + 1);
    },
    [index, loop, childrens.length]
  );
  var handlePrev = function () {
    var idx = loop ? childrens.length - 1 : 0;
    setIndex(index - 1 < 0 ? idx : index - 1);
  };
  _react.default.useEffect(
    function () {
      var controls = (0, _framerMotion.animate)(x, calculateNewX(), transition);
      return controls.stop;
    },
    [calculateNewX, index, x, transition]
  );
  _react.default.useEffect(
    function () {
      window.addEventListener("resize", function () {
        (0, _framerMotion.animate)(x, calculateNewX(), transition);
      });
    },
    [calculateNewX, transition, x]
  );
  _react.default.useEffect(
    function () {
      if (!autoplay) {
        return;
      }
      var timer = setInterval(function () {
        return handleNext();
      }, autoplayDelay);
      return function () {
        return clearInterval(timer);
      };
    },
    [autoplay, handleNext, autoplayDelay]
  );
  var mergedRefs = (0, _react1.useMergeRefs)([containerRef, ref]);
  return _react.default.createElement(
    "div",
    _extends({}, rest, { ref: mergedRefs, className: carouselClasses }),
    childrens.map(function (child, i) {
      return _react.default.createElement(
        _framerMotion.LazyMotion,
        { key: i, features: _framerMotion.domAnimation },
        _react.default.createElement(
          _framerMotion.m.div,
          {
            ref: slideRef,
            className: slideClasses,
            style: {
              x: x,
              left: "".concat(i * 100, "%"),
              right: "".concat(i * 100, "%"),
            },
          },
          child
        )
      );
    }),
    prevArrow &&
      prevArrow({
        loop: loop,
        handlePrev: handlePrev,
        activeIndex: index,
        firstIndex: index === 0,
      }),
    nextArrow &&
      nextArrow({
        loop: loop,
        handleNext: handleNext,
        activeIndex: index,
        lastIndex: index === childrens.length - 1,
      }),
    navigation &&
      navigation({
        setActiveIndex: setIndex,
        activeIndex: index,
        length: childrens.length,
      })
  );
});
Carousel.propTypes = {
  className: _carousel.propTypesClassName,
  children: _carousel.propTypesChildren,
  nextArrow: _carousel.propTypesNextArrow,
  prevArrow: _carousel.propTypesPrevArrow,
  navigation: _carousel.propTypesNavigation,
  autoplay: _carousel.propTypesAutoplay,
  autoplayDelay: _carousel.propTypesAutoplayDelay,
  transition: _carousel.propTypesTransition,
  loop: _carousel.propTypesLoop,
  slideRef: _carousel.propTypesSlideRef,
};
Carousel.displayName = "MaterialTailwind.Carousel";
var _default = Carousel;
