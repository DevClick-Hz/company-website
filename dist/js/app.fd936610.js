(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b5c":function(t,e,n){},"18a1":function(t,e,n){"use strict";n("bc10")},"233a":function(t,e,n){t.exports=n.p+"img/CEO1.6a8becec.jpg"},"332c":function(t,e,n){t.exports=n.p+"img/CEO2.2067a560.jpg"},"49a9":function(t,e,n){"use strict";n("dd0a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r={data:function(){return{}}},o=r,c=(n("5c0b"),n("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("navbar"),n("landpage"),n("foot")],1)},v=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-menu"},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),n("v-toolbar-title",[t._v("Menu")])],1),n("i",{staticClass:"fas fa-lightbulb",on:{click:t.changeTheme}})]),n("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-settings")])],1),n("v-list-item-title",[t._v("Services")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-group")])],1),n("v-list-item-title",[t._v("Clients")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-email")])],1),n("v-list-item-title",[t._v("Contact us")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-office-building")])],1),n("v-list-item-title",[t._v("About us")])],1)],1)],1)],1)],1)},p=[],h={name:"navbar",data:function(){return{drawer:!1,group:null,darkMode:!0}},methods:{changeTheme:function(){this.darkMode=!this.darkMode}},watch:{darkMode:function(){var t=document.documentElement;this.darkMode?(localStorage.setItem("theme","dark"),t.setAttribute("theme","dark")):(localStorage.setItem("theme","light"),t.setAttribute("theme","light"))}},mounted:function(){var t=document.documentElement,e=localStorage.getItem("theme");"dark"===e?(t.setAttribute("theme","dark"),this.darkMode=!0):(t.setAttribute("theme","light"),this.darkMode=!1)}},_=h,b=(n("cfa4"),Object(c["a"])(_,f,p,!1,null,null,null)),g=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{attrs:{id:"services"}},[t._m(1),n("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")]),n("div",{staticClass:"services"},[n("v-card",{staticClass:"mx-auto"},[n("div",{staticClass:"service-name"},[n("p",[t._v("service 1")])])]),n("v-card",{staticClass:"mx-auto"},[n("div",{staticClass:"service-name"},[n("p",[t._v("service 2")])])]),n("v-card",{staticClass:"mx-auto"},[n("div",{staticClass:"service-name"},[n("p",[t._v("service 3")])])])],1),t._m(2)]),n("div",{attrs:{id:"clients"}},[t._m(3),n("div",{staticClass:"clients"},t._l(t.clients,(function(e,a){return n("div",{key:a,staticClass:"card"},[n("img",{attrs:{src:e.profile,alt:""}}),n("div",{staticClass:"card-text"},[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("h4",[t._v(t._s(e.jobTitle))]),t._m(4,!0)])])})),0)]),t._m(5),t._m(6)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head"}},[n("div",{staticClass:"head"},[n("div",{staticClass:"head-text"},[n("h1",[t._v("Company name")]),n("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")])])]),n("p",[t._v("Our services")]),n("i",{staticClass:"fas fa-long-arrow-alt-down fa-2x"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("i",{staticClass:"fas fa-cog"}),t._v(" Our Services")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[t._v("Know more "),n("i",{staticClass:"fas fa-arrow-right fa-xs"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("i",{staticClass:"fas fa-users"}),t._v(" Our Clients")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("q",[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about-us"}},[a("h1",[a("i",{staticClass:"fas fa-building"}),t._v(" About us")]),a("div",{staticClass:"about"},[a("img",{attrs:{src:n("a46c"),alt:""}}),a("div",{staticClass:"about-text"},[a("p",[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ")]),a("a",{attrs:{href:"#"}},[t._v("Know more "),a("i",{staticClass:"fas fa-arrow-right fa-xs"})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"backTop",attrs:{href:"#head"}},[n("i",{staticClass:"fas fa-arrow-up fa-2x"})])}],C={name:"land",data:function(){return{clients:[{name:"Jack Willson",jobTitle:"CEO at X company",profile:n("233a")},{name:"Hannah Billy",jobTitle:"CEO at Y company",profile:n("332c")},{name:"James Gary",jobTitle:"CEO at Z company",profile:n("cde5")}]}},mounted:function(){var t=document.getElementById("services").offsetTop,e=document.querySelector(".backTop");window.onscroll=function(){window.scrollY>t?e.style.display="block":e.style.display="none"}}},w=C,k=(n("18a1"),n("adbd"),Object(c["a"])(w,y,x,!1,null,"31aa37f3",null)),O=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[n("v-card-text",t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1),n("v-card-text",{staticClass:"white--text pt-0"},[n("h3",[t._v("Contact us :")]),t._v(" "),n("div",{staticClass:"info-group"},[n("i",{staticClass:"fas fa-envelope"}),t._v(" Company@mail.com")]),t._v(" "),n("div",{staticClass:"info-group"},[n("i",{staticClass:"fas fa-phone"}),t._v(" 00962700000000 ")]),n("h3",[t._v("Find us:")]),t._v(" "),n("div",{staticClass:"info-group"},[n("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Jordan,Amman ")])]),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Company")])])],1)],1)},E=[],I={name:"foot",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},$=I,M=(n("49a9"),Object(c["a"])($,j,E,!1,null,"fd3075ac",null)),T=M.exports,L={name:"Home",components:{navbar:g,landpage:O,foot:T}},S=L,A=Object(c["a"])(S,m,v,!1,null,"ac39c932",null),P=A.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],Y={},q=Object(c["a"])(Y,J,H,!1,null,null,null),B=q.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},K=[],z={},D=Object(c["a"])(z,F,K,!1,null,null,null),G=D.exports;a["default"].use(d["a"]);var W=[{path:"/",name:"Home",component:P},{path:"/services",name:"services",component:G},{path:"/about",name:"About",component:B}],X=new d["a"]({mode:"history",base:"/",routes:W}),Z=X,N=n("ce5b"),Q=n.n(N);n("bf40");a["default"].use(Q.a);var R={},U=new Q.a(R);n("8225");a["default"].config.productionTip=!1,new a["default"]({vuetify:U,router:Z,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},8225:function(t,e,n){},"9c0c":function(t,e,n){},a46c:function(t,e,n){t.exports=n.p+"img/about.e6b5de8e.jpg"},adbd:function(t,e,n){"use strict";n("d245")},bc10:function(t,e,n){},cde5:function(t,e,n){t.exports=n.p+"img/CEO3.e4a2ab91.jpg"},cfa4:function(t,e,n){"use strict";n("0b5c")},d245:function(t,e,n){},dd0a:function(t,e,n){}});
//# sourceMappingURL=app.fd936610.js.map