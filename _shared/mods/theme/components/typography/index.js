"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{typography:function(){return typography},default:function(){return _default}});var _typographyColors=_interopRequireDefault(require("./typographyColors"));var _typography=require("../../../types/components/typography");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var typography={defaultProps:{variant:"paragraph",color:"inherit",textGradient:false,className:""},valid:{variants:_typography.propTypesVariant,colors:_typography.propTypesColor},styles:{variants:{h1:{display:"block",fontSmoothing:"antialiased",letterSpacing:"tracking-normal",fontFamily:"font-sans",fontSize:"text-5xl",fontWeight:"font-semibold",lineHeight:"leading-tight"},h2:{display:"block",fontSmoothing:"antialiased",letterSpacing:"tracking-normal",fontFamily:"font-sans",fontSize:"text-4xl",fontWeight:"font-semibold",lineHeight:"leading-[1.3]"},h3:{display:"block",fontSmoothing:"antialiased",letterSpacing:"tracking-normal",fontFamily:"font-sans",fontSize:"text-3xl",fontWeight:"font-semibold",lineHeight:"leading-snug"},h4:{display:"block",fontSmoothing:"antialiased",letterSpacing:"tracking-normal",fontFamily:"font-sans",fontSize:"text-2xl",fontWeight:"font-semibold",lineHeight:"leading-snug"},h5:{display:"block",fontSmoothing:"antialiased",letterSpacing:"tracking-normal",fontFamily:"font-sans",fontSize:"text-xl",fontWeight:"font-semibold",lineHeight:"leading-snug"},h6:{display:"block",fontSmoothing:"antialiased",letterSpacing:"tracking-normal",fontFamily:"font-sans",fontSize:"text-base",fontWeight:"font-semibold",lineHeight:"leading-relaxed"},lead:{display:"block",fontSmoothing:"antialiased",fontFamily:"font-sans",fontSize:"text-xl",fontWeight:"font-normal",lineHeight:"leading-relaxed"},paragraph:{display:"block",fontSmoothing:"antialiased",fontFamily:"font-sans",fontSize:"text-base",fontWeight:"font-light",lineHeight:"leading-relaxed"},small:{display:"block",fontSmoothing:"antialiased",fontFamily:"font-sans",fontSize:"text-sm",fontWeight:"font-light",lineHeight:"leading-normal"}},textGradient:{bgClip:"bg-clip-text",color:"text-transparent"},colors:_typographyColors.default}};var _default=typography;