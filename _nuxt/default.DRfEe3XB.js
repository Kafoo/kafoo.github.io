function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{k as W,l as J,o as ae,r as ne,m as se,n as le,p as ie,q as ce,s as re,t as de,d as K,v as ue,w as me,x as pe,_ as $,y as fe,z as _e,b as B,g as z,u as q,i as F,M as he}from"./entry.B7Z9Lovp.js";import{j as H,k as R,a as N,x as ve,o as ge,l as Z,a4 as r,a5 as x,a6 as i,a1 as _,a0 as w,ae as T,z as a,af as D,a8 as m,_ as P,X as g,F as V,b as be,an as Y,ao as ee,a7 as y,Z as I,Q as xe,R as we,ai as ye,aj as $e,ap as ke}from"./swiper-vue.DTb1iFf6.js";import{_ as U}from"./Progress.d9snikel.js";async function te(e,o=W()){const{path:n,matched:t}=o.resolve(e);if(!t.length||(o._routePreloaded||(o._routePreloaded=new Set),o._routePreloaded.has(n)))return;const l=o._preloadPromises=o._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>te(e,o));o._routePreloaded.add(n);const d=t.map(c=>{var s;return(s=c.components)==null?void 0:s.default}).filter(c=>typeof c=="function");for(const c of d){const s=Promise.resolve(c()).catch(()=>{}).finally(()=>l.splice(l.indexOf(s)));l.push(s)}await Promise.all(l)}const Ce=(...e)=>e.find(o=>o!==void 0);function Ie(e){const o=e.componentName||"NuxtLink";function n(t,l){if(!t||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return t;if(typeof t=="string")return G(t,e.trailingSlash);const d="path"in t&&t.path!==void 0?t.path:l(t).path,c={...t,path:G(d,e.trailingSlash)};return"name"in c&&delete c.name,c}return H({name:o,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:l}){const d=W(),c=de(),s=R(()=>{const h=t.to||t.href||"";return n(h,d.resolve)}),p=R(()=>typeof s.value=="string"&&J(s.value,{acceptRelative:!0})),u=R(()=>t.target&&t.target!=="_self"),f=R(()=>t.external||u.value?!0:typeof s.value=="object"?!1:s.value===""||p.value),k=N(!1),v=N(null),M=h=>{var S;v.value=t.custom?(S=h==null?void 0:h.$el)==null?void 0:S.nextElementSibling:h==null?void 0:h.$el};if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!Se()){const S=K();let L,b=null;ve(()=>{const j=Pe();ae(()=>{L=ne(()=>{var C;(C=v==null?void 0:v.value)!=null&&C.tagName&&(b=j.observe(v.value,async()=>{b==null||b(),b=null;const A=typeof s.value=="string"?s.value:d.resolve(s.value).fullPath;await Promise.all([S.hooks.callHook("link:prefetch",A).catch(()=>{}),!f.value&&te(s.value,d).catch(()=>{})]),k.value=!0}))})})}),ge(()=>{L&&se(L),b==null||b(),b=null})}return()=>{var b,j;if(!f.value){const C={ref:M,to:s.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(k.value&&(C.class=t.prefetchedClass||e.prefetchedClass),C.rel=t.rel||void 0),Z(r("RouterLink"),C,l.default)}const h=typeof s.value=="object"?((b=d.resolve(s.value))==null?void 0:b.href)??null:s.value&&!t.external&&!p.value?n(le(c.app.baseURL,s.value),d.resolve):s.value||null,S=t.target||null,L=Ce(t.noRel?"":t.rel,e.externalRelAttribute,p.value||u.value?"noopener noreferrer":"")||null;if(t.custom){if(!l.default)return null;const C=()=>ue(h,{replace:t.replace,external:t.external});return l.default({href:h,navigate:C,get route(){if(!h)return;const A=ie(h);return{path:A.pathname,fullPath:A.pathname,get query(){return ce(A.search)},hash:A.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:h}},rel:L,target:S,isExternal:f.value,isActive:!1,isExactActive:!1})}return Z("a",{ref:v,href:h,rel:L,target:S},(j=l.default)==null?void 0:j.call(l))}}})}const O=Ie(re);function G(e,o){const n=o==="append"?me:pe;return J(e)&&!e.startsWith("http")?e:n(e,!0)}function Pe(){const e=K();if(e._observer)return e._observer;let o=null;const n=new Map,t=(d,c)=>(o||(o=new IntersectionObserver(s=>{for(const p of s){const u=n.get(p.target);(p.isIntersecting||p.intersectionRatio>0)&&u&&u()}})),n.set(d,c),o.observe(d),()=>{n.delete(d),o.unobserve(d),n.size===0&&(o.disconnect(),o=null)});return e._observer={observe:t}}function Se(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const Le={props:{},data(){return{navItems:[{id:0,name:"expertise",path:"/expertise"},{id:1,name:"creations",path:"/creations"},{id:2,name:"nous",path:"/nous"},{id:3,name:"contact",path:"/contact"}]}}},Ae={style:{position:"relative"},class:"centering"},De={class:"invisible-item text-uppercase ma-2 text-no-wrap"},Ve={class:"item-container centering"};function He(e,o,n,t,l,d){const c=r("v-divider"),s=r("v-card"),p=O,u=r("v-toolbar-items");return _(),x(u,{class:"d-flex mx-auto align-center"},{default:i(()=>[(_(!0),w(V,null,T(l.navItems,f=>(_(),w("div",{key:f.id,class:"d-flex mx-auto align-center"},[f.id>0?(_(),x(s,{key:0,elevation:"0",height:"20px",class:"my-2 divider-container"},{default:i(()=>[a(c,{class:"ma-0 mb-1",color:"#00000070",vertical:""})]),_:1})):D("",!0),m("div",Ae,[m("span",De,P(e.$t(`navigation.${f.name}`)),1),m("div",Ve,[a(p,{class:"nuxt-link backgrounded text-uppercase text-no-wrap",to:e.localePath(f.path),exact:""},{default:i(()=>[g(P(e.$t(`navigation.${f.name}`)),1)]),_:2},1032,["to"])])])]))),128))]),_:1})}const Re=$(Le,[["render",He],["__scopeId","data-v-af9db106"]]),E=new Map;async function Be(e){if(!e)return"";if(E.has(e))return E.get(e);const{[e]:o}=await fe(()=>import("./mdi.CYzTwnk_.js"),__vite__mapDeps([]),import.meta.url);return E.set(e,o),o}const Ne=["d"],Te=H({__name:"MdiIcon",props:{width:{default:"1em"},height:{default:"1em"},flipX:{type:Boolean,default:!1},flipY:{type:Boolean,default:!1},icon:{}},async setup(e){let o,n;const t=e,l=N(""),d=R(()=>({"--flip-x":t.flipX?"-1":"1","--flip-y":t.flipY?"-1":"1",width:"1em",height:"auto"}));async function c(){l.value=await Be(t.icon)}return be(async()=>t.icon,([o,n]=Y(()=>c),o=await o,n(),o)),[o,n]=Y(()=>c()),await o,n(),(s,p)=>(_(),w("svg",{viewbox:"0 0 24 24",style:ee(d.value)},[m("path",{d:l.value},null,8,Ne)],4))}}),qe=$(Te,[["__scopeId","data-v-e40a9964"]]),Fe=H({props:{mobile:{type:Boolean,default:!1}},data(){return{}}}),Me={href:"https://www.instagram.com/lesbonnesmanieres_paris?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D",target:"_blank",rel:"noreferrer noopener"},je={href:"https://www.linkedin.com/company/les-bonnes-mani%C3%A8res-paris/",target:"_blank",rel:"noreferrer noopener"};function Ee(e,o,n,t,l,d){const c=qe;return _(),w("div",{class:"cursor",style:ee(e.mobile?"height:40px;":"height:25px;")},[m("a",Me,[a(c,{icon:"mdiInstagram",color:"#3A3D51",style:{height:"25px",width:"25px"},class:y(["social-icon backgrounded",e.mobile?"mx-4":"mr-1"])},null,8,["class"])]),m("a",je,[a(c,{icon:"mdiLinkedin",color:"#3A3D51",style:{height:"25px",width:"25px"},class:y(["social-icon backgrounded",e.mobile?"mx-4":"mr-1"])},null,8,["class"])])],4)}const Q=$(Fe,[["render",Ee],["__scopeId","data-v-83132e9c"]]),ze={props:{mobile:{type:Boolean}},methods:{changeLocale(e){const o=_e();if(o(e))this.$router.push({path:o(e)});else{const n=B();this.$router.push({path:n("/",e)})}setTimeout(()=>{this.$i18n.finalizePendingLocaleChange()},150)}},setup(){return{locale:z().locale}}};function Ue(e,o,n,t,l,d){const c=r("v-divider"),s=r("v-card"),p=r("v-toolbar-items");return _(),x(p,{class:"choose-location d-flex align-center Montserrat--text"},{default:i(()=>[m("p",{"min-width":"0",text:"",class:y(["px-1 ma-0 cursor location",[n.mobile?"mobile-location":"",t.locale=="fr"?"active-location":""]]),onClick:o[0]||(o[0]=I(u=>d.changeLocale("fr"),["stop"]))},"FR",2),a(s,{height:"20px",class:"divider-container"},{default:i(()=>[a(c,{class:"ma-0 mb-1",color:"#00000070",vertical:""})]),_:1}),m("p",{"min-width":"0",text:"",class:y(["px-1 ma-0 cursor location",[n.mobile?"mobile-location":"",t.locale=="en"?"active-location":""]]),onClick:o[1]||(o[1]=I(u=>d.changeLocale("en"),["stop"]))},"US",2)]),_:1})}const oe=$(ze,[["render",Ue],["__scopeId","data-v-154a8dfa"]]),Oe={name:"DefaultLayout",components:{NavigationVue:Re,SocialsIcons:Q,ChooseLocation:oe},props:{head:Boolean},data(){const e=q(),o=F(e),n=B();return{mobile:o,goHome:()=>{const l=this.$router.currentRoute.value.path;l=="/"||l=="/en"?window.scrollTo(0,0):this.$router.push({path:n("/")})}}}};function Qe(e,o,n,t,l,d){const c=r("v-img"),s=r("SocialsIcons"),p=r("v-toolbar-items"),u=r("NavigationVue"),f=r("ChooseLocation"),k=r("v-app-bar");return _(),x(k,{app:"",absolute:"",elevation:"0",height:"60",class:y(["mt-0 mb-2 px-4 sticky-header desktop",n.head?"backgrounded":"transparent"])},{default:i(()=>[a(p,{class:"centering",style:{position:"absolute",left:"10px"}},{default:i(()=>[a(c,{style:{cursor:"pointer"},class:y(["mr-3",n.head?"visible":"invisible"]),src:"/HeadLogo.png",width:"40px",height:"60px",onClick:I(l.goHome,["stop"]),alt:"headlogo"},null,8,["class","onClick"]),a(s,{class:"header-socials"})]),_:1}),a(u),a(f)]),_:1},8,["class"])}const Xe=$(Oe,[["render",Qe],["__scopeId","data-v-2ef3620b"]]),Ze=H({name:"",setup(){const e=q();return{mobile:F(e)}}}),Ye=m("span",null,"Let's share who we are",-1),Ge=m("br",null,null,-1),We=m("span",null,"watch what we do.",-1),Je=[Ye,Ge,We];function Ke(e,o,n,t,l,d){const c=U,s=r("v-img"),p=r("v-sheet");return _(),x(p,{class:"d-flex flex-column justify-center align-center ma-auto mb-5",width:e.mobile?"100%":"90%",height:e.mobile?"280px":"250px"},{default:i(()=>[a(s,{width:"100%",height:"100%",cover:"",src:"/pictures/Home.jpg",alt:"footer"},{placeholder:i(()=>[a(c)]),_:1}),m("h3",{style:{position:"absolute"},class:y(["text-white line-spaced",e.mobile?"xsmall":"small"])},Je,2)]),_:1},8,["width","height"])}const et=$(Ze,[["render",Ke]]),tt=H({name:"FooterInfosDesktop",components:{SocialsIcons:Q},setup(){const{t:e}=z();return{activities:[{name:e("footer.activities[0]")},{name:e("footer.activities[1]")},{name:e("footer.activities[2]")},{name:e("footer.activities[3]")},{name:e("footer.activities[4]")},{name:e("footer.activities[5]")},{name:e("footer.activities[6]")},{name:e("footer.activities[7]")},{name:e("footer.activities[8]")},{name:e("footer.activities[9]")}]}}}),ot={href:"tel:+33684586764"},at={href:"mailto:nadia@lesbonnesmanieres.paris"};function nt(e,o,n,t,l,d){const c=r("v-img"),s=r("v-sheet"),p=r("v-icon"),u=r("SocialsIcons");return _(),x(s,{class:"d-flex justify-space-around align-center flex-wrap text-black"},{default:i(()=>[a(s,{class:"d-flex justify-center flex-grow-1 align-center my-3"},{default:i(()=>[a(s,{class:"mr-5"},{default:i(()=>[a(c,{src:"/HeadTextLogo.png",width:"120px",height:"120px",alt:"headlogo"})]),_:1}),a(s,{class:"footer-contact mx-3"},{default:i(()=>[a(s,{class:"font-weight-bold"},{default:i(()=>[g("PARIS - CANNES - BARCELONE")]),_:1}),a(s,{class:"selectable-text"},{default:i(()=>[m("a",ot,[a(p,{size:"17px"},{default:i(()=>[g("mdi-cellphone")]),_:1})]),g(" +33 (0)6 84 58 67 64 ")]),_:1}),a(s,{class:"selectable-text"},{default:i(()=>[m("a",at,[a(p,{size:"17px"},{default:i(()=>[g("mdi-email")]),_:1})]),g(" nadia@lesbonnesmanieres.paris ")]),_:1}),a(u)]),_:1})]),_:1}),a(s,{class:"d-flex justify-center flex-grow-1 align-center footer-activities my-3"},{default:i(()=>[a(s,{class:"mx-3 mr-5 d-flex flex-column"},{default:i(()=>[(_(),w(V,null,T(5,f=>m("span",null,"- "+P(e.$t("footer.activities["+(f-1)+"]")),1)),64))]),_:1}),a(s,{class:"mx-3 d-flex flex-column"},{default:i(()=>[(_(),w(V,null,T(5,f=>m("span",null,"- "+P(e.$t("footer.activities["+(f+4)+"]")),1)),64))]),_:1})]),_:1})]),_:1})}const st=$(tt,[["render",nt],["__scopeId","data-v-10660134"]]),lt=H({components:{SocialsIcons:Q,FooterImage:et,FooterInfosDesktop:st},name:"DefaultLayout",data(){const e=q(),o=F(e),{t:n}=z();B();const t=[{name:n("footer.activities[0]")},{name:n("footer.activities[1]")},{name:n("footer.activities[2]")},{name:n("footer.activities[3]")},{name:n("footer.activities[4]")},{name:n("footer.activities[5]")},{name:n("footer.activities[6]")},{name:n("footer.activities[7]")},{name:n("footer.activities[8]")},{name:n("footer.activities[9]")}];return{mobile:o,activities:t,scrollUp:()=>{const d=this.$router.currentRoute.value.path,c=B();d==c("/legals")&&window.scrollTo(0,0)}}}}),it={key:0,class:"mb-4 mt-0"},ct={href:"tel:+33684586764"},rt={href:"mailto:nadia@lesbonnesmanieres.paris"},dt={class:"centering"},ut={class:"mr-2"};function mt(e,o,n,t,l,d){const c=r("FooterImage"),s=r("FooterInfosDesktop"),p=r("v-img"),u=r("v-sheet"),f=r("v-icon"),k=r("SocialsIcons"),v=O,M=r("v-footer");return _(),x(u,{class:"backgrounded mt-6"},{default:i(()=>[e.mobile?D("",!0):(_(),w("hr",it)),a(c),e.mobile?D("",!0):(_(),x(s,{key:1})),e.mobile?(_(),x(u,{key:2,class:y(["d-flex justify-center flex-grow-1 align-center",e.mobile?"flex-column":""])},{default:i(()=>[a(u,{class:"ma-5 mb-0"},{default:i(()=>[a(p,{src:"/HeadTextLogo.png",width:"160px",height:"160px",alt:"headlogo"})]),_:1}),a(u,{class:"footer-infos mx-3 mb-9 d-flex flex-column align-center"},{default:i(()=>[a(u,{class:"font-weight-bold mb-5 footer-locations"},{default:i(()=>[g("PARIS - CANNES - BARCELONE")]),_:1}),m("a",ct,[a(f,{class:"ma-2",color:"black"},{default:i(()=>[g("mdi-cellphone")]),_:1})]),a(u,{href:"tel:+33684586764",class:"mb-3 selectable-text"},{default:i(()=>[g("+33 (0)6 84 58 67 64")]),_:1}),m("a",rt,[a(f,{class:"ma-2",color:"black"},{default:i(()=>[g("mdi-email")]),_:1})]),a(u,{class:"mb-7 selectable-text"},{default:i(()=>[g("nadia@lesbonnesmanieres.paris")]),_:1}),a(k,{mobile:""})]),_:1})]),_:1},8,["class"])):D("",!0),m("div",dt,[e.mobile?(_(),x(u,{key:0,class:"mx-2 mb-3 d-flex flex-wrap footer-activities"},{default:i(()=>[(_(),w(V,null,T(10,h=>m("span",ut," - "+P(e.$t("footer.activities["+(h-1)+"]")),1)),64))]),_:1})):D("",!0)]),a(M,{color:"secondary",class:y(["text-wrap text-white backgrounded Montserrat mentions-légales mt-3",e.mobile?"":"text-center justify-space-around"])},{default:i(()=>[m("div",null,[g(P(e.$t("footer.legal"))+" ",1),m("u",null,[a(v,{to:e.localePath("/legals"),onClick:I(e.scrollUp,["stop"])},{default:i(()=>[g(P(e.$t("footer.uLegal")),1)]),_:1},8,["to","onClick"])])])]),_:1},8,["class"])]),_:1})}const pt=$(lt,[["render",mt],["__scopeId","data-v-b8a1440f"]]),ft={name:"TopLogo",setup(e,{emit:o}){const n=q(),t=F(n);function l(d){o("visibleHead",!d)}return{mobile:t,onIntersect:l}}};function _t(e,o,n,t,l,d){const c=U,s=r("v-img"),p=r("router-link"),u=r("v-card"),f=we("intersect");return xe((_(),x(u,{elevation:"0",width:"100%",class:y(["pa-9 d-flex justify-center",t.mobile?"pb-2 pt-6 mb-3":""])},{default:i(()=>[a(p,{to:e.localePath("/")},{default:i(()=>[a(s,{width:t.mobile?"170":"200","aspect-ratio":"2.6","max-width":200,cover:"",src:"/TextLogo.png",to:"/",alt:"logo"},{placeholder:i(()=>[a(c)]),_:1},8,["width"])]),_:1},8,["to"])]),_:1},8,["class"])),[[f,t.onIntersect]])}const ht=$(ft,[["render",_t]]),vt={name:"MobileDrawer",props:{head:Boolean},data(){const e=N(!1),o=B();return{drawer:e,navItems:[{id:1,name:"expertise",path:"/expertise"},{id:2,name:"creations",path:"/creations"},{id:3,name:"nous",path:"/nous"},{id:4,name:"contact",path:"/contact"}],goHome:()=>{const l=this.$router.currentRoute.value.path;l=="/"||l=="/en"?window.scrollTo(0,0):this.$router.push({path:o("/")}),e.value=!1}}}},X=e=>(ye("data-v-da982b49"),e=e(),$e(),e),gt=X(()=>m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"},[m("path",{fill:"black",d:"M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"})],-1)),bt={class:"mt-13 ml-2 centering-column mb-15 mt-15"},xt=X(()=>m("hr",{class:"ma-0 mb-1 ml-2"},null,-1)),wt={class:"ma-2 my-5 text-center"},yt=X(()=>m("hr",{class:"ma-0 mb-1 ml-2"},null,-1));function $t(e,o,n,t,l,d){const c=r("v-icon"),s=r("v-btn"),p=U,u=r("v-img"),f=O,k=r("v-navigation-drawer");return _(),w("div",null,[a(s,{onClick:o[0]||(o[0]=I(v=>l.drawer=!l.drawer,["stop"])),class:y(["mobile drawer-btn ml-4 align-self-start",n.head?"elevated":""]),icon:"",width:"70px",height:"70px"},{default:i(()=>[a(c,{color:"black",size:"40px"},{default:i(()=>[g("mdi-menu")]),_:1})]),_:1},8,["class"]),a(k,{class:"drawer-mobile pt-15",app:"",fixed:"",location:"top",temporary:"",modelValue:l.drawer,"onUpdate:modelValue":o[4]||(o[4]=v=>l.drawer=v)},{default:i(()=>[a(s,{class:"ma-1 drawer-cross",icon:"",width:"60px",height:"60px",elevation:"0",onClick:o[1]||(o[1]=I(v=>l.drawer=!1,["stop"]))},{default:i(()=>[gt]),_:1}),m("div",bt,[a(f,{class:"mb-8",to:e.localePath("/"),onClick:o[2]||(o[2]=I(v=>l.drawer=!1,["stop"])),exact:""},{default:i(()=>[a(u,{style:{cursor:"pointer"},src:"/HeadLogo.png",width:"73px",height:"90px",alt:"headlogo"},{placeholder:i(()=>[a(p)]),_:1})]),_:1},8,["to"]),xt,(_(!0),w(V,null,T(l.navItems,v=>(_(),w("div",{key:v.name,class:"centering-column"},[m("div",wt,[a(f,{class:"nuxt-link text-uppercase text--text",to:e.localePath(v.path),onClick:o[3]||(o[3]=I(M=>l.drawer=!1,["stop"])),exact:""},{default:i(()=>[g(P(e.$t(`navigation.${v.name}`)),1)]),_:2},1032,["to"])]),yt]))),128))])]),_:1},8,["modelValue"])])}const kt=$(vt,[["render",$t],["__scopeId","data-v-da982b49"]]),Ct={components:{HeaderVue:Xe,FooterVue:pt,TopLogo:ht,MobileDrawer:kt,ChooseLocation:oe,Maintenance:he},name:"Default",setup(){const e=N(!0),o=l=>{e.value=l},n=q(),t=F(n);return{head:e,mobile:t,isHeadVisible:o}}};function It(e,o,n,t,l,d){const c=r("MobileDrawer"),s=r("ChooseLocation"),p=r("TopLogo"),u=r("HeaderVue"),f=r("v-main"),k=r("FooterVue");return _(),w(V,null,[a(c,{head:t.head},null,8,["head"]),t.mobile?(_(),x(s,{key:0,class:"choose-location-absolute",mobile:!0})):D("",!0),a(p,{onVisibleHead:t.isHeadVisible},null,8,["onVisibleHead"]),a(u,{head:t.head},null,8,["head"]),a(f,null,{default:i(()=>[ke(e.$slots,"default",{},void 0,!0)]),_:3}),a(k)],64)}const At=$(Ct,[["render",It],["__scopeId","data-v-0ddf6596"]]);export{At as default};