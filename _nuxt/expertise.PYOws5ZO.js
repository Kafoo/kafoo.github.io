import{i as q,_ as B,C as T,u as W,a as E}from"./entry.yK7iOJey.js";import{C as I}from"./ClassicTitle.73MhPxn8.js";import{_ as N}from"./Progress.QEeMW8Vq.js";import{H as D}from"./HorizontalDivider.D888sg1E.js";import{ad as H,ae as L,a1 as a,a3 as r,a4 as n,a2 as s,m as i,X as M,aa as x,af as z,F as A,ag as m,ah as j,ai as F,ab as U,ac as O,a6 as h,a as R,a5 as d,_ as C,Z as S}from"./swiper-vue._fTIhHzw.js";const X={name:"CarouselPopup",props:{images:{type:Array,default:[]},technique:{type:Boolean,default:!1}},setup(){return{mobile:q(),modules:[H,L]}}},V=""+globalThis.__publicAssetsURL("expertise-carousels/technique.mp4"),Z=t=>(U("data-v-42938621"),t=t(),O(),t),G={key:1,class:"progress-circle centering"},J={key:0,class:"technique-video",src:V,autoplay:"",loop:"",controls:!1},K=Z(()=>h("source",{src:V,type:"video/mp4"},null,-1)),Q=[K];function Y(t,l,o,e,f,w){const u=a("v-icon"),v=a("v-btn"),_=N,p=a("v-img"),g=j,c=F,y=a("v-card"),k=a("v-progress-circular"),b=a("v-row");return s(),r(y,{height:e.mobile?"100vh":"80vh",class:"pop-up-container"},{default:n(()=>[i(v,{class:"close",variant:"text",icon:"",size:e.mobile?"70px":"40px",onClick:l[0]||(l[0]=P=>t.$emit("close"))},{default:n(()=>[i(u,{color:"white",size:e.mobile?"x-large":""},{default:n(()=>[M("mdi-close")]),_:1},8,["size"])]),_:1},8,["size"]),o.technique?m("",!0):(s(),r(y,{key:0,class:"pa-2 centering",height:"100%"},{default:n(()=>[i(c,{class:"popup-carousel mx-0",slidesPerView:1,spaceBetween:30,navigation:!e.mobile,pagination:{type:"fraction"},autoplay:{delay:4e3,disableOnInteraction:!0},modules:e.modules},{default:n(()=>[(s(!0),x(A,null,z(o.images,P=>(s(),r(g,null,{default:n(()=>[i(p,{src:P,height:"100%"},{placeholder:n(()=>[i(_)]),_:2},1032,["src"])]),_:2},1024))),256))]),_:1},8,["navigation","modules"])]),_:1})),o.technique?(s(),x("div",G,[i(k,{indeterminate:"",color:"white"})])):m("",!0),o.technique?(s(),r(b,{key:2,class:"fill-height ma-0",align:"center",justify:"center"},{default:n(()=>[o.technique?(s(),x("video",J,Q)):m("",!0)]),_:1})):m("",!0)]),_:1},8,["height"])}const $=B(X,[["render",Y],["__scopeId","data-v-42938621"]]),ee={name:"ExpertiseBloc",components:{ClassicTitle:I,HorizontalDivider:D,ClassicButton:T,CarouselPopup:$},props:{title:{type:String,default:""},text:{type:String,default:""},img:{type:String,default:""},btnText:{type:String,default:""},reverse:{type:Boolean,default:!1},carouselName:{type:String,default:""},carouselAmount:{type:String,default:""},technique:{type:Boolean,default:!1}},setup(t){const l=q(),o=W(),e=R(!1);let f=[];const w=parseInt(t.carouselAmount);for(let u=0;u<w;u++)f.push("/expertise-carousels/"+t.carouselName+"/"+(u+1)+".jpg");return{mobile:l,popup:e,carouselImages:f,windowWidth:o}}};function te(t,l,o,e,f,w){const u=a("HorizontalDivider"),v=a("ClassicTitle"),_=a("v-sheet"),p=a("ClassicButton"),g=a("CarouselPopup"),c=a("v-dialog"),y=N,k=a("v-img");return s(),r(_,{class:d(["centering mx-auto flex-wrap flex-wrap-reverse",[o.reverse?"flex-row-reverse":"",e.mobile?"":"mb-15"]]),color:"blue"},{default:n(()=>[i(_,{class:d(["mb-4 d-flex flex-column",o.reverse&&!e.mobile?"ml-6":e.mobile?"":"mr-6"]),position:"relative"},{default:n(()=>[i(_,{width:e.mobile?"95%":"415px",class:d(["d-flex flex-column ma-auto pa-2 backgrounded",[e.windowWidth<826?"align-center":o.reverse?"align-end":"align-start",e.mobile?"mb-5":"mt-8"]])},{default:n(()=>[e.mobile?m("",!0):(s(),r(u,{key:0})),e.mobile?m("",!0):(s(),r(v,{key:1,class:d(["my-3 small",e.mobile?"medium":""]),text:[o.title],left:!o.reverse&&e.windowWidth>825,right:o.reverse&&e.windowWidth>825},null,8,["text","class","left","right"])),e.mobile?m("",!0):(s(),r(u,{key:2})),h("p",{class:d(["bloc-text",[e.windowWidth<826&&!e.mobile?"text-center":o.reverse&&!e.mobile?"text-right":"text-left",e.mobile?"mt-4":"mt-8"]])},C(o.text),3)]),_:1},8,["width","class"]),e.mobile?m("",!0):(s(),r(p,{key:0,small:"",text:o.btnText,class:d(["mt-5 mb-auto backgrounded",e.windowWidth<826?"mx-auto":o.reverse?"ml-auto mr-0":"mr-auto ml-0"]),bold:"",onClick:l[0]||(l[0]=S(b=>e.popup=!0,["stop"]))},null,8,["text","class"])),e.popup?(s(),r(c,{key:1,modelValue:e.popup,"onUpdate:modelValue":l[2]||(l[2]=b=>e.popup=b)},{default:n(()=>[i(g,{onClose:l[1]||(l[1]=b=>e.popup=!1),images:e.carouselImages,technique:o.technique},null,8,["images","technique"])]),_:1},8,["modelValue"])):m("",!0)]),_:1},8,["class"]),i(_,{width:e.mobile?"95%":"370px",style:{position:"relative"}},{default:n(()=>[i(k,{"aspect-ratio":"1",cover:"",src:o.img},{placeholder:n(()=>[i(y)]),_:1},8,["src"]),e.mobile?(s(),x("div",{key:0,class:"mobile-expertise-title text-uppercase cursor",onClick:l[3]||(l[3]=S(b=>e.popup=!0,["stop"]))},C(o.title),1)):m("",!0)]),_:1},8,["width"])]),_:1},8,["class"])}const oe=B(ee,[["render",te],["__scopeId","data-v-9ee2cf5b"]]),ae={name:"ExpertisePage",components:{ClassicTitle:I,ExpertiseBloc:oe,ClassicButton:T},setup(){const t=q(),l=E();return{mobile:t,localePath:l}}},se={class:"Montserrat--text canvas-text"},le={class:"centering"};function ne(t,l,o,e,f,w){const u=a("ClassicTitle"),v=a("v-container"),_=a("ExpertiseBloc"),p=a("ClassicButton"),g=a("v-sheet");return s(),x("div",null,[i(v,{class:d(e.mobile?"mb-8 mt-4 line-height-2 px-0":"mb-15 mt-8")},{default:n(()=>[i(u,{class:d(["title-container mx-auto pa-1",e.mobile?"small":""]),text:[t.$t("expertise.title")],left:e.mobile,quote:""},null,8,["class","text","left"])]),_:1},8,["class"]),(s(),x(A,null,z(4,c=>i(_,{title:t.$t("expertise.blocs["+(c-1)+"].title"),text:t.$t("expertise.blocs["+(c-1)+"].text"),img:t.$t("expertise.blocs["+(c-1)+"].image"),btnText:t.$t("expertise.blocs["+(c-1)+"].cta"),carouselName:t.$t("expertise.blocs["+(c-1)+"].carousel.name"),carouselAmount:t.$t("expertise.blocs["+(c-1)+"].carousel.amount"),reverse:c%2==0,technique:t.$t("expertise.blocs["+(c-1)+"].carousel.name")=="technique"},null,8,["title","text","img","btnText","carouselName","carouselAmount","reverse","technique"])),64)),i(g,{class:d(["text-text centering flex-column text-center canvas backgrounded",e.mobile?"mb-8 mx-5 pa-4":"mx-auto mb-10 pa-12"]),"max-width":"550px"},{default:n(()=>[h("span",{class:d(["mb-1 canvas-title",e.mobile?"":"text-uppercase"])},C(t.$t("expertise.square.title")),3),h("span",se,C(t.$t("expertise.square.text")),1),e.mobile?m("",!0):(s(),r(p,{key:0,class:"mt-6 mb-0",bold:"",text:t.$t("cta.contact"),to:e.localePath("/contact")},null,8,["text","to"]))]),_:1},8,["class"]),h("div",le,[e.mobile?(s(),r(p,{key:0,class:"mt-0 mb-15 mx-auto",bold:"",text:t.$t("cta.contact"),to:e.localePath("/contact")},null,8,["text","to"])):m("",!0)])])}const de=B(ae,[["render",ne],["__scopeId","data-v-7549fa8e"]]);export{de as default};
