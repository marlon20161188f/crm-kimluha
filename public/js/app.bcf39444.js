!function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],c=0,p=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);p.length;)p.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={1:0},o={1:0},l=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{2:1,3:1,4:1,5:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{2:"c63de430",3:"aab2ad9f",4:"aab2ad9f",5:"84df3771",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",o=u.p+a,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var i=l[s],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===a||c===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++)if((c=(i=d[s]).getAttribute("data-href"))===a||c===o)return t();var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete r[e],p.parentNode.removeChild(p),n(l)},p.href=o,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=function(e){return u.p+"js/"+({}[e]||e)+"."+{2:"788b2349",3:"2ac7002e",4:"dc08ff37",5:"84d5044a",6:"cac50e21",7:"762b330a",8:"d2e5d57c",9:"5396b096",10:"563f0bdf"}[e]+".js"}(e);var i=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=i;l.push([0,0]),n()}({0:function(e,t,n){e.exports=n("2f39")},2635:function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t),n("ac1f"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var a=n("2b0e"),r=n("1f91"),o=n("b05d"),l=n("18d6"),u=n("2a19");a.a.use(o.a,{config:{},lang:r.a,plugins:{LocalStorage:l.a,Notify:u.a}});var s={name:"App"},i=n("2877"),c=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,d=n("2f62"),p=n("bc3a"),f=n.n(p),m={namespaced:!0,state:{logged:!1,user:l.a.getItem("user"),token:l.a.getItem("token"),menu:l.a.getItem("menu")},mutations:{SET_TOKEN(e,t){e.token=t,l.a.set("token",t)},SET_LOGGED(e,t){e.logged=t},setUser(e,t){e.user=t,l.a.set("user",t)},setMenu(e,t){e.menu=t,l.a.set("menu",t)}},actions:{async token_login({dispatch:e,commit:t},n){try{const{data:a}=await f.a.post("/api/auth/login",n);t("SET_TOKEN",a),await e("me")}catch(e){t("SET_LOGGED",!1),t("SET_TOKEN",null)}},async token_logout({commit:e}){await f.a.post("/api/auth/logout"),e("SET_TOKEN",null),e("SET_LOGGED",!1),e("setUser",null)},async me({commit:e}){try{await f.a.get("/api/auth/data").then((t=>{e("SET_LOGGED",!0),e("setUser",t.data.user)}))}catch(t){e("SET_LOGGED",!1),e("setUser",null),e("setMenu",null)}}}};a.a.use(d.a);var h=function(){return new d.a.Store({modules:{auth:m},strict:!1})},g=n("8c4f");n("ddb0");var b=[{path:"/auth",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"41fd")),children:[{path:"login",component:()=>n.e(10).then(n.bind(null,"b2c5")),name:"login",meta:{requiresAuth:!1}}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"713b")),children:[{path:"/",redirect:"/dashboard",name:"dashboard",meta:{requiresAuth:!0}},{path:"/dashboard",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"fad3")),meta:{requiresAuth:!0}},{path:"/contacts",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"58f9")),meta:{requiresAuth:!0}},{path:"/users",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"c1a9")),meta:{requiresAuth:!0}},{path:"/notifications",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"0d3e")),meta:{requiresAuth:!0}},{path:"/configurations",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"18d2")),meta:{requiresAuth:!0}}]},{path:"*",component:()=>n.e(8).then(n.bind(null,"e51e"))}];a.a.use(g.a);var y=function(){const e=new g.a({scrollBehavior:()=>({x:0,y:0}),routes:b,mode:"history",base:"/"});return e.beforeEach(((e,t,n)=>{let a=null;return l.a.has("token")&&(a=l.a.getItem("token"),"null"===a&&(a=null)),"login"!==e.name||_.isNull(a)?e.meta.requiresAuth&&_.isNull(a)?n({name:"login"}):n():n({name:"dashboard"})})),e};f.a.defaults.baseURL="/",f.a.interceptors.request.use((e=>{const t=l.a.getItem("token");return null!=t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e.response))),a.a.prototype.$axios=f.a,a.a.prototype.$axios.interceptors.response.use((e=>e),(e=>{if(e.response){if(401===e.response.status&&(l.a.remove("token"),location.href="/auth/login"),422===e.response.status){let t=[],n="";return _.forEach(e.response.data.errors,((e,a)=>{t[a]=e[0],n+=e[0]+"<br/>"})),u.a.create({message:n,html:!0,type:"negative",timeout:5e3}),Promise.reject(t)}return 500===e.response.status&&u.a.create({message:e.response.data.message,type:"negative",icon:"error"}),Promise.reject(e)}}));var v={name:"XInput",props:{label:{type:String,default:null},value:{default:""},dense:{type:Boolean,default:!0},inputClass:{type:String,default:null},disable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},autogrow:{type:Boolean,default:!1},counter:{type:Boolean,default:!1},maxLength:{default:null},error:{default:null}},data:()=>({}),methods:{handleInput(e){this.$emit("input",e)}}},w=(n("40ff"),n("27f9")),E=n("8572"),S=n("eebe"),O=n.n(S),x=Object(i.a)(v,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("q-input",{staticClass:"x-input",attrs:{label:e.label,dense:"",outlined:"",autogrow:e.autogrow,counter:e.counter,maxlength:e.maxLength,value:e.value,"input-class":e.inputClass,disable:e.disable,readonly:e.readonly,error:!!e.error,"no-error-icon":!0,dense:e.dense},on:{input:function(t){return e.handleInput(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[e._t("append")]},proxy:!0}],null,!0)})}),[],!1,null,"515f264a",null),P=x.exports;O()(x,"components",{QInput:w.a,QField:E.a});var k={name:"XSelect",props:{label:{type:String},value:{default:""},dense:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},options:{default:[]},optionValue:{type:String,default:"id"},optionLabel:{type:String,default:"name"},error:{default:null},showButtonNew:{type:Boolean,default:!1},myClass:{type:String,default:""}},methods:{handleInput(e){this.$emit("input",e)}}},T=(n("e312"),n("ddd8")),j=n("9c40"),B=Object(i.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[n("q-select",{staticClass:"x-select",attrs:{label:e.label,value:e.value,readonly:e.readonly,disable:e.disable,clearable:e.clearable,outlined:"",dense:e.dense,"options-dense":"",options:e.options,"option-value":e.optionValue,"option-label":e.optionLabel,"emit-value":"","map-options":"",error:!!e.error,"no-error-icon":!0},on:{input:function(t){return e.handleInput(t)}},scopedSlots:e._u([e.showButtonNew?{key:"after",fn:function(){return[n("q-btn",{attrs:{size:"sm",round:"",flat:"",icon:"fal fa-plus"},on:{click:function(t){return t.preventDefault(),e.$emit("click-new")}}})]},proxy:!0}:null],null,!0)})],1)}),[],!1,null,"4364f3f8",null),L=B.exports;O()(B,"components",{QSelect:T.a,QBtn:j.a,QField:E.a});var q={name:"XLoading",props:{loading:{type:Boolean,default:!1}}},A=n("74f7"),I=n("8380"),N=Object(i.a)(q,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-inner-loading",{attrs:{showing:e.loading}},[n("q-spinner-dots",{attrs:{size:"50px",color:"primary"}})],1)}),[],!1,null,null,null),C=N.exports;O()(N,"components",{QInnerLoading:A.a,QSpinnerDots:I.a});var $=async({Vue:e})=>{e.component("XInput",P),e.component("XSelect",L),e.component("XLoading",C)},G=n("2ef0"),D=n.n(G),Q=({Vue:e})=>{e.prototype.$_=D.a};!async function(){const{app:e,store:t,router:n}=await async function(){const e=await h(a.a),t=await y(a.a);return e.$router=t,{app:{router:t,store:e,render:e=>e(c),el:"#q-app"},store:e,router:t}}();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},l=window.location.href.replace(window.location.origin,""),u=[void 0,$,Q];for(let s=0;!1===r&&s<u.length;s++)if("function"==typeof u[s])try{await u[s]({app:e,router:n,store:t,Vue:a.a,ssrContext:null,redirect:o,urlPath:l,publicPath:"/"})}catch(e){return e&&e.url?void(window.location.href=e.url):void console.error("[Quasar] boot error:",e)}!0!==r&&new a.a(e)}()},"31cd":function(e,t,n){},"40ff":function(e,t,n){"use strict";n("2635")},"75dc":function(e,t,n){},e312:function(e,t,n){"use strict";n("75dc")}});
