(this.webpackJsonpboilerplate=this.webpackJsonpboilerplate||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"userState",(function(){return O}));var n=a(0),o=a.n(n),c=a(13),l=a.n(c),i=(a(40),a(30)),s=a(12),u=a(32),m=a.n(u);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={users:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/GET_USERS":return d({},e,{users:t.payload});default:return e}},v=function(){return function(e){m.a.get("/users").then((function(t){e({type:"users/GET_USERS",payload:t.data})}))}};var p=a(16),b=a(9),h=function(e){return o.a.createElement("div",{className:"Container"},o.a.createElement("header",{id:"Home"},o.a.createElement("div",{className:"Logo"},"Logo"),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"Name"},"Hey, my name is John Carbajal, and i am a full stack web developer"))),o.a.createElement("div",{className:"NavBar"},o.a.createElement("div",{id:"NavCon"},o.a.createElement("a",{href:"#Home"},"HOME"),o.a.createElement("a",{href:"#About"},"ABOUT"),o.a.createElement("a",{href:"#Profolio"},"PROFOLIO"),o.a.createElement("a",{href:"#Contact"},"CONTACT"))),o.a.createElement("main",null,o.a.createElement("div",{className:"Page",id:"About"},"About"),o.a.createElement("div",{className:"Page",id:"Profolio"},"Profolio"),o.a.createElement("div",{className:"Page",id:"Contact"},"Contact")),o.a.createElement("footer",null,"footer"))};var g=function(){var e=function(){var e=Object(s.c)((function(e){return e.userState.users})),t=Object(s.b)();return Object(n.useEffect)((function(){t(v())}),[t]),{users:e}}().users;return console.log(e),o.a.createElement(p.a,null,o.a.createElement(b.a,{exact:!0,path:"/",component:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(10),w=a(34),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,P=Object(y.c)(r),N=j(Object(y.a)(w.a)),S=Object(y.e)(P,N),C=function(e){return o.a.createElement(s.a,{store:S},e.children)};l.a.render(o.a.createElement(C,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));t.default=C}},[[35,1,2]]]);
//# sourceMappingURL=main.39cb3f45.chunk.js.map