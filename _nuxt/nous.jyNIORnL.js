import{a1 as o,a3 as _,a4 as s,a2 as c,ac as l,af as a,m as e,_ as f,X as V,ai as k,aj as B,al as P,ak as j,ad as L,ae as M,ab as v,F as C,am as N}from"./swiper-vue.eSEHy2GP.js";import{i as h,C as S}from"./displayHelpers.ixKL4zhp.js";import{H as I}from"./HorizontalDivider.GcVRc_zs.js";import{C as T}from"./ClassicButton.m0Zlnfbt.js";import{P as A}from"./PageTitle.Gnh-xf3y.js";import{_ as w}from"./entry.TwaBtNr8.js";const F={name:"NousPerson",components:{ClassicButton:T},props:{name:{type:String,default:""},fonction:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""}},setup(){return{mobile:h()}}},O={class:"nous-name text-uppercase"},X={class:"nous-fonction"};function $(n,g,u,t,E,q){const i=o("v-sheet"),m=o("ClassicButton"),d=o("v-container");return c(),_(d,{class:"d-flex justify-center flex-wrap"},{default:s(()=>[l("div",{class:a(["parent",t.mobile?"mb-8":"mr-10 mb-10"])},[l("div",{class:a(["child",u.image])},null,2)],2),e(i,{class:a(["d-flex flex-column Montserrat--text",t.mobile?"text-center align-center":"align-start ml-10"]),width:"500px"},{default:s(()=>[e(i,{class:"backgrounded d-flex flex-column px-4 py-3",color:"secondary"},{default:s(()=>[l("span",O,f(u.name),1),l("span",X,f(u.fonction),1)]),_:1}),l("span",{class:a(["mt-8 nous-description backgrounded",t.mobile?"mx-3":""])},f(u.description),3),e(m,{class:"ml-0 mt-5 backgrounded",text:n.$t("cta.contact"),to:n.localePath("/contact"),small:"",bold:""},null,8,["text","to"])]),_:1},8,["class"])]),_:1})}const G=w(F,[["render",$],["__scopeId","data-v-4dd840fd"]]),J={name:"",setup(){return{mobile:h()}}};function K(n,g,u,t,E,q){const i=o("v-sheet"),m=o("v-img");return c(),_(i,{position:"relative",class:"centering ma-auto backgrounded",height:t.mobile?"400px":"500px","min-width":t.mobile?"100px":""},{default:s(()=>[e(i,{class:"ensemble-text-container backgrounded pb-3 pt-1 mx-5"},{default:s(()=>[e(i,{class:"ensemble-text text-text text-center text-uppercase py-3"},{default:s(()=>[V("Ensemble ils fondent les bonnes manières")]),_:1})]),_:1}),e(m,{src:"ensemble.svg",height:"100%","max-width":"90%"})]),_:1},8,["height","min-width"])}const Q=w(J,[["render",K],["__scopeId","data-v-b6aebc72"]]),R={name:"NousEquipe",components:{ClassicTitle:S,HorizontalDivider:I},setup(){return{mobile:h(),modules:[k,B]}}},U=n=>(L("data-v-bc33f836"),n=n(),M(),n),W=U(()=>l("b",null,"Chez Les Bonnes Manières, vous trouverez un esprit d’équipe comme nulle part ailleurs.",-1)),Y=[W];function Z(n,g,u,t,E,q){const i=o("HorizontalDivider"),m=o("ClassicTitle"),d=o("v-sheet"),p=o("v-img"),r=P,x=j;return c(),_(d,{class:a(["centering mx-auto flex-wrap flex-wrap-reverse",t.mobile?"":"mb-15"]),color:"blue"},{default:s(()=>[e(d,{class:a(["mb-8 d-flex flex-column backgrounded",t.mobile?"align-center":"pa-2"]),position:"relative"},{default:s(()=>[e(d,{width:t.mobile?"85%":"450px",class:a(["d-flex flex-column bloc-title-text",[t.mobile?"align-start":"align-end",t.mobile?"mb-5":"ma-auto pr-10"]])},{default:s(()=>[e(i),e(m,{class:a(["mt-3 mb-4 small",t.mobile?"medium":""]),text:["L équipe"],left:t.mobile,right:!t.mobile},null,8,["class","left","right"]),e(i),l("p",{class:a(["bloc-text mt-8",t.mobile?"text-left":"text-right"])}," L’Agence « Les Bonnes Manières » se démarque grâce à ses valeurs et son état d’esprit unique. Notre sens de l’engagement et du service, partagé par une équipe unie et soudée, vous garantit une implication totale dans votre projet tant en France qu’à l’international. Chaque membre de l’équipe met un point d’honneur à tisser des liens privilégiés et de confiance avec son client car nous sommes convaincus que les meilleurs projets résultent d’une collaboration dans la confiance, la transparence, et la bienveillance mutuelle. ",2),l("p",{class:a(["bloc-text mt-1",t.mobile?"text-left":"text-right"])},Y,2)]),_:1},8,["width","class"])]),_:1},8,["class"]),e(x,{class:"flex-grow-0 nous-carousel mx-0",slidesPerView:(t.mobile,"auto"),spaceBetween:t.mobile?10:30,pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!0},modules:t.modules},{default:s(()=>[e(r,null,{default:s(()=>[e(p,{src:"/pictures/equipe-1.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(p,{src:"/pictures/equipe-2.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(p,{src:"/pictures/equipe-3.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(p,{src:"/pictures/equipe-4.jpg"})]),_:1}),e(r,null,{default:s(()=>[e(p,{src:"/pictures/equipe-5.jpg"})]),_:1})]),_:1},8,["slidesPerView","spaceBetween","modules"])]),_:1},8,["class"])}const ee=w(R,[["render",Z],["__scopeId","data-v-bc33f836"]]),te={name:"CreationsPage",components:{ClassicTitle:S,HorizontalDivider:I,ClassicButton:T,PageTitle:A,NousPerson:G,NousEnsemble:Q,NousEquipe:ee},setup(){return{mobile:h(),engagements:[{name:"Innovation",image:"/pictures/innovation.jpg"},{name:"Précision",image:"/pictures/precision.jpg"},{name:"Émerveillement",image:"/pictures/emerveillement.jpg"}],modules:[k,B]}}},ne={class:"mb-15"},se={class:"mb-100"},oe={class:"centering-column"},ae={class:"engagement-title"},le={class:"engagement-title engagement-mobile-title"};function ie(n,g,u,t,E,q){const i=o("PageTitle"),m=o("NousPerson"),d=o("NousEnsemble"),p=o("NousEquipe"),r=o("HorizontalDivider"),x=o("ClassicTitle"),y=o("v-sheet"),z=o("v-img"),D=P,H=j;return c(),v("div",ne,[e(i,{class:"nous-title",text:n.$t("nous.title")},null,8,["text"]),e(m,{class:a(t.mobile?"mb-5":"mb-15"),name:n.$t("nous.nadia.name"),fonction:n.$t("nous.nadia.fonction"),description:n.$t("nous.nadia.description"),image:"nadia"},null,8,["class","name","fonction","description"]),e(m,{class:"mb-16",name:n.$t("nous.marc.name"),fonction:n.$t("nous.marc.fonction"),description:n.$t("nous.marc.description"),image:"marc"},null,8,["name","fonction","description"]),l("div",se,[e(d)]),l("div",{class:a(t.mobile?"mb-10":"mb-100")},[e(p)],2),l("div",oe,[e(r),e(x,{class:a(["my-4 small",t.mobile?"medium":""]),text:["Nos engagements"],left:t.mobile},null,8,["class","left"]),e(r)]),t.mobile?(c(),_(H,{key:1,class:"engagements-carousel mx-5 mt-10 mb-15",slidesPerView:"auto",spaceBetween:"10",pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!0},modules:t.modules},{default:s(()=>[(c(!0),v(C,null,N(t.engagements,b=>(c(),_(D,null,{default:s(()=>[e(z,{src:b.image},null,8,["src"]),l("span",le,f(b.name),1)]),_:2},1024))),256))]),_:1},8,["modules"])):(c(),_(y,{key:0,class:"mt-10 mb-15 d-flex justify-center flex-wrap"},{default:s(()=>[(c(!0),v(C,null,N(t.engagements,b=>(c(),v("div",{class:a(["parent flex-grow-0",(t.mobile,"")])},[l("div",{class:a(["child",b.name])},null,2),l("span",ae,f(b.name),1)],2))),256))]),_:1})),e(y,{class:a(["d-flex flex-column nous-catch",t.mobile?"canvas backgrounded mx-6 pa-4":"mx-auto mb-0 mt-10 align-center"]),"max-width":t.mobile?"":"600px"},{default:s(()=>[e(x,{class:"my-4 small",text:["“Nous apposons notre signature comme gage de qualité.“"]},null,8,["text"])]),_:1},8,["max-width","class"])])}const _e=w(te,[["render",ie],["__scopeId","data-v-0460be80"]]);export{_e as default};
