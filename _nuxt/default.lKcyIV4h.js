import{_ as N}from"./nuxt-link.NuGqmdMH.js";import{u as S,_ as x,a as B,b as D}from"./entry.APxCpU_P.js";import{a1 as n,a2 as c,a3 as v,a4 as o,F as k,m as t,ag as $,_ as w,X as d,ab as h,am as L,d as y,af as b,ac as g,Z as C,R as j,Q as E,a as z,an as M}from"./swiper-vue.ZKCCD7_7.js";import{C as A,i as V}from"./ClassicTitle.Mr7PheZP.js";const R={props:{},data(){return S(),{navItems:[{id:1,name:"expertise",path:"/expertise"},{id:2,name:"creations",path:"/creations"},{id:3,name:"nous",path:"/nous"},{id:4,name:"contact",path:"/contact"}]}}};function O(e,a,_,l,f,u){const r=n("v-divider"),s=n("v-card"),p=N,m=n("v-toolbar-items");return c(),v(m,{class:"d-flex mx-auto align-center"},{default:o(()=>[(c(!0),h(k,null,L(f.navItems,i=>(c(),h("div",{key:i.name,class:"d-flex mx-auto align-center"},[i.id>1?(c(),v(s,{key:0,elevation:"0",height:"20px",class:"my-2 divider-container"},{default:o(()=>[t(r,{class:"ma-0 mb-1",color:"#00000070",vertical:""})]),_:1})):$("",!0),t(p,{class:"nuxt-link text-uppercase ma-2 text-no-wrap",to:e.localePath(i.path),exact:""},{default:o(()=>[d(w(e.$t(`navigation.${i.name}`)),1)]),_:2},1032,["to"])]))),128))]),_:1})}const U=x(R,[["render",O],["__scopeId","data-v-33b84d7b"]]),Q=y({props:{mobile:{type:Boolean,default:!1}},data(){return{}}}),X={class:"cursor"};function Z(e,a,_,l,f,u){const r=n("v-icon");return c(),h("div",X,[t(r,{class:b(["ma-0",e.mobile?"mx-2":"mr-1"]),color:"text",style:{position:"relative"},size:e.mobile?40:25},{default:o(()=>[d("mdi-facebook")]),_:1},8,["class","size"]),t(r,{class:b(["ma-0",e.mobile?"mx-2":"mr-1"]),color:"text",style:{position:"relative"},size:e.mobile?40:25},{default:o(()=>[d("mdi-instagram")]),_:1},8,["class","size"]),t(r,{class:b(["ma-0",e.mobile?"mx-2":"mr-1"]),color:"text",style:{position:"relative"},size:e.mobile?40:25},{default:o(()=>[d("mdi-linkedin")]),_:1},8,["class","size"])])}const F=x(Q,[["render",Z],["__scopeId","data-v-9b8d880a"]]),q={props:{mobile:{type:Boolean}},methods:{changeLocale(e){const a=B();this.$i18n.locale=e,history.pushState({},"",a(e))}},setup(){return{locale:D().locale}}};function G(e,a,_,l,f,u){const r=n("v-divider"),s=n("v-card"),p=n("v-toolbar-items");return c(),v(p,{style:{position:"absolute",right:"15px"},class:"d-flex align-center Montserrat--text"},{default:o(()=>[g("p",{"min-width":"0",text:"",class:b(["px-1 ma-0 cursor location",[_.mobile?"mobile-location":"",l.locale=="fr"?"active-location":""]]),onClick:a[0]||(a[0]=C(m=>u.changeLocale("fr"),["stop"]))},"FR",2),t(s,{height:"20px",class:"divider-container"},{default:o(()=>[t(r,{class:"ma-0 mb-1",color:"#00000070",vertical:""})]),_:1}),g("p",{"min-width":"0",text:"",class:b(["px-1 ma-0 cursor location",[_.mobile?"mobile-location":"",l.locale=="en"?"active-location":""]]),onClick:a[1]||(a[1]=C(m=>u.changeLocale("en"),["stop"]))},"US",2)]),_:1})}const H=x(q,[["render",G],["__scopeId","data-v-dd646d0b"]]),J=y({name:"DefaultLayout",components:{NavigationVue:U,SocialsIcons:F,ChooseLocation:H},props:{head:Boolean},data(){return{}}});function K(e,a,_,l,f,u){const r=n("v-img"),s=n("SocialsIcons"),p=n("v-toolbar-items"),m=n("NavigationVue"),i=n("ChooseLocation"),I=n("v-app-bar");return c(),v(I,{app:"",absolute:"",elevation:"0",height:"60",class:b(["mb-2 mt-0 px-4 sticky-header desktop",e.head?"backgrounded":"transparent"])},{default:o(()=>[t(p,{class:"centering",style:{position:"absolute",left:"10px"}},{default:o(()=>[t(r,{class:b([e.head?"visible":"invisible","mr-3"]),src:"/HeadLogo.png",width:"40px"},null,8,["class"]),t(s,{class:"hideOn920"})]),_:1}),t(m),t(i)]),_:1},8,["class"])}const W=x(J,[["render",K],["__scopeId","data-v-702fcbc0"]]),Y=y({components:{ClassicTitle:A},name:"",setup(){return{mobile:V()}}});function ee(e,a,_,l,f,u){const r=n("v-img"),s=n("ClassicTitle"),p=n("v-sheet");return c(),v(p,{class:"d-flex flex-column justify-center align-center ma-auto mb-5",width:e.mobile?"100%":"90%",height:e.mobile?"280px":"250px"},{default:o(()=>[t(r,{width:"100%",height:"100%",cover:"",src:"/pictures/Home.jpg"}),t(s,{style:{position:"absolute"},color:"white",class:b(e.mobile?"xsmall":"small"),text:["Let's share who we are","watch what we do."]},null,8,["class","text"])]),_:1},8,["width","height"])}const te=x(Y,[["render",ee]]),oe=y({name:"FooterInfosDesktop",components:{SocialsIcons:F},setup(){const{t:e}=D();return{activities:[{name:e("footer.activities[0]")},{name:e("footer.activities[1]")},{name:e("footer.activities[2]")},{name:e("footer.activities[3]")},{name:e("footer.activities[4]")},{name:e("footer.activities[5]")},{name:e("footer.activities[6]")},{name:e("footer.activities[7]")},{name:e("footer.activities[8]")},{name:e("footer.activities[9]")}]}}});function ae(e,a,_,l,f,u){const r=n("v-img"),s=n("v-sheet"),p=n("v-icon"),m=n("SocialsIcons");return c(),v(s,{class:"d-flex justify-space-around align-center flex-wrap text-black"},{default:o(()=>[t(s,{class:"d-flex justify-center flex-grow-1 align-center my-3"},{default:o(()=>[t(s,{class:"mr-5"},{default:o(()=>[t(r,{src:"/HeadTextLogo.png",width:"120px"})]),_:1}),t(s,{class:"footer-contact mx-3"},{default:o(()=>[t(s,{class:"font-weight-bold"},{default:o(()=>[d("PARIS - CANNES - BARCELONE")]),_:1}),t(s,null,{default:o(()=>[t(p,{size:"17px"},{default:o(()=>[d("mdi-cellphone")]),_:1}),d("+33 (0)6 84 58 67 64")]),_:1}),t(s,null,{default:o(()=>[t(p,{size:"17px"},{default:o(()=>[d("mdi-email")]),_:1}),d(" nadia@lesbonnesmanieres.paris")]),_:1}),t(m)]),_:1})]),_:1}),t(s,{class:"d-flex justify-center flex-grow-1 align-center footer-activities my-3"},{default:o(()=>[t(s,{class:"mx-3 mr-5 d-flex flex-column"},{default:o(()=>[(c(),h(k,null,L(5,i=>g("span",null,"- "+w(e.$t("footer.activities["+(i-1)+"]")),1)),64))]),_:1}),t(s,{class:"mx-3 d-flex flex-column"},{default:o(()=>[(c(),h(k,null,L(5,i=>g("span",null,"- "+w(e.$t("footer.activities["+(i+4)+"]")),1)),64))]),_:1})]),_:1})]),_:1})}const ne=x(oe,[["render",ae],["__scopeId","data-v-e461e4d9"]]),se=y({components:{SocialsIcons:F,FooterImage:te,FooterInfosDesktop:ne},name:"DefaultLayout",setup(){const e=V(),{t:a}=D(),_=[{name:a("footer.activities[0]")},{name:a("footer.activities[1]")},{name:a("footer.activities[2]")},{name:a("footer.activities[3]")},{name:a("footer.activities[4]")},{name:a("footer.activities[5]")},{name:a("footer.activities[6]")},{name:a("footer.activities[7]")},{name:a("footer.activities[8]")},{name:a("footer.activities[9]")}];return{mobile:e,activities:_}}}),ie={key:0,class:"mb-4"},ce={class:"centering"},le={class:"mr-2"};function re(e,a,_,l,f,u){const r=n("FooterImage"),s=n("FooterInfosDesktop"),p=n("v-img"),m=n("v-sheet"),i=n("v-icon"),I=n("SocialsIcons"),P=n("v-footer");return c(),v(m,null,{default:o(()=>[e.mobile?$("",!0):(c(),h("hr",ie)),t(r),e.mobile?$("",!0):(c(),v(s,{key:1})),e.mobile?(c(),v(m,{key:2,class:b(["d-flex justify-center flex-grow-1 align-center",e.mobile?"flex-column":""])},{default:o(()=>[t(m,{class:"ma-5 mb-0"},{default:o(()=>[t(p,{src:"/HeadTextLogo.png",width:"160px"})]),_:1}),t(m,{class:"footer-infos mx-3 mb-9 d-flex flex-column align-center"},{default:o(()=>[t(m,{class:"font-weight-bold mb-5 footer-locations"},{default:o(()=>[d("PARIS - CANNES - BARCELONE")]),_:1}),t(i,{class:"ma-2",color:"black"},{default:o(()=>[d("mdi-cellphone")]),_:1}),t(m,{class:"mb-3"},{default:o(()=>[d("+33 (0)6 84 58 67 64")]),_:1}),t(i,{class:"ma-2",color:"black"},{default:o(()=>[d("mdi-email")]),_:1}),t(m,{class:"mb-7"},{default:o(()=>[d("nadia@lesbonnesmanieres.paris")]),_:1}),t(I,{mobile:""})]),_:1})]),_:1},8,["class"])):$("",!0),g("div",ce,[e.mobile?(c(),v(m,{key:0,class:"mx-2 mb-3 d-flex flex-wrap footer-activities"},{default:o(()=>[(c(),h(k,null,L(10,T=>g("span",le," - "+w(e.$t("footer.activities["+(T-1)+"]")),1)),64))]),_:1})):$("",!0)]),t(P,{color:"secondary",class:b(["text-wrap text-white backgrounded Montserrat mentions-légales mt-3",e.mobile?"":"text-center justify-space-around"])},{default:o(()=>[g("div",null,[d(w(e.$t("footer.legal")),1),g("u",null,w(e.$t("footer.uLegal")),1)])]),_:1},8,["class"])]),_:1})}const me=x(se,[["render",re],["__scopeId","data-v-712f7bf2"]]),de={name:"TopLogo",setup(e,{emit:a}){const _=V(),l=S();function f(u){a("visibleHead",!u)}return{mobile:_,onIntersect:f,localePath:l}}};function _e(e,a,_,l,f,u){const r=n("v-img"),s=n("router-link"),p=n("v-card"),m=j("intersect");return E((c(),v(p,{elevation:"0",width:"100%",class:b(["pa-9 d-flex justify-center",l.mobile?"pb-2 pt-6":""])},{default:o(()=>[t(s,{to:l.localePath("/")},{default:o(()=>[t(r,{width:l.mobile?"170":"200","max-width":200,cover:"",src:"/TextLogo.png",to:"/"},null,8,["width"])]),_:1},8,["to"])]),_:1},8,["class"])),[[m,l.onIntersect]])}const pe=x(de,[["render",_e]]),ue=y({name:"MobileDrawer",props:{head:Boolean},setup(){const e=z(!1),a=S();return{drawer:e,navItems:[{id:1,name:"expertise",path:"/expertise"},{id:2,name:"creations",path:"/creations"},{id:3,name:"nous",path:"/nous"},{id:4,name:"contact",path:"/contact"}],localePath:a}}}),fe={class:"mt-13 ml-2"},ve={key:0,class:"ma-0 mb-1 ml-2"},he={class:"ma-2 my-3"};function be(e,a,_,l,f,u){const r=n("v-icon"),s=n("v-btn"),p=N,m=n("v-navigation-drawer");return c(),h("div",null,[t(s,{onClick:a[0]||(a[0]=C(i=>e.drawer=!e.drawer,["stop"])),class:b(["mobile drawer-btn ml-4 align-self-start",e.head?"elevated":""]),icon:"",width:"70px",height:"70px"},{default:o(()=>[t(r,{color:"black",size:"40px"},{default:o(()=>[d("mdi-menu")]),_:1})]),_:1},8,["class"]),t(m,{app:"",fixed:"",temporary:"",modelValue:e.drawer,"onUpdate:modelValue":a[2]||(a[2]=i=>e.drawer=i),class:"pt-15"},{default:o(()=>[t(s,{onClick:a[1]||(a[1]=C(i=>e.drawer=!1,["stop"])),class:"ma-1 drawer-cross",icon:"",width:"50px",height:"50px",elevation:"0"},{default:o(()=>[t(r,{color:"black",size:"30px"},{default:o(()=>[d("mdi-close")]),_:1})]),_:1}),t(s,{icon:"",to:e.localePath("/"),width:"50px",height:"50px",class:"ma-1 home-btn"},{default:o(()=>[t(r,{size:"30px"},{default:o(()=>[d("mdi-home")]),_:1})]),_:1},8,["to"]),g("div",fe,[(c(!0),h(k,null,L(e.navItems,i=>(c(),h("div",{key:i.name},[i.id>1?(c(),h("hr",ve)):$("",!0),g("div",he,[t(p,{class:"nuxt-link text-uppercase text--text",to:e.localePath(i.path),exact:""},{default:o(()=>[d(w(e.$t(`navigation.${i.name}`)),1)]),_:2},1032,["to"])])]))),128))])]),_:1},8,["modelValue"])])}const ge=x(ue,[["render",be],["__scopeId","data-v-cbad7d74"]]),xe={components:{HeaderVue:W,FooterVue:me,TopLogo:pe,MobileDrawer:ge,ChooseLocation:H},name:"Default",setup(){const e=z(!0),a=l=>{e.value=l},_=V();return{head:e,mobile:_,isHeadVisible:a}}};function $e(e,a,_,l,f,u){const r=n("MobileDrawer"),s=n("ChooseLocation"),p=n("TopLogo"),m=n("HeaderVue"),i=n("v-main"),I=n("FooterVue");return c(),h(k,null,[t(r,{head:l.head},null,8,["head"]),l.mobile?(c(),v(s,{key:0,class:"choose-location-absolute",mobile:!0})):$("",!0),t(p,{onVisibleHead:l.isHeadVisible},null,8,["onVisibleHead"]),t(m,{head:l.head},null,8,["head"]),t(i,null,{default:o(()=>[M(e.$slots,"default",{},void 0,!0)]),_:3}),t(I)],64)}const Le=x(xe,[["render",$e],["__scopeId","data-v-9caa3b93"]]);export{Le as default};
