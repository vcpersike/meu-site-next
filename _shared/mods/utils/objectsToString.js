"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return objectsToString;
  },
});
var _objectsToArray = _interopRequireDefault(require("./objectsToArray"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function objectsToString(object) {
  return (0, _objectsToArray.default)(object).join(" ");
}
