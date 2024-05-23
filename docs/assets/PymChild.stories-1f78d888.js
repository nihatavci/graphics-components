import{S as P,i as v,s as w,D as x,C as D,g as c,z as y,m as d,d as g,t as u,h as f,f as $,j as h,o as j}from"./index-85f88930.js";import{g as k,a as M}from"./spread-8a54911c.js";import{w as A,p as H,M as T,T as N,S as q}from"./collect-stories-fa95313f.js";import{p as z}from"./pym.v1-7344f633.js";import{w as E}from"./withParams-47e2ab71.js";import"./_commonjsHelpers-de833af9.js";const I=`A Pym.js child instance for embeddables.

\`\`\`svelte
<script>
  import { PymChild } from '@reuters-graphics/graphics-components';
<\/script>

<PymChild polling="{500}" />
\`\`\`

You can access the Pym.js child through its store in other components to send custom height updates to parent frames:

\`\`\`svelte
<script>
  import {
    PymChild,
    pymChildStore,
  } from '@reuters-graphics/graphics-components';

  const updateHeight = () => {
    if ($pymChildStore) $pymChildStore.sendHeight();
  };
<\/script>

<PymChild />

<button on:click="{updateHeight}">Update height</button>
\`\`\`
`,O=A(null);function U(p,t,l){let{polling:n=500}=t,r;return x(()=>{r=new z.Child({polling:n}),O.set(r)}),p.$$set=o=>{"polling"in o&&l(0,n=o.polling)},[n]}class _ extends P{constructor(t){super(),v(this,t,U,null,w,{polling:0})}}_.__docgen={version:3,name:"PymChild.svelte",data:[{keywords:[],visibility:"public",description:"Pym.js polling interval",name:"polling",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:500}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function V(p){let t,l,n,r;const o=[p[0]];let a={};for(let s=0;s<o.length;s+=1)a=D(a,o[s]);return t=new _({props:a}),{c(){c(t.$$.fragment),l=y(),n=j("div"),n.textContent="Nothing to see here. 😎"},m(s,i){d(t,s,i),g(s,l,i),g(s,n,i),r=!0},p(s,i){const e=i&1?k(o,[M(s[0])]):{};t.$set(e)},i(s){r||(u(t.$$.fragment,s),r=!0)},o(s){f(t.$$.fragment,s),r=!1},d(s){s&&($(l),$(n)),h(t,s)}}}function Y(p){let t,l,n,r,o,a;const s=[{title:"Components/PymChild"},{component:_},E(I)];let i={};for(let e=0;e<s.length;e+=1)i=D(i,s[e]);return t=new T({props:i}),n=new N({props:{$$slots:{default:[V,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),o=new q({props:{name:"Default"}}),{c(){c(t.$$.fragment),l=y(),c(n.$$.fragment),r=y(),c(o.$$.fragment)},m(e,m){d(t,e,m),g(e,l,m),d(n,e,m),g(e,r,m),d(o,e,m),a=!0},p(e,[m]){const S={};t.$set(S);const C={};m&3&&(C.$$scope={dirty:m,ctx:e}),n.$set(C)},i(e){a||(u(t.$$.fragment,e),u(n.$$.fragment,e),u(o.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),f(n.$$.fragment,e),f(o.$$.fragment,e),a=!1},d(e){e&&($(l),$(r)),h(t,e),h(n,e),h(o,e)}}}class B extends P{constructor(t){super(),v(this,t,null,Y,w,{})}}const b=H(B,{meta:{title:"Components/PymChild"},stories:{"tpl:default":{name:"default",template:!0,source:`<PymChild {...args} />
<div>Nothing to see here. 😎</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","PymChild","withComponentDocs"]}),R=b.meta,W=["Default"],X=b.stories.Default;export{X as Default,W as __namedExportsOrder,R as default};
//# sourceMappingURL=PymChild.stories-1f78d888.js.map
