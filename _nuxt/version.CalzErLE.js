import{_ as t}from"./entry.D4wB6m_k.js";import{a0 as c,a8 as e,_ as s,a1 as l}from"./swiper-vue.DTb1iFf6.js";const d={name:"Version",props:{},setup(){const n=navigator.userAgent;var r=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&n&&n.indexOf("CriOS")==-1&&n.indexOf("FxiOS")==-1;const a=n.indexOf("ersion"),o=n.substring(a+7,a+9),i=r&&parseInt(o)<16;return{agent:n,isSafari:r,version:o,isTooOld:i}}},p={class:"centering-column pa-10"};function f(n,r,a,o,i,_){return l(),c("div",p,[e("h3",null,"Safari : "+s(o.isSafari?"yes":"no"),1),e("h3",null,"Version : "+s(o.version),1),e("h3",null,"Too old : "+s(o.isTooOld?"yes":"no"),1),e("span",null,s(o.agent),1)])}const u=t(d,[["render",f]]);export{u as default};
