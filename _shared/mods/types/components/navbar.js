"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{propTypesVariant:function(){return propTypesVariant},propTypesColor:function(){return propTypesColor},propTypesShadow:function(){return propTypesShadow},propTypesBlurred:function(){return propTypesBlurred},propTypesFullWidth:function(){return propTypesFullWidth},propTypesClassName:function(){return propTypesClassName},propTypesChildren:function(){return propTypesChildren},propTypesOpen:function(){return propTypesOpen},propTypesAnimate:function(){return propTypesAnimate}});var _propTypes=_interopRequireDefault(require("prop-types"));var _generic=require("../generic");function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var propTypesVariant=["filled","gradient"];var propTypesColor=["transparent","white"].concat(_toConsumableArray(_generic.propTypesColors));var propTypesShadow=_propTypes.default.bool;var propTypesBlurred=_propTypes.default.bool;var propTypesFullWidth=_propTypes.default.bool;var propTypesClassName=_propTypes.default.string;var propTypesChildren=_propTypes.default.node.isRequired;var propTypesOpen=_propTypes.default.bool.isRequired;var propTypesAnimate=_generic.propTypesAnimation;