import{k as Z,l as X,o as Y,r as ee,m as te,n as oe,p as ae,q as ne,s as se,t as le,d as G,v as ie,w as ce,x as re,_ as C,y as ue,b as D,g as U,u as N,i as H}from"./entry.O29JZMD-.js";import{d as B,c as j,a as q,o as de,I as me,f as O,a1 as c,a3 as x,a4 as n,a2 as f,aa as y,af as A,m as a,ag as R,X as h,_ as L,F as T,a6 as g,a5 as $,Z as I,Q as fe,R as pe,ab as _e,ac as ve,am as he}from"./swiper-vue.YRoIdmWM.js";import{_ as z}from"./Progress.NtKNAJNZ.js";import{C as ge}from"./ClassicTitle.-wj0Kg7p.js";async function W(e,o=Z()){const{path:s,matched:t}=o.resolve(e);if(!t.length||(o._routePreloaded||(o._routePreloaded=new Set),o._routePreloaded.has(s)))return;const l=o._preloadPromises=o._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>W(e,o));o._routePreloaded.add(s);const m=t.map(r=>{var i;return(i=r.components)==null?void 0:i.default}).filter(r=>typeof r=="function");for(const r of m){const i=Promise.resolve(r()).catch(()=>{}).finally(()=>l.splice(l.indexOf(i)));l.push(i)}await Promise.all(l)}const be=(...e)=>e.find(o=>o!==void 0),xe="noopener noreferrer";function we(e){const o=e.componentName||"NuxtLink",s=(t,l)=>{if(!t||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return t;if(typeof t=="string")return Q(t,e.trailingSlash);const m="path"in t?t.path:l(t).path;return{...t,name:void 0,path:Q(m,e.trailingSlash)}};return B({name:o,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:l}){const m=Z(),r=le(),i=j(()=>{const _=t.to||t.href||"";return s(_,m.resolve)}),u=j(()=>typeof i.value=="string"&&X(i.value,{acceptRelative:!0})),d=j(()=>t.external||t.target&&t.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||u.value),p=q(!1),v=q(null),b=_=>{var P;v.value=t.custom?(P=_==null?void 0:_.$el)==null?void 0:P.nextElementSibling:_==null?void 0:_.$el};if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!$e()){const P=G();let S,w=null;de(()=>{const F=ye();Y(()=>{S=ee(()=>{var V;(V=v==null?void 0:v.value)!=null&&V.tagName&&(w=F.observe(v.value,async()=>{w==null||w(),w=null;const k=typeof i.value=="string"?i.value:m.resolve(i.value).fullPath;await Promise.all([P.hooks.callHook("link:prefetch",k).catch(()=>{}),!d.value&&W(i.value,m).catch(()=>{})]),p.value=!0}))})})}),me(()=>{S&&te(S),w==null||w(),w=null})}return()=>{var F,V;if(!d.value){const k={ref:b,to:i.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(p.value&&(k.class=t.prefetchedClass||e.prefetchedClass),k.rel=t.rel),O(c("RouterLink"),k,l.default)}const _=typeof i.value=="object"?((F=m.resolve(i.value))==null?void 0:F.href)??null:i.value&&!t.external&&!u.value?s(oe(r.app.baseURL,i.value),m.resolve):i.value||null,P=t.target||null,S=t.noRel?null:be(t.rel,e.externalRelAttribute,_?xe:"")||null,w=()=>ie(_,{replace:t.replace});return t.custom?l.default?l.default({href:_,navigate:w,get route(){if(!_)return;const k=ae(_);return{path:k.pathname,fullPath:k.pathname,get query(){return ne(k.search)},hash:k.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:_}},rel:S,target:P,isExternal:d.value,isActive:!1,isExactActive:!1}):null:O("a",{ref:v,href:_,rel:S,target:P},(V=l.default)==null?void 0:V.call(l))}}})}const E=we(se);function Q(e,o){const s=o==="append"?ce:re;return X(e)&&!e.startsWith("http")?e:s(e,!0)}function ye(){const e=G();if(e._observer)return e._observer;let o=null;const s=new Map,t=(m,r)=>(o||(o=new IntersectionObserver(i=>{for(const u of i){const d=s.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&d&&d()}})),s.set(m,r),o.observe(m),()=>{s.delete(m),o.unobserve(m),s.size===0&&(o.disconnect(),o=null)});return e._observer={observe:t}}function $e(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const ke={props:{},data(){return{navItems:[{id:0,name:"expertise",path:"/expertise"},{id:1,name:"creations",path:"/creations"},{id:2,name:"nous",path:"/nous"},{id:3,name:"contact",path:"/contact"}]}}};function Ce(e,o,s,t,l,m){const r=c("v-divider"),i=c("v-card"),u=E,d=c("v-toolbar-items");return f(),x(d,{class:"d-flex mx-auto align-center"},{default:n(()=>[(f(!0),y(T,null,A(l.navItems,p=>(f(),y("div",{key:p.id,class:"d-flex mx-auto align-center"},[p.id>0?(f(),x(i,{key:0,elevation:"0",height:"20px",class:"my-2 divider-container"},{default:n(()=>[a(r,{class:"ma-0 mb-1",color:"#00000070",vertical:""})]),_:1})):R("",!0),a(u,{class:"nuxt-link backgrounded text-uppercase ma-2 text-no-wrap",to:e.localePath(p.path),exact:""},{default:n(()=>[h(L(e.$t(`navigation.${p.name}`)),1)]),_:2},1032,["to"])]))),128))]),_:1})}const Pe=C(ke,[["render",Ce],["__scopeId","data-v-07ecabae"]]),Ie=B({props:{mobile:{type:Boolean,default:!1}},data(){return{}}}),Le={class:"cursor"},Se={href:"https://www.instagram.com/lesbonnesmanieres_paris?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D",target:"_blank",rel:"noreferrer noopener"};function Re(e,o,s,t,l,m){const r=c("v-icon");return f(),y("div",Le,[g("a",Se,[a(r,{class:$(["ma-0 backgrounded",e.mobile?"mx-2":"mr-1"]),color:"text",style:{position:"relative"},size:e.mobile?40:25},{default:n(()=>[h("mdi-instagram")]),_:1},8,["class","size"])]),a(r,{class:$(["ma-0 backgrounded",e.mobile?"mx-2":"mr-1"]),color:"text",style:{position:"relative"},size:e.mobile?40:25},{default:n(()=>[h("mdi-linkedin")]),_:1},8,["class","size"])])}const M=C(Ie,[["render",Re],["__scopeId","data-v-42eaea1c"]]),Te={props:{mobile:{type:Boolean}},methods:{changeLocale(e){const o=ue();if(o(e))this.$router.push({path:o(e)});else{const s=D();this.$router.push({path:s("/",e)})}setTimeout(()=>{this.$i18n.finalizePendingLocaleChange()},150)}},setup(){return{locale:U().locale}}};function Ve(e,o,s,t,l,m){const r=c("v-divider"),i=c("v-card"),u=c("v-toolbar-items");return f(),x(u,{style:{position:"absolute",right:"15px"},class:"d-flex align-center Montserrat--text"},{default:n(()=>[g("p",{"min-width":"0",text:"",class:$(["px-1 ma-0 cursor location",[s.mobile?"mobile-location":"",t.locale=="fr"?"active-location":""]]),onClick:o[0]||(o[0]=I(d=>m.changeLocale("fr"),["stop"]))},"FR",2),a(i,{height:"20px",class:"divider-container"},{default:n(()=>[a(r,{class:"ma-0 mb-1",color:"#00000070",vertical:""})]),_:1}),g("p",{"min-width":"0",text:"",class:$(["px-1 ma-0 cursor location",[s.mobile?"mobile-location":"",t.locale=="en"?"active-location":""]]),onClick:o[1]||(o[1]=I(d=>m.changeLocale("en"),["stop"]))},"US",2)]),_:1})}const J=C(Te,[["render",Ve],["__scopeId","data-v-e226a5c4"]]),De={name:"DefaultLayout",components:{NavigationVue:Pe,SocialsIcons:M,ChooseLocation:J},props:{head:Boolean},data(){const e=N(),o=H(e),s=D();return{mobile:o,goHome:()=>{const l=this.$router.currentRoute.value.path;l=="/"||l=="/en"?window.scrollTo(0,0):this.$router.push({path:s("/")})}}}};function Ae(e,o,s,t,l,m){const r=c("v-img"),i=c("SocialsIcons"),u=c("v-toolbar-items"),d=c("NavigationVue"),p=c("ChooseLocation"),v=c("v-app-bar");return f(),x(v,{app:"",absolute:"",elevation:"0",height:"60",class:$(["mt-0 mb-2 px-4 sticky-header desktop",s.head?"backgrounded":"transparent"])},{default:n(()=>[a(u,{class:"centering",style:{position:"absolute",left:"10px"}},{default:n(()=>[a(r,{style:{cursor:"pointer"},class:$(["mr-3",s.head?"visible":"invisible"]),src:"/HeadLogo.png",width:"40px",height:"60px",onClick:I(l.goHome,["stop"])},null,8,["class","onClick"]),a(i,{class:"hideOn920"})]),_:1}),a(d),a(p)]),_:1},8,["class"])}const Ne=C(De,[["render",Ae],["__scopeId","data-v-7ebaf3d0"]]),He=B({components:{ClassicTitle:ge},name:"",setup(){const e=N();return{mobile:H(e)}}});function Be(e,o,s,t,l,m){const r=z,i=c("v-img"),u=c("ClassicTitle"),d=c("v-sheet");return f(),x(d,{class:"d-flex flex-column justify-center align-center ma-auto mb-5",width:e.mobile?"100%":"90%",height:e.mobile?"280px":"250px"},{default:n(()=>[a(i,{width:"100%",height:"100%",cover:"",src:"/pictures/Home.jpg"},{placeholder:n(()=>[a(r)]),_:1}),a(u,{style:{position:"absolute"},color:"white",class:$(e.mobile?"xsmall":"small"),text:["Let's share who we are","watch what we do."]},null,8,["class","text"])]),_:1},8,["width","height"])}const Fe=C(He,[["render",Be]]),qe=B({name:"FooterInfosDesktop",components:{SocialsIcons:M},setup(){const{t:e}=U();return{activities:[{name:e("footer.activities[0]")},{name:e("footer.activities[1]")},{name:e("footer.activities[2]")},{name:e("footer.activities[3]")},{name:e("footer.activities[4]")},{name:e("footer.activities[5]")},{name:e("footer.activities[6]")},{name:e("footer.activities[7]")},{name:e("footer.activities[8]")},{name:e("footer.activities[9]")}]}}}),Ee={href:"tel:+33684586764"},je={href:"mailto:nadia@lesbonnesmanieres.paris"};function Ue(e,o,s,t,l,m){const r=c("v-img"),i=E,u=c("v-sheet"),d=c("v-icon"),p=c("SocialsIcons");return f(),x(u,{class:"d-flex justify-space-around align-center flex-wrap text-black"},{default:n(()=>[a(u,{class:"d-flex justify-center flex-grow-1 align-center my-3"},{default:n(()=>[a(u,{class:"mr-5"},{default:n(()=>[a(i,{to:"/version"},{default:n(()=>[a(r,{src:"/HeadTextLogo.png",width:"120px"})]),_:1})]),_:1}),a(u,{class:"footer-contact mx-3"},{default:n(()=>[a(u,{class:"font-weight-bold"},{default:n(()=>[h("PARIS - CANNES - BARCELONE")]),_:1}),a(u,{class:"selectable-text"},{default:n(()=>[g("a",Ee,[a(d,{size:"17px"},{default:n(()=>[h("mdi-cellphone")]),_:1})]),h(" +33 (0)6 84 58 67 64 ")]),_:1}),a(u,{class:"selectable-text"},{default:n(()=>[g("a",je,[a(d,{size:"17px"},{default:n(()=>[h("mdi-email")]),_:1})]),h(" nadia@lesbonnesmanieres.paris ")]),_:1}),a(p)]),_:1})]),_:1}),a(u,{class:"d-flex justify-center flex-grow-1 align-center footer-activities my-3"},{default:n(()=>[a(u,{class:"mx-3 mr-5 d-flex flex-column"},{default:n(()=>[(f(),y(T,null,A(5,v=>g("span",null,"- "+L(e.$t("footer.activities["+(v-1)+"]")),1)),64))]),_:1}),a(u,{class:"mx-3 d-flex flex-column"},{default:n(()=>[(f(),y(T,null,A(5,v=>g("span",null,"- "+L(e.$t("footer.activities["+(v+4)+"]")),1)),64))]),_:1})]),_:1})]),_:1})}const ze=C(qe,[["render",Ue],["__scopeId","data-v-35fe1ab6"]]),Me=B({components:{SocialsIcons:M,FooterImage:Fe,FooterInfosDesktop:ze},name:"DefaultLayout",data(){const e=N(),o=H(e),{t:s}=U();D();const t=[{name:s("footer.activities[0]")},{name:s("footer.activities[1]")},{name:s("footer.activities[2]")},{name:s("footer.activities[3]")},{name:s("footer.activities[4]")},{name:s("footer.activities[5]")},{name:s("footer.activities[6]")},{name:s("footer.activities[7]")},{name:s("footer.activities[8]")},{name:s("footer.activities[9]")}];return{mobile:o,activities:t,scrollUp:()=>{const m=this.$router.currentRoute.value.path,r=D();m==r("/legals")&&window.scrollTo(0,0)}}}}),Oe={key:0,class:"mb-4 mt-0"},Qe={href:"tel:+33684586764"},Ze={href:"mailto:nadia@lesbonnesmanieres.paris"},Xe={class:"centering"},Ge={class:"mr-2"};function We(e,o,s,t,l,m){const r=c("FooterImage"),i=c("FooterInfosDesktop"),u=c("v-img"),d=c("v-sheet"),p=c("v-icon"),v=c("SocialsIcons"),b=E,_=c("v-footer");return f(),x(d,{class:"backgrounded mt-6"},{default:n(()=>[e.mobile?R("",!0):(f(),y("hr",Oe)),a(r),e.mobile?R("",!0):(f(),x(i,{key:1})),e.mobile?(f(),x(d,{key:2,class:$(["d-flex justify-center flex-grow-1 align-center",e.mobile?"flex-column":""])},{default:n(()=>[a(d,{class:"ma-5 mb-0"},{default:n(()=>[a(u,{src:"/HeadTextLogo.png",width:"160px"})]),_:1}),a(d,{class:"footer-infos mx-3 mb-9 d-flex flex-column align-center"},{default:n(()=>[a(d,{class:"font-weight-bold mb-5 footer-locations"},{default:n(()=>[h("PARIS - CANNES - BARCELONE")]),_:1}),g("a",Qe,[a(p,{class:"ma-2",color:"black"},{default:n(()=>[h("mdi-cellphone")]),_:1})]),a(d,{href:"tel:+33684586764",class:"mb-3 selectable-text"},{default:n(()=>[h("+33 (0)6 84 58 67 64")]),_:1}),g("a",Ze,[a(p,{class:"ma-2",color:"black"},{default:n(()=>[h("mdi-email")]),_:1})]),a(d,{class:"mb-7 selectable-text"},{default:n(()=>[h("nadia@lesbonnesmanieres.paris")]),_:1}),a(v,{mobile:""})]),_:1})]),_:1},8,["class"])):R("",!0),g("div",Xe,[e.mobile?(f(),x(d,{key:0,class:"mx-2 mb-3 d-flex flex-wrap footer-activities"},{default:n(()=>[(f(),y(T,null,A(10,P=>g("span",Ge," - "+L(e.$t("footer.activities["+(P-1)+"]")),1)),64))]),_:1})):R("",!0)]),a(_,{color:"secondary",class:$(["text-wrap text-white backgrounded Montserrat mentions-légales mt-3",e.mobile?"":"text-center justify-space-around"])},{default:n(()=>[g("div",null,[h(L(e.$t("footer.legal"))+" ",1),g("u",null,[a(b,{to:e.localePath("/legals"),onClick:I(e.scrollUp,["stop"])},{default:n(()=>[h(L(e.$t("footer.uLegal")),1)]),_:1},8,["to","onClick"])])])]),_:1},8,["class"])]),_:1})}const Je=C(Me,[["render",We],["__scopeId","data-v-90401e56"]]),Ke={name:"TopLogo",setup(e,{emit:o}){const s=N(),t=H(s);function l(m){o("visibleHead",!m)}return{mobile:t,onIntersect:l}}};function Ye(e,o,s,t,l,m){const r=z,i=c("v-img"),u=c("router-link"),d=c("v-card"),p=pe("intersect");return fe((f(),x(d,{elevation:"0",width:"100%",class:$(["pa-9 d-flex justify-center",t.mobile?"pb-2 pt-6 mb-3":""])},{default:n(()=>[a(u,{to:e.localePath("/")},{default:n(()=>[a(i,{width:t.mobile?"170":"200","aspect-ratio":"2.6","max-width":200,cover:"",src:"/TextLogo.png",to:"/"},{placeholder:n(()=>[a(r)]),_:1},8,["width"])]),_:1},8,["to"])]),_:1},8,["class"])),[[p,t.onIntersect]])}const et=C(Ke,[["render",Ye]]),tt={name:"MobileDrawer",props:{head:Boolean},data(){const e=q(!1),o=D();return{drawer:e,navItems:[{id:1,name:"expertise",path:"/expertise"},{id:2,name:"creations",path:"/creations"},{id:3,name:"nous",path:"/nous"},{id:4,name:"contact",path:"/contact"}],goHome:()=>{const l=this.$router.currentRoute.value.path;l=="/"||l=="/en"?window.scrollTo(0,0):this.$router.push({path:o("/")}),e.value=!1}}}},K=e=>(_e("data-v-f6b68b78"),e=e(),ve(),e),ot={class:"mt-13 ml-2 centering-column mb-15 mt-15"},at=K(()=>g("hr",{class:"ma-0 mb-1 ml-2"},null,-1)),nt={class:"ma-2 my-5 text-center"},st=K(()=>g("hr",{class:"ma-0 mb-1 ml-2"},null,-1));function lt(e,o,s,t,l,m){const r=c("v-icon"),i=c("v-btn"),u=z,d=c("v-img"),p=E,v=c("v-navigation-drawer");return f(),y("div",null,[a(i,{onClick:o[0]||(o[0]=I(b=>l.drawer=!l.drawer,["stop"])),class:$(["mobile drawer-btn ml-4 align-self-start",s.head?"elevated":""]),icon:"",width:"70px",height:"70px"},{default:n(()=>[a(r,{color:"black",size:"40px"},{default:n(()=>[h("mdi-menu")]),_:1})]),_:1},8,["class"]),a(v,{class:"drawer-mobile pt-15",app:"",fixed:"",location:"top",temporary:"",modelValue:l.drawer,"onUpdate:modelValue":o[4]||(o[4]=b=>l.drawer=b)},{default:n(()=>[a(i,{class:"ma-1 drawer-cross",icon:"",width:"60px",height:"60px",elevation:"0",onClick:o[1]||(o[1]=I(b=>l.drawer=!1,["stop"]))},{default:n(()=>[a(r,{color:"black",size:"50px"},{default:n(()=>[h("mdi-close")]),_:1})]),_:1}),g("div",ot,[a(p,{class:"mb-8",to:e.localePath("/"),onClick:o[2]||(o[2]=I(b=>l.drawer=!1,["stop"])),exact:""},{default:n(()=>[a(d,{style:{cursor:"pointer"},src:"/HeadLogo.png",width:"73px",height:"90px"},{placeholder:n(()=>[a(u)]),_:1})]),_:1},8,["to"]),at,(f(!0),y(T,null,A(l.navItems,b=>(f(),y("div",{key:b.name,class:"centering-column"},[g("div",nt,[a(p,{class:"nuxt-link text-uppercase text--text",to:e.localePath(b.path),onClick:o[3]||(o[3]=I(_=>l.drawer=!1,["stop"])),exact:""},{default:n(()=>[h(L(e.$t(`navigation.${b.name}`)),1)]),_:2},1032,["to"])]),st]))),128))])]),_:1},8,["modelValue"])])}const it=C(tt,[["render",lt],["__scopeId","data-v-f6b68b78"]]),ct={components:{HeaderVue:Ne,FooterVue:Je,TopLogo:et,MobileDrawer:it,ChooseLocation:J},name:"Default",setup(){const e=q(!0),o=l=>{e.value=l},s=N(),t=H(s);return{head:e,mobile:t,isHeadVisible:o}}};function rt(e,o,s,t,l,m){const r=c("MobileDrawer"),i=c("ChooseLocation"),u=c("TopLogo"),d=c("HeaderVue"),p=c("v-main"),v=c("FooterVue");return f(),y(T,null,[a(r,{head:t.head},null,8,["head"]),t.mobile?(f(),x(i,{key:0,class:"choose-location-absolute",mobile:!0})):R("",!0),a(u,{onVisibleHead:t.isHeadVisible},null,8,["onVisibleHead"]),a(d,{head:t.head},null,8,["head"]),a(p,null,{default:n(()=>[he(e.$slots,"default",{},void 0,!0)]),_:3}),a(v)],64)}const pt=C(ct,[["render",rt],["__scopeId","data-v-08e3b5fd"]]);export{pt as default};
