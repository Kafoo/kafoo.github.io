import{u as P,i as S,_ as I,C as W,a as M,b as q}from"./entry.D4wB6m_k.js";import{_ as A}from"./Progress.D1gPs_Gf.js";import{H as U}from"./HorizontalDivider.BJilci7P.js";import{ac as D,ad as j,a5 as d,a6 as n,a4 as l,a1 as s,z as i,X as H,a0 as u,ae as O,F as N,af as r,ag as F,ah as L,ai as E,aj as T,a8 as b,a as R,b as X,a7 as f,_ as k,Z as V}from"./swiper-vue.DTb1iFf6.js";const Z={name:"CarouselPopup",props:{images:{type:Array,default:[]},ephemere:{type:Boolean,default:!1}},setup(){const t=P();return{mobile:S(t),modules:[D,j]}}},z=""+globalThis.__publicAssetsURL("expertise-carousels/ephemere.mp4"),G=t=>(E("data-v-5c75c5db"),t=t(),T(),t),J={key:1,class:"progress-circle centering"},K={key:0,class:"ephemere-video",src:z,autoplay:"",loop:"",controls:!1},Q=G(()=>b("source",{src:z,type:"video/mp4"},null,-1)),Y=[Q];function $(t,a,o,e,y,w){const _=l("v-icon"),c=l("v-btn"),v=A,h=l("v-img"),m=F,x=L,p=l("v-card"),C=l("v-progress-circular"),g=l("v-row");return s(),d(p,{height:e.mobile?"100vh":"80vh",class:"pop-up-container"},{default:n(()=>[i(c,{class:"close",variant:"text",icon:"",size:e.mobile?"70px":"40px",onClick:a[0]||(a[0]=B=>t.$emit("close"))},{default:n(()=>[i(_,{color:"white",size:e.mobile?"x-large":""},{default:n(()=>[H("mdi-close")]),_:1},8,["size"])]),_:1},8,["size"]),o.ephemere?r("",!0):(s(),d(p,{key:0,class:"pa-2 centering",height:"100%"},{default:n(()=>[i(x,{class:"popup-carousel mx-0",slidesPerView:1,spaceBetween:30,navigation:!e.mobile,pagination:{type:"fraction"},autoplay:{delay:4e3,disableOnInteraction:!0},modules:e.modules},{default:n(()=>[(s(!0),u(N,null,O(o.images,B=>(s(),d(m,null,{default:n(()=>[i(h,{src:B,height:"100%",alt:"expertise"},{placeholder:n(()=>[i(v)]),_:2},1032,["src"])]),_:2},1024))),256))]),_:1},8,["navigation","modules"])]),_:1})),o.ephemere?(s(),u("div",J,[i(C,{indeterminate:"",color:"white"})])):r("",!0),o.ephemere?(s(),d(g,{key:2,class:"fill-height ma-0",align:"center",justify:"center"},{default:n(()=>[o.ephemere?(s(),u("video",K,Y)):r("",!0)]),_:1})):r("",!0)]),_:1},8,["height"])}const ee=I(Z,[["render",$],["__scopeId","data-v-5c75c5db"]]),te={props:{images:{type:Array,default:[]},ephemere:{type:Boolean,default:!1}},setup(){const t=P();return{mobile:S(t),modules:[D,j]}}},oe=t=>(E("data-v-19b24704"),t=t(),T(),t),se={class:"custom-container centering-column"},ae={key:1,class:"progress-circle centering"},ne={key:0,class:"ephemere-video",src:z,autoplay:"",loop:"",controls:!1},le=oe(()=>b("source",{src:z,type:"video/mp4"},null,-1)),ie=[le];function re(t,a,o,e,y,w){const _=l("v-icon"),c=l("v-btn"),v=A,h=l("v-img"),m=F,x=L,p=l("v-card"),C=l("v-progress-circular"),g=l("v-row");return s(),u("div",se,[i(p,{height:e.mobile?"100vh":"80vh",width:"100%",class:"pop-up-container"},{default:n(()=>[i(c,{class:"close",variant:"text",icon:"",size:e.mobile?"70px":"40px",onClick:a[0]||(a[0]=B=>t.$emit("close"))},{default:n(()=>[i(_,{color:"white",size:e.mobile?"x-large":""},{default:n(()=>[H("mdi-close")]),_:1},8,["size"])]),_:1},8,["size"]),o.ephemere?r("",!0):(s(),d(p,{key:0,class:"pa-2 centering",height:"100%"},{default:n(()=>[i(x,{class:"popup-carousel mx-0",slidesPerView:1,spaceBetween:30,navigation:!e.mobile,pagination:{type:"fraction"},autoplay:{delay:4e3,disableOnInteraction:!0},modules:e.modules},{default:n(()=>[(s(!0),u(N,null,O(o.images,B=>(s(),d(m,null,{default:n(()=>[i(h,{src:B,height:"100%",alt:"expertise"},{placeholder:n(()=>[i(v)]),_:2},1032,["src"])]),_:2},1024))),256))]),_:1},8,["navigation","modules"])]),_:1})),o.ephemere?(s(),u("div",ae,[i(C,{indeterminate:"",color:"white"})])):r("",!0),o.ephemere?(s(),d(g,{key:2,class:"fill-height ma-0",align:"center",justify:"center"},{default:n(()=>[o.ephemere?(s(),u("video",ne,ie)):r("",!0)]),_:1})):r("",!0)]),_:1},8,["height"])])}const ce=I(te,[["render",re],["__scopeId","data-v-19b24704"]]),me={name:"ExpertiseBloc",components:{HorizontalDivider:U,ClassicButton:W,CarouselPopup:ee,CarouselCustomPopup:ce},props:{title:{type:String,default:""},text:{type:String,default:""},img:{type:String,default:""},btnText:{type:String,default:""},reverse:{type:Boolean,default:!1},carouselName:{type:String,default:""},carouselAmount:{type:String,default:""},ephemere:{type:Boolean,default:!1}},setup(t){const a=P(),o=S(a),e=M(a),y=R(!1);let w=[];const _=parseInt(t.carouselAmount);for(let p=0;p<_;p++)w.push("/expertise-carousels/"+t.carouselName+"/"+(p+1)+".jpg");const c=navigator.userAgent;var v=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&c&&c.indexOf("CriOS")==-1&&c.indexOf("FxiOS")==-1;const h=c.indexOf("ersion"),m=c.substring(h+7,h+9),x=v&&parseInt(m)<16;return x&&X(y,p=>{p==!0?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="auto"}),{mobile:o,popup:y,carouselImages:w,windowWidth:e,isTooOld:x}}},de={class:"backgrounded"};function pe(t,a,o,e,y,w){const _=l("HorizontalDivider"),c=l("v-sheet"),v=l("ClassicButton"),h=l("CarouselPopup"),m=l("v-dialog"),x=l("CarouselCustomPopup"),p=A,C=l("v-img");return s(),d(c,{class:f(["centering mx-auto flex-wrap flex-wrap-reverse",[o.reverse?"flex-row-reverse":"",e.mobile?"":"mb-15"]]),color:"blue"},{default:n(()=>[i(c,{class:f(["mb-4 d-flex flex-column",o.reverse&&!e.mobile?"ml-6":e.mobile?"":"mr-6"]),position:"relative"},{default:n(()=>[i(c,{width:e.mobile?"95%":"415px",class:f(["d-flex flex-column ma-auto pa-2",[e.windowWidth<826?"align-center":o.reverse?"align-end":"align-start",e.mobile?"mb-6":"mt-8"]])},{default:n(()=>[e.mobile?r("",!0):(s(),d(_,{key:0})),e.mobile?r("",!0):(s(),u("h3",{key:1,class:f(["my-3 small line-spaced backgrounded",[e.mobile?"medium":"",!o.reverse&&e.windowWidth>825?"text-left":"",o.reverse&&e.windowWidth>825?"text-right":""]])},k(o.title),3)),e.mobile?r("",!0):(s(),d(_,{key:2})),b("p",{class:f(["bloc-text",[e.windowWidth<826&&!e.mobile?"text-center":o.reverse&&!e.mobile?"text-right":"text-left",e.mobile?"mt-4":"mt-8"]])},[b("span",de,k(o.text),1)],2)]),_:1},8,["width","class"]),e.mobile?r("",!0):(s(),d(v,{key:0,small:"",text:o.btnText,class:f(["mt-5 mb-auto backgrounded",e.windowWidth<826?"mx-auto":o.reverse?"ml-auto mr-0":"mr-auto ml-0"]),bold:"",onClick:a[0]||(a[0]=V(g=>e.popup=!0,["stop"]))},null,8,["text","class"])),e.popup&&!e.isTooOld?(s(),d(m,{key:1,modelValue:e.popup,"onUpdate:modelValue":a[2]||(a[2]=g=>e.popup=g)},{default:n(()=>[i(h,{onClose:a[1]||(a[1]=g=>e.popup=!1),images:e.carouselImages,ephemere:o.ephemere},null,8,["images","ephemere"])]),_:1},8,["modelValue"])):r("",!0),e.popup&&e.isTooOld?(s(),d(x,{key:2,onClose:a[3]||(a[3]=g=>e.popup=!1),images:e.carouselImages,ephemere:o.ephemere},null,8,["images","ephemere"])):r("",!0)]),_:1},8,["class"]),i(c,{width:e.mobile?"95%":"370px",style:{position:"relative"}},{default:n(()=>[i(C,{"aspect-ratio":"1",cover:"",src:o.img,alt:"expertise"},{placeholder:n(()=>[i(p)]),_:1},8,["src"]),e.mobile?(s(),u("div",{key:0,class:"mobile-expertise-title text-uppercase cursor",onClick:a[4]||(a[4]=V(g=>e.popup=!0,["stop"]))},k(o.title),1)):r("",!0)]),_:1},8,["width"])]),_:1},8,["class"])}const ue=I(me,[["render",pe],["__scopeId","data-v-3c80c200"]]),_e={name:"ExpertisePage",components:{ExpertiseBloc:ue,ClassicButton:W},setup(){const t=P(),a=S(t),o=q();return{mobile:a,localePath:o}}},ve=t=>(E("data-v-14fc0aaf"),t=t(),T(),t),he=ve(()=>b("h1",{style:{display:"none"}},"Notre Expertise",-1)),fe={class:"Montserrat--text canvas-text"},ge={class:"centering"};function be(t,a,o,e,y,w){const _=l("v-container"),c=l("ExpertiseBloc"),v=l("ClassicButton"),h=l("v-sheet");return s(),u("div",null,[he,i(_,{class:f(e.mobile?"mb-8 mt-4 line-height-2 px-0":"mb-15 mt-8")},{default:n(()=>[b("h2",{style:{"max-width":"1100px"},class:f(["expertise-title mx-auto pa-3 line-spaced backgrounded",e.mobile?"small text-left":""])}," “"+k(t.$t("expertise.title"))+"“ ",3)]),_:1},8,["class"]),(s(),u(N,null,O(4,m=>i(c,{title:t.$t("expertise.blocs["+(m-1)+"].title"),text:t.$t("expertise.blocs["+(m-1)+"].text"),img:t.$t("expertise.blocs["+(m-1)+"].image"),btnText:t.$t("expertise.blocs["+(m-1)+"].cta"),carouselName:t.$t("expertise.blocs["+(m-1)+"].carousel.name"),carouselAmount:t.$t("expertise.blocs["+(m-1)+"].carousel.amount"),reverse:m%2==0,ephemere:t.$t("expertise.blocs["+(m-1)+"].carousel.name")=="animations"},null,8,["title","text","img","btnText","carouselName","carouselAmount","reverse","ephemere"])),64)),i(h,{class:f(["text-text centering flex-column text-center canvas backgrounded",e.mobile?"mb-8 mx-5 pa-6":"mx-auto mb-10 pa-12"]),"max-width":"550px"},{default:n(()=>[b("span",{class:f(["mb-3 canvas-title",e.mobile?"mb-1":"text-uppercase"])},k(t.$t("expertise.square.title")),3),b("span",fe,k(t.$t("expertise.square.text")),1),e.mobile?r("",!0):(s(),d(v,{key:0,class:"mt-6 mb-0",bold:"",text:t.$t("cta.contact"),to:e.localePath("/contact")},null,8,["text","to"]))]),_:1},8,["class"]),b("div",ge,[e.mobile?(s(),d(v,{key:0,class:"mt-3 mb-15 mx-auto",bold:"",text:t.$t("cta.contact"),to:e.localePath("/contact")},null,8,["text","to"])):r("",!0)])])}const Ce=I(_e,[["render",be],["__scopeId","data-v-14fc0aaf"]]);export{Ce as default};
