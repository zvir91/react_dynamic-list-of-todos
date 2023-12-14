(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),l=c(1),d=c.n(l),n=(c(9),c(10),c(2)),o=c.n(n);function i(e){const t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(c=300,new Promise((e=>{setTimeout(e,c)}))).then((()=>fetch(t))).then((e=>e.json()));var c}var r=c(0);const j=d.a.createContext({selectedTodo:null,setSelectedTodo:()=>{},todos:[],setTodos:()=>{},loader:!1,setLoader:()=>{},query:"",setQuery:()=>{},selectedSelect:"",setSelect:()=>{}}),b=e=>{let{children:t}=e;const[c,s]=Object(l.useState)(null),[a,d]=Object(l.useState)([]),[n,o]=Object(l.useState)(!1),[b,h]=Object(l.useState)(""),[m,x]=Object(l.useState)("");Object(l.useEffect)((()=>{o(!0),i("/todos").then((e=>{d(e)})).finally((()=>{o(!1)}))}),[]);const u=Object(l.useMemo)((()=>({selectedTodo:c,setSelectedTodo:s,todos:a,setTodos:d,loader:n,setLoader:o,query:b,setQuery:h,selectedSelect:m,setSelect:x})),[n,b,m,c,a]);return Object(r.jsx)(j.Provider,{value:u,children:t})},h=e=>{let{todo:t}=e;const{selectedTodo:c,setSelectedTodo:s}=Object(l.useContext)(j),a=(null===c||void 0===c?void 0:c.id)===t.id;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t.id}),Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("i",{className:o()("",{"fas fa-check":t.completed})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()("",{"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:()=>{s(t)},children:Object(r.jsx)("span",{className:"icon","data-cy":o()("",{iconCompleted:t.completed}),children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":a,"fa-eye":!a})})})})})]})};c(12);const m=()=>Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})}),x=()=>{const{todos:e,query:t,selectedSelect:c,loader:s}=Object(l.useContext)(j);return s?Object(r.jsx)(m,{}):Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:(()=>{const s=e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),a=s.filter((e=>!0===e.completed)),l=s.filter((e=>!e.completed));return"active"===c?l:"completed"===c?a:s})().map((e=>Object(r.jsx)(h,{todo:e},e.id)))})]})},u=()=>{const{setSelect:e,setQuery:t,query:c}=Object(l.useContext)(j);return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:t=>{e(t.currentTarget.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:e=>{t(e.currentTarget.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:()=>{t("")}})})]})]})},O=()=>{const{selectedTodo:e,setSelectedTodo:t}=Object(l.useContext)(j),[c,s]=Object(l.useState)(null);return Object(l.useEffect)((()=>{var t;e&&(t=e.userId,i("/users/".concat(t))).then((e=>{s(e)}))}),[e]),e?Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(e.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:()=>{t(null),s(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==e&&void 0!==e&&e.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",c?Object(r.jsx)("a",{href:"mailto:".concat(c.email),children:c.name}):Object(r.jsx)(m,{})]})]})]})]}):null},p=()=>Object(r.jsxs)(b,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{})}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(x,{})})]})})}),Object(r.jsx)(O,{})]});a.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.eee2d073.chunk.js.map