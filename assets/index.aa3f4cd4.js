var Ht=Object.defineProperty,Vt=Object.defineProperties;var Gt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var mt=(t,o,r)=>o in t?Ht(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,d=(t,o)=>{for(var r in o||(o={}))ut.call(o,r)&&mt(t,r,o[r]);if(G)for(var r of G(o))gt.call(o,r)&&mt(t,r,o[r]);return t},f=(t,o)=>Vt(t,Gt(o));var I=(t,o)=>{var r={};for(var s in t)ut.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&G)for(var s of G(t))o.indexOf(s)<0&&gt.call(t,s)&&(r[s]=t[s]);return r};import{R as L,j as ot,r as h,_ as n,C as A,L as F,G as _t,M as bt,a as St,u as xt,A as Kt,b as Yt,c as B,N as Jt,d as It,I as Xt,e as nt,g as w,f as rt,h as Ct,i as k,k as Zt,l as te,m as ee,n as oe,o as ne,p as re,q as kt,B as it,s as tt,t as et,v as $t,w as Dt,x as ie,y as ae,z as se,D as At,E as Nt,F as de,H as le,J as Mt,K as ce,O as pe,P as me,Q as ue,S as ge,T as he,U as ye,W as Lt,V as fe,X as we,Y as ve}from"./vendor.d37175de.js";const _e=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};_e();const be="modulepreload",ht={},Se="/suf-mern-gql-frontend/",O=function(o,r){return!r||r.length===0?o():Promise.all(r.map(s=>{if(s=`${Se}${s}`,s in ht)return;ht[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":be,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((p,m)=>{l.addEventListener("load",p),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>o())};function Bt(){const t=L.createContext(void 0);function o(){const r=L.useContext(t);if(r===void 0)throw new Error("useCtx must be inside a Provider with a value");return r}return[o,t.Provider]}const at="sofCloneUserKey",Rt="sofCloneDarkMode",xe=t=>localStorage.setItem(at,JSON.stringify(t)),Ie=()=>JSON.parse(localStorage.getItem(at)),Ce=()=>localStorage.removeItem(at),ke=t=>localStorage.setItem(Rt,JSON.stringify(t)),$e=()=>JSON.parse(localStorage.getItem(Rt)),z={saveUser:xe,loadUser:Ie,removeUser:Ce,saveDarkMode:ke,loadDarkMode:$e},e=ot.exports.jsx,c=ot.exports.jsxs,R=ot.exports.Fragment,[De,Ae]=Bt(),Ne=(t,o)=>{switch(o.type){case"LOGIN":return f(d({},t),{user:o.payload});case"LOGOUT":return f(d({},t),{user:null});default:return t}},Me=({children:t})=>{const[o,r]=h.exports.useReducer(Ne,{user:null});h.exports.useEffect(()=>{const a=z.loadUser();a&&r({type:"LOGIN",payload:a})},[]);const s=h.exports.useMemo(()=>{const a=l=>{z.saveUser(l),r({type:"LOGIN",payload:l})},i=()=>{z.removeUser(),r({type:"LOGOUT"})};return{user:o.user,setUser:a,logoutUser:i}},[o,z,r]);return e(Ae,{value:s,children:t})},Y=De,yt=n.div.withConfig({displayName:"Item__MenuItemStyled",componentId:"sc-1uhryze-0"})(({selected:t})=>[{display:"flex",alignItems:"center",justifyContent:"flex-start",whiteSpace:"nowrap",textDecoration:"none",position:"relative",textAlign:"left",overflow:"hidden",transitionProperty:"background-color, border-color, color, fill, stroke",width:"auto",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",font:"inherit","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"hsla(210, 8%, 5%, var(--tw-text-opacity))",":hover":{"--tw-bg-opacity":"0.05",backgroundColor:"hsla(210, 8%, 5%, var(--tw-bg-opacity))"},verticalAlign:"middle",marginTop:".1em",marginBottom:".1em",borderRadius:"0.125rem",userSelect:"none"},t&&{"--tw-bg-opacity":"0.1",backgroundColor:"hsla(210, 8%, 5%, var(--tw-bg-opacity))",borderRightWidth:"4px","--tw-border-opacity":"1",borderColor:"hsla(27, 90%, 55%, var(--tw-border-opacity))"},A`
    -webkit-tap-highlight-color: transparent;
  `]),D=L.forwardRef(function(o,r){const m=o,{tag:s,href:a,selected:i,children:l}=m,p=I(m,["tag","href","selected","children"]);return s==="a"?e(F,f(d({to:a,ref:r},p),{children:e(yt,{selected:i,children:l})})):e(yt,f(d({selected:i,ref:r},p),{children:l}))}),Le=n.hr.withConfig({displayName:"Divider",componentId:"sc-140e4i2-0"})(({orientation:t,color:o="lightgray"})=>[{marginTop:"0",marginBottom:"0",borderWidth:"1px",height:"auto"},t==="vertical"?{borderLeftWidth:"0"}:{borderBottomWidth:"0"},A`
      border-color: ${o};
    `]),Be=()=>{const{pathname:t}=xt(),o=A(["",""],{width:".8em",height:".8em",marginRight:"0.5rem",fontSize:"1.5em"});return e(Re,{children:c(Te,{children:[c(Ee,{children:[c(D,{tag:"a",selected:t==="/"||!t.startsWith("/tag")&&!t.startsWith("/user"),href:"/",children:[e(ze,{$_css2:o}),"Stack Underflow"]}),c(D,{tag:"a",selected:t.startsWith("/tag"),href:"/tags",children:[e(Oe,{$_css3:o}),"Tags"]}),c(D,{tag:"a",selected:t.startsWith("/user"),href:"/users",children:[e(Fe,{$_css4:o}),"Users"]})]}),e(Le,{orientation:"vertical"})]})})};var Re=n("div").withConfig({displayName:"NavMenuDesktop___StyledDiv",componentId:"sc-1rdw5a7-0"})({display:"none","@media (min-width: 640px)":{display:"block"}}),Te=n("div").withConfig({displayName:"NavMenuDesktop___StyledDiv2",componentId:"sc-1rdw5a7-1"})({position:"sticky",display:"flex",minHeight:"95vh",top:"5vh"}),Ee=n("div").withConfig({displayName:"NavMenuDesktop___StyledDiv3",componentId:"sc-1rdw5a7-2"})({display:"flex",flexDirection:"column",marginTop:"1rem"}),ze=n(_t).withConfig({displayName:"NavMenuDesktop___StyledPublicIcon",componentId:"sc-1rdw5a7-3"})(["",""],t=>t.$_css2),Oe=n(bt).withConfig({displayName:"NavMenuDesktop___StyledLocalOfferIcon",componentId:"sc-1rdw5a7-4"})(["",""],t=>t.$_css3),Fe=n(St).withConfig({displayName:"NavMenuDesktop___StyledPeopleIcon",componentId:"sc-1rdw5a7-5"})(["",""],t=>t.$_css4);const Pe=({children:t})=>c(Ue,{children:[e(Be,{}),t]});var Ue=n("div").withConfig({displayName:"MainLayout___StyledDiv",componentId:"sc-1kw3mty-0"})({maxWidth:"1264px",minHeight:"100vh",width:"100%",marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"relative"});const qe={width:"2.5rem",height:"2.5rem",display:"inline-block",animation:"spin 1s linear infinite",textAlign:"center","--tw-text-opacity":"1",color:"hsla(206, 100%, 52%, var(--tw-text-opacity))"},Qe=s=>{var a=s,{size:t="medium",styles:o}=a,r=I(a,["size","styles"]);let i;return t==="small"?i={width:"1rem",height:"1rem"}:t==="medium"?i={width:"1.5rem",height:"1.5rem"}:t==="large"?i={width:"2rem",height:"2rem"}:i={width:"2.5rem",height:"2.5rem"},e(We,{$_css:[{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"inherit",width:"100%"},o&&o.loaderRoot],children:e(je,f(d({},r),{$_css2:[qe,i,o&&o.loaderIconWrapper],children:e(He,{})}))})};var We=n("div").withConfig({displayName:"LoadingSpinner___StyledDiv",componentId:"sc-xjc2lb-0"})(["",""],t=>t.$_css),je=n("span").withConfig({displayName:"LoadingSpinner___StyledSpan",componentId:"sc-xjc2lb-1"})(["",""],t=>t.$_css2),He=n(Kt).withConfig({displayName:"LoadingSpinner___StyledLoadingIcon",componentId:"sc-xjc2lb-2"})({width:"100%",height:"100%"});function Ve(t){const o=i=>typeof window!="undefined"?window.matchMedia(i).matches:!1,[r,s]=h.exports.useState(o(t));function a(){s(o(t))}return h.exports.useEffect(()=>{const i=window.matchMedia(t);return a(),i.addEventListener("change",a),()=>{i.removeEventListener("change",a)}},[t]),r}const Z=h.exports.lazy(()=>O(()=>import("./QuesList.720f25a9.js"),["assets/QuesList.720f25a9.js","assets/vendor.d37175de.js","assets/PostedBy.4f29a0a9.js","assets/Tag.63c78e0e.js"])),Ge=h.exports.lazy(()=>O(()=>import("./AllTags.da5300ce.js"),["assets/AllTags.da5300ce.js","assets/vendor.d37175de.js","assets/index.c2b75f21.js","assets/Tag.63c78e0e.js"])),Ke=h.exports.lazy(()=>O(()=>import("./AllUsers.2cfeefe8.js"),["assets/AllUsers.2cfeefe8.js","assets/vendor.d37175de.js","assets/index.c2b75f21.js"])),Ye=h.exports.lazy(()=>O(()=>import("./User.22109b45.js"),["assets/User.22109b45.js","assets/vendor.d37175de.js"])),Je=h.exports.lazy(()=>O(()=>import("./Question.a2197a76.js"),["assets/Question.a2197a76.js","assets/vendor.d37175de.js","assets/index.c2b75f21.js","assets/Tag.63c78e0e.js","assets/PostedBy.4f29a0a9.js"])),Xe=h.exports.lazy(()=>O(()=>import("./AskQuestion.891e9a09.js"),["assets/AskQuestion.891e9a09.js","assets/vendor.d37175de.js","assets/index.c2b75f21.js"])),q=h.exports.lazy(()=>O(()=>import("./RightSidePanel.5fffc972.js"),["assets/RightSidePanel.5fffc972.js","assets/vendor.d37175de.js","assets/Tag.63c78e0e.js"])),Ze=h.exports.lazy(()=>O(()=>import("./NotFound.29efa990.js"),["assets/NotFound.29efa990.js","assets/vendor.d37175de.js"])),to=()=>{const{user:t}=Y(),o=Ve("(min-width: 768px)");return e(Pe,{children:e(h.exports.Suspense,{fallback:e(Qe,{}),children:c(Yt,{children:[e(B,{path:"/",element:c(R,{children:[e(Z,{}),o&&e(q,{})]})}),e(B,{path:"/ask",element:t?c(R,{children:[e(Xe,{}),o&&e(q,{})]}):e(Jt,{to:"/"})}),e(B,{path:"/tags",element:e(Ge,{})}),e(B,{path:"/users",element:e(Ke,{})}),e(B,{path:"/user/:username",element:e(Ye,{})}),e(B,{path:"/questions/:quesId",element:c(R,{children:[e(Je,{}),o&&e(q,{})]})}),e(B,{path:"/tags/:tagName",element:c(R,{children:[e(Z,{tagFilterActive:!0}),o&&e(q,{})]})}),e(B,{path:"/search/:query",element:c(R,{children:[e(Z,{searchFilterActive:!0}),o&&e(q,{})]})}),e(B,{element:c(R,{children:[e(Ze,{}),o&&e(q,{})]})})]})})})},eo={display:"flex",flex:"1 1 0%",minHeight:"100vh",width:"100vw",flexDirection:"column",borderRadius:"0.125rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":".87",color:"hsla(210, 8%, 5%, var(--tw-text-opacity))"},oo=L.forwardRef(function(o,r){const p=o,{children:s,elevation:a,styles:i}=p,l=I(p,["children","elevation","styles"]);return e(no,f(d({ref:r},l),{$_css:[eo,a&&{"--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},i&&i.paperRoot],children:s}))});var no=n("div").withConfig({displayName:"Paper___StyledDiv",componentId:"sc-yzi1g7-0"})(["",""],t=>t.$_css);const ft=A(["",""],{display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",backgroundColor:"rgba(0, 0, 0, 0)",userSelect:"none",cursor:"pointer",transitionProperty:"background-color, border-color, color, fill, stroke",borderStyle:"none",borderRadius:"50%",padding:"9px",textDecoration:"none",outlineOffset:"4px",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(240, 128, 128, var(--tw-bg-opacity))"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 90%, var(--tw-bg-opacity))"}}),N=L.forwardRef(function(o,r){const u=o,{tag:s,styles:a,href:i,children:l}=u,p=I(u,["tag","styles","href","children"]);let m;return s==="a"?m=e(ro,f(d({to:i},p),{ref:r,$_css2:[ft,a&&a.iconButton],children:l})):m=e(io,f(d({type:"button",ref:r},p),{$_css3:[ft,a&&a.iconButton],children:l})),e(R,{children:m})});var ro=n(F).withConfig({displayName:"IconButton___StyledLink",componentId:"sc-1i6ir8u-0"})(["",""],t=>t.$_css2),io=n("button").withConfig({displayName:"IconButton___StyledButton",componentId:"sc-1i6ir8u-1"})(["",""],t=>t.$_css3);const wt=t=>{if(typeof t=="string")return document.querySelector(t);if(typeof t=="object"){if(t instanceof HTMLElement)return t;if(t.current)return t.current}return null},Tt=({focusFirst:t,onClose:o,focusAfterClosed:r,autoFocus:s,overlayModal:a=!0})=>{let i=document.getElementById("modal-root");i||(i=document.createElement("div"),i.setAttribute("id","modal-root"),document.body.appendChild(i));const l=h.exports.useRef(null);let p=t?wt(t):null,m=r?wt(r):null;return h.exports.useEffect(()=>{function u(y){!l.current||l.current.contains(y.target)||(o(),m&&m.focus())}function g(y){y.key==="Escape"&&(o(),m&&m.focus())}return document.body.addEventListener("keyup",g),document.body.addEventListener("click",u,{capture:!0}),()=>{document.body.removeEventListener("click",u,{capture:!0}),document.body.removeEventListener("keyup",g)}},[o,m]),h.exports.useEffect(()=>{const u=_=>typeof _.focus=="function";let g=!1;const y=_=>{if(!u(_))return!1;g=!0;try{_.focus()}catch(S){console.error(S)}return g=!1,document.activeElement===_},x=_=>{for(var S=0;S<_.childNodes.length;S++){var M=_.childNodes[S];if(y(M)||x(M))return!0}return!1},v=_=>{for(var S=_.childNodes.length-1;S>=0;S--){var M=_.childNodes[S];if(y(M)||v(M))return!0}return!1};p?p.focus():s&&l.current&&x(l.current);let E;const $=_=>{if(!g){if(!l.current){console.error("dialog not found");return}l.current.contains(_.target)?E=_.target:(x(l.current),E===document.activeElement&&v(l.current),E=document.activeElement)}};return a&&document.body.classList.add("has-dialog"),document.addEventListener("focus",$,!0),()=>{a&&document.body.classList.remove("has-dialog"),document.removeEventListener("focus",$,!0),m&&m.focus()}},[p,m,s,a]),{ref:l,modalRoot:i}},ao=n.div.withConfig({displayName:"Menu__MenuContainer",componentId:"sc-3kalmw-0"})(({open:t})=>[{position:"fixed",zIndex:"1300",top:"0",right:"0",bottom:"0",left:"0",visibility:"hidden"},t&&{visibility:"visible"}]),so=n.div.withConfig({displayName:"Menu__MenuBackDrop",componentId:"sc-3kalmw-1"})(()=>[{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"-1",backgroundColor:"rgba(0, 0, 0, 0)"},A`
    -webkit-tap-highlight-color: transparent;
  `]),lo=n.div.withConfig({displayName:"Menu__MenuChildrenContainer",componentId:"sc-3kalmw-2"})(({open:t})=>[{transform:"var(--tw-transform)",position:"absolute",borderRadius:"0.125rem",overflowX:"hidden",overflowY:"auto",outline:"2px solid transparent",outlineOffset:"2px","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(26, 32, 44, var(--tw-text-opacity))",opacity:"0",transitionProperty:"opacity",transitionDelay:"75ms",visibility:"hidden","--tw-scale-x":".75","--tw-scale-y":".5",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(226, 232, 240, var(--tw-border-opacity))"},t&&{visibility:"visible",transform:"none",opacity:"1"}]);var co=n(lo).withConfig({displayName:"Menu___StyledMenuChildrenContainer",componentId:"sc-3kalmw-3"})(["",""],t=>t.$_css2);const st=p=>{var m=p,{open:t,anchorEl:o,anchorOrigin:r,transformOrigin:s,onClose:a,children:i}=m,l=I(m,["open","anchorEl","anchorOrigin","transformOrigin","onClose","children"]);const[u,g]=h.exports.useState(null);h.exports.useEffect(()=>{o&&g(o.getBoundingClientRect())},[o]);const{ref:y,modalRoot:x}=Tt({onClose:a,focusAfterClosed:o,overlayModal:!1}),v=()=>{let $={};if(u)return $.top=r.vertical==="top"?`calc(${u.top}px + 10px)`:`calc(${u.bottom}px + 10px)`,r.horizontal==="left"?$.left=`calc(${u.left}px + 5px)`:$.right=`calc(100vw - ${u.right-10}px)`,$},E=c(ao,{role:"presentation",open:t,children:[t&&e(so,{}),e("div",{tabIndex:0}),e(co,f(d({ref:y,tabIndex:-1},l),{open:t,$_css2:u&&f(d({},v()),{transformOrigin:`${s.horizontal||"0px"} ${s.vertical||"0px"}`}),children:i})),e("div",{tabIndex:0})]});return It.createPortal(E,x)},po=()=>{const{pathname:t}=xt(),[o,r]=h.exports.useState(void 0),s=Boolean(o),a=l=>{r(l.currentTarget)},i=()=>{r(void 0)};return c("div",{children:[e(mo,{tag:"button","aria-label":s?"close main menu":"open main menu",onClick:a,children:o?e(nt,{}):e(Xt,{})}),c(st,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:s,onClose:i,children:[c(D,{tag:"a",selected:t==="/"||!t.startsWith("/tag")&&!t.startsWith("/user"),href:"/",onClick:i,children:[e(uo,{}),"Stack Underflow"]}),c(D,{tag:"a",selected:t.startsWith("/tag"),href:"/tags",onClick:i,children:[e(go,{}),"Tags"]}),c(D,{tag:"a",selected:t.startsWith("/user"),href:"/users",onClick:i,children:[e(ho,{}),"Users"]})]})]})};var mo=n(N).withConfig({displayName:"NavMenuMobile___StyledIconButton",componentId:"sc-nabc33-0"})({fontSize:"1.5em"}),uo=n(_t).withConfig({displayName:"NavMenuMobile___StyledPublicIcon",componentId:"sc-nabc33-1"})({marginRight:"0.5rem"}),go=n(bt).withConfig({displayName:"NavMenuMobile___StyledLocalOfferIcon",componentId:"sc-nabc33-2"})({marginRight:"0.5rem"}),ho=n(St).withConfig({displayName:"NavMenuMobile___StyledPeopleIcon",componentId:"sc-nabc33-3"})({marginRight:"0.5rem"});const[yo,fo]=Bt(),dt=yo,wo=(t,o)=>{switch(o.type){case"SET_EDIT":return f(d({},t),{editingQuestion:o.payload});case"CLEAR_EDIT":return f(d({},t),{editingQuestion:null});case"SET_NOTIFICATION":return f(d({},t),{notification:o.payload});case"CLEAR_NOTIFICATION":return f(d({},t),{notification:null});case"TOGGLE_DARK_MODE":return f(d({},t),{darkMode:!t.darkMode});default:return t}},vo=({children:t})=>{const[o,r]=h.exports.useReducer(wo,{editingQuestion:null,notification:null,darkMode:!1});h.exports.useEffect(()=>{z.loadDarkMode()===!0&&r({type:"TOGGLE_DARK_MODE"})},[]);const s=h.exports.useMemo(()=>{const a=g=>{r({type:"SET_EDIT",payload:g})},i=()=>{r({type:"CLEAR_EDIT"})};let l=null;return{toggleDarkMode:()=>{r({type:"TOGGLE_DARK_MODE"}),z.saveDarkMode(!o.darkMode)},clearEdit:i,clearNotif:()=>{r({type:"CLEAR_NOTIFICATION"})},notify:(g,y="success",x=5)=>{clearTimeout(l),r({type:"SET_NOTIFICATION",payload:{message:g,severity:y,duration:x}}),l=setTimeout(()=>{r({type:"CLEAR_NOTIFICATION"})},x*1e3)},setEditingQuestion:a,editingQuestion:o.editingQuestion,notification:o.notification,darkMode:o.darkMode}},[z,r,o]);return e(fo,{value:s,children:t})},b={};var _o=(t=>(t.Question="Question",t.Answer="Answer",t))(_o||{}),bo=(t=>(t.Hot="HOT",t.Votes="VOTES",t.Views="VIEWS",t.Newest="NEWEST",t.Oldest="OLDEST",t))(bo||{}),Et=(t=>(t.Downvote="DOWNVOTE",t.Upvote="UPVOTE",t))(Et||{});const W=w`
    fragment AuthorDetails on Author {
  _id
  username
}
    `,H=w`
    fragment CommentDetails on Comment {
  _id
  author {
    ...AuthorDetails
  }
  body
  createdAt
  updatedAt
}
    ${W}`,J=w`
    fragment AnswerDetails on Answer {
  _id
  author {
    ...AuthorDetails
  }
  body
  comments {
    ...CommentDetails
  }
  points
  voted
  createdAt
  updatedAt
}
    ${W}
${H}`,So=w`
    fragment QuestionDetails on Question {
  _id
  author {
    ...AuthorDetails
  }
  title
  body
  tags
  points
  views
  acceptedAnswer
  comments {
    ...CommentDetails
  }
  answers {
    ...AnswerDetails
  }
  voted
  createdAt
  updatedAt
}
    ${W}
${H}
${J}`,xo=w`
    fragment PostQuestionDetails on Question {
  _id
  author {
    ...AuthorDetails
  }
  title
  body
  tags
  points
  views
  voted
  createdAt
  updatedAt
}
    ${W}`,zt=w`
    fragment LoggedUserDetails on LoggedUser {
  _id
  username
  role
  token
}
    `,Io=w`
    mutation registerUser($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    ...LoggedUserDetails
  }
}
    ${zt}`;function Co(t){const o=d(d({},b),t);return k(Io,o)}const ko=w`
    mutation loginUser($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...LoggedUserDetails
  }
}
    ${zt}`;function $o(t){const o=d(d({},b),t);return k(ko,o)}const Do=w`
    mutation addQuestion($title: String!, $body: String!, $tags: [String!]!) {
  postQuestion(title: $title, body: $body, tags: $tags) {
    ...PostQuestionDetails
  }
}
    ${xo}`;function Kr(t){const o=d(d({},b),t);return k(Do,o)}const Ao=w`
    mutation updateQuestion($quesId: ID!, $title: String!, $body: String!, $tags: [String!]!) {
  editQuestion(quesId: $quesId, title: $title, body: $body, tags: $tags) {
    ...QuestionDetails
  }
}
    ${So}`;function Yr(t){const o=d(d({},b),t);return k(Ao,o)}const No=w`
    mutation removeQuestion($quesId: ID!) {
  deleteQuestion(quesId: $quesId)
}
    `;function Jr(t){const o=d(d({},b),t);return k(No,o)}const Mo=w`
    mutation submitQuesVote($quesId: ID!, $voteType: VoteType!) {
  voteQuestion(quesId: $quesId, voteType: $voteType) {
    _id
    voted
    points
  }
}
    `;function Xr(t){const o=d(d({},b),t);return k(Mo,o)}const Lo=w`
    mutation addComment($parentId: ID!, $parentType: CommentParentType!, $body: String!) {
  addComment(parentId: $parentId, body: $body, parentType: $parentType) {
    ...CommentDetails
  }
}
    ${H}`;function Zr(t){const o=d(d({},b),t);return k(Lo,o)}const Bo=w`
    mutation editComment($commentId: ID!, $body: String!) {
  editComment(commentId: $commentId, body: $body) {
    ...CommentDetails
  }
}
    ${H}`;function ti(t){const o=d(d({},b),t);return k(Bo,o)}const Ro=w`
    mutation deleteComment($commentId: ID!) {
  deleteComment(commentId: $commentId)
}
    `;function ei(t){const o=d(d({},b),t);return k(Ro,o)}const To=w`
    mutation addAnswer($quesId: ID!, $body: String!) {
  postAnswer(quesId: $quesId, body: $body) {
    ...AnswerDetails
  }
}
    ${J}`;function oi(t){const o=d(d({},b),t);return k(To,o)}const Eo=w`
    mutation updateAnswer($quesId: ID!, $ansId: ID!, $body: String!) {
  editAnswer(quesId: $quesId, ansId: $ansId, body: $body) {
    ...AnswerDetails
  }
}
    ${J}`;function ni(t){const o=d(d({},b),t);return k(Eo,o)}const zo=w`
    mutation removeAnswer($quesId: ID!, $ansId: ID!) {
  deleteAnswer(quesId: $quesId, ansId: $ansId)
}
    `;function ri(t){const o=d(d({},b),t);return k(zo,o)}const Oo=w`
    mutation submitAnsVote($quesId: ID!, $ansId: ID!, $voteType: VoteType!) {
  voteAnswer(quesId: $quesId, ansId: $ansId, voteType: $voteType) {
    _id
    voted
    points
  }
}
    `;function ii(t){const o=d(d({},b),t);return k(Oo,o)}const Fo=w`
    mutation submitAcceptAns($quesId: ID!, $ansId: ID!) {
  acceptAnswer(quesId: $quesId, ansId: $ansId) {
    _id
    acceptedAnswer
  }
}
    `;function ai(t){const o=d(d({},b),t);return k(Fo,o)}const Po=w`
    query fetchQuestions($sortBy: QuestionSortBy!, $page: Int!, $limit: Int!, $filterByTag: String, $filterBySearch: String) {
  getQuestions(
    sortBy: $sortBy
    page: $page
    limit: $limit
    filterByTag: $filterByTag
    filterBySearch: $filterBySearch
  ) {
    next {
      page
    }
    previous {
      page
    }
    questions {
      _id
      author {
        ...AuthorDetails
      }
      title
      body
      tags
      points
      views
      createdAt
      updatedAt
      answerCount
    }
  }
}
    ${W}`;function si(t){const o=d(d({},b),t);return rt(Po,o)}const Uo=w`
    query fetchQuestion($quesId: ID!) {
  viewQuestion(quesId: $quesId) {
    _id
    author {
      ...AuthorDetails
    }
    title
    body
    tags
    points
    views
    createdAt
    updatedAt
    answers {
      ...AnswerDetails
    }
    author {
      ...AuthorDetails
    }
    comments {
      ...CommentDetails
    }
    acceptedAnswer
    voted
  }
}
    ${W}
${J}
${H}`;function di(t){const o=d(d({},b),t);return rt(Uo,o)}const qo=w`
    query fetchUser($username: String!) {
  getUser(username: $username) {
    _id
    username
    role
    createdAt
    rep
    totalQuestions
    totalAnswers
    recentQuestions {
      _id
      title
      points
      createdAt
    }
    recentAnswers {
      _id
      title
      points
      createdAt
    }
  }
}
    `;function li(t){const o=d(d({},b),t);return rt(qo,o)}const Qo=w`
    query fetchAllTags($limit: Int!, $cursor: ID, $filterBySearch: String) {
  getAllTags(limit: $limit, cursor: $cursor, filterBySearch: $filterBySearch) {
    tags {
      name
      _id
      questionCount
    }
    nextCursor
  }
}
    `;function ci(t){const o=d(d({},b),t);return Ct(Qo,o)}const Wo=w`
    query fetchAllUsers {
  getAllUsers {
    _id
    username
    createdAt
  }
}
    `;function pi(t){const o=d(d({},b),t);return Ct(Wo,o)}var K="/suf-mern-gql-frontend/assets/stack-overflow.c1fbc73f.svg";const mi=(t,o)=>o.filter(r=>!t.find(s=>s._id===r._id)),ui=t=>Zt(new Date(t)),gi=t=>te(new Date(t),"MMM d', ' yy 'at' H':'mm"),Ot=t=>{var o;return(o=t.graphQLErrors[0])!=null&&o.message?t.graphQLErrors[0].message:t==null?void 0:t.message},T=n.div.withConfig({displayName:"Misc__SvgIcon",componentId:"sc-1yzq7wf-0"})({fill:"currentColor",minWidth:"1em",minHeight:"1em",display:"inline-block",transitionProperty:"background-color, border-color, color, fill, stroke",flexShrink:"0",userSelect:"none",fontSize:"1.5em"}),hi=n.button.withConfig({displayName:"Misc__LightButton",componentId:"sc-1yzq7wf-1"})(()=>[{cursor:"pointer","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0",borderRadius:"0.125rem",fontSize:".9375rem",":hover":{"--tw-text-opacity":"1",color:"rgba(45, 55, 72, var(--tw-text-opacity))"},outlineColor:"darkorange","@media (min-width: 768px)":{borderRadius:"0.375rem"}},Ft]),Ft=A`
  &:disabled {
    opacity: 0.5 !important;
    cursor: disabled;
  }
`,lt={display:"inline-block",transitionProperty:"background-color, border-color, color, fill, stroke",borderWidth:"0",borderRadius:"0.125rem",padding:".5em .8em",cursor:"pointer",verticalAlign:"middle",outlineOffset:"2px",fontSize:".9375rem",textDecoration:"none",lineHeight:"1",whiteSpace:"nowrap","@media (min-width: 768px)":{borderRadius:"0.375rem",padding:".6em 1em"}},V=n.button.withConfig({displayName:"Misc__Button",componentId:"sc-1yzq7wf-2"})(()=>[lt,{"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 40%, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},":active":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},Ft]),yi=n(F).withConfig({displayName:"Misc__ButtonLikeLink",componentId:"sc-1yzq7wf-3"})(()=>[lt,{"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},":active":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}]),fi=n.button.withConfig({displayName:"Misc__ButtonGroupItem",componentId:"sc-1yzq7wf-4"})(({active:t})=>[lt,{borderRadius:"0"},t?{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 90%, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(45, 55, 72, var(--tw-text-opacity))",zIndex:"40"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 97.5%, var(--tw-bg-opacity))"},"--tw-text-opacity":"1",color:"rgba(74, 85, 104, var(--tw-text-opacity))"}]),wi=n.div.withConfig({displayName:"Misc__ButtonGroup",componentId:"sc-1yzq7wf-5"})(()=>[A`
    border-width: 1px;
    ${{borderRadius:"0.125rem",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"rgba(113, 128, 150, var(--tw-border-opacity))",display:"flex",flex:"1 1 auto","@media (min-width: 640px)":{flex:"none"},"@media (min-width: 768px)":{borderRadius:"0.375rem"}}}
    button {
      flex: inherit;
      border-radius: unset;
    }
    > button + button {
      border-left-width: 1px;
      ${{"--tw-border-opacity":"1",borderLeftColor:"rgba(113, 128, 150, var(--tw-border-opacity))"}}
    }
    button:last-child {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
    button:first-child {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
  `,{fontSize:".9375rem",width:"100%","@media (min-width: 640px)":{width:"auto"},"@media (min-width: 768px)":{fontSize:"1rem"}}]),jo=n(F).withConfig({displayName:"Misc__Link",componentId:"sc-1yzq7wf-6"})(["text-decoration:none;",""],{"--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"hsla(209, 100%, 32%, var(--tw-text-opacity))"}}),ct=n.button.withConfig({displayName:"Misc__EmptyLink",componentId:"sc-1yzq7wf-7"})(["text-decoration:none;",""],{backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"hsla(209, 100%, 32%, var(--tw-text-opacity))"}}),Ho=[{textAlign:"left",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",margin:"0",paddingTop:"0",paddingBottom:"0",paddingLeft:"0.5rem",paddingRight:"0.5rem",pointerEvents:"none",overflow:"hidden",minWidth:"0",borderRadius:"0.125rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(203, 213, 224, var(--tw-border-opacity))",borderStyle:"solid","@media (min-width: 768px)":{borderRadius:"0.375rem"}}],vt=A([""," &:focus ~ fieldset{","}&::placeholder{font-size:1em;","}"],{width:"100%",lineHeight:"2.25rem",borderStyle:"none",outline:"2px solid transparent",outlineOffset:"2px",userSelect:"none",font:"inherit",color:"currentColor"},{borderWidth:"2px","--tw-border-opacity":"1",borderColor:"hsla(206, 100%, 40%, var(--tw-border-opacity))"},{"--tw-text-opacity":"1",color:"rgba(160, 174, 192, var(--tw-text-opacity))"}),Vo=A([""," &:hover > fieldset{","}"],{padding:"0.5rem",position:"relative",display:"inline-flex",font:"inherit"},{"--tw-border-opacity":"1",borderColor:"hsla(206, 100%, 40%, var(--tw-border-opacity))"}),Go=A(["",""],{padding:"0",verticalAlign:"top",minWidth:"0",borderWidth:"0",display:"inline-flex",flexDirection:"column",position:"relative"}),Ko=A(["",""],{transform:"var(--tw-transform)",display:"block",font:"inherit",padding:"0","--tw-text-opacity":".5",color:"hsla(210, 8%, 5%, var(--tw-text-opacity))",transformOrigin:"left top",whiteSpace:"nowrap",transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",textOverflow:"ellipsis",zIndex:"1","--tw-translate-x":"0.75rem","--tw-translate-y":"0.5rem","--tw-scale-x":"1","--tw-scale-y":"1",position:"absolute",top:"0",left:"0",overflow:"hidden"}),Yo=A(["",""],{"--tw-translate-y":"-.4em",transform:"var(--tw-transform)","--tw-scale-x":".75","--tw-scale-y":".75",color:"inherit"}),Q=L.forwardRef(function(o,r){const v=o,{InputProps:s={},fullWidth:a,styles:i,label:l,tag:p,error:m,helperText:u}=v,g=I(v,["InputProps","fullWidth","styles","label","tag","error","helperText"]),{startAdornment:y,endAdornment:x}=s;return c(Jo,{$_css2:[Go,a&&{width:"100%"},i&&i.fieldRoot],children:[c(Xo,{$_css3:[Vo,a&&{width:"100%"},i&&i.inputRoot],children:[l?e(Zo,{$_css4:[Ko,Yo,m&&{"--tw-text-opacity":"1",color:"rgba(245, 101, 101, var(--tw-text-opacity)) !important"}],children:l}):null,y||null,p==="textarea"?e(tn,f(d({ref:r},g),{$_css5:[vt,i&&i.input]})):e(en,f(d({type:"text",ref:r},g),{$_css6:[vt,{lineHeight:"2.25rem"},i&&i.input]})),e(on,{"aria-hidden":"true",$_css7:[Ho,m&&{"--tw-border-opacity":"1",borderColor:"rgba(245, 101, 101, var(--tw-border-opacity)) !important"}],children:e(nn,{style:{maxWidth:"100%"},children:e("span",{children:l})})}),x||null]}),m?e(rn,{$_css8:[{fontSize:".8125rem"},m&&{"--tw-text-opacity":"1",color:"rgba(245, 101, 101, var(--tw-text-opacity)) !important"}],children:u}):null]})});var Jo=n("div").withConfig({displayName:"TextField___StyledDiv",componentId:"sc-1067g20-0"})(["",""],t=>t.$_css2),Xo=n("div").withConfig({displayName:"TextField___StyledDiv2",componentId:"sc-1067g20-1"})(["",""],t=>t.$_css3),Zo=n("label").withConfig({displayName:"TextField___StyledLabel",componentId:"sc-1067g20-2"})(["",""],t=>t.$_css4),tn=n("textarea").withConfig({displayName:"TextField___StyledTextarea",componentId:"sc-1067g20-3"})(["",""],t=>t.$_css5),en=n("input").withConfig({displayName:"TextField___StyledInput",componentId:"sc-1067g20-4"})(["",""],t=>t.$_css6),on=n("fieldset").withConfig({displayName:"TextField___StyledFieldset",componentId:"sc-1067g20-5"})(["",""],t=>t.$_css7),nn=n("legend").withConfig({displayName:"TextField___StyledLegend",componentId:"sc-1067g20-6"})({display:"block",maxWidth:"0",padding:"0",visibility:"hidden",lineHeight:"11px"}),rn=n("p").withConfig({displayName:"TextField___StyledP",componentId:"sc-1067g20-7"})(["",""],t=>t.$_css8);const P=L.forwardRef(function(o,r){return e(an,f(d({},o),{ref:r,$_css:[{display:"inline-flex",justifyContent:"center",alignItems:"center",paddingLeft:"0.25rem",paddingRight:"0.25rem",font:"inherit"}]}))});var an=n("div").withConfig({displayName:"InputAdornment___StyledDiv",componentId:"sc-sfh9su-0"})(["",""],t=>t.$_css);const Pt=L.forwardRef(function(o,r){const y=o,{severity:s,onClose:a,title:i,children:l,styles:p}=y,m=I(y,["severity","onClose","title","children","styles"]);let u,g;return s==="error"?(u=e(ee,{}),g={"--tw-bg-opacity":"1",backgroundColor:"rgba(229, 62, 62, var(--tw-bg-opacity))"}):s==="info"?(u=e(oe,{}),g={"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))"}):s==="warning"?(u=e(ne,{}),g={"--tw-bg-opacity":"1",backgroundColor:"rgba(221, 107, 32, var(--tw-bg-opacity))"}):(u=e(re,{}),g={"--tw-bg-opacity":"1",backgroundColor:"rgba(56, 161, 105, var(--tw-bg-opacity))"}),c(sn,{$_css:[{fontSize:".8125rem",display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0.25rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"0.75",backgroundColor:"rgba(26, 32, 44, var(--tw-bg-opacity))","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderRadius:"0.375rem",fontWeight:"700",lineHeight:"1.25rem",letterSpacing:"0.025em","@media (min-width: 640px)":{fontSize:".9375rem"},"@media (min-width: 768px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}},g&&g,p&&p.alertRoot],children:[c("div",{children:[i?e(dn,{$_css2:[{fontWeight:"700"},p&&p.alertTitle],children:i}):null,c(ln,f(d({ref:r},m),{$_css3:[{display:"flex",alignItems:"center",font:"inherit"},p&&p.alertBody],children:[e(cn,{$_css4:[{display:"flex",marginRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",color:"inherit",fontSize:"1.2em"},p&&p.alertStartIcon],children:u}),e(pn,{$_css5:[{paddingTop:"0.25rem",paddingBottom:"0.25rem"}],children:l})]}))]}),a?e(mn,{"aria-label":"close alert",tag:"button",onClick:a,$_css6:[{fontSize:"1.2em",color:"inherit"},p&&p.alertEndIcon],children:e(nt,{})}):null]})});var sn=n("div").withConfig({displayName:"Alert___StyledDiv",componentId:"sc-a0ci59-0"})(["",""],t=>t.$_css),dn=n("div").withConfig({displayName:"Alert___StyledDiv2",componentId:"sc-a0ci59-1"})(["",""],t=>t.$_css2),ln=n("div").withConfig({displayName:"Alert___StyledDiv3",componentId:"sc-a0ci59-2"})(["",""],t=>t.$_css3),cn=n("div").withConfig({displayName:"Alert___StyledDiv4",componentId:"sc-a0ci59-3"})(["",""],t=>t.$_css4),pn=n("div").withConfig({displayName:"Alert___StyledDiv5",componentId:"sc-a0ci59-4"})(["",""],t=>t.$_css5),mn=n(N).withConfig({displayName:"Alert___StyledIconButton",componentId:"sc-a0ci59-5"})(["",""],t=>t.$_css6);const Ut=({errorMsg:t,clearErrorMsg:o})=>t?e("div",{children:e(Pt,{severity:"error",onClose:o,children:t})}):null,vi=(t,o)=>t===Et.Upvote?o+1:o>0?o-1:0,j=({max:t,min:o,type:r="string",name:s,req:a=!0})=>{const i=r==="string"?"characters":"digits";return{required:a?`${s} is required`:void 0,minLength:o?{value:o,message:`${s} cannot be less than ${o} ${i}`}:void 0,maxLength:t?{value:t,message:`${s} cannot be more than ${t} ${i}`}:void 0}},un=f(d({},j({name:"username",min:3,max:20})),{pattern:{value:/^[a-zA-Z0-9-_]*$/,message:"Only alphanum, dash & underscore characters are allowed"}}),gn=({setAuthType:t,closeModal:o})=>{var $,_;const[r,s]=h.exports.useState(!1),[a,i]=h.exports.useState(null),{setUser:l}=Y(),{notify:p}=dt(),{register:m,handleSubmit:u,reset:g,formState:{errors:y}}=kt({mode:"onTouched"}),[x,{loading:v}]=$o({onError:S=>{i(Ot(S))}});return c(hn,{children:[e(yn,{src:K,alt:"sof-logo"}),c("form",{onSubmit:u(({username:S,password:M})=>{x({variables:{username:S,password:M},update:(X,{data:C})=>{l(C==null?void 0:C.login),p(`Welcome, ${C==null?void 0:C.login.username}!`),g(),o()}})}),children:[e(fn,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0,placeholder:"username",type:"text"},m("username",j({name:"username"}))),{error:"username"in y,helperText:"username"in y?($=y==null?void 0:y.username)==null?void 0:$.message:"",InputProps:{startAdornment:e(wn,{children:e(it,{color:"primary"})})}}))}),e(vn,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},m("password",j({name:"password"}))),{placeholder:"password",type:r?"text":"password",error:"password"in y,helperText:"password"in y?(_=y.password)==null?void 0:_.message:"",InputProps:{endAdornment:e(_n,{"aria-label":r?"hide password":"show password",tag:"button",onClick:()=>s(S=>!S),children:r?e(tt,{color:"primary"}):e(et,{color:"primary"})}),startAdornment:e(bn,{children:e($t,{})})}}))}),c(Sn,{type:"submit",disabled:v,children:[e(T,{"aria-hidden":"true",children:e(Dt,{})}),"\xA0",v?"loading...":"Login"]})]}),c(xn,{children:["Don\u2019t have an account?"," ",e(ct,{onClick:()=>t("signup"),children:"Sign Up"})]}),e(Ut,{errorMsg:a,clearErrorMsg:()=>i(null)})]})};var hn=n("div").withConfig({displayName:"LoginForm___StyledDiv",componentId:"sc-fikavc-0"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}),yn=n("img").withConfig({displayName:"LoginForm___StyledImg",componentId:"sc-fikavc-1"})({width:"5em",marginLeft:"auto",marginRight:"auto",marginTop:"1rem",marginBottom:"1rem"}),fn=n("div").withConfig({displayName:"LoginForm___StyledDiv2",componentId:"sc-fikavc-2"})({marginBottom:"1.5rem"}),wn=n(P).withConfig({displayName:"LoginForm___StyledInputAdornment",componentId:"sc-fikavc-3"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),vn=n("div").withConfig({displayName:"LoginForm___StyledDiv3",componentId:"sc-fikavc-4"})({marginBottom:"1.5rem"}),_n=n(N).withConfig({displayName:"LoginForm___StyledIconButton",componentId:"sc-fikavc-5"})({padding:"0",fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),bn=n(P).withConfig({displayName:"LoginForm___StyledInputAdornment2",componentId:"sc-fikavc-6"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Sn=n(V).withConfig({displayName:"LoginForm___StyledButton",componentId:"sc-fikavc-7"})({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",fontSize:"1rem"}),xn=n("p").withConfig({displayName:"LoginForm___StyledP",componentId:"sc-fikavc-8"})({textAlign:"center",marginTop:"0.75rem",marginBottom:"0.75rem"});const In=({setAuthType:t,closeModal:o})=>{var S,M,X;const[r,s]=h.exports.useState(!1),[a,i]=h.exports.useState(""),[l,p]=h.exports.useState(!1),{setUser:m}=Y(),{notify:u}=dt(),{register:g,handleSubmit:y,reset:x,formState:{errors:v}}=kt({mode:"onTouched"}),[E,{loading:$}]=Co({onError:C=>{i(Ot(C))}}),_=y(({username:C,confirmPassword:jt,password:pt})=>{if(pt!==jt)return i("Both passwords need to match.");E({variables:{username:C,password:pt},update:(Hr,{data:U})=>{m(U==null?void 0:U.register),u(`Hey, ${U==null?void 0:U.register.username}!`),x(),o()}})});return c(Cn,{children:[e(kn,{src:K,alt:"sof-logo"}),c("form",{onSubmit:_,children:[e($n,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},g("username",un)),{placeholder:"username",type:"text",error:"username"in v,helperText:"username"in v?(S=v.username)==null?void 0:S.message:"",InputProps:{startAdornment:e(Dn,{children:e(it,{})})}}))}),e(An,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},g("password",j({name:"password",min:6}))),{placeholder:"password",type:r?"text":"password",error:"password"in v,helperText:"password"in v?(M=v.password)==null?void 0:M.message:"",InputProps:{endAdornment:e(Nn,{"aria-label":r?"hide password":"show password",tag:"button",onClick:()=>s(C=>!C),children:r?e(tt,{color:"primary"}):e(et,{color:"primary"})}),startAdornment:e(Mn,{children:e($t,{})})}}))}),e(Ln,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},g("confirmPassword",j({name:"confirm-password",min:6}))),{placeholder:"confirmPassword",type:l?"text":"password",error:"confirmPassword"in v,helperText:"confirmPassword"in v?(X=v.confirmPassword)==null?void 0:X.message:"",InputProps:{endAdornment:e(Bn,{"aria-label":l?"hide password":"show password",onClick:()=>p(C=>!C),tag:"button",children:l?e(tt,{color:"primary"}):e(et,{color:"primary"})}),startAdornment:e(Rn,{children:e(ie,{color:"primary"})})}}))}),c(Tn,{type:"submit",disabled:$,children:[e(En,{"aria-hidden":"true",children:e(ae,{})}),"\xA0",$?"loading...":"Sign Up"]})]}),c(zn,{children:["Already have an account?"," ",e(ct,{onClick:()=>t("login"),children:"Log In"})]}),e(Ut,{errorMsg:a,clearErrorMsg:()=>i("")})]})};var Cn=n("div").withConfig({displayName:"RegisterForm___StyledDiv",componentId:"sc-jmk1yw-0"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}),kn=n("img").withConfig({displayName:"RegisterForm___StyledImg",componentId:"sc-jmk1yw-1"})({width:"5em",marginLeft:"auto",marginRight:"auto",marginTop:"1rem",marginBottom:"1rem"}),$n=n("div").withConfig({displayName:"RegisterForm___StyledDiv2",componentId:"sc-jmk1yw-2"})({marginBottom:"1.5rem"}),Dn=n(P).withConfig({displayName:"RegisterForm___StyledInputAdornment",componentId:"sc-jmk1yw-3"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),An=n("div").withConfig({displayName:"RegisterForm___StyledDiv3",componentId:"sc-jmk1yw-4"})({marginBottom:"1.5rem"}),Nn=n(N).withConfig({displayName:"RegisterForm___StyledIconButton",componentId:"sc-jmk1yw-5"})({padding:"0",fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Mn=n(P).withConfig({displayName:"RegisterForm___StyledInputAdornment2",componentId:"sc-jmk1yw-6"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Ln=n("div").withConfig({displayName:"RegisterForm___StyledDiv4",componentId:"sc-jmk1yw-7"})({marginBottom:"1.5rem"}),Bn=n(N).withConfig({displayName:"RegisterForm___StyledIconButton2",componentId:"sc-jmk1yw-8"})({padding:"0",fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Rn=n(P).withConfig({displayName:"RegisterForm___StyledInputAdornment3",componentId:"sc-jmk1yw-9"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Tn=n(V).withConfig({displayName:"RegisterForm___StyledButton",componentId:"sc-jmk1yw-10"})({display:"flex",alignItems:"center",justifyContent:"center",width:"100%",paddingTop:"0.75rem",paddingBottom:"0.75rem"}),En=n(T).withConfig({displayName:"RegisterForm___StyledSvgIcon",componentId:"sc-jmk1yw-11"})({fontSize:"1.5em"}),zn=n("p").withConfig({displayName:"RegisterForm___StyledP",componentId:"sc-jmk1yw-12"})({textAlign:"center",marginTop:"0.75rem",marginBottom:"0.75rem"});function On(t){return h.exports.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 213.333 213.333",style:{enableBackground:"new 0 0 213.333 213.333"},xmlSpace:"preserve"},t),h.exports.createElement("path",{d:"M106.667 53.333 0 160h213.333z"}))}function Fn(t){return h.exports.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 213.333 213.333",style:{enableBackground:"new 0 0 213.333 213.333"},xmlSpace:"preserve"},t),h.exports.createElement("path",{d:"M0 53.333 106.667 160 213.333 53.333z"}))}const Pn=n.div.withConfig({displayName:"Dialog__DialogBackDrop",componentId:"sc-13xw1wa-0"})(({isMounted:t})=>[{position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",top:"0",right:"0",bottom:"0",left:"0","--tw-bg-opacity":"0.5",backgroundColor:"hsla(210, 8%, 5%, var(--tw-bg-opacity))",zIndex:"-1",WebkitTapHighlightColor:"transparent",opacity:"0",transitionProperty:"opacity"},t&&{opacity:"1",transitionProperty:"opacity"}]),Un=n.div.withConfig({displayName:"Dialog__DialogChildrenContainer",componentId:"sc-13xw1wa-1"})(({maxWidth:t})=>[{position:"relative",maxHeight:"calc(100% - 2rem)",borderRadius:"0.125rem",overflowY:"auto",display:"flex",flexDirection:"column",maxWidth:"42rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",color:"rgba(0, 0, 0, .87)",margin:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{margin:"2rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}},t&&`max-width: ${t};`]),qn=p=>{var m=p,{focusFirst:t,focusAfterClosed:o,onClose:r,autoFocus:s,children:a,maxWidth:i}=m,l=I(m,["focusFirst","focusAfterClosed","onClose","autoFocus","children","maxWidth"]);const[u,g]=h.exports.useState(!1);h.exports.useEffect(()=>(g(!0),()=>{g(!1)}),[u]);const{ref:y,modalRoot:x}=Tt({autoFocus:s,focusFirst:t,focusAfterClosed:o,onClose:r,overlayModal:!0}),v=e(jn,{role:"presentation",children:c(Pn,{isMounted:u,children:[e("div",{tabIndex:0}),e(Hn,{role:"presentation",tabIndex:-1,children:e(Un,f(d({ref:y,role:"dialog",maxWidth:i},l),{children:a}))}),e("div",{tabIndex:0})]})});return It.createPortal(v,x)},Qn=a=>{var i=a,{onClose:t,children:o,styles:r}=i,s=I(i,["onClose","children","styles"]);return c(Vn,f(d({},s),{$_css:[{marginTop:"0.5rem",marginBottom:"0.5rem",flex:"0 0 auto"},r&&r.root],children:[e(Gn,{children:o}),t?e(Kn,{tag:"button","aria-label":"close dialog",styles:{iconButton:r&&r.closeBtn},onClick:t,children:e(nt,{})}):null]}))},Wn=r=>{var s=r,{children:t}=s,o=I(s,["children"]);return e(Yn,f(d({},o),{children:t}))},_i=r=>{var s=r,{children:t}=s,o=I(s,["children"]);return e(Jn,f(d({},o),{children:t}))};var jn=n("div").withConfig({displayName:"Dialog___StyledDiv",componentId:"sc-13xw1wa-2"})({position:"fixed",zIndex:"1300",top:"0",right:"0",bottom:"0",left:"0"}),Hn=n("div").withConfig({displayName:"Dialog___StyledDiv2",componentId:"sc-13xw1wa-3"})({height:"100%",outline:"2px solid transparent",outlineOffset:"2px",display:"flex",justifyContent:"center",alignItems:"center"}),Vn=n("div").withConfig({displayName:"Dialog___StyledDiv3",componentId:"sc-13xw1wa-4"})(["",""],t=>t.$_css),Gn=n("h3").withConfig({displayName:"Dialog___StyledH",componentId:"sc-13xw1wa-5"})({margin:"0",fontWeight:"700"}),Kn=n(N).withConfig({displayName:"Dialog___StyledIconButton",componentId:"sc-13xw1wa-6"})({position:"absolute",right:"8px",top:"8px",fontSize:"1.5em"}),Yn=n("div").withConfig({displayName:"Dialog___StyledDiv4",componentId:"sc-13xw1wa-7"})({flex:"1 1 auto",overflowY:"auto"}),Jn=n("div").withConfig({displayName:"Dialog___StyledDiv5",componentId:"sc-13xw1wa-8"})({marginTop:"0.5rem",marginBottom:"0.5rem",display:"flex",flex:"0 0 auto",justifyContent:"flex-end",alignItems:"center"});const qt=({closeMenu:t,buttonType:o})=>{const[r,s]=h.exports.useState(!1),[a,i]=h.exports.useState(!1),[l,p]=h.exports.useState("login");h.exports.useEffect(()=>(i(!0),()=>{i(!1)}),[a]);const m=()=>{a&&p("login"),a&&s(!0),o==="mobile"&&t&&t()},u=()=>{a&&p("signup"),a&&s(!0),o==="mobile"&&t&&t()},g=()=>{a&&s(!1)};return c("div",{style:{display:"inline"},children:[(()=>o==="ask"?e(Xn,{onClick:m,children:"Ask Question"}):o==="link"?e(jo,{to:"#",onClick:m,style:{cursor:"pointer"},children:"ask your own question."}):o==="upvote"?e(N,{tag:"button",onClick:m,"aria-label":"upvote",children:e(Zn,{"aria-hidden":"true",children:e(On,{})})}):o==="downvote"?e(N,{tag:"button",onClick:m,"aria-label":"downvote",children:e(tr,{"aria-hidden":"true",children:e(Fn,{})})}):o==="mobile"?c("div",{children:[c(D,{tag:"div",onClick:m,children:[e(er,{"aria-hidden":"true"}),"Log In"]}),c(D,{tag:"div",onClick:u,children:[e(or,{"aria-hidden":"true"}),"Sign Up"]})]}):c(nr,{children:[e(rr,{onClick:m,children:"Log In"}),e(ir,{onClick:u,children:"Sign Up"})]}))(),r?c(qn,{onClose:g,children:[e(Qn,{onClose:g}),e(Wn,{children:l==="login"?e(gn,{setAuthType:p,closeModal:g}):e(In,{setAuthType:p,closeModal:g})})]}):null]})};var Xn=n(V).withConfig({displayName:"AuthFormOnButton___StyledButton",componentId:"sc-1ng5y0b-0"})({"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},fontSize:".9375rem","@media (min-width: 768px)":{fontSize:"1rem"}}),Zn=n(T).withConfig({displayName:"AuthFormOnButton___StyledSvgIcon",componentId:"sc-1ng5y0b-1"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"}),tr=n(T).withConfig({displayName:"AuthFormOnButton___StyledSvgIcon2",componentId:"sc-1ng5y0b-2"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"}),er=n(Dt).withConfig({displayName:"AuthFormOnButton___StyledExitToAppIcon",componentId:"sc-1ng5y0b-3"})({marginRight:"0.5rem",fontSize:"1.2em"}),or=n(it).withConfig({displayName:"AuthFormOnButton___StyledPersonAddIcon",componentId:"sc-1ng5y0b-4"})({marginRight:"0.5rem",fontSize:"1.2em"}),nr=n("div").withConfig({displayName:"AuthFormOnButton___StyledDiv",componentId:"sc-1ng5y0b-5"})({display:"inline-flex"}),rr=n(V).withConfig({displayName:"AuthFormOnButton___StyledButton2",componentId:"sc-1ng5y0b-6"})({fontSize:".9375rem",marginRight:"0.75rem"}),ir=n(V).withConfig({displayName:"AuthFormOnButton___StyledButton3",componentId:"sc-1ng5y0b-7"})({fontSize:".9375rem"});const Qt=t=>{const l=t,{src:o,alt:r,to:s,styles:a}=l,i=I(l,["src","alt","to","styles"]);return e(ar,f(d({to:s},i),{$_css:[{minWidth:"1rem",minHeight:"1rem",borderRadius:"0.375rem",marginRight:"0.5rem"},a&&a.avatarRoot],children:e(sr,{src:o,alt:r,$_css2:[{color:"rgba(0, 0, 0, 0)",width:"100%",height:"100%",objectFit:"cover",textAlign:"center",borderRadius:"inherit"},a&&a.img]})}))};var ar=n(F).withConfig({displayName:"Avatar___StyledLink",componentId:"sc-dgotro-0"})(["",""],t=>t.$_css),sr=n("img").withConfig({displayName:"Avatar___StyledImg",componentId:"sc-dgotro-1"})(["",""],t=>t.$_css2);const dr=({user:t,logoutUser:o})=>{const[r,s]=h.exports.useState(void 0),a=Boolean(r),i=m=>{s(m.currentTarget)},l=()=>{s(void 0)},p=()=>{o(),l()};return c("div",{children:[c(lr,{tag:"button",onClick:i,"aria-label":a?"hide User settings":"show User settings",children:[t?e(cr,{to:`/user/${t.username}`,alt:t.username,src:`https://secure.gravatar.com/avatar/${t._id}?s=164&d=identicon`}):null,e(se,{})]}),e(st,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:l,children:t?c("div",{children:[c(D,{tag:"a",href:`/user/${t.username}`,onClick:l,children:[e(pr,{"aria-hidden":"true",children:e(At,{})}),"My Profile"]}),c(D,{tag:"div",onClick:p,children:[e(mr,{"aria-hidden":"true",children:e(Nt,{})}),"Logout: ",t.username]})]}):e(qt,{buttonType:"mobile",closeMenu:l})})]})};var lr=n(N).withConfig({displayName:"UserMenuMobile___StyledIconButton",componentId:"sc-vardmv-0"})({fontSize:"1.5em"}),cr=n(Qt).withConfig({displayName:"UserMenuMobile___StyledAvatar",componentId:"sc-vardmv-1"})({width:"1.2em",height:"1.2em",fontSize:".8em"}),pr=n(T).withConfig({displayName:"UserMenuMobile___StyledSvgIcon",componentId:"sc-vardmv-2"})({marginRight:"0.5rem"}),mr=n(T).withConfig({displayName:"UserMenuMobile___StyledSvgIcon2",componentId:"sc-vardmv-3"})({marginRight:"0.5rem"});const ur=({user:t,logoutUser:o})=>{const[r,s]=h.exports.useState(void 0),a=p=>{s(p.currentTarget)},i=()=>{s(void 0)},l=()=>{o(),i()};return e("div",{children:t?c("div",{style:{display:"inline"},children:[c(gr,{onClick:a,children:[e(Qt,{to:`/user/${t.username}`,alt:t.username,src:`https://secure.gravatar.com/avatar/${t._id}?s=164&d=identicon`,styles:{avatarRoot:{width:"1.5em",height:"1.5em"}}}),e("span",{children:t.username}),e(T,{"aria-hidden":"true",children:e(de,{})})]}),c(st,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:i,children:[c(D,{tag:"a",href:`/user/${t.username}`,onClick:i,children:[e(hr,{"aria-hidden":"true",children:e(At,{})}),"My Profile"]}),c(D,{tag:"div",onClick:l,children:[e(yr,{"aria-hidden":"true",children:e(Nt,{})}),"Logout"]})]})]}):e(qt,{})})};var gr=n(ct).withConfig({displayName:"UserMenuDesktop___StyledEmptyLink",componentId:"sc-tnxd8t-0"})({fontSize:".9375rem",display:"flex",alignItems:"center",justifyContent:"center"}),hr=n(T).withConfig({displayName:"UserMenuDesktop___StyledSvgIcon",componentId:"sc-tnxd8t-1"})({marginRight:"0.5rem"}),yr=n(T).withConfig({displayName:"UserMenuDesktop___StyledSvgIcon2",componentId:"sc-tnxd8t-2"})({marginRight:"0.5rem"});const Wt=r=>{var s=r,{setSearchOpen:t}=s,o=I(s,["setSearchOpen"]);const[a,i]=h.exports.useState(""),l=le(),p=u=>{u.preventDefault(),a!==""&&l(`/search/${a}`)},m=()=>{t&&t(!1),i("")};return e(fr,f(d({},o),{$_css:[{flexGrow:".6"}],children:e("form",{onSubmit:p,children:e(_r,{tag:"input",type:"search",placeholder:"Search\u2026",value:a,onChange:u=>i(u.target.value),styles:{inputRoot:{paddingTop:"0.25rem",paddingBottom:"0.25rem"}},fullWidth:!0,InputProps:{startAdornment:e(wr,{children:e(Mt,{})}),endAdornment:a||t?e(P,{children:e(vr,{"aria-label":"Cancel search",tag:"button",onClick:m,children:e(ce,{})})}):null}})})}))};var fr=n("div").withConfig({displayName:"SearchBar___StyledDiv",componentId:"sc-supvrm-0"})(["",""],t=>t.$_css),wr=n(P).withConfig({displayName:"SearchBar___StyledInputAdornment",componentId:"sc-supvrm-1"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"rgba(160, 174, 192, var(--tw-text-opacity))"}),vr=n(N).withConfig({displayName:"SearchBar___StyledIconButton",componentId:"sc-supvrm-2"})({padding:"0",fontSize:"1.5em"}),_r=n(Q).withConfig({displayName:"SearchBar___StyledTextField",componentId:"sc-supvrm-3"})({lineHeight:".75rem"});const br=n.div.withConfig({displayName:"NavBar__AppBar",componentId:"sc-1b086mi-0"})(()=>[{width:"100%",display:"flex",flexDirection:"column",flexShrink:"0",zIndex:"1100",boxSizing:"border-box",position:"sticky",top:"0",left:"auto",right:"0",color:"inherit",borderStyle:"solid",borderTopWidth:"4px","--tw-border-opacity":"1",borderTopColor:"rgba(237, 100, 166, var(--tw-border-opacity))","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderBottomWidth:"1px",borderBottomColor:"rgba(160, 174, 192, var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))"}]),Sr=n.div.withConfig({displayName:"NavBar__ToolBar",componentId:"sc-1b086mi-1"})(()=>[{display:"flex",alignItems:"center",position:"relative",paddingLeft:"0.5rem",paddingRight:"0.5rem",minHeight:"48px","@media (min-width: 768px)":{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}]),xr=n.div.withConfig({displayName:"NavBar__Container",componentId:"sc-1b086mi-2"})(()=>[{width:"100%",display:"flex",alignItems:"center",marginLeft:"auto",marginRight:"auto","@media (min-width: 1280px)":{maxWidth:"1280px"}}]),Ir=n.div.withConfig({displayName:"NavBar__MdScreenTopLeft",componentId:"sc-1b086mi-3"})(()=>[{display:"none",marginRight:"0.5rem","@media (min-width: 640px)":{display:"inline-flex",alignItems:"center"}}]),Cr=n.div.withConfig({displayName:"NavBar__SmScreenTopLeft",componentId:"sc-1b086mi-4"})({marginRight:"1rem",display:"flex",alignItems:"center","@media (min-width: 640px)":{display:"none"}}),kr=n.div.withConfig({displayName:"NavBar__SmScreenTopRight",componentId:"sc-1b086mi-5"})({display:"flex",alignItems:"center","@media (min-width: 640px)":{display:"none"}}),$r=n.div.withConfig({displayName:"NavBar__MdScreenTopRight",componentId:"sc-1b086mi-6"})({display:"none","@media (min-width: 640px)":{display:"block"}}),Dr=()=>{const{user:t,logoutUser:o}=Y(),[r,s]=h.exports.useState(!1),a=pe();h.exports.useEffect(()=>{r&&s(!1)},[]);const i=()=>{o(),a.resetStore()};return e(br,{children:c(Sr,{children:[!r&&c(xr,{children:[c(Ar,{children:[c(Cr,{children:[e(po,{}),e(Nr,{to:"/",children:e("img",{src:K,width:"25px",height:"25px",alt:"sof-logo"})})]}),e(Ir,{children:c(Mr,{to:"/",children:[e("img",{src:K,width:"28px",height:"28px",alt:"sof-logo",style:{marginRight:"5px"}}),"stack",e("strong",{children:"underflow"})]})}),e(Lr,{})]}),c(kr,{children:[e(Br,{tag:"button",onClick:()=>s(l=>!l),"aria-label":"search",children:e(Mt,{})}),e(dr,{user:t,logoutUser:i})]}),e($r,{children:e(ur,{user:t,logoutUser:i})})]}),r&&e(Wt,{setSearchOpen:s})]})})};var Ar=n("div").withConfig({displayName:"NavBar___StyledDiv",componentId:"sc-1b086mi-7"})({display:"flex",flexGrow:"1",alignItems:"center"}),Nr=n(F).withConfig({displayName:"NavBar___StyledLink",componentId:"sc-1b086mi-8"})({paddingLeft:"0.5rem",paddingRight:"0.5rem",marginBottom:"0.25rem"}),Mr=n(F).withConfig({displayName:"NavBar___StyledLink2",componentId:"sc-1b086mi-9"})({marginRight:"0.25rem",display:"flex",alignItems:"center"}),Lr=n(Wt).withConfig({displayName:"NavBar___StyledSearchBar",componentId:"sc-1b086mi-10"})({display:"none","@media (min-width: 640px)":{display:"block"}}),Br=n(N).withConfig({displayName:"NavBar___StyledIconButton",componentId:"sc-1b086mi-11"})({fontSize:"1.5em"});const Rr=({children:t})=>c(oo,{children:[e(Dr,{}),t]}),Tr=()=>e(Rr,{children:e(to,{})}),Er="https://suf-mern-gql-backend.herokuapp.com/",zr=new me({uri:Er}),Or=ue(()=>{const t=z.loadUser();return{headers:{authorization:t?t.token:null}}}),Fr=new ge({cache:new he({typePolicies:{Question:{fields:{upvotedBy:{merge(t,o){return o}},downvotedBy:{merge(t,o){return o}},comments:{merge(t,o){return o}},answers:{merge(t,o){return o}},tags:{merge(t,o){return o}}}},Answer:{fields:{upvotedBy:{merge(t,o){return o}},downvotedBy:{merge(t,o){return o}},comments:{merge(t,o){return o}}}}}}),link:ye([Or,zr])}),Pr=Lt`*, ::before, ::after {
box-sizing: border-box;
border-width: 0;
border-style: solid;
border-color: currentColor;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgba(10.20000000000001, 148.92, 255, 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-blur: var(--tw-empty,/*!*/ /*!*/);
--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
--tw-invert: var(--tw-empty,/*!*/ /*!*/);
--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        }
html {
line-height: 1.5;
-webkit-text-size-adjust: 100%;
-moz-tab-size: 4;
tab-size: 4;
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
body {
margin: 0;
font-family: inherit;
line-height: inherit;
        }
hr {
height: 0;
color: inherit;
border-top-width: 1px;
        }
abbr[title] {
text-decoration: underline dotted;
        }
b, strong {
font-weight: bolder;
        }
code, kbd, samp, pre {
font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
font-size: 1em;
        }
small {
font-size: 80%;
        }
sub, sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
        }
sub {
bottom: -0.25em;
        }
sup {
top: -0.5em;
        }
table {
text-indent: 0;
border-color: inherit;
border-collapse: collapse;
        }
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: inherit;
margin: 0;
padding: 0;
color: inherit;
        }
button, select {
text-transform: none;
        }
button, [type='button'], [type='reset'], [type='submit'] {
-webkit-appearance: button;
        }
::-moz-focus-inner {
border-style: none;
padding: 0;
        }
:-moz-focusring {
outline: 1px dotted ButtonText;
        }
:-moz-ui-invalid {
box-shadow: none;
        }
legend {
padding: 0;
        }
progress {
vertical-align: baseline;
        }
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
height: auto;
        }
[type='search'] {
-webkit-appearance: textfield;
outline-offset: -2px;
        }
::-webkit-search-decoration {
-webkit-appearance: none;
        }
::-webkit-file-upload-button {
-webkit-appearance: button;
font: inherit;
        }
summary {
display: list-item;
        }
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
margin: 0;
        }
button {
background-color: transparent;
background-image: none;
        }
fieldset {
margin: 0;
padding: 0;
        }
ol, ul {
list-style: none;
margin: 0;
padding: 0;
        }
img {
border-style: solid;
        }
textarea {
resize: vertical;
        }
input::placeholder, textarea::placeholder {
color: #cbd5e0;
        }
button, [role="button"] {
cursor: pointer;
        }
h1, h2, h3, h4, h5, h6 {
font-size: inherit;
font-weight: inherit;
        }
a {
color: inherit;
text-decoration: inherit;
        }
pre, code, kbd, samp {
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
img, svg, video, canvas, audio, iframe, embed, object {
display: block;
vertical-align: middle;
        }
img, video {
max-width: 100%;
height: auto;
        }
[hidden] {
display: none;
        }
@keyframes spin {
to {
transform: rotate(360deg);
        }
        }
@keyframes ping {
75%, 100% {
transform: scale(2);
opacity: 0;
        }
        }
@keyframes pulse {
50% {
opacity: .5;
        }
        }
@keyframes bounce {
0%, 100% {
transform: translateY(-25%);
animation-timing-function: cubic-bezier(0.8,0,1,1);
        }
50% {
transform: none;
animation-timing-function: cubic-bezier(0,0,0.2,1);
        }
        }`,Ur=Lt({body:{WebkitTapHighlightColor:"hsl(206,100%,52%)",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}),qr=()=>c(R,{children:[e(Pr,{}),e(Ur,{})]}),Qr=L.forwardRef(function(o,r){const y=o,{open:s,anchorOrigin:a,children:i}=y,l=I(y,["open","anchorOrigin","children"]);let p,m={transform:"var(--tw-transform)",bottom:"24px",left:"50%","--tw-translate-x":"-50%",right:"auto"};const{vertical:u,horizontal:g}=a;return g==="left"&&u==="top"?p={"@media (min-width: 768px)":{left:"24px",top:"24px",right:"auto"}}:g==="right"&&u==="top"?p={"@media (min-width: 768px)":{right:"24px",top:"24px",left:"auto"}}:g==="center"&&u==="top"?p={"@media (min-width: 768px)":{left:"50%",top:"24px","--tw-translate-x":"-50%",transform:"var(--tw-transform)"}}:g==="right"&&u==="bottom"?p={"@media (min-width: 768px)":{right:"24px",bottom:"24px",left:"auto"}}:g==="left"&&u==="bottom"?p={"@media (min-width: 768px)":{left:"24px",bottom:"24px",right:"auto"}}:g==="center"&&u==="bottom"&&(p={bottom:"24px",left:"50%","--tw-translate-x":"-50%",transform:"var(--tw-transform)",right:"auto"}),e(R,{children:s?e(Wr,f(d({ref:r},l),{$_css:[{position:"fixed",zIndex:"1400",display:"flex",alignItems:"center",justifyContent:"flex-start"},m,p],children:i})):null})});var Wr=n("div").withConfig({displayName:"Snackbar___StyledDiv",componentId:"sc-gqqpl0-0"})(["",""],t=>t.$_css);const jr=()=>{const{notification:t,clearNotif:o}=dt();if(!(t!=null&&t.message))return null;const{message:r,severity:s}=t;return e(Qr,{open:!!t,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e(Pt,{onClose:()=>o(),severity:s,children:r})})};fe.createRoot(document.getElementById("root")).render(e(L.StrictMode,{children:e(we,{client:Fr,children:e(ve,{basename:"/suf-mern-gql-frontend/",children:e(Me,{children:c(vo,{children:[e(qr,{}),e(jr,{}),e(Tr,{})]})})})})}));export{qt as A,wi as B,Zr as C,Le as D,ti as E,R as F,ei as G,_o as H,P as I,ni as J,ri as K,Qe as L,ii as M,ai as N,vi as O,Xr as P,bo as Q,Jr as R,T as S,Q as T,di as U,Et as V,yi as W,N as X,Kr as Y,Yr as Z,Ut as _,c as a,fi as b,V as c,Y as d,si as e,mi as f,Ot as g,Qt as h,jo as i,e as j,ui as k,ci as l,pi as m,li as n,oi as o,Uo as p,j as q,On as r,Fn as s,hi as t,dt as u,qn as v,Qn as w,Wn as x,_i as y,gi as z};
