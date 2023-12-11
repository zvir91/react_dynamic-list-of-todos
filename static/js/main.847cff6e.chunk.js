(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var c=s(4),a=s.n(c),l=s(1),d=s.n(l),o=(s(9),s(10),s(2)),n=s.n(o);function i(e){const t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(s=300,new Promise((e=>{setTimeout(e,s)}))).then((()=>fetch(t))).then((e=>e.json()));var s}var r=s(0);const j=d.a.createContext({selectedTodo:null,setSelectedTodo:()=>{},todos:[],setTodos:()=>{},loader:!1,setLoader:()=>{},query:"",setQuery:()=>{},selectedUser:null,setSelectedUser:()=>{},selectedSelect:"",setSelect:()=>{}}),b=e=>{let{children:t}=e;const[s,c]=Object(l.useState)(null),[a,d]=Object(l.useState)([]),[o,n]=Object(l.useState)(!1),[b,h]=Object(l.useState)(""),[m,x]=Object(l.useState)(null),[O,u]=Object(l.useState)("");Object(l.useEffect)((()=>{var e;n(!0),i("/todos").then((e=>{d(e)})).finally((()=>n(!1))),s&&(e=s.userId,i("/users/".concat(e))).then((e=>{x(e)}))}),[s]);const v=Object(l.useMemo)((()=>({selectedTodo:s,setSelectedTodo:c,todos:a,setTodos:d,loader:o,setLoader:n,query:b,setQuery:h,selectedUser:m,setSelectedUser:x,selectedSelect:O,setSelect:u})),[o,b,O,s,m,a]);return Object(r.jsx)(j.Provider,{value:v,children:t})},h=e=>{let{todo:t}=e;const{selectedTodo:s,setSelectedTodo:c}=Object(l.useContext)(j),a=(null===s||void 0===s?void 0:s.id)===t.id;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t.id}),Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("i",{className:n()("",{"fas fa-check":t.completed})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:n()("",{"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:()=>{c(t)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:n()("far fa-eye",{"fa-eye-slash":a})})})})})]})};s(12);const m=()=>Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})}),x=()=>{const{todos:e,query:t,selectedSelect:s,loader:c}=Object(l.useContext)(j);return c?Object(r.jsx)(m,{}):Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:(()=>{const c=e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),a=c.filter((e=>!0===e.completed)),l=c.filter((e=>!e.completed));return"active"===s?l:"completed"===s?a:c})().map((e=>Object(r.jsx)(h,{todo:e},e.id)))})]})},O=()=>{const{setSelect:e,setQuery:t,query:s,loader:c}=Object(l.useContext)(j);return c?Object(r.jsx)(m,{}):Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:t=>{e(t.currentTarget.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:e=>{t(e.currentTarget.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:()=>{t("")}})})]})]})},u=()=>{const{selectedTodo:e,setSelectedTodo:t,selectedUser:s,loader:c}=Object(l.useContext)(j);return c?Object(r.jsx)(m,{}):e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===e||void 0===e?void 0:e.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:()=>{t(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==e&&void 0!==e&&e.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===s||void 0===s?void 0:s.email),children:null===s||void 0===s?void 0:s.name})]})]})]})]})]})},v=()=>Object(r.jsxs)(b,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(O,{})}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(x,{})})]})})}),Object(r.jsx)(u,{})]});a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.847cff6e.chunk.js.map