"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});var _cardFilled=_interopRequireDefault(require("./cardFilled"));var _cardGradient=_interopRequireDefault(require("./cardGradient"));var _card=require("../../../types/components/card");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var cardHeader={defaultProps:{variant:"filled",color:"white",shadow:true,floated:true,className:""},valid:{variants:_card.propTypesVariant,colors:_card.propTypesColor},styles:{base:{initial:{position:"relative",backgroundClip:"bg-clip-border",mt:"mt-4",mx:"mx-4",borderRadius:"rounded-xl",overflow:"overflow-hidden"},shadow:{boxShadow:"shadow-lg"},floated:{mt:"-mt-6"}},variants:{filled:_cardFilled.default,gradient:_cardGradient.default}}};var _default=cardHeader;