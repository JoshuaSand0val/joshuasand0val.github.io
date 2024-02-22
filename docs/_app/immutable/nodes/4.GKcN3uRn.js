import{s as z,n as $,d as j}from"../chunks/scheduler.LR2eQXLY.js";import{S as I,i as D,f as J,s as S,e as g,g as V,j as x,c as v,k as _,m as B,d as h,a as l,n as H,o as b,b as m,q as G,r as L,u as T,A as N,t as M,l as P,B as k,C as q}from"../chunks/index.weWyDj9-.js";import{M as R}from"../chunks/Meta.Rux1-SV_.js";function F(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const K=[{title:"Hey, Jes!",image:"/projects/joshuasand0val.github.io.png",imageDark:"/projects/joshuasand0val.github.io-dark.png",description:"A personal website showcasing everything about myself, and my work.",url:"/"},{title:"Precolor",description:"A collection of color manipulation tools written in Sass (SCSS).",url:"https://github.com/JoshuaSand0val/Precolor"},{title:"Presized",description:"A collection of resizing tools written in Sass (SCSS).",url:"https://github.com/JoshuaSand0val/Presized"},{title:"Simply Notes!",description:"Simple note taking application with account control.",url:"https://github.com/JesDevBootcamp/simply-notes"}];function O(r,e,s){const t=r.slice();return t[0]=e[s].title,t[1]=e[s].image,t[2]=e[s].imageDark,t[3]=e[s].description,t[4]=e[s].url,t}function Q(r){let e,s,t;return{c(){e=k("svg"),s=k("path"),t=k("path"),this.h()},l(a){e=q(a,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var o=_(e);s=q(o,"path",{"fill-rule":!0,d:!0}),_(s).forEach(h),t=q(o,"path",{"fill-rule":!0,d:!0}),_(t).forEach(h),o.forEach(h),this.h()},h(){l(s,"fill-rule","evenodd"),l(s,"d","M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"),l(t,"fill-rule","evenodd"),l(t,"d","M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"width","100%"),l(e,"height","100%"),l(e,"fill","currentColor"),l(e,"viewBox","-16 -16 48 48")},m(a,o){b(a,e,o),m(e,s),m(e,t)},d(a){a&&h(e)}}}function U(r){let e,s;return{c(){e=g("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,loading:!0,alt:!0,class:!0}),this.h()},h(){j(e.src,s=r[1])||l(e,"src",s),l(e,"loading","lazy"),l(e,"alt",""),l(e,"class","svelte-xsqon2")},m(t,a){b(t,e,a)},d(t){t&&h(e)}}}function W(r){let e,s,t,a,o;return{c(){e=g("img"),t=S(),a=g("img"),this.h()},l(i){e=v(i,"IMG",{src:!0,loading:!0,class:!0,alt:!0}),t=x(i),a=v(i,"IMG",{src:!0,loading:!0,class:!0,alt:!0}),this.h()},h(){j(e.src,s=r[1])||l(e,"src",s),l(e,"loading","lazy"),l(e,"class","system light svelte-xsqon2"),l(e,"alt",""),j(a.src,o=r[2])||l(a,"src",o),l(a,"loading","lazy"),l(a,"class","system dark svelte-xsqon2"),l(a,"alt","")},m(i,c){b(i,e,c),b(i,t,c),b(i,a,c)},d(i){i&&(h(e),h(t),h(a))}}}function X(r){let e,s,t,a,o,i,c,y,w;function p(u,d){return[u[1],u[2]].every(Z)?W:typeof u[1]=="string"?U:Q}let f=p(r)(r);return{c(){e=g("article"),s=g("h2"),t=M(r[0]),a=S(),o=g("a"),f.c(),i=S(),c=g("p"),y=M(r[3]),w=S(),this.h()},l(u){e=v(u,"ARTICLE",{class:!0});var d=_(e);s=v(d,"H2",{class:!0});var E=_(s);t=P(E,r[0]),E.forEach(h),a=x(d),o=v(d,"A",{class:!0,href:!0,target:!0});var A=_(o);f.l(A),A.forEach(h),i=x(d),c=v(d,"P",{class:!0});var C=_(c);y=P(C,r[3]),C.forEach(h),w=x(d),d.forEach(h),this.h()},h(){l(s,"class","title svelte-xsqon2"),l(o,"class","portal svelte-xsqon2"),l(o,"href",r[4]),l(o,"target","_blank"),l(c,"class","description svelte-xsqon2"),l(e,"class","project svelte-xsqon2")},m(u,d){b(u,e,d),m(e,s),m(s,t),m(e,a),m(e,o),f.m(o,null),m(e,i),m(e,c),m(c,y),m(e,w)},p:$,d(u){u&&h(e),f.d()}}}function Y(r){let e,s,t,a,o="My Projects",i,c,y;e=new R({props:{title:"Projects",description:"The various projects undertaken by Joshua Elijah Sandoval."}});let w=F(K),p=[];for(let n=0;n<w.length;n+=1)p[n]=X(O(r,w,n));return{c(){J(e.$$.fragment),s=S(),t=g("div"),a=g("h1"),a.textContent=o,i=S(),c=g("div");for(let n=0;n<p.length;n+=1)p[n].c();this.h()},l(n){V(e.$$.fragment,n),s=x(n),t=v(n,"DIV",{class:!0});var f=_(t);a=v(f,"H1",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-rvn3aq"&&(a.textContent=o),i=x(f),c=v(f,"DIV",{class:!0});var u=_(c);for(let d=0;d<p.length;d+=1)p[d].l(u);u.forEach(h),f.forEach(h),this.h()},h(){l(a,"class","svelte-xsqon2"),l(c,"class","grid svelte-xsqon2"),l(t,"class","container")},m(n,f){H(e,n,f),b(n,s,f),b(n,t,f),m(t,a),m(t,i),m(t,c);for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(c,null);y=!0},p:$,i(n){y||(G(e.$$.fragment,n),y=!0)},o(n){L(e.$$.fragment,n),y=!1},d(n){n&&(h(s),h(t)),T(e,n),N(p,n)}}}const Z=r=>typeof r=="string";class le extends I{constructor(e){super(),D(this,e,null,Y,z,{})}}export{le as component};