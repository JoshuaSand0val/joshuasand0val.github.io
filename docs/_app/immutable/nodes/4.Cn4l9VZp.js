import{s as z,n as w,d as A}from"../chunks/scheduler.LR2eQXLY.js";import{S as D,i as J,f as H,s as S,e as d,g as L,j as k,c as g,k as q,m as I,d as m,a as n,n as T,o as y,b as p,q as G,r as V,u as N,A as B,t as $,l as E}from"../chunks/index.B4uR2p8W.js";/* empty css                                    */import{M as R}from"../chunks/Meta.BJYwSw6R.js";function x(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const F=[{title:"Hey, Jes!",image:"/projects/heyjes.png",imageDark:"/projects/heyjes-dark.png",description:"A personal website showcasing everything about myself, and my work.",url:"/"},{title:"Semantic Props",description:"A collection of semantic CSS custom properties and classes.",url:"https://github.com/JoshuaSand0val/semantic-props"},{title:"Precolor",description:"A collection of color manipulation tools written in Sass (SCSS).",url:"https://github.com/JoshuaSand0val/Precolor"},{title:"Presized",description:"A collection of resizing tools written in Sass (SCSS).",url:"https://github.com/JoshuaSand0val/Presized"},{title:"Simply Notes!",description:"Simple note taking application with account control.",url:"https://github.com/JesDevBootcamp/simply-notes"}];function K(l,e,s){const t=l.slice();return t[0]=e[s].title,t[1]=e[s].image,t[2]=e[s].imageDark,t[3]=e[s].description,t[4]=e[s].url,t}function O(l){let e;function s(o,i){return[o[1],o[2]].every(Y)?U:Q}let a=s(l)(l);return{c(){e=d("a"),a.c(),this.h()},l(o){e=g(o,"A",{class:!0,href:!0,target:!0});var i=q(e);a.l(i),i.forEach(m),this.h()},h(){n(e,"class","project-portal svelte-oe2bqs"),n(e,"href",l[4]),n(e,"target","_blank")},m(o,i){y(o,e,i),a.m(e,null)},d(o){o&&m(e),a.d()}}}function Q(l){let e,s;return{c(){e=d("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,loading:!0,alt:!0,class:!0}),this.h()},h(){A(e.src,s=l[1])||n(e,"src",s),n(e,"loading","lazy"),n(e,"alt",""),n(e,"class","svelte-oe2bqs")},m(t,a){y(t,e,a)},d(t){t&&m(e)}}}function U(l){let e,s,t,a,o;return{c(){e=d("img"),t=S(),a=d("img"),this.h()},l(i){e=g(i,"IMG",{class:!0,src:!0,loading:!0,alt:!0}),t=k(i),a=g(i,"IMG",{class:!0,src:!0,loading:!0,alt:!0}),this.h()},h(){n(e,"class","--semantic light svelte-oe2bqs"),A(e.src,s=l[1])||n(e,"src",s),n(e,"loading","lazy"),n(e,"alt",""),n(a,"class","--semantic dark svelte-oe2bqs"),A(a.src,o=l[2])||n(a,"src",o),n(a,"loading","lazy"),n(a,"alt","")},m(i,c){y(i,e,c),y(i,t,c),y(i,a,c)},d(i){i&&(m(e),m(t),m(a))}}}function W(l){let e,s,t,a,o,i,c,_,j,u,r=`<a href="${l[4]}" target="_blank">Learn More <i class="bi bi-chevron-right"></i></a>`,f,h=typeof l[1]=="string"&&O(l);return{c(){e=d("div"),s=d("article"),t=d("h2"),a=$(l[0]),o=S(),h&&h.c(),i=S(),c=d("p"),_=$(l[3]),j=S(),u=d("span"),u.innerHTML=r,f=S(),this.h()},l(v){e=g(v,"DIV",{class:!0});var P=q(e);s=g(P,"ARTICLE",{class:!0});var b=q(s);t=g(b,"H2",{class:!0});var C=q(t);a=E(C,l[0]),C.forEach(m),o=k(b),h&&h.l(b),i=k(b),c=g(b,"P",{class:!0});var M=q(c);_=E(M,l[3]),M.forEach(m),j=k(b),u=g(b,"SPAN",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-1emrbo8"&&(u.innerHTML=r),b.forEach(m),f=k(P),P.forEach(m),this.h()},h(){n(t,"class","project-title svelte-oe2bqs"),n(c,"class","project-description svelte-oe2bqs"),n(u,"class","project-link svelte-oe2bqs"),n(s,"class","project svelte-oe2bqs"),n(e,"class","grid-item svelte-oe2bqs")},m(v,P){y(v,e,P),p(e,s),p(s,t),p(t,a),p(s,o),h&&h.m(s,null),p(s,i),p(s,c),p(c,_),p(s,j),p(s,u),p(e,f)},p:w,d(v){v&&m(e),h&&h.d()}}}function X(l){let e,s,t,a,o="My Projects",i,c,_;e=new R({props:{title:"Projects",description:"The various projects undertaken by Jes."}});let j=x(F),u=[];for(let r=0;r<j.length;r+=1)u[r]=W(K(l,j,r));return{c(){H(e.$$.fragment),s=S(),t=d("div"),a=d("h1"),a.textContent=o,i=S(),c=d("div");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){L(e.$$.fragment,r),s=k(r),t=g(r,"DIV",{class:!0});var f=q(t);a=g(f,"H1",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-rvn3aq"&&(a.textContent=o),i=k(f),c=g(f,"DIV",{class:!0});var h=q(c);for(let v=0;v<u.length;v+=1)u[v].l(h);h.forEach(m),f.forEach(m),this.h()},h(){n(a,"class","svelte-oe2bqs"),n(c,"class","grid svelte-oe2bqs"),n(t,"class","container")},m(r,f){T(e,r,f),y(r,s,f),y(r,t,f),p(t,a),p(t,i),p(t,c);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(c,null);_=!0},p:w,i(r){_||(G(e.$$.fragment,r),_=!0)},o(r){V(e.$$.fragment,r),_=!1},d(r){r&&(m(s),m(t)),N(e,r),B(u,r)}}}const Y=l=>typeof l=="string";class le extends D{constructor(e){super(),J(this,e,null,X,z,{})}}export{le as component};
