import{c as K,d as P,e as Q,h as G,f as J,u as H,i as I,_ as Z,C as W,g as X}from"./B20Iwgmb.js";import{b as h,j as Y,t as A,Q as x,C as ee,c as ae,y as j,u as te,a as oe,g as se,l as ne,an as B,r as le,a3 as C,a5 as z,a6 as F,ac as D,_ as M,a1 as _,aj as N,D as m,aa as c,ab as y,k as re,a9 as ie,a0 as S,ao as $}from"./Dl9LHTZm.js";const de=e=>e==="defer"||e===!1;function ue(...e){var O;const a=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(a);let[s,i,o={}]=e;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=K(),u=i,b=()=>P.value,w=()=>t.isHydrating?t.payload.data[s]:t.static.data[s];o.server=o.server??!0,o.default=o.default??b,o.getCachedData=o.getCachedData??w,o.lazy=o.lazy??!1,o.immediate=o.immediate??!0,o.deep=o.deep??P.deep,o.dedupe=o.dedupe??"cancel";const d=o.getCachedData(s,t),T=d!=null;if(!t._asyncData[s]||!o.immediate){(O=t.payload._errors)[s]??(O[s]=P.errorValue);const v=o.deep?h:Y;t._asyncData[s]={data:v(T?d:o.default()),pending:h(!T),error:A(t.payload._errors,s),status:h("idle"),_default:o.default}}const n={...t._asyncData[s]};delete n._default,n.refresh=n.execute=(v={})=>{if(t._asyncDataPromises[s]){if(de(v.dedupe??o.dedupe))return t._asyncDataPromises[s];t._asyncDataPromises[s].cancelled=!0}if(v._initial||t.isHydrating&&v._initial!==!1){const g=v._initial?d:o.getCachedData(s,t);if(g!=null)return Promise.resolve(g)}n.pending.value=!0,n.status.value="pending";const q=new Promise((g,l)=>{try{g(u(t))}catch(k){l(k)}}).then(async g=>{if(q.cancelled)return t._asyncDataPromises[s];let l=g;o.transform&&(l=await o.transform(g)),o.pick&&(l=ce(l,o.pick)),t.payload.data[s]=l,n.data.value=l,n.error.value=P.errorValue,n.status.value="success"}).catch(g=>{if(q.cancelled)return t._asyncDataPromises[s];n.error.value=Q(g),n.data.value=te(o.default()),n.status.value="error"}).finally(()=>{q.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[s])});return t._asyncDataPromises[s]=q,t._asyncDataPromises[s]},n.clear=()=>me(t,s);const p=()=>n.refresh({_initial:!0}),V=o.server!==!1&&t.payload.serverRendered;{const v=oe();if(v&&!v._nuxtOnBeforeMountCbs){v._nuxtOnBeforeMountCbs=[];const l=v._nuxtOnBeforeMountCbs;x(()=>{l.forEach(k=>{k()}),l.splice(0,l.length)}),ee(()=>l.splice(0,l.length))}V&&t.isHydrating&&(n.error.value||d!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):v&&(t.payload.serverRendered&&t.isHydrating||o.lazy)&&o.immediate?v._nuxtOnBeforeMountCbs.push(p):o.immediate&&p();const q=se();if(o.watch){const l=ae(o.watch,()=>n.refresh());q&&j(l)}const g=t.hook("app:data:refresh",async l=>{(!l||l.includes(s))&&await n.refresh()});q&&j(g)}const r=Promise.resolve(t._asyncDataPromises[s]).then(()=>n);return Object.assign(r,n),r}function me(e,a){a in e.payload.data&&(e.payload.data[a]=void 0),a in e.payload._errors&&(e.payload._errors[a]=P.errorValue),e._asyncData[a]&&(e._asyncData[a].data.value=void 0,e._asyncData[a].error.value=P.errorValue,e._asyncData[a].pending.value=!1,e._asyncData[a].status.value="idle"),a in e._asyncDataPromises&&(e._asyncDataPromises[a]&&(e._asyncDataPromises[a].cancelled=!0),e._asyncDataPromises[a]=void 0)}function ce(e,a){const s={};for(const i of a)s[i]=e[i];return s}function R(e,a,s){const[i={},o]=typeof a=="string"?[{},a]:[a,s],t=ne(()=>B(e)),u=i.key||G([o,typeof t.value=="string"?t.value:"",...fe(i)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const b=u===o?"$f"+u:u;if(!i.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:w,lazy:d,default:T,transform:n,pick:p,watch:V,immediate:r,getCachedData:O,deep:v,dedupe:q,...g}=i,l=le({...J,...g,cache:typeof i.cache=="boolean"?void 0:i.cache}),k={server:w,lazy:d,default:T,transform:n,pick:p,immediate:r,getCachedData:O,deep:v,dedupe:q,watch:V===!1?[]:[l,t,...V||[]]};let f;return ue(b,()=>{var L;(L=f==null?void 0:f.abort)==null||L.call(f,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),f=typeof AbortController<"u"?new AbortController:{};const U=B(i.timeout);let E;return U&&(E=setTimeout(()=>f.abort(new DOMException("Request aborted due to timeout.","AbortError")),U),f.signal.onabort=()=>clearTimeout(E)),(i.$fetch||globalThis.$fetch)(t.value,{signal:f.signal,...l}).finally(()=>{clearTimeout(E)})},k)}function fe(e){var s;const a=[((s=B(e.method))==null?void 0:s.toUpperCase())||"GET",B(e.baseURL)];for(const i of[e.params||e.query]){const o=B(i);if(!o)continue;const t={};for(const[u,b]of Object.entries(o))t[B(u)]=B(b);a.push(t)}return a}const pe={name:"Alert",props:{alert:{type:Object,default:void 0}},setup(){const e=H();return{mobile:I(e)}}},ve={key:0,class:"alert-container"},be={class:"mx-2"},ge={key:0,class:"info-text"};function ye(e,a,s,i,o,t){const u=C("v-icon"),b=C("v-btn");return s.alert?(z(),F("div",ve,[D("div",{class:y(["alert elevation-10 d-flex align-center",s.alert.type])},[D("span",be,[M(_(s.alert.msg),1),a[1]||(a[1]=D("br",null,null,-1)),s.alert.info?(z(),F("span",ge,_(s.alert.info),1)):N("",!0)]),m(b,{class:"ml-4",icon:"",variant:"text",onClick:a[0]||(a[0]=w=>e.$emit("close"))},{default:c(()=>[m(u,{color:"white",size:i.mobile?"x-large":""},{default:c(()=>a[2]||(a[2]=[M("mdi-close")])),_:1},8,["size"])]),_:1})],2)])):N("",!0)}const he=Z(pe,[["render",ye],["__scopeId","data-v-9b293880"]]),De=re({name:"ContactForm",components:{ClassicButton:W,Alert:he},props:{backgrounded:{type:Boolean,default:!1}},setup(){const e=h(void 0),a=h(void 0),s=h(void 0),i=h(void 0),o=h(void 0),t=h(void 0),u=h(void 0),b=H(),w=I(b),{t:d}=X(),T=h(!1),n=h(!1),p=h(void 0),V=()=>{e.value=void 0,a.value=void 0,s.value=void 0,i.value=void 0,o.value=void 0,t.value=void 0,u.value=void 0},r=(l,k)=>{R("https://lbmapi.fr/api/sendcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:{status:l,errors:k,name:e.value,email:a.value,phone:s.value,eventtype:i.value,guests:o.value,eventdate:t.value,message:u.value}},"$Q6Bk92EN6B")};return{name:e,email:a,phoneNumber:s,eventType:i,guests:o,eventDate:t,message:u,mobile:w,submitForm:()=>{n.value=!0;try{R("https://formie.io/form/22a5feaf-891c-4c89-a6f1-f72cf6f06cbd",{method:"POST",headers:{"Content-Type":"application/json"},body:{name:e.value,email:a.value,phone:s.value,eventtype:i.value,guests:o.value,eventdate:t.value,message:u.value}},"$QySKacQNfh").then(k=>{if(k.status.value=="success")r("success"),p.value={msg:d("alerts.form.success"),type:"success"},V();else if(k.error.value.data){const f=k.error.value.data.errors;r("error",f),f.email?p.value={msg:d("alerts.form.error.general"),info:d(f.email[0]),type:"error"}:f.name?p.value={msg:d("alerts.form.error.general"),info:d(f.name[0]),type:"error"}:f.message?p.value={msg:d("alerts.form.error.general"),info:d(f.message[0]),type:"error"}:p.value={msg:d("alerts.form.error.general"),info:d("alerts.form.error.basicInfo"),type:"error"}}else p.value={msg:d("alerts.form.error.general"),info:d("alerts.form.error.basicInfo"),type:"error"};n.value=!1,setTimeout(()=>{p.value=void 0},8e3)})}catch{r("error","catch"),p.value={msg:d("alerts.form.error.general"),info:d("alerts.form.error.basicInfo"),type:"error"}}},rules:{required:[l=>!!l||"champs requis"],email:[l=>/.+@.+\..+/.test(l)||!l||"invalid email format"]},form:T,loading:n,alert:p}}}),we={style:{display:"inline-block"}},ke={style:{display:"inline-block"}},qe={style:{display:"inline-block"}},Ce={class:"submit-container"};function Te(e,a,s,i,o,t){const u=C("v-sheet"),b=C("v-icon"),w=C("v-text-field"),d=C("v-select"),T=C("v-textarea"),n=C("ClassicButton"),p=C("v-form"),V=C("Alert");return z(),ie(u,{class:y(["d-flex justify-center",e.mobile?"flex-column align-center":""])},{default:c(()=>[m(u,{width:e.mobile?"90%":"","max-width":e.mobile?"350px":"355px",class:y(["mt-8 d-flex flex-column",e.mobile?"align-start":"align-end mr-5"])},{default:c(()=>[D("h2",{class:y(["pa-1 line-spaced",[e.backgrounded?"backgrounded":"",e.mobile?"small line-spaced text-left":"medium text-right"]])},[D("span",we,_(e.$t("contact.title.line1")),1),D("span",ke,_(e.$t("contact.title.line2")),1),D("span",qe,_(e.$t("contact.title.line3")),1)],2),D("p",{class:y(["classic-text pa-1 mt-4",[e.backgrounded?"backgrounded":"",e.mobile?"text-left break-max":"text-right"]])},_(e.$t("contact.text")),3)]),_:1},8,["width","max-width","class"]),m(u,{width:e.mobile?"90%":"300px","max-width":e.mobile?"350px":"","min-width":"250px",class:"Montserrat--text text--text font-weight-bold mt-6"},{default:c(()=>[m(p,{onSubmit:a[7]||(a[7]=S(()=>{},["prevent"])),modelValue:e.form,"onUpdate:modelValue":a[8]||(a[8]=r=>e.form=r)},{default:c(()=>[m(w,{"hide-details":"",maxlength:"40",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",rules:[e.rules.required[0]],modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e.name=r),autocomplete:"LBM",label:e.$t("contact.form.name")+" *"},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[m(b,{size:"20"},{default:c(()=>a[10]||(a[10]=[M("mdi-account")])),_:1})]),key:"0"}]),1032,["class","rules","modelValue","label"]),m(w,{"hide-details":"",maxlength:"40",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",rules:[e.rules.required[0],e.rules.email[0]],modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=r=>e.email=r),autocomplete:"LBM",label:e.$t("contact.form.email")+" *"},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[m(b,{size:"20"},{default:c(()=>a[11]||(a[11]=[M("mdi-email")])),_:1})]),key:"0"}]),1032,["class","rules","modelValue","label"]),m(w,{"hide-details":"",maxlength:"40",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",modelValue:e.phoneNumber,"onUpdate:modelValue":a[2]||(a[2]=r=>e.phoneNumber=r),autocomplete:"LBM",label:e.$t("contact.form.phone")},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[m(b,{size:"20"},{default:c(()=>a[12]||(a[12]=[M("mdi-phone")])),_:1})]),key:"0"}]),1032,["class","modelValue","label"]),m(w,{"hide-details":"",maxlength:"40",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",modelValue:e.eventType,"onUpdate:modelValue":a[3]||(a[3]=r=>e.eventType=r),autocomplete:"LBM",label:e.$t("contact.form.eventType")},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[m(b,{size:"20"},{default:c(()=>a[13]||(a[13]=[M("mdi-star")])),_:1})]),key:"0"}]),1032,["class","modelValue","label"]),m(d,{"hide-details":"",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",autocomplete:"LBM",modelValue:e.guests,"onUpdate:modelValue":a[4]||(a[4]=r=>e.guests=r),label:e.$t("contact.form.guests"),items:["50 - 150","150 - 300","300 - 500","500 +"]},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[a[14]||(a[14]=D("svg",{height:"20",viewBox:"0 -960 960 960",width:"20"},[D("path",{d:"M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"})],-1))]),key:"0"}]),1032,["class","modelValue","label"]),m(w,{"hide-details":"",maxlength:"50",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",modelValue:e.eventDate,"onUpdate:modelValue":a[5]||(a[5]=r=>e.eventDate=r),autocomplete:"LBM",placeholder:e.$t("contact.form.dateplaceholder"),label:e.$t("contact.form.date")},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[m(b,{size:"20"},{default:c(()=>a[15]||(a[15]=[M("mdi-calendar-month")])),_:1})]),key:"0"}]),1032,["class","modelValue","placeholder","label"]),m(T,{"hide-details":"",maxlength:"400",class:y([e.backgrounded?"backgrounded":"","px-1"]),variant:"underlined",rules:[e.rules.required[0]],autocomplete:"LBM",modelValue:e.message,"onUpdate:modelValue":a[6]||(a[6]=r=>e.message=r),label:e.$t("contact.form.message")+" *","no-resize":"",rows:"2"},$({_:2},[e.mobile?void 0:{name:"prepend-inner",fn:c(()=>[a[16]||(a[16]=D("svg",{height:"20",viewBox:"0 -960 960 960",width:"20"},[D("path",{d:"M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z"})],-1))]),key:"0"}]),1032,["class","rules","modelValue","label"]),D("div",Ce,[m(n,{text:e.$t("contact.form.submit"),class:y([e.backgrounded?"backgrounded":"",e.mobile?"mt-10":"mt-5"]),bold:"",disabled:e.loading||!e.form,loading:e.loading,onClick:S(e.submitForm,["stop"])},null,8,["text","class","disabled","loading","onClick"])])]),_:1},8,["modelValue"])]),_:1},8,["width","max-width"]),m(V,{alert:e.alert,onClose:a[9]||(a[9]=r=>e.alert=void 0)},null,8,["alert"])]),_:1},8,["class"])}const Pe=Z(De,[["render",Te],["__scopeId","data-v-b3edc036"]]);export{Pe as C};
