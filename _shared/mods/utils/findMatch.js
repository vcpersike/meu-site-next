"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _default;
  },
});
function findMatch(data, find, defaultValue) {
  var founded = data.findIndex(function (el) {
    return el === find;
  });
  return founded >= 0 ? find : defaultValue;
}
var _default = findMatch;
