import{a1 as o,a3 as g,a4 as s,a2 as m,a6 as l,a5 as a,m as e,_ as p,X as H,ad as k,aj as j,ah as B,ai as T,c as $,aa as h,F as N,af as P}from"./swiper-vue._fTIhHzw.js";import{C as E,i as v,_ as w,e as F}from"./entry.kdU_gTkZ.js";import{C as S}from"./ClassicTitle.7ibblGuK.js";import{H as I}from"./HorizontalDivider.A8YxZfnU.js";import{P as M}from"./PageTitle.5OiLHaG6.js";const O={name:"NousPerson",components:{ClassicButton:E},props:{name:{type:String,default:""},fonction:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""}},setup(){return{mobile:v()}}},A={class:"nous-name text-uppercase"},L={class:"nous-fonction"};function X(n,f,i,t,q,y){const c=o("v-sheet"),u=o("ClassicButton"),_=o("v-container");return m(),g(_,{class:"d-flex justify-center flex-wrap"},{default:s(()=>[l("div",{class:a(["parent",t.mobile?"mb-8 mt-5":"mr-10 mb-10"])},[l("div",{class:a(["child",i.image])},null,2)],2),e(c,{class:a(["d-flex flex-column Montserrat--text",t.mobile?"text-center align-center":"align-start ml-10"]),width:"500px"},{default:s(()=>[e(c,{class:"backgrounded d-flex flex-column px-4 py-3",color:"secondary"},{default:s(()=>[l("span",A,p(i.name),1),l("span",L,p(i.fonction),1)]),_:1}),l("span",{class:a(["mt-8 nous-description backgrounded",t.mobile?"mx-3":""])},p(i.description),3),e(u,{class:"ml-0 mt-5 backgrounded",text:n.$t("cta.contact"),to:n.localePath("/contact"),small:!t.mobile,bold:""},null,8,["text","to","small"])]),_:1},8,["class"])]),_:1})}const G=w(O,[["render",X],["__scopeId","data-v-7230405d"]]),J={name:"",setup(){return{mobile:v()}}};function K(n,f,i,t,q,y){const c=o("v-sheet"),u=o("v-img");return m(),g(c,{position:"relative",class:"centering ma-auto",height:t.mobile?"400px":"500px","min-width":t.mobile?"100px":""},{default:s(()=>[e(c,{class:"ensemble-text-container backgrounded pb-3 pt-1 mx-5"},{default:s(()=>[e(c,{class:"ensemble-text text-text text-center text-uppercase py-3"},{default:s(()=>[H(p(n.$t("nous.ensemble")),1)]),_:1})]),_:1}),e(u,{src:"/ensemble.svg",height:"100%","max-width":"90%"})]),_:1},8,["height","min-width"])}const Q=w(J,[["render",K],["__scopeId","data-v-2d51d173"]]),R={name:"NousEquipe",components:{ClassicTitle:S,HorizontalDivider:I},setup(){return{mobile:v(),modules:[k,j]}}};function U(n,f,i,t,q,y){const c=o("HorizontalDivider"),u=o("ClassicTitle"),_=o("v-sheet"),d=o("v-img"),r=B,x=T;return m(),g(_,{class:a(["centering mx-auto flex-wrap flex-wrap-reverse",t.mobile?"":"mb-15"]),color:"blue"},{default:s(()=>[e(_,{class:a(["mb-8 d-flex flex-column backgrounded",t.mobile?"align-center":"pa-2"]),position:"relative"},{default:s(()=>[e(_,{width:t.mobile?"85%":"450px",class:a(["d-flex flex-column bloc-title-text",[t.mobile?"align-start":"align-end",t.mobile?"mb-5":"ma-auto pr-10"]])},{default:s(()=>[e(c),e(u,{class:a(["mt-3 mb-4",t.mobile?"medium":""]),text:[n.$t("nous.equipe.title")],left:t.mobile,right:!t.mobile},null,8,["text","class","left","right"]),e(c),l("p",{class:a(["bloc-text mt-8",t.mobile?"text-left":"text-right"])},p(n.$t("nous.equipe.text")),3),l("p",{class:a(["bloc-text mt-1",t.mobile?"text-left":"text-right"])},[l("b",null,p(n.$t("nous.equipe.last")),1)],2)]),_:1},8,["width","class"])]),_:1},8,["class"]),e(x,{class:"flex-grow-0 nous-carousel mx-0",slidesPerView:(t.mobile,"auto"),spaceBetween:t.mobile?10:30,loop:!0,pagination:{clickable:!0},autoplay:{delay:2e3,disableOnInteraction:!1},modules:t.modules},{default:s(()=>[e(r,null,{default:s(()=>[e(d,{class:"equipe-image",src:"/pictures/equipe-1.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(d,{class:"equipe-image",src:"/pictures/equipe-2.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(d,{class:"equipe-image",src:"/pictures/equipe-3.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(d,{class:"equipe-image",src:"/pictures/equipe-4.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(d,{class:"equipe-image",src:"/pictures/equipe-5.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(d,{class:"equipe-image",src:"/pictures/equipe-6.jpg"})]),_:1})]),_:1},8,["slidesPerView","spaceBetween","modules"])]),_:1},8,["class"])}const W=w(R,[["render",U],["__scopeId","data-v-2ba8dd0f"]]),Y={name:"CreationsPage",components:{ClassicTitle:S,HorizontalDivider:I,ClassicButton:E,PageTitle:M,NousPerson:G,NousEnsemble:Q,NousEquipe:W},setup(){const n=v(),f=$({get(){const{t:i}=F();return[{name:i("nous.engagements.engag1"),image:"/pictures/innovation.jpg",slug:"innovation"},{name:i("nous.engagements.engag2"),image:"/pictures/precision.jpg",slug:"precision"},{name:i("nous.engagements.engag3"),image:"/pictures/emerveillement.jpg",slug:"emerveillement"}]},set(i){}});return{mobile:n,engagements:f,modules:[k,j]}}},Z={class:"mb-15"},ee={class:"mb-100"},te={class:"centering-column"},ne={class:"engagement-title"},se={class:"engagement-title engagement-mobile-title"};function oe(n,f,i,t,q,y){const c=o("PageTitle"),u=o("NousPerson"),_=o("NousEnsemble"),d=o("NousEquipe"),r=o("HorizontalDivider"),x=o("ClassicTitle"),C=o("v-sheet"),V=o("v-img"),z=B,D=T;return m(),h("div",Z,[e(c,{class:"nous-title",text:n.$t("nous.title")},null,8,["text"]),e(u,{class:a(t.mobile?"mb-5":"mb-15"),name:n.$t("nous.nadia.name"),fonction:n.$t("nous.nadia.fonction"),description:n.$t("nous.nadia.description"),image:"nadia"},null,8,["class","name","fonction","description"]),e(u,{class:"mb-16",name:n.$t("nous.marc.name"),fonction:n.$t("nous.marc.fonction"),description:n.$t("nous.marc.description"),image:"marc"},null,8,["name","fonction","description"]),l("div",ee,[e(_)]),l("div",{class:a(t.mobile?"mb-10":"mb-100")},[e(d)],2),l("div",te,[e(r),e(x,{class:a(["my-4 small",t.mobile?"medium":""]),text:[n.$t("nous.engagements.title")],left:t.mobile},null,8,["text","class","left"]),e(r)]),t.mobile?(m(),g(D,{key:1,class:"engagements-carousel mx-5 mt-10 mb-15",slidesPerView:"auto",spaceBetween:"10",loop:!0,pagination:{clickable:!0},autoplay:{delay:2e3,disableOnInteraction:!1},modules:t.modules},{default:s(()=>[(m(!0),h(N,null,P(t.engagements,b=>(m(),g(z,null,{default:s(()=>[e(V,{width:"100%","aspect-ratio":"1.6",src:b.image},null,8,["src"]),l("span",se,p(b.name),1)]),_:2},1024))),256))]),_:1},8,["modules"])):(m(),g(C,{key:0,class:"mt-10 mb-15 d-flex justify-center flex-wrap"},{default:s(()=>[(m(!0),h(N,null,P(t.engagements,b=>(m(),h("div",{class:a(["parent flex-grow-0",(t.mobile,"")])},[l("div",{class:a(["child",b.slug])},null,2),l("span",ne,p(b.name),1)],2))),256))]),_:1})),e(C,{class:a(["d-flex flex-column nous-catch",t.mobile?"canvas backgrounded mx-6 pa-4":"mx-auto mb-0 mt-10 align-center"]),"max-width":t.mobile?"":"600px"},{default:s(()=>[e(x,{class:"my-4 small",text:[n.$t("nous.end")]},null,8,["text"])]),_:1},8,["max-width","class"])])}const re=w(Y,[["render",oe],["__scopeId","data-v-e0a41a85"]]);export{re as default};
