import{d as r,e as u,o as c,c as l,r as d,n as f,b as m,I as s,a1 as y,u as h,h as b,l as A,a2 as g,a3 as _,a4 as P,a5 as v,a6 as C,a7 as w,a8 as E,a9 as R,aa as S,ab as O,ac as T,ad as j,ae as D,af as $}from"./chunks/framework.1599cab3.js";import{t as x}from"./chunks/theme.a55d0cdd.js";const B=r({name:"yi-button"}),F=r({...B,props:{type:null},setup(e){const t=e,a=u(()=>({[`yi-button--${t.type}`]:t.type}));return(n,N)=>(c(),l("button",{class:f(["yi-button",m(a)])},[d(n.$slots,"default")],2))}}),I=e=>(e.install=t=>{const a=e.name;t.component(a,e)},e),L=I(F),p=Object.freeze(Object.defineProperty({__proto__:null,Button:L},Symbol.toStringTag,{value:"Module"})),V={install:e=>{for(let t in p)e.use(p[t])}},k={...x,enhanceApp:async({app:e})=>{e.use(V)}};function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=i(k),z=r({name:"VitePressApp",setup(){const{site:e}=h();return b(()=>{A(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),g(),_(),P(),o.setup&&o.setup(),()=>v(o.Layout)}});async function M(){const e=H(),t=G();t.provide(C,e);const a=w(e.route);return t.provide(E,a),t.component("Content",R),t.component("ClientOnly",S),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:O}),{app:t,router:e,data:a}}function G(){return T(z)}function H(){let e=s,t;return j(a=>{let n=D(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),$(()=>import(n),[])},o.NotFound)}s&&M().then(({app:e,router:t,data:a})=>{t.go().then(()=>{y(t.route,a.site),e.mount("#app")})});export{M as createApp};