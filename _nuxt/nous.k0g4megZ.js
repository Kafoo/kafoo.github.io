import{a1 as o,a3 as f,a4 as s,a2 as c,ac as l,af as a,m as e,_ as d,X as V,ag as q,am as j,aj as B,ak as T,ab as h,F as N,ai as P}from"./swiper-vue.CIOlEgAB.js";import{_ as v,a as $}from"./entry.03XfznWp.js";import{i as w,C as E}from"./displayHelpers.hQ9BECyK.js";import{H as S}from"./HorizontalDivider.JXzjqk9-.js";import{C as I}from"./ClassicButton.OLcvtn21.js";import{P as F}from"./PageTitle.cHomwDI3.js";const M={name:"NousPerson",components:{ClassicButton:I},props:{name:{type:String,default:""},fonction:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""}},setup(){return{mobile:w()}}},O={class:"nous-name text-uppercase"},A={class:"nous-fonction"};function L(n,p,m,t,y,k){const i=o("v-sheet"),r=o("ClassicButton"),_=o("v-container");return c(),f(_,{class:"d-flex justify-center flex-wrap"},{default:s(()=>[l("div",{class:a(["parent",t.mobile?"mb-8":"mr-10 mb-10"])},[l("div",{class:a(["child",m.image])},null,2)],2),e(i,{class:a(["d-flex flex-column Montserrat--text",t.mobile?"text-center align-center":"align-start ml-10"]),width:"500px"},{default:s(()=>[e(i,{class:"backgrounded d-flex flex-column px-4 py-3",color:"secondary"},{default:s(()=>[l("span",O,d(m.name),1),l("span",A,d(m.fonction),1)]),_:1}),l("span",{class:a(["mt-8 nous-description backgrounded",t.mobile?"mx-3":""])},d(m.description),3),e(r,{class:"ml-0 mt-5 backgrounded",text:n.$t("cta.contact"),to:n.localePath("/contact"),small:"",bold:""},null,8,["text","to"])]),_:1},8,["class"])]),_:1})}const X=v(M,[["render",L],["__scopeId","data-v-4dd840fd"]]),G={name:"",setup(){return{mobile:w()}}};function J(n,p,m,t,y,k){const i=o("v-sheet"),r=o("v-img");return c(),f(i,{position:"relative",class:"centering ma-auto backgrounded",height:t.mobile?"400px":"500px","min-width":t.mobile?"100px":""},{default:s(()=>[e(i,{class:"ensemble-text-container backgrounded pb-3 pt-1 mx-5"},{default:s(()=>[e(i,{class:"ensemble-text text-text text-center text-uppercase py-3"},{default:s(()=>[V(d(n.$t("nous.ensemble")),1)]),_:1})]),_:1}),e(r,{src:"/ensemble.svg",height:"100%","max-width":"90%"})]),_:1},8,["height","min-width"])}const K=v(G,[["render",J],["__scopeId","data-v-8afd1b11"]]),Q={name:"NousEquipe",components:{ClassicTitle:E,HorizontalDivider:S},setup(){return{mobile:w(),modules:[q,j]}}};function R(n,p,m,t,y,k){const i=o("HorizontalDivider"),r=o("ClassicTitle"),_=o("v-sheet"),g=o("v-img"),u=B,x=T;return c(),f(_,{class:a(["centering mx-auto flex-wrap flex-wrap-reverse",t.mobile?"":"mb-15"]),color:"blue"},{default:s(()=>[e(_,{class:a(["mb-8 d-flex flex-column backgrounded",t.mobile?"align-center":"pa-2"]),position:"relative"},{default:s(()=>[e(_,{width:t.mobile?"85%":"450px",class:a(["d-flex flex-column bloc-title-text",[t.mobile?"align-start":"align-end",t.mobile?"mb-5":"ma-auto pr-10"]])},{default:s(()=>[e(i),e(r,{class:a(["mt-3 mb-4",t.mobile?"medium":""]),text:[n.$t("nous.equipe.title")],left:t.mobile,right:!t.mobile},null,8,["text","class","left","right"]),e(i),l("p",{class:a(["bloc-text mt-8",t.mobile?"text-left":"text-right"])},d(n.$t("nous.equipe.text")),3),l("p",{class:a(["bloc-text mt-1",t.mobile?"text-left":"text-right"])},[l("b",null,d(n.$t("nous.equipe.last")),1)],2)]),_:1},8,["width","class"])]),_:1},8,["class"]),e(x,{class:"flex-grow-0 nous-carousel mx-0",slidesPerView:(t.mobile,"auto"),spaceBetween:t.mobile?10:30,pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!0},modules:t.modules},{default:s(()=>[e(u,null,{default:s(()=>[e(g,{src:"/pictures/equipe-1.jpg"})]),_:1}),e(u,null,{default:s(()=>[e(g,{src:"/pictures/equipe-2.jpg"})]),_:1}),e(u,null,{default:s(()=>[e(g,{src:"/pictures/equipe-3.jpg"})]),_:1}),e(u,null,{default:s(()=>[e(g,{src:"/pictures/equipe-4.jpg"})]),_:1}),e(u,null,{default:s(()=>[e(g,{src:"/pictures/equipe-5.jpg"})]),_:1})]),_:1},8,["slidesPerView","spaceBetween","modules"])]),_:1},8,["class"])}const U=v(Q,[["render",R],["__scopeId","data-v-3abf1c1e"]]),W={name:"CreationsPage",components:{ClassicTitle:E,HorizontalDivider:S,ClassicButton:I,PageTitle:F,NousPerson:X,NousEnsemble:K,NousEquipe:U},setup(){const n=w(),{t:p}=$(),m=[{name:p("nous.engagements.engag1"),image:"/pictures/innovation.jpg",slug:"innovation"},{name:p("nous.engagements.engag2"),image:"/pictures/precision.jpg",slug:"precision"},{name:p("nous.engagements.engag3"),image:"/pictures/emerveillement.jpg",slug:"emerveillement"}];return{mobile:n,engagements:m,modules:[q,j]}}},Y={class:"mb-15"},Z={class:"mb-100"},ee={class:"centering-column"},te={class:"engagement-title"},ne={class:"engagement-title engagement-mobile-title"};function se(n,p,m,t,y,k){const i=o("PageTitle"),r=o("NousPerson"),_=o("NousEnsemble"),g=o("NousEquipe"),u=o("HorizontalDivider"),x=o("ClassicTitle"),C=o("v-sheet"),z=o("v-img"),D=B,H=T;return c(),h("div",Y,[e(i,{class:"nous-title",text:n.$t("nous.title")},null,8,["text"]),e(r,{class:a(t.mobile?"mb-5":"mb-15"),name:n.$t("nous.nadia.name"),fonction:n.$t("nous.nadia.fonction"),description:n.$t("nous.nadia.description"),image:"nadia"},null,8,["class","name","fonction","description"]),e(r,{class:"mb-16",name:n.$t("nous.marc.name"),fonction:n.$t("nous.marc.fonction"),description:n.$t("nous.marc.description"),image:"marc"},null,8,["name","fonction","description"]),l("div",Z,[e(_)]),l("div",{class:a(t.mobile?"mb-10":"mb-100")},[e(g)],2),l("div",ee,[e(u),e(x,{class:a(["my-4 small",t.mobile?"medium":""]),text:[n.$t("nous.engagements.title")],left:t.mobile},null,8,["text","class","left"]),e(u)]),t.mobile?(c(),f(H,{key:1,class:"engagements-carousel mx-5 mt-10 mb-15",slidesPerView:"auto",spaceBetween:"10",pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!0},modules:t.modules},{default:s(()=>[(c(!0),h(N,null,P(t.engagements,b=>(c(),f(D,null,{default:s(()=>[e(z,{width:"100%","aspect-ratio":"3/2",src:b.image},null,8,["src"]),l("span",ne,d(b.name),1)]),_:2},1024))),256))]),_:1},8,["modules"])):(c(),f(C,{key:0,class:"mt-10 mb-15 d-flex justify-center flex-wrap"},{default:s(()=>[(c(!0),h(N,null,P(t.engagements,b=>(c(),h("div",{class:a(["parent flex-grow-0",(t.mobile,"")])},[l("div",{class:a(["child",b.slug])},null,2),l("span",te,d(b.name),1)],2))),256))]),_:1})),e(C,{class:a(["d-flex flex-column nous-catch",t.mobile?"canvas backgrounded mx-6 pa-4":"mx-auto mb-0 mt-10 align-center"]),"max-width":t.mobile?"":"600px"},{default:s(()=>[e(x,{class:"my-4 small",text:[n.$t("nous.end")]},null,8,["text"])]),_:1},8,["max-width","class"])])}const re=v(W,[["render",se],["__scopeId","data-v-b0ad611e"]]);export{re as default};