(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{531:function(t,n,e){"use strict";e(15),e(18),e(23),e(24);var r=e(3),c=(e(6),e(65),e(80),e(30),e(17),e(34),e(60),e(308),e(51),e(309),e(310),e(311),e(312),e(313),e(314),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(52),e(16),e(307),e(0)),o=e(90),l=e(1);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var j=["sm","md","lg","xl"],y=["start","end","center"];function O(t,n){return j.reduce((function(e,r){return e[t+Object(l.t)(r)]=n(),e}),{})}var v=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=O("align",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},C=O("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},P=O("alignContent",(function(){return{type:String,default:null,validator:S}})),m={align:Object.keys(w),justify:Object.keys(C),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function x(t,n,e){var r=k[t];if(null!=e){if(n){var c=n.replace(t,"");r+="-".concat(c)}return(r+="-".concat(e)).toLowerCase()}}var D=new Map;n.a=c.c.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},w),{},{justify:{type:String,default:null,validator:h}},C),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,n){var e=n.props,data=n.data,c=n.children,l="";for(var f in e)l+=String(e[f]);var d=D.get(l);if(!d){var j;for(j in d=[],m)m[j].forEach((function(t){var n=e[t],r=x(j,t,n);r&&d.push(r)}));d.push(Object(r.a)(Object(r.a)(Object(r.a)({"no-gutters":e.noGutters,"row--dense":e.dense},"align-".concat(e.align),e.align),"justify-".concat(e.justify),e.justify),"align-content-".concat(e.alignContent),e.alignContent)),D.set(l,d)}return t(e.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},555:function(t,n,e){"use strict";e.r(n);var r=e(527),c=e(531),o={name:"ContactPage"},l=e(22),component=Object(l.a)(o,(function(){var t=this._self._c;return t(c.a,{staticClass:"centering"},[t(r.a,{staticClass:"d-flex justify-center mt-8 pt-8",attrs:{width:"80%",height:"1000px"}},[t("h2",[this._v("Contact")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);