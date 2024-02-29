(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95e1c142"],{"17b3":function(t,i,e){},"6c01":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("primary-content-body",[e("page-title",[t._v(t._s(t._f("capitalize")(t.$t("notifications"))))]),t.loading?e("div",[e("loading-circle",{attrs:{small:""}})],1):t.notifications&&!t.notifications.length?e("div",{staticClass:"text-center"},[t._v(" -- "+t._s(t._f("capitalize")(t.$t("no notification")))+" -- ")]):e("div",[t._l(t.activeNotifications,(function(t){return e("div",{key:t.id},["link_request"==t.type?e("link-notification",{attrs:{notification:t}}):e("notification",{attrs:{notification:t}})],1)})),e("v-pagination",{staticClass:"mt-3",attrs:{length:t.pagesCount},model:{value:t.page,callback:function(i){t.page=i},expression:"page"}})],2)],1)},n=[],s=(e("fb6a"),e("a6f4")),r=e("b7aa"),l=e("5cf3"),o=e("8b15"),u=Object(s["c"])({name:"Notifications",components:{LinkNotification:l["a"],Notification:o["a"]},setup:function(){var t=Object(r["a"])("notification/GET_NOTIFICATIONS"),i=t.entity,e=t.loading,a=Object(s["f"])(1),n=5,l=Object(s["a"])((function(){return i.value?Math.ceil(i.value.length/n):0})),o=Object(s["a"])((function(){if(i.value)return i.value.slice(a.value*n-n,a.value*n)}));return{notifications:i,loading:e,activeNotifications:o,pagesCount:l,page:a}}}),c=u,h=e("2877"),v=e("6544"),f=e.n(v),g=(e("99af"),e("d81d"),e("a9e3"),e("d3b7"),e("25f0"),e("2909")),p=e("5530"),b=(e("17b3"),e("9d26")),d=e("dc22"),m=e("a9ad"),y=e("de2c"),$=e("7560"),_=e("58df"),x=Object(_["a"])(m["a"],Object(y["a"])({onVisible:["init"]}),$["a"]).extend({name:"v-pagination",directives:{Resize:d["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(p["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var i=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=i)return this.range(1,this.length);var e=i%2===0?1:0,a=Math.floor(i/2),n=this.length-a+1+e;if(this.value>a&&this.value<n){var s=this.value-a+2,r=this.value+a-2-e;return[1,"..."].concat(Object(g["a"])(this.range(s,r)),["...",this.length])}if(this.value===a){var l=this.value+a-1-e;return[].concat(Object(g["a"])(this.range(1,l)),["...",this.length])}if(this.value===n){var o=this.value-a+1;return[1,"..."].concat(Object(g["a"])(this.range(o,this.length)))}return[].concat(Object(g["a"])(this.range(1,a)),["..."],Object(g["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,i){var e=[];t=t>0?t:1;for(var a=t;a<=i;a++)e.push(a);return e},genIcon:function(t,i,e,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":e},attrs:{type:"button","aria-label":n},on:e?{}:{click:a}},[t(b["a"],[i])])])},genItem:function(t,i){var e=this,a=i===this.value&&(this.color||"primary"),n=i===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var i=this;return this.items.map((function(e,a){return t("li",{key:a},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):i.genItem(t,e)])}))},genList:function(t,i){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},i)}},render:function(t){var i=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,i)])}}),L=Object(h["a"])(c,a,n,!1,null,null,null);i["default"]=L.exports;f()(L,{VPagination:x})}}]);
//# sourceMappingURL=chunk-95e1c142.a35c54b9.js.map