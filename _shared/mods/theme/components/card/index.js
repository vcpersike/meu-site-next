"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});var _cardFilled=_interopRequireDefault(require("./cardFilled"));var _cardGradient=_interopRequireDefault(require("./cardGradient"));var _card=require("../../../types/components/card");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var card={defaultProps:{variant:"filled",color:"white",shadow:true,className:""},valid:{variants:_card.propTypesVariant,colors:_card.propTypesColor},styles:{base:{initial:{position:"relative",display:"flex",flexDirection:"flex-col",backgroundClip:"bg-clip-border",borderRadius:"rounded-xl"},shadow:{boxShadow:"shadow-md"}},variants:{filled:_cardFilled.default,gradient:_cardGradient.default}}};var _default=card;