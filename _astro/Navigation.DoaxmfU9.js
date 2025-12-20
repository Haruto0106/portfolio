import{j as e}from"./jsx-runtime.TBa3i5EZ.js";import{r as i}from"./index.CVf8TyFT.js";import{c as t,R as x,G as d,X as h}from"./x.CgEbUUYK.js";/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function v({currentPath:c}){const[l,o]=i.useState(!1),s="/portfolio_astro",n=[{path:`${s}/`,label:"Home",icon:x},{path:`${s}/history/`,label:"History",icon:m},{path:`${s}/awards/`,label:"Awards",icon:y},{path:`${s}/certifications/`,label:"Certs",icon:f},{path:`${s}/others/`,label:"Others",icon:d}],r=a=>!!(a===`${s}/`&&c===`${s}/`||a!==`${s}/`&&c.startsWith(a));return e.jsxs("nav",{className:"fixed top-0 w-full z-50 border-b border-cyan-500/20 bg-slate-900/80 backdrop-blur-md",children:[e.jsx("div",{className:"max-w-6xl mx-auto px-4",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs("a",{href:`${s}/`,className:"flex items-center space-x-2 text-cyan-400 font-bold text-xl hover:text-cyan-300 transition group",children:[e.jsx(p,{className:"w-6 h-6 group-hover:animate-spin-slow"}),e.jsx("span",{className:"tracking-widest font-display",children:"ASTRO.PORTFOLIO"})]}),e.jsx("div",{className:"hidden md:flex space-x-2 lg:space-x-4",children:n.map(a=>e.jsxs("a",{href:a.path,className:`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${r(a.path)?"text-slate-900 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] font-bold":"text-slate-300 hover:text-cyan-400 hover:bg-white/5"}`,children:[e.jsx(a.icon,{className:"w-4 h-4"}),e.jsx("span",{children:a.label})]},a.path))}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>o(!l),className:"text-cyan-400 p-2",children:l?e.jsx(h,{}):e.jsx(b,{})})})]})}),l&&e.jsx("div",{className:"md:hidden bg-slate-900/95 border-b border-cyan-500/30 backdrop-blur-xl absolute w-full h-screen",children:e.jsx("div",{className:"px-4 pt-4 pb-4 space-y-4",children:n.map(a=>e.jsxs("a",{href:a.path,className:`block w-full text-left px-4 py-4 rounded-xl flex items-center space-x-4 text-lg ${r(a.path)?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50":"text-slate-400 hover:text-white bg-slate-800/30"}`,children:[e.jsx(a.icon,{className:"w-6 h-6"}),e.jsx("span",{children:a.label})]},a.path))})})]})}export{v as default};
