(function(e){function t(t){for(var s,r,c=t[0],o=t[1],d=t[2],u=0,v=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(v.length)v.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0050":function(e,t,a){},"0df0":function(e,t,a){"use strict";a("162f")},"162f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),i={id:"app"},n=Object(s["h"])("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"},null,-1),r={id:"maincontainer",class:"card xyz-in",xyz:"fade up"},c=Object(s["h"])("div",null,[Object(s["h"])("div",{class:"clock"},"22:12"),Object(s["h"])("div",{class:"notIcons"},[Object(s["h"])("img",{src:"https://i.ibb.co/b6p3Z4N/not-icons.png",alt:"not-icons",border:"0"})])],-1),o={key:1},d={key:0},l={class:"xyz-in",xyz:"fade up"},u=Object(s["h"])("div",{class:"iphone_bar"},null,-1);function v(e,t,a,v,f,b){var p=Object(s["p"])("LoadingScreen"),h=Object(s["p"])("ChatList"),m=Object(s["p"])("test");return Object(s["m"])(),Object(s["g"])("div",i,[n,Object(s["h"])("div",r,[c,Object(s["h"])("div",null,[f.isLoading?(Object(s["m"])(),Object(s["e"])(p,{key:0})):Object(s["f"])("",!0),f.isLoading?Object(s["f"])("",!0):(Object(s["m"])(),Object(s["g"])("div",o))]),f.showWorkflow&&!f.isLoading?(Object(s["m"])(),Object(s["g"])("div",d,[Object(s["h"])("div",l,[Object(s["j"])(h)])])):Object(s["f"])("",!0),f.isLoading?Object(s["f"])("",!0):(Object(s["m"])(),Object(s["g"])("button",{key:1,type:"button",class:"btn btn-primary",style:{margin:"20px 60px 0px 60px"},onClick:t[0]||(t[0]=function(e){return f.showWorkflow=!0})},Object(s["q"])(f.name2),1)),u]),Object(s["j"])(m)])}var f=function(e){return Object(s["o"])("data-v-2ac49832"),e=e(),Object(s["n"])(),e},b=f((function(){return Object(s["h"])("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"},null,-1)})),p=f((function(){return Object(s["h"])("div",{class:"card xyz-in",xyz:"fade up"},[Object(s["h"])("div",{class:"centredelement"},[Object(s["h"])("div",{class:"half-circle-spinner"},[Object(s["h"])("div",{class:"circle circle-1"}),Object(s["h"])("div",{class:"circle circle-2"})])])],-1)})),h=[b,p];function m(e,t,a,i,n,r){return Object(s["m"])(),Object(s["g"])("div",null,h)}var j={name:"test",data:function(){return{}}},O=(a("b238"),a("6b0d")),g=a.n(O);const y=g()(j,[["render",m],["__scopeId","data-v-2ac49832"]]);var w=y,k={id:"chatlist"},x=Object(s["i"])('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" data-v-21792f59><h1 class="titlechats" data-v-21792f59>Chat</h1><div class="user" data-v-21792f59><img src="https://i.ibb.co/S7vP88k/user-image-marcos.jpg" alt="user-image-marcos" border="0" data-v-21792f59><div class="username" data-v-21792f59>Marcoos</div><i class="fas fa-chevron-right" data-v-21792f59></i><div class="msgpreview" data-v-21792f59>text preview</div></div><div class="user" data-v-21792f59><img src="https://i.ibb.co/yh14wQs/user-image-bully.jpg" alt="user_image_bully" border="0" data-v-21792f59><div class="username" data-v-21792f59>Oscar clase</div><i class="fas fa-chevron-right" data-v-21792f59></i><div class="msgpreview" data-v-21792f59>text preview</div></div><div class="user" data-v-21792f59><div class="block" data-v-21792f59><img src="https://i.ibb.co/S7vP88k/user-image-marcos.jpg" alt="user-image-marcos" border="0" data-v-21792f59><div class="username" data-v-21792f59>Marcoos</div><i class="fas fa-chevron-right" data-v-21792f59></i><div class="msgpreview" data-v-21792f59>text preview </div></div></div><div class="user" data-v-21792f59><div class="block" data-v-21792f59><img src="https://i.ibb.co/yh14wQs/user-image-bully.jpg" alt="user_image_bully" border="0" data-v-21792f59><div class="username" data-v-21792f59>Oscar clase</div><i class="fas fa-chevron-right" data-v-21792f59></i><div class="msgpreview" data-v-21792f59>text preview</div></div></div>',6),L=[x];function _(e,t,a,i,n,r){return Object(s["m"])(),Object(s["g"])("div",k,L)}var S={name:"test",data:function(){return{}}};a("99df");const P=g()(S,[["render",_],["__scopeId","data-v-21792f59"]]);var z=P,W={id:"loading"},F=Object(s["h"])("h1",null,"LOADING",-1),M=[F];function C(e,t,a,i,n,r){return Object(s["m"])(),Object(s["g"])("div",W,M)}var G={name:"Loading"};const E=g()(G,[["render",C]]);var J=E,N={name:"App",components:{test:w,ChatList:z,LoadingScreen:J},data:function(){return{isLoading:!0,showWorkflow:!1,backcolor:"#EEEEEF",name2:"Show Chats",users:[{name:"player",id:0},{name:"Marcos",id:1},{name:"Oscar",id:2},{name:"Marta",id:3}],chatGroups:[{name:"Fiesta Cumple",id:0},{name:"GrupoAcoso",id:1}]}},computed:{},mounted:function(){var e=this;setTimeout((function(){e.isLoading=!1}),500)}};a("0df0");const Q=g()(N,[["render",v]]);var q=Q,D=a("fabc"),I=(a("bbf4"),a("ecee")),T=a("c074"),A=a("ad3d");I["c"].add(T["a"]),Object(s["d"])(q).mount("#app").component("font-awesome-icon",A["a"]).use(D["a"]).config.productionTip=!1},"99df":function(e,t,a){"use strict";a("0050")},b238:function(e,t,a){"use strict";a("e2b2")},e2b2:function(e,t,a){}});
//# sourceMappingURL=app.da95875f.js.map