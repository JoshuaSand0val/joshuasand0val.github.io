import{s as O,c as U}from"../chunks/scheduler.LR2eQXLY.js";import{S as j,i as B,f as D,s as E,e as g,t as y,g as I,j as w,c as $,k as C,l as A,d as h,m as N,a as _,n as P,o as H,b as o,p as M,q as V,r as z,u as F}from"../chunks/index.weWyDj9-.js";import{p as G}from"../chunks/stores.D0c0FJ1q.js";import{M as J}from"../chunks/Meta.Xtpqy6HW.js";function K(m){var b;let a,l,e,r,p=m[0].status+"",d,q,i,u=(((b=m[0].error)==null?void 0:b.message)??"Uhh Oh!")+"",v,x,n,S="← Back to Home",c;return a=new J({props:{title:"Error",description:"Something went wrong... an error occurred."}}),{c(){D(a.$$.fragment),l=E(),e=g("div"),r=g("span"),d=y(p),q=E(),i=g("h1"),v=y(u),x=E(),n=g("a"),n.textContent=S,this.h()},l(t){I(a.$$.fragment,t),l=w(t),e=$(t,"DIV",{class:!0});var s=C(e);r=$(s,"SPAN",{class:!0,role:!0});var f=C(r);d=A(f,p),f.forEach(h),q=w(s),i=$(s,"H1",{class:!0});var k=C(i);v=A(k,u),k.forEach(h),x=w(s),n=$(s,"A",{href:!0,"data-svelte-h":!0}),N(n)!=="svelte-15w4rre"&&(n.textContent=S),s.forEach(h),this.h()},h(){_(r,"class","status svelte-1361tq6"),_(r,"role","presentation"),_(i,"class","message svelte-1361tq6"),_(n,"href","/"),_(e,"class","container svelte-1361tq6")},m(t,s){P(a,t,s),H(t,l,s),H(t,e,s),o(e,r),o(r,d),o(e,q),o(e,i),o(i,v),o(e,x),o(e,n),c=!0},p(t,[s]){var f;(!c||s&1)&&p!==(p=t[0].status+"")&&M(d,p),(!c||s&1)&&u!==(u=(((f=t[0].error)==null?void 0:f.message)??"Uhh Oh!")+"")&&M(v,u)},i(t){c||(V(a.$$.fragment,t),c=!0)},o(t){z(a.$$.fragment,t),c=!1},d(t){t&&(h(l),h(e)),F(a,t)}}}function L(m,a,l){let e;return U(m,G,r=>l(0,e=r)),[e]}class X extends j{constructor(a){super(),B(this,a,L,K,O,{})}}export{X as component};