import{j as e,p as t}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as r}from"./index-CswL0fy2.js";import{M as a}from"./index-BuvbpKx8.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-CqubeUtq.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function o(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Theming/CSS variables",parameters:{...t}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"css-variables",children:"CSS variables"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"?path=/docs/components-theme--default",children:e.jsx(s.code,{children:"Theme"})})," component uses ",e.jsx(s.strong,{children:e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variables"})})," to control major parts of your page's theme."]}),`
`,e.jsx(s.p,{children:"All other components in this library use those variables for styling basic colours and typography, helping keep our pages uniform and making it easier to customise the theme. CSS variables also allow our clients to easily change elements of our theme to match their brand."}),`
`,e.jsx(s.p,{children:"This doc explains which variables are set and how you can use them in custom components you create."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Note:"})," CSS variables do not currently affect ",e.jsx(s.a,{href:"https://github.com/reuters-graphics/ai2svelte/",rel:"nofollow",children:"ai2svelte"})," graphics, so you should continue to make sure your colours match the theme of your page directly in Adobe Illustrator for those graphics."]}),`
`]}),`
`,e.jsx(s.h2,{id:"using-css-variables-directly",children:"Using CSS variables directly"}),`
`,e.jsxs(s.p,{children:["If you're new to how CSS variables work, ",e.jsx(s.a,{href:"https://www.youtube.com/watch?v=PHO6TBq_auI",rel:"nofollow",children:"here's a video"})," that does a decent job explaining what they are, how they work and why they're useful."]}),`
`,e.jsxs(s.p,{children:["You can use any of the CSS variables the ",e.jsx(s.code,{children:"Theme"})," component sets in your own code with the ",e.jsx(s.a,{href:"https://www.w3schools.com/css/css3_variables.asp",rel:"nofollow",children:e.jsx(s.code,{children:"var()"})})," function."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<p>My custom text</p>

<style lang="scss">
  p {
    color: var(--theme-colour-text-primary);
    font-family: var(--theme-font-family-sans-serif);
  }
</style>
`})}),`
`,e.jsx(s.h2,{id:"customising-variables",children:"Customising variables"}),`
`,e.jsxs(s.p,{children:["You can redefine any of the above CSS variables in the ",e.jsx(s.code,{children:"<Theme>"})," component. Read more in ",e.jsx(s.a,{href:"/docs/theming-theme--custom-theme",children:"the docs"})," and ",e.jsxs(s.strong,{children:["use the ",e.jsx(s.a,{href:"/docs/theming-theme-builder--docs",children:"Theme builder"})]}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<Theme
  base="light"
  theme="{{
    colour: {
      // This replaces the default text-secondary colour '#666666' for light theme
      'text-secondary': '#213310',
    },
  }}"
>
  <!-- page stuff -->
</Theme>
`})}),`
`,e.jsx(s.h2,{id:"adding-extra-variables",children:"Adding extra variables"}),`
`,e.jsxs(s.p,{children:["You can even add custom variables through the ",e.jsx(s.code,{children:"Theme"})," component."]}),`
`,e.jsxs(s.p,{children:["For example, let's say you want to define a border radius for some card elements on your page. You can add a custom property to the ",e.jsx(s.code,{children:"theme"})," prop like this:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<Theme
  base="light"
  theme="{{
    style: {
      'border-radius': '22px',
    },
  }}"
>
  <!-- page stuff -->
</Theme>
`})}),`
`,e.jsx(s.p,{children:"... and then access the CSS variable in your code like this:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<div class="card"></div>

<style lang="scss">
  .card {
    border-radius: var(--theme-style-border-radius);
  }
</style>
`})}),`
`,e.jsxs(s.p,{children:["Using the ",e.jsx(s.code,{children:"Theme"})," component for your own CSS variables helps unify important style values across a project. It also lets clients more easily customise those values for whatever matches their brand."]}),`
`,e.jsx(s.p,{children:"You can also change a variable's value based on some condition. For example, to set a smaller border radius on mobile screens, you might:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<script>
  // other code

  let windowWidth;
<\/script>

<svelte:window bind:innerWidth="{windowWidth}" />

<Theme
  base="light"
  theme="{{
    style: {
      'border-radius': windowWidth > 475 ? '22px' : '11px',
    },
  }}"
>
  <!-- page stuff -->
</Theme>
`})})]})}function j(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
