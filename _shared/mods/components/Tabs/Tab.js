"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{Tab:function(){return Tab},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _framerMotion=require("framer-motion");var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _tabsContext=require("./TabsContext");var _tabs=require("../../types/components/tabs");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var Tab=_react.default.forwardRef(function(_param,ref){var value=_param.value,className=_param.className,activeClassName=_param.activeClassName,disabled=_param.disabled,children=_param.children,rest=_objectWithoutProperties(_param,["value","className","activeClassName","disabled","children"]);var _useTheme=(0,_theme.useTheme)(),tabTheme=_useTheme.tab;var defaultProps=tabTheme.defaultProps,base=tabTheme.styles.base;var _useTabs=(0,_tabsContext.useTabs)(),state=_useTabs.state,dispatch=_useTabs.dispatch;var id=state.id,active=state.active,indicatorProps=state.indicatorProps;className=className!==null&&className!==void 0?className:defaultProps.className;activeClassName=activeClassName!==null&&activeClassName!==void 0?activeClassName:defaultProps.activeClassName;disabled=disabled!==null&&disabled!==void 0?disabled:defaultProps.disabled;var _obj;var tabClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.tab.initial),(_obj={},_defineProperty(_obj,(0,_objectsToString.default)(base.tab.disabled),disabled),_defineProperty(_obj,activeClassName,active===value),_obj)),className);var _indicatorProps_className;var indicatorClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.indicator)),(_indicatorProps_className=indicatorProps===null||indicatorProps===void 0?void 0:indicatorProps.className)!==null&&_indicatorProps_className!==void 0?_indicatorProps_className:"");return _react.default.createElement("li",_extends({},rest,{ref:ref,role:"tab",className:tabClasses,onClick:function(e){var onClick=rest===null||rest===void 0?void 0:rest.onClick;if(typeof onClick==="function"){(0,_tabsContext.setActive)(dispatch,value);(0,_tabsContext.setIsInitial)(dispatch,false);onClick(e)}(0,_tabsContext.setIsInitial)(dispatch,false);(0,_tabsContext.setActive)(dispatch,value)},"data-value":value}),_react.default.createElement("div",{className:"z-20 text-inherit"},children),active===value&&_react.default.createElement(_framerMotion.motion.div,_extends({},indicatorProps,{transition:{duration:.5},className:indicatorClasses,layoutId:id})))});Tab.propTypes={value:_tabs.propTypesValue,className:_tabs.propTypesClassName,disabled:_tabs.propTypesDisabled,children:_tabs.propTypesChildren};Tab.displayName="MaterialTailwind.Tab";var _default=Tab;