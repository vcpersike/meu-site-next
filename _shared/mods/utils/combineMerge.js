"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return combineMerge;
  },
});
var _deepmerge = _interopRequireDefault(require("deepmerge"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function combineMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function (item, index) {
    if (typeof destination[index] === "undefined") {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = (0, _deepmerge.default)(
        target[index],
        item,
        options
      );
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });
  return destination;
}
