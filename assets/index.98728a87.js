var Vt=Object.defineProperty,Gt=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var mt=(t,o,r)=>o in t?Vt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,d=(t,o)=>{for(var r in o||(o={}))ut.call(o,r)&&mt(t,r,o[r]);if(G)for(var r of G(o))gt.call(o,r)&&mt(t,r,o[r]);return t},f=(t,o)=>Gt(t,Kt(o));var x=(t,o)=>{var r={};for(var a in t)ut.call(t,a)&&o.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&G)for(var a of G(t))o.indexOf(a)<0&&gt.call(t,a)&&(r[a]=t[a]);return r};import{R as L,j as ot,r as h,_ as n,C as A,L as O,G as _t,M as bt,a as St,u as xt,A as Yt,b as Jt,c as B,N as Xt,d as It,I as Zt,e as nt,g as w,f as rt,h as Ct,i as k,k as te,l as ee,m as oe,n as ne,o as re,p as ie,O as kt,S as j,q as $t,s as Dt,B as it,t as tt,v as et,w as At,x as Nt,y as ae,z as se,D as de,E as Mt,F as Lt,H as le,J as ce,K as Bt,P as pe,Q as me,T as ue,U as ge,V as he,W as ye,X as fe,Y as Rt,Z as we,$ as ve,a0 as _e}from"./vendor.cf5572b9.js";const be=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};be();const Se="modulepreload",ht={},xe="/suf-mern-gql-frontend/",z=function(o,r){return!r||r.length===0?o():Promise.all(r.map(a=>{if(a=`${xe}${a}`,a in ht)return;ht[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Se,s||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),s)return new Promise((p,m)=>{l.addEventListener("load",p),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>o())};function Tt(){const t=L.createContext(void 0);function o(){const r=L.useContext(t);if(r===void 0)throw new Error("useCtx must be inside a Provider with a value");return r}return[o,t.Provider]}const at="sofCloneUserKey",Et="sofCloneDarkMode",Ie=t=>localStorage.setItem(at,JSON.stringify(t)),Ce=()=>JSON.parse(localStorage.getItem(at)),ke=()=>localStorage.removeItem(at),$e=t=>localStorage.setItem(Et,JSON.stringify(t)),De=()=>JSON.parse(localStorage.getItem(Et)),q={saveUser:Ie,loadUser:Ce,removeUser:ke,saveDarkMode:$e,loadDarkMode:De},e=ot.exports.jsx,c=ot.exports.jsxs,R=ot.exports.Fragment,[Ae,Ne]=Tt(),Me=(t,o)=>{switch(o.type){case"LOGIN":return f(d({},t),{user:o.payload});case"LOGOUT":return f(d({},t),{user:null});default:return t}},Le=({children:t})=>{const[o,r]=h.exports.useReducer(Me,{user:null});h.exports.useEffect(()=>{const i=q.loadUser();i&&r({type:"LOGIN",payload:i})},[]);const a=i=>{q.saveUser(i),r({type:"LOGIN",payload:i})},s=()=>{q.removeUser(),r({type:"LOGOUT"})};return e(Ne,{value:{user:o.user,setUser:a,logoutUser:s},children:t})},Y=Ae,yt=n.div.withConfig({displayName:"Item__MenuItemStyled",componentId:"sc-1uhryze-0"})(({selected:t})=>[{display:"flex",alignItems:"center",justifyContent:"flex-start",whiteSpace:"nowrap",textDecoration:"none",position:"relative",textAlign:"left",overflow:"hidden",transitionProperty:"background-color, border-color, color, fill, stroke",width:"auto",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",font:"inherit","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"hsla(210, 8%, 5%, var(--tw-text-opacity))",":hover":{"--tw-bg-opacity":"0.05",backgroundColor:"hsla(210, 8%, 5%, var(--tw-bg-opacity))"},verticalAlign:"middle",marginTop:".1em",marginBottom:".1em",borderRadius:"0.125rem",userSelect:"none"},t&&{"--tw-bg-opacity":"0.1",backgroundColor:"hsla(210, 8%, 5%, var(--tw-bg-opacity))",borderRightWidth:"4px","--tw-border-opacity":"1",borderColor:"hsla(27, 90%, 55%, var(--tw-border-opacity))"},A`
    -webkit-tap-highlight-color: transparent;
  `]),D=L.forwardRef(function(o,r){const m=o,{tag:a,href:s,selected:i,children:l}=m,p=x(m,["tag","href","selected","children"]);return a==="a"?e(O,f(d({to:s,ref:r},p),{children:e(yt,{selected:i,children:l})})):e(yt,f(d({selected:i,ref:r},p),{children:l}))}),Be=n.hr.withConfig({displayName:"Divider",componentId:"sc-140e4i2-0"})(({orientation:t,color:o="lightgray"})=>[{marginTop:"0",marginBottom:"0",borderWidth:"1px",height:"auto"},t==="vertical"?{borderLeftWidth:"0"}:{borderBottomWidth:"0"},A`
      border-color: ${o};
    `]),Re=()=>{const{pathname:t}=xt(),o=A(["",""],{width:".8em",height:".8em",marginRight:"0.5rem",fontSize:"1.5em"});return e(Te,{children:c(Ee,{children:[c(ze,{children:[c(D,{tag:"a",selected:t==="/"||!t.startsWith("/tag")&&!t.startsWith("/user"),href:"/",children:[e(Oe,{$_css2:o}),"Stack Underflow"]}),c(D,{tag:"a",selected:t.startsWith("/tag"),href:"/tags",children:[e(Fe,{$_css3:o}),"Tags"]}),c(D,{tag:"a",selected:t.startsWith("/user"),href:"/users",children:[e(Pe,{$_css4:o}),"Users"]})]}),e(Be,{orientation:"vertical"})]})})};var Te=n("div").withConfig({displayName:"NavMenuDesktop___StyledDiv",componentId:"sc-1rdw5a7-0"})({display:"none","@media (min-width: 640px)":{display:"block"}}),Ee=n("div").withConfig({displayName:"NavMenuDesktop___StyledDiv2",componentId:"sc-1rdw5a7-1"})({position:"sticky",display:"flex",minHeight:"95vh",top:"5vh"}),ze=n("div").withConfig({displayName:"NavMenuDesktop___StyledDiv3",componentId:"sc-1rdw5a7-2"})({display:"flex",flexDirection:"column",marginTop:"1rem"}),Oe=n(_t).withConfig({displayName:"NavMenuDesktop___StyledPublicIcon",componentId:"sc-1rdw5a7-3"})(["",""],t=>t.$_css2),Fe=n(bt).withConfig({displayName:"NavMenuDesktop___StyledLocalOfferIcon",componentId:"sc-1rdw5a7-4"})(["",""],t=>t.$_css3),Pe=n(St).withConfig({displayName:"NavMenuDesktop___StyledPeopleIcon",componentId:"sc-1rdw5a7-5"})(["",""],t=>t.$_css4);const Ue=({children:t})=>c(qe,{children:[e(Re,{}),t]});var qe=n("div").withConfig({displayName:"MainLayout___StyledDiv",componentId:"sc-1kw3mty-0"})({maxWidth:"1264px",width:"100%",marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"relative"});const Qe={width:"2.5rem",height:"2.5rem",display:"inline-block",animation:"spin 1s linear infinite",textAlign:"center","--tw-text-opacity":"1",color:"hsla(206, 100%, 52%, var(--tw-text-opacity))"},We=a=>{var s=a,{size:t,styles:o}=s,r=x(s,["size","styles"]);let i;return t==="small"?i={width:"1rem",height:"1rem"}:t==="medium"?i={width:"1.5rem",height:"1.5rem"}:t==="large"?i={width:"2rem",height:"2rem"}:i={width:"2.5rem",height:"2.5rem"},e(je,{$_css:[{display:"flex",justifyContent:"center",width:"100%",height:"100%"},o&&o.loaderRoot],children:e(He,f(d({},r),{$_css2:[Qe,i,o&&o.loaderIconWrapper],children:e(Ve,{})}))})};var je=n("div").withConfig({displayName:"LoadingSpinner___StyledDiv",componentId:"sc-xjc2lb-0"})(["",""],t=>t.$_css),He=n("span").withConfig({displayName:"LoadingSpinner___StyledSpan",componentId:"sc-xjc2lb-1"})(["",""],t=>t.$_css2),Ve=n(Yt).withConfig({displayName:"LoadingSpinner___StyledLoadingIcon",componentId:"sc-xjc2lb-2"})({width:"100%",height:"100%"});const Z=h.exports.lazy(()=>z(()=>import("./QuesList.2cfbe31c.js"),["assets/QuesList.2cfbe31c.js","assets/vendor.cf5572b9.js","assets/PostedBy.0a9a010b.js","assets/Tag.0434fba4.js"])),Ge=h.exports.lazy(()=>z(()=>import("./AllTags.3d8075fc.js"),["assets/AllTags.3d8075fc.js","assets/vendor.cf5572b9.js","assets/index.dbde4364.js","assets/Tag.0434fba4.js"])),Ke=h.exports.lazy(()=>z(()=>import("./AllUsers.33dd6968.js"),["assets/AllUsers.33dd6968.js","assets/vendor.cf5572b9.js","assets/index.dbde4364.js"])),Ye=h.exports.lazy(()=>z(()=>import("./User.81a1af7d.js"),["assets/User.81a1af7d.js","assets/vendor.cf5572b9.js"])),Je=h.exports.lazy(()=>z(()=>import("./Question.49063131.js"),["assets/Question.49063131.js","assets/vendor.cf5572b9.js","assets/index.dbde4364.js","assets/Tag.0434fba4.js","assets/PostedBy.0a9a010b.js"])),Xe=h.exports.lazy(()=>z(()=>import("./AskQuestion.face3bdb.js"),["assets/AskQuestion.face3bdb.js","assets/vendor.cf5572b9.js","assets/index.dbde4364.js"])),U=h.exports.lazy(()=>z(()=>import("./RightSidePanel.2ba5a6cf.js"),["assets/RightSidePanel.2ba5a6cf.js","assets/vendor.cf5572b9.js","assets/Tag.0434fba4.js"])),Ze=h.exports.lazy(()=>z(()=>import("./NotFound.6f14bb01.js"),["assets/NotFound.6f14bb01.js","assets/vendor.cf5572b9.js"])),to=()=>{const{user:t}=Y();return e(Ue,{children:e(h.exports.Suspense,{fallback:e(We,{}),children:c(Jt,{children:[e(B,{path:"/",element:c(R,{children:[e(Z,{}),e(U,{})]})}),e(B,{path:"/ask",element:t?c(R,{children:[e(Xe,{}),e(U,{})]}):e(Xt,{to:"/"})}),e(B,{path:"/tags",element:e(Ge,{})}),e(B,{path:"/users",element:e(Ke,{})}),e(B,{path:"/user/:username",element:e(Ye,{})}),e(B,{path:"/questions/:quesId",element:c(R,{children:[e(Je,{}),e(U,{})]})}),e(B,{path:"/tags/:tagName",element:c(R,{children:[e(Z,{tagFilterActive:!0}),e(U,{})]})}),e(B,{path:"/search/:query",element:c(R,{children:[e(Z,{searchFilterActive:!0}),e(U,{})]})}),e(B,{element:c(R,{children:[e(Ze,{}),e(U,{})]})})]})})})},eo={display:"flex",flex:"1 1 0%",minHeight:"100vh",width:"100vw",flexDirection:"column",borderRadius:"0.125rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":".87",color:"hsla(210, 8%, 5%, var(--tw-text-opacity))"},oo=L.forwardRef(function(o,r){const p=o,{children:a,elevation:s,styles:i}=p,l=x(p,["children","elevation","styles"]);return e(no,f(d({ref:r},l),{$_css:[eo,s&&{"--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},i&&i.paperRoot],children:a}))});var no=n("div").withConfig({displayName:"Paper___StyledDiv",componentId:"sc-yzi1g7-0"})(["",""],t=>t.$_css);const ft=A(["",""],{display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",backgroundColor:"rgba(0, 0, 0, 0)",userSelect:"none",cursor:"pointer",transitionProperty:"background-color, border-color, color, fill, stroke",borderStyle:"none",borderRadius:"50%",padding:"9px",textDecoration:"none",outlineOffset:"4px",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 97.5%, var(--tw-bg-opacity))"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 90%, var(--tw-bg-opacity))"}}),N=L.forwardRef(function(o,r){const u=o,{tag:a,styles:s,href:i,children:l}=u,p=x(u,["tag","styles","href","children"]);let m;return a==="a"?m=e(ro,f(d({to:i},p),{ref:r,$_css2:[ft,s&&s.iconButton],children:l})):m=e(io,f(d({type:"button",ref:r},p),{$_css3:[ft,s&&s.iconButton],children:l})),e(R,{children:m})});var ro=n(O).withConfig({displayName:"IconButton___StyledLink",componentId:"sc-1i6ir8u-0"})(["",""],t=>t.$_css2),io=n("button").withConfig({displayName:"IconButton___StyledButton",componentId:"sc-1i6ir8u-1"})(["",""],t=>t.$_css3);const wt=t=>{if(typeof t=="string")return document.querySelector(t);if(typeof t=="object"){if(t instanceof HTMLElement)return t;if(t.current)return t.current}return null},zt=({focusFirst:t,onClose:o,focusAfterClosed:r,autoFocus:a,overlayModal:s=!0})=>{let i=document.getElementById("modal-root");i||(i=document.createElement("div"),i.setAttribute("id","modal-root"),document.body.appendChild(i));const l=h.exports.useRef(null);let p=t?wt(t):null,m=r?wt(r):null;return h.exports.useEffect(()=>{function u(y){!l.current||l.current.contains(y.target)||(o(),m&&m.focus())}function g(y){y.key==="Escape"&&(o(),m&&m.focus())}return document.body.addEventListener("keyup",g),document.body.addEventListener("click",u,{capture:!0}),()=>{document.body.removeEventListener("click",u,{capture:!0}),document.body.removeEventListener("keyup",g)}},[o,m]),h.exports.useEffect(()=>{const u=_=>typeof _.focus=="function";let g=!1;const y=_=>{if(!u(_))return!1;g=!0;try{_.focus()}catch(S){console.error(S)}return g=!1,document.activeElement===_},I=_=>{for(var S=0;S<_.childNodes.length;S++){var M=_.childNodes[S];if(y(M)||I(M))return!0}return!1},v=_=>{for(var S=_.childNodes.length-1;S>=0;S--){var M=_.childNodes[S];if(y(M)||v(M))return!0}return!1};p?p.focus():a&&l.current&&I(l.current);let E;const $=_=>{if(!g){if(!l.current){console.error("dialog not found");return}l.current.contains(_.target)?E=_.target:(I(l.current),E===document.activeElement&&v(l.current),E=document.activeElement)}};return s&&document.body.classList.add("has-dialog"),document.addEventListener("focus",$,!0),()=>{s&&document.body.classList.remove("has-dialog"),document.removeEventListener("focus",$,!0),m&&m.focus()}},[p,m,a,s]),{ref:l,modalRoot:i}},ao=n.div.withConfig({displayName:"Menu__MenuContainer",componentId:"sc-3kalmw-0"})(({open:t})=>[{position:"fixed",zIndex:"1300",top:"0",right:"0",bottom:"0",left:"0",visibility:"hidden"},t&&{visibility:"visible"}]),so=n.div.withConfig({displayName:"Menu__MenuBackDrop",componentId:"sc-3kalmw-1"})(()=>[{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"-1",backgroundColor:"rgba(0, 0, 0, 0)"},A`
    -webkit-tap-highlight-color: transparent;
  `]),lo=n.div.withConfig({displayName:"Menu__MenuChildrenContainer",componentId:"sc-3kalmw-2"})(({open:t})=>[{transform:"var(--tw-transform)",position:"absolute",borderRadius:"0.125rem",overflowX:"hidden",overflowY:"auto",outline:"2px solid transparent",outlineOffset:"2px","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(26, 32, 44, var(--tw-text-opacity))",opacity:"0",transitionProperty:"opacity",transitionDelay:"75ms",visibility:"hidden","--tw-scale-x":".75","--tw-scale-y":".5",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(226, 232, 240, var(--tw-border-opacity))"},t&&{visibility:"visible",transform:"none",opacity:"1"}]);var co=n(lo).withConfig({displayName:"Menu___StyledMenuChildrenContainer",componentId:"sc-3kalmw-3"})(["",""],t=>t.$_css2);const st=p=>{var m=p,{open:t,anchorEl:o,anchorOrigin:r,transformOrigin:a,onClose:s,children:i}=m,l=x(m,["open","anchorEl","anchorOrigin","transformOrigin","onClose","children"]);const[u,g]=h.exports.useState(null);h.exports.useEffect(()=>{o&&g(o.getBoundingClientRect())},[o]);const{ref:y,modalRoot:I}=zt({onClose:s,focusAfterClosed:o,overlayModal:!1}),v=()=>{let $={};if(u)return $.top=r.vertical==="top"?`calc(${u.top}px + 10px)`:`calc(${u.bottom}px + 10px)`,r.horizontal==="left"?$.left=`calc(${u.left}px + 5px)`:$.right=`calc(100vw - ${u.right-10}px)`,$},E=c(ao,{role:"presentation",open:t,children:[t&&e(so,{}),e("div",{tabIndex:0}),e(co,f(d({ref:y,tabIndex:-1},l),{open:t,$_css2:u&&f(d({},v()),{transformOrigin:`${a.horizontal||"0px"} ${a.vertical||"0px"}`}),children:i})),e("div",{tabIndex:0})]});return It.createPortal(E,I)},po=()=>{const{pathname:t}=xt(),[o,r]=h.exports.useState(void 0),a=Boolean(o),s=l=>{r(l.currentTarget)},i=()=>{r(void 0)};return c("div",{children:[e(mo,{tag:"button","aria-label":a?"close main menu":"open main menu",onClick:s,children:o?e(nt,{}):e(Zt,{})}),c(st,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:a,onClose:i,children:[c(D,{tag:"a",selected:t==="/"||!t.startsWith("/tag")&&!t.startsWith("/user"),href:"/",onClick:i,children:[e(uo,{}),"Stack Underflow"]}),c(D,{tag:"a",selected:t.startsWith("/tag"),href:"/tags",onClick:i,children:[e(go,{}),"Tags"]}),c(D,{tag:"a",selected:t.startsWith("/user"),href:"/users",onClick:i,children:[e(ho,{}),"Users"]})]})]})};var mo=n(N).withConfig({displayName:"NavMenuMobile___StyledIconButton",componentId:"sc-nabc33-0"})({fontSize:"1.5em"}),uo=n(_t).withConfig({displayName:"NavMenuMobile___StyledPublicIcon",componentId:"sc-nabc33-1"})({marginRight:"0.5rem"}),go=n(bt).withConfig({displayName:"NavMenuMobile___StyledLocalOfferIcon",componentId:"sc-nabc33-2"})({marginRight:"0.5rem"}),ho=n(St).withConfig({displayName:"NavMenuMobile___StyledPeopleIcon",componentId:"sc-nabc33-3"})({marginRight:"0.5rem"});const[yo,fo]=Tt(),dt=yo,wo=(t,o)=>{switch(o.type){case"SET_EDIT":return f(d({},t),{editingQuestion:o.payload});case"CLEAR_EDIT":return f(d({},t),{editingQuestion:null});case"SET_NOTIFICATION":return f(d({},t),{notification:o.payload});case"CLEAR_NOTIFICATION":return f(d({},t),{notification:null});case"TOGGLE_DARK_MODE":return f(d({},t),{darkMode:!t.darkMode});default:return t}},vo=({children:t})=>{const[o,r]=h.exports.useReducer(wo,{editingQuestion:null,notification:null,darkMode:!1});h.exports.useEffect(()=>{q.loadDarkMode()===!0&&r({type:"TOGGLE_DARK_MODE"})},[]);const a=u=>{r({type:"SET_EDIT",payload:u})},s=()=>{r({type:"CLEAR_EDIT"})};let i=null;const l=(u,g="success",y=5)=>{clearTimeout(i),r({type:"SET_NOTIFICATION",payload:{message:u,severity:g,duration:y}}),i=setTimeout(()=>{r({type:"CLEAR_NOTIFICATION"})},y*1e3)},p=()=>{r({type:"CLEAR_NOTIFICATION"})},m=()=>{r({type:"TOGGLE_DARK_MODE"}),q.saveDarkMode(!o.darkMode)};return e(fo,{value:{editingQuestion:o.editingQuestion,notification:o.notification,darkMode:o.darkMode,setEditingQuestion:a,clearEdit:s,notify:l,clearNotif:p,toggleDarkMode:m},children:t})},b={};var _o=(t=>(t.Question="Question",t.Answer="Answer",t))(_o||{}),bo=(t=>(t.Hot="HOT",t.Votes="VOTES",t.Views="VIEWS",t.Newest="NEWEST",t.Oldest="OLDEST",t))(bo||{}),So=(t=>(t.Downvote="DOWNVOTE",t.Upvote="UPVOTE",t))(So||{});const W=w`
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
${H}`,xo=w`
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
${J}`,Io=w`
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
    ${W}`,Ot=w`
    fragment LoggedUserDetails on LoggedUser {
  _id
  username
  role
  token
}
    `,Co=w`
    mutation registerUser($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    ...LoggedUserDetails
  }
}
    ${Ot}`;function ko(t){const o=d(d({},b),t);return k(Co,o)}const $o=w`
    mutation loginUser($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...LoggedUserDetails
  }
}
    ${Ot}`;function Do(t){const o=d(d({},b),t);return k($o,o)}const Ao=w`
    mutation addQuestion($title: String!, $body: String!, $tags: [String!]!) {
  postQuestion(title: $title, body: $body, tags: $tags) {
    ...PostQuestionDetails
  }
}
    ${Io}`;function Jr(t){const o=d(d({},b),t);return k(Ao,o)}const No=w`
    mutation updateQuestion($quesId: ID!, $title: String!, $body: String!, $tags: [String!]!) {
  editQuestion(quesId: $quesId, title: $title, body: $body, tags: $tags) {
    ...QuestionDetails
  }
}
    ${xo}`;function Xr(t){const o=d(d({},b),t);return k(No,o)}const Mo=w`
    mutation removeQuestion($quesId: ID!) {
  deleteQuestion(quesId: $quesId)
}
    `;function Zr(t){const o=d(d({},b),t);return k(Mo,o)}const Lo=w`
    mutation submitQuesVote($quesId: ID!, $voteType: VoteType!) {
  voteQuestion(quesId: $quesId, voteType: $voteType) {
    _id
    voted
    points
  }
}
    `;function ti(t){const o=d(d({},b),t);return k(Lo,o)}const Bo=w`
    mutation addComment($parentId: ID!, $parentType: CommentParentType!, $body: String!) {
  addComment(parentId: $parentId, body: $body, parentType: $parentType) {
    ...CommentDetails
  }
}
    ${H}`;function ei(t){const o=d(d({},b),t);return k(Bo,o)}const Ro=w`
    mutation editComment($commentId: ID!, $body: String!) {
  editComment(commentId: $commentId, body: $body) {
    ...CommentDetails
  }
}
    ${H}`;function oi(t){const o=d(d({},b),t);return k(Ro,o)}const To=w`
    mutation deleteComment($commentId: ID!) {
  deleteComment(commentId: $commentId)
}
    `;function ni(t){const o=d(d({},b),t);return k(To,o)}const Eo=w`
    mutation addAnswer($quesId: ID!, $body: String!) {
  postAnswer(quesId: $quesId, body: $body) {
    ...AnswerDetails
  }
}
    ${J}`;function ri(t){const o=d(d({},b),t);return k(Eo,o)}const zo=w`
    mutation updateAnswer($quesId: ID!, $ansId: ID!, $body: String!) {
  editAnswer(quesId: $quesId, ansId: $ansId, body: $body) {
    ...AnswerDetails
  }
}
    ${J}`;function ii(t){const o=d(d({},b),t);return k(zo,o)}const Oo=w`
    mutation removeAnswer($quesId: ID!, $ansId: ID!) {
  deleteAnswer(quesId: $quesId, ansId: $ansId)
}
    `;function ai(t){const o=d(d({},b),t);return k(Oo,o)}const Fo=w`
    mutation submitAnsVote($quesId: ID!, $ansId: ID!, $voteType: VoteType!) {
  voteAnswer(quesId: $quesId, ansId: $ansId, voteType: $voteType) {
    _id
    voted
    points
  }
}
    `;function si(t){const o=d(d({},b),t);return k(Fo,o)}const Po=w`
    mutation submitAcceptAns($quesId: ID!, $ansId: ID!) {
  acceptAnswer(quesId: $quesId, ansId: $ansId) {
    _id
    acceptedAnswer
  }
}
    `;function di(t){const o=d(d({},b),t);return k(Po,o)}const Uo=w`
    query fetchQuestions($sortBy: SortByType!, $page: Int!, $limit: Int!, $filterByTag: String, $filterBySearch: String) {
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
    ${W}`;function li(t){const o=d(d({},b),t);return rt(Uo,o)}const qo=w`
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
${H}`;function ci(t){const o=d(d({},b),t);return rt(qo,o)}const Qo=w`
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
    `;function pi(t){const o=d(d({},b),t);return rt(Qo,o)}const Wo=w`
    query fetchAllTags {
  getAllTags {
    tagName
    count
  }
}
    `;function mi(t){const o=d(d({},b),t);return Ct(Wo,o)}const jo=w`
    query fetchAllUsers {
  getAllUsers {
    _id
    username
    createdAt
  }
}
    `;function ui(t){const o=d(d({},b),t);return Ct(jo,o)}var K="/suf-mern-gql-frontend/assets/stack-overflow.c1fbc73f.svg";const gi=(t,o)=>o.filter(r=>!t.find(a=>a._id===r._id)),hi=t=>te(new Date(t)),yi=t=>ee(new Date(t),"MMM d', ' yy 'at' H':'mm"),Ft=t=>{var o;return(o=t.graphQLErrors[0])!=null&&o.message?t.graphQLErrors[0].message:t==null?void 0:t.message},T=n.div.withConfig({displayName:"Misc__SvgIcon",componentId:"sc-1yzq7wf-0"})({fill:"currentColor",minWidth:"1em",minHeight:"1em",display:"inline-block",transitionProperty:"background-color, border-color, color, fill, stroke",flexShrink:"0",userSelect:"none",fontSize:"1.5em"}),fi=n.button.withConfig({displayName:"Misc__LightButton",componentId:"sc-1yzq7wf-1"})(()=>[{cursor:"pointer","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0",borderRadius:"0.125rem",fontSize:".9375rem",":hover":{"--tw-text-opacity":"1",color:"rgba(45, 55, 72, var(--tw-text-opacity))"},outlineColor:"darkorange","@media (min-width: 768px)":{borderRadius:"0.375rem"}},Pt]),Pt=A`
  &:disabled {
    opacity: 0.5 !important;
    cursor: disabled;
  }
`,lt={display:"inline-block",transitionProperty:"background-color, border-color, color, fill, stroke",borderWidth:"0",borderRadius:"0.125rem",padding:".5em .8em",cursor:"pointer",verticalAlign:"middle",outlineOffset:"2px",fontSize:".9375rem",textDecoration:"none",lineHeight:"1",whiteSpace:"nowrap","@media (min-width: 768px)":{borderRadius:"0.375rem",padding:".6em 1em"}},V=n.button.withConfig({displayName:"Misc__Button",componentId:"sc-1yzq7wf-2"})(()=>[lt,{"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 40%, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},":active":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},Pt]),wi=n(O).withConfig({displayName:"Misc__ButtonLikeLink",componentId:"sc-1yzq7wf-3"})(()=>[lt,{"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},":active":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}]),vi=n.button.withConfig({displayName:"Misc__ButtonGroupItem",componentId:"sc-1yzq7wf-4"})(({active:t})=>[lt,{borderRadius:"0"},t?{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 90%, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(45, 55, 72, var(--tw-text-opacity))",zIndex:"40"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(210, 8%, 97.5%, var(--tw-bg-opacity))"},"--tw-text-opacity":"1",color:"rgba(74, 85, 104, var(--tw-text-opacity))"}]),_i=n.div.withConfig({displayName:"Misc__ButtonGroup",componentId:"sc-1yzq7wf-5"})(()=>[A`
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
  `,{fontSize:".9375rem",width:"100%","@media (min-width: 640px)":{width:"auto"},"@media (min-width: 768px)":{fontSize:"1rem"}}]),Ho=n(O).withConfig({displayName:"Misc__Link",componentId:"sc-1yzq7wf-6"})(["text-decoration:none;",""],{"--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"hsla(209, 100%, 32%, var(--tw-text-opacity))"}}),ct=n.button.withConfig({displayName:"Misc__EmptyLink",componentId:"sc-1yzq7wf-7"})(["text-decoration:none;",""],{backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"hsla(209, 100%, 32%, var(--tw-text-opacity))"}}),Vo=[{textAlign:"left",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",margin:"0",paddingTop:"0",paddingBottom:"0",paddingLeft:"0.5rem",paddingRight:"0.5rem",pointerEvents:"none",overflow:"hidden",minWidth:"0",borderRadius:"0.125rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(203, 213, 224, var(--tw-border-opacity))",borderStyle:"solid","@media (min-width: 768px)":{borderRadius:"0.375rem"}}],vt=A([""," &:focus ~ fieldset{","}&::placeholder{font-size:1em;","}"],{width:"100%",lineHeight:"2.25rem",borderStyle:"none",outline:"2px solid transparent",outlineOffset:"2px",userSelect:"none",font:"inherit",color:"currentColor"},{borderWidth:"2px","--tw-border-opacity":"1",borderColor:"hsla(206, 100%, 40%, var(--tw-border-opacity))"},{"--tw-text-opacity":"1",color:"rgba(160, 174, 192, var(--tw-text-opacity))"}),Go=A([""," &:hover > fieldset{","}"],{padding:"0.5rem",position:"relative",display:"inline-flex",font:"inherit"},{"--tw-border-opacity":"1",borderColor:"hsla(206, 100%, 40%, var(--tw-border-opacity))"}),Ko=A(["",""],{padding:"0",verticalAlign:"top",minWidth:"0",borderWidth:"0",display:"inline-flex",flexDirection:"column",position:"relative"}),Yo=A(["",""],{transform:"var(--tw-transform)",display:"block",font:"inherit",padding:"0","--tw-text-opacity":".5",color:"hsla(210, 8%, 5%, var(--tw-text-opacity))",transformOrigin:"left top",whiteSpace:"nowrap",transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",textOverflow:"ellipsis",zIndex:"1","--tw-translate-x":"0.75rem","--tw-translate-y":"0.5rem","--tw-scale-x":"1","--tw-scale-y":"1",position:"absolute",top:"0",left:"0",overflow:"hidden"}),Jo=A(["",""],{"--tw-translate-y":"-.4em",transform:"var(--tw-transform)","--tw-scale-x":".75","--tw-scale-y":".75",color:"inherit"}),Q=L.forwardRef(function(o,r){const v=o,{InputProps:a={},fullWidth:s,styles:i,label:l,tag:p,error:m,helperText:u}=v,g=x(v,["InputProps","fullWidth","styles","label","tag","error","helperText"]),{startAdornment:y,endAdornment:I}=a;return c(Xo,{$_css2:[Ko,s&&{width:"100%"},i&&i.fieldRoot],children:[c(Zo,{$_css3:[Go,s&&{width:"100%"},i&&i.inputRoot],children:[l?e(tn,{$_css4:[Yo,Jo,m&&{"--tw-text-opacity":"1",color:"rgba(245, 101, 101, var(--tw-text-opacity)) !important"}],children:l}):null,y||null,p==="textarea"?e(en,f(d({ref:r},g),{$_css5:[vt,i&&i.input]})):e(on,f(d({type:"text",ref:r},g),{$_css6:[vt,{lineHeight:"2.25rem"},i&&i.input]})),e(nn,{"aria-hidden":"true",$_css7:[Vo,m&&{"--tw-border-opacity":"1",borderColor:"rgba(245, 101, 101, var(--tw-border-opacity)) !important"}],children:e(rn,{style:{maxWidth:"100%"},children:e("span",{children:l})})}),I||null]}),m?e(an,{$_css8:[{fontSize:".8125rem"},m&&{"--tw-text-opacity":"1",color:"rgba(245, 101, 101, var(--tw-text-opacity)) !important"}],children:u}):null]})});var Xo=n("div").withConfig({displayName:"TextField___StyledDiv",componentId:"sc-1067g20-0"})(["",""],t=>t.$_css2),Zo=n("div").withConfig({displayName:"TextField___StyledDiv2",componentId:"sc-1067g20-1"})(["",""],t=>t.$_css3),tn=n("label").withConfig({displayName:"TextField___StyledLabel",componentId:"sc-1067g20-2"})(["",""],t=>t.$_css4),en=n("textarea").withConfig({displayName:"TextField___StyledTextarea",componentId:"sc-1067g20-3"})(["",""],t=>t.$_css5),on=n("input").withConfig({displayName:"TextField___StyledInput",componentId:"sc-1067g20-4"})(["",""],t=>t.$_css6),nn=n("fieldset").withConfig({displayName:"TextField___StyledFieldset",componentId:"sc-1067g20-5"})(["",""],t=>t.$_css7),rn=n("legend").withConfig({displayName:"TextField___StyledLegend",componentId:"sc-1067g20-6"})({display:"block",maxWidth:"0",padding:"0",visibility:"hidden",lineHeight:"11px"}),an=n("p").withConfig({displayName:"TextField___StyledP",componentId:"sc-1067g20-7"})(["",""],t=>t.$_css8);const F=L.forwardRef(function(o,r){return e(sn,f(d({},o),{ref:r,$_css:[{display:"inline-flex",justifyContent:"center",alignItems:"center",paddingLeft:"0.25rem",paddingRight:"0.25rem",font:"inherit"}]}))});var sn=n("div").withConfig({displayName:"InputAdornment___StyledDiv",componentId:"sc-sfh9su-0"})(["",""],t=>t.$_css);const Ut=L.forwardRef(function(o,r){const y=o,{severity:a,onClose:s,title:i,children:l,styles:p}=y,m=x(y,["severity","onClose","title","children","styles"]);let u,g;return a==="error"?(u=e(oe,{}),g={"--tw-bg-opacity":"1",backgroundColor:"rgba(229, 62, 62, var(--tw-bg-opacity))"}):a==="info"?(u=e(ne,{}),g={"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))"}):a==="warning"?(u=e(re,{}),g={"--tw-bg-opacity":"1",backgroundColor:"rgba(221, 107, 32, var(--tw-bg-opacity))"}):(u=e(ie,{}),g={"--tw-bg-opacity":"1",backgroundColor:"rgba(56, 161, 105, var(--tw-bg-opacity))"}),c(dn,{$_css:[{fontSize:".8125rem",display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"240px",padding:"0.25rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"0.75",backgroundColor:"rgba(26, 32, 44, var(--tw-bg-opacity))","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderRadius:"0.375rem",fontWeight:"700",lineHeight:"1.25rem",letterSpacing:"0.025em","@media (min-width: 640px)":{fontSize:".9375rem"},"@media (min-width: 768px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}},g&&g,p&&p.alertRoot],children:[c("div",{children:[i?e(ln,{$_css2:[{fontWeight:"700"},p&&p.alertTitle],children:i}):null,c(cn,f(d({ref:r},m),{$_css3:[{display:"flex",alignItems:"center",font:"inherit"},p&&p.alertBody],children:[e(pn,{$_css4:[{display:"flex",marginRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",color:"inherit",fontSize:"1.2em"},p&&p.alertStartIcon],children:u}),e(mn,{$_css5:[{paddingTop:"0.25rem",paddingBottom:"0.25rem"}],children:l})]}))]}),s?e(un,{"aria-label":"close alert",tag:"button",onClick:s,$_css6:[{fontSize:"1.2em",color:"inherit"},p&&p.alertEndIcon],children:e(nt,{})}):null]})});var dn=n("div").withConfig({displayName:"Alert___StyledDiv",componentId:"sc-a0ci59-0"})(["",""],t=>t.$_css),ln=n("div").withConfig({displayName:"Alert___StyledDiv2",componentId:"sc-a0ci59-1"})(["",""],t=>t.$_css2),cn=n("div").withConfig({displayName:"Alert___StyledDiv3",componentId:"sc-a0ci59-2"})(["",""],t=>t.$_css3),pn=n("div").withConfig({displayName:"Alert___StyledDiv4",componentId:"sc-a0ci59-3"})(["",""],t=>t.$_css4),mn=n("div").withConfig({displayName:"Alert___StyledDiv5",componentId:"sc-a0ci59-4"})(["",""],t=>t.$_css5),un=n(N).withConfig({displayName:"Alert___StyledIconButton",componentId:"sc-a0ci59-5"})(["",""],t=>t.$_css6);const qt=({errorMsg:t,clearErrorMsg:o})=>t?e("div",{children:e(Ut,{severity:"error",title:"Error",onClose:o,children:t})}):null,gn=kt({username:j().required("username is required"),password:j().required("password is required")}),hn=({setAuthType:t,closeModal:o})=>{var $,_;const[r,a]=h.exports.useState(!1),[s,i]=h.exports.useState(null),{setUser:l}=Y(),{notify:p}=dt(),{register:m,handleSubmit:u,reset:g,formState:{errors:y}}=$t({mode:"onTouched",resolver:Dt(gn)}),[I,{loading:v}]=Do({onError:S=>{i(Ft(S))}});return c(yn,{children:[e(fn,{src:K,alt:"sof-logo"}),c("form",{onSubmit:u(({username:S,password:M})=>{I({variables:{username:S,password:M},update:(X,{data:C})=>{l(C==null?void 0:C.login),p(`Welcome, ${C==null?void 0:C.login.username}!`),g(),o()}})}),children:[e(wn,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0,placeholder:"username",type:"text"},m("username")),{error:"username"in y,helperText:"username"in y?($=y==null?void 0:y.username)==null?void 0:$.message:"",InputProps:{startAdornment:e(vn,{children:e(it,{color:"primary"})})}}))}),e(_n,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},m("password")),{placeholder:"password",type:r?"text":"password",error:"password"in y,helperText:"password"in y?(_=y.password)==null?void 0:_.message:"",InputProps:{endAdornment:e(bn,{"aria-label":r?"hide password":"show password",tag:"button",onClick:()=>a(S=>!S),children:r?e(tt,{color:"primary"}):e(et,{color:"primary"})}),startAdornment:e(Sn,{children:e(At,{})})}}))}),c(xn,{type:"submit",disabled:v,children:[e(T,{"aria-hidden":"true",children:e(Nt,{})}),"\xA0",v?"loading...":"Login"]})]}),c(In,{children:["Don\u2019t have an account?"," ",e(ct,{onClick:()=>t("signup"),children:"Sign Up"})]}),e(qt,{errorMsg:s,clearErrorMsg:()=>i(null)})]})};var yn=n("div").withConfig({displayName:"LoginForm___StyledDiv",componentId:"sc-fikavc-0"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}),fn=n("img").withConfig({displayName:"LoginForm___StyledImg",componentId:"sc-fikavc-1"})({width:"5em",marginLeft:"auto",marginRight:"auto",marginTop:"1rem",marginBottom:"1rem"}),wn=n("div").withConfig({displayName:"LoginForm___StyledDiv2",componentId:"sc-fikavc-2"})({marginBottom:"1.5rem"}),vn=n(F).withConfig({displayName:"LoginForm___StyledInputAdornment",componentId:"sc-fikavc-3"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),_n=n("div").withConfig({displayName:"LoginForm___StyledDiv3",componentId:"sc-fikavc-4"})({marginBottom:"1.5rem"}),bn=n(N).withConfig({displayName:"LoginForm___StyledIconButton",componentId:"sc-fikavc-5"})({padding:"0",fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Sn=n(F).withConfig({displayName:"LoginForm___StyledInputAdornment2",componentId:"sc-fikavc-6"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),xn=n(V).withConfig({displayName:"LoginForm___StyledButton",componentId:"sc-fikavc-7"})({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",fontSize:"1rem"}),In=n("p").withConfig({displayName:"LoginForm___StyledP",componentId:"sc-fikavc-8"})({textAlign:"center",marginTop:"0.75rem",marginBottom:"0.75rem"});const Cn=kt({username:j().required("username is required").max(20,"Must be at most 20 characters").min(3,"Must be at least 3 characters").matches(/^[a-zA-Z0-9-_]*$/,"Only alphanum, dash & underscore characters are allowed"),password:j().required("password is required").min(6,"Must be at least 6 characters"),confirmPassword:j().required("password confirmation is required").min(6,"Must be at least 6 characters")}),kn=({setAuthType:t,closeModal:o})=>{var S,M,X;const[r,a]=h.exports.useState(!1),[s,i]=h.exports.useState(""),[l,p]=h.exports.useState(!1),{setUser:m}=Y(),{notify:u}=dt(),{register:g,handleSubmit:y,reset:I,formState:{errors:v}}=$t({mode:"onTouched",resolver:Dt(Cn)}),[E,{loading:$}]=ko({onError:C=>{i(Ft(C))}}),_=y(({username:C,confirmPassword:Ht,password:pt})=>{if(pt!==Ht)return i("Both passwords need to match.");E({variables:{username:C,password:pt},update:(Gr,{data:P})=>{m(P==null?void 0:P.register),u(`Hey, ${P==null?void 0:P.register.username}!`),I(),o()}})});return c($n,{children:[e(Dn,{src:K,alt:"sof-logo"}),c("form",{onSubmit:_,children:[e(An,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},g("username")),{placeholder:"username",type:"text",error:"username"in v,helperText:"username"in v?(S=v.username)==null?void 0:S.message:"",InputProps:{startAdornment:e(Nn,{children:e(it,{})})}}))}),e(Mn,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},g("password")),{placeholder:"password",type:r?"text":"password",error:"password"in v,helperText:"password"in v?(M=v.password)==null?void 0:M.message:"",InputProps:{endAdornment:e(Ln,{"aria-label":r?"hide password":"show password",tag:"button",onClick:()=>a(C=>!C),children:r?e(tt,{color:"primary"}):e(et,{color:"primary"})}),startAdornment:e(Bn,{children:e(At,{})})}}))}),e(Rn,{children:e(Q,f(d({tag:"input",required:!0,fullWidth:!0},g("confirmPassword")),{placeholder:"confirmPassword",type:l?"text":"password",error:"confirmPassword"in v,helperText:"confirmPassword"in v?(X=v.confirmPassword)==null?void 0:X.message:"",InputProps:{endAdornment:e(Tn,{"aria-label":l?"hide password":"show password",onClick:()=>p(C=>!C),tag:"button",children:l?e(tt,{color:"primary"}):e(et,{color:"primary"})}),startAdornment:e(En,{children:e(ae,{color:"primary"})})}}))}),c(zn,{type:"submit",disabled:$,children:[e(On,{"aria-hidden":"true",children:e(se,{})}),"\xA0",$?"loading...":"Sign Up"]})]}),c(Fn,{children:["Already have an account?"," ",e(ct,{onClick:()=>t("login"),children:"Log In"})]}),e(qt,{errorMsg:s,clearErrorMsg:()=>i("")})]})};var $n=n("div").withConfig({displayName:"RegisterForm___StyledDiv",componentId:"sc-jmk1yw-0"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}),Dn=n("img").withConfig({displayName:"RegisterForm___StyledImg",componentId:"sc-jmk1yw-1"})({width:"5em",marginLeft:"auto",marginRight:"auto",marginTop:"1rem",marginBottom:"1rem"}),An=n("div").withConfig({displayName:"RegisterForm___StyledDiv2",componentId:"sc-jmk1yw-2"})({marginBottom:"1.5rem"}),Nn=n(F).withConfig({displayName:"RegisterForm___StyledInputAdornment",componentId:"sc-jmk1yw-3"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Mn=n("div").withConfig({displayName:"RegisterForm___StyledDiv3",componentId:"sc-jmk1yw-4"})({marginBottom:"1.5rem"}),Ln=n(N).withConfig({displayName:"RegisterForm___StyledIconButton",componentId:"sc-jmk1yw-5"})({padding:"0",fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Bn=n(F).withConfig({displayName:"RegisterForm___StyledInputAdornment2",componentId:"sc-jmk1yw-6"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),Rn=n("div").withConfig({displayName:"RegisterForm___StyledDiv4",componentId:"sc-jmk1yw-7"})({marginBottom:"1.5rem"}),Tn=n(N).withConfig({displayName:"RegisterForm___StyledIconButton2",componentId:"sc-jmk1yw-8"})({padding:"0",fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),En=n(F).withConfig({displayName:"RegisterForm___StyledInputAdornment3",componentId:"sc-jmk1yw-9"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))"}),zn=n(V).withConfig({displayName:"RegisterForm___StyledButton",componentId:"sc-jmk1yw-10"})({display:"flex",alignItems:"center",justifyContent:"center",width:"100%",paddingTop:"0.75rem",paddingBottom:"0.75rem"}),On=n(T).withConfig({displayName:"RegisterForm___StyledSvgIcon",componentId:"sc-jmk1yw-11"})({fontSize:"1.5em"}),Fn=n("p").withConfig({displayName:"RegisterForm___StyledP",componentId:"sc-jmk1yw-12"})({textAlign:"center",marginTop:"0.75rem",marginBottom:"0.75rem"});function Pn(t){return h.exports.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 213.333 213.333",style:{enableBackground:"new 0 0 213.333 213.333"},xmlSpace:"preserve"},t),h.exports.createElement("path",{d:"M106.667 53.333 0 160h213.333z"}))}function Un(t){return h.exports.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 213.333 213.333",style:{enableBackground:"new 0 0 213.333 213.333"},xmlSpace:"preserve"},t),h.exports.createElement("path",{d:"M0 53.333 106.667 160 213.333 53.333z"}))}const qn=n.div.withConfig({displayName:"Dialog__DialogBackDrop",componentId:"sc-13xw1wa-0"})(({isMounted:t})=>[{position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",top:"0",right:"0",bottom:"0",left:"0","--tw-bg-opacity":"0.5",backgroundColor:"hsla(210, 8%, 5%, var(--tw-bg-opacity))",zIndex:"-1",WebkitTapHighlightColor:"transparent",opacity:"0",transitionProperty:"opacity"},t&&{opacity:"1",transitionProperty:"opacity"}]),Qn=n.div.withConfig({displayName:"Dialog__DialogChildrenContainer",componentId:"sc-13xw1wa-1"})(({maxWidth:t})=>[{position:"relative",maxHeight:"calc(100% - 2rem)",borderRadius:"0.125rem",overflowY:"auto",display:"flex",flexDirection:"column",maxWidth:"42rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",color:"rgba(0, 0, 0, .87)",margin:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{margin:"2rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}},t&&`max-width: ${t};`]),Wn=p=>{var m=p,{focusFirst:t,focusAfterClosed:o,onClose:r,autoFocus:a,children:s,maxWidth:i}=m,l=x(m,["focusFirst","focusAfterClosed","onClose","autoFocus","children","maxWidth"]);const[u,g]=h.exports.useState(!1);h.exports.useEffect(()=>(g(!0),()=>{g(!1)}),[u]);const{ref:y,modalRoot:I}=zt({autoFocus:a,focusFirst:t,focusAfterClosed:o,onClose:r,overlayModal:!0}),v=e(Vn,{role:"presentation",children:c(qn,{isMounted:u,children:[e("div",{tabIndex:0}),e(Gn,{role:"presentation",tabIndex:-1,children:e(Qn,f(d({ref:y,role:"dialog",maxWidth:i},l),{children:s}))}),e("div",{tabIndex:0})]})});return It.createPortal(v,I)},jn=s=>{var i=s,{onClose:t,children:o,styles:r}=i,a=x(i,["onClose","children","styles"]);return c(Kn,f(d({},a),{$_css:[{marginTop:"0.5rem",marginBottom:"0.5rem",flex:"0 0 auto"},r&&r.root],children:[e(Yn,{children:o}),t?e(Jn,{tag:"button","aria-label":"close dialog",styles:{iconButton:r&&r.closeBtn},onClick:t,children:e(nt,{})}):null]}))},Hn=r=>{var a=r,{children:t}=a,o=x(a,["children"]);return e(Xn,f(d({},o),{children:t}))},bi=r=>{var a=r,{children:t}=a,o=x(a,["children"]);return e(Zn,f(d({},o),{children:t}))};var Vn=n("div").withConfig({displayName:"Dialog___StyledDiv",componentId:"sc-13xw1wa-2"})({position:"fixed",zIndex:"1300",top:"0",right:"0",bottom:"0",left:"0"}),Gn=n("div").withConfig({displayName:"Dialog___StyledDiv2",componentId:"sc-13xw1wa-3"})({height:"100%",outline:"2px solid transparent",outlineOffset:"2px",display:"flex",justifyContent:"center",alignItems:"center"}),Kn=n("div").withConfig({displayName:"Dialog___StyledDiv3",componentId:"sc-13xw1wa-4"})(["",""],t=>t.$_css),Yn=n("h3").withConfig({displayName:"Dialog___StyledH",componentId:"sc-13xw1wa-5"})({margin:"0",fontWeight:"700"}),Jn=n(N).withConfig({displayName:"Dialog___StyledIconButton",componentId:"sc-13xw1wa-6"})({position:"absolute",right:"8px",top:"8px",fontSize:"1.5em"}),Xn=n("div").withConfig({displayName:"Dialog___StyledDiv4",componentId:"sc-13xw1wa-7"})({flex:"1 1 auto",overflowY:"auto"}),Zn=n("div").withConfig({displayName:"Dialog___StyledDiv5",componentId:"sc-13xw1wa-8"})({marginTop:"0.5rem",marginBottom:"0.5rem",display:"flex",flex:"0 0 auto",justifyContent:"flex-end",alignItems:"center"});const Qt=({closeMenu:t,buttonType:o})=>{const[r,a]=h.exports.useState(!1),[s,i]=h.exports.useState(!1),[l,p]=h.exports.useState("login");h.exports.useEffect(()=>(i(!0),()=>{i(!1)}),[s]);const m=()=>{s&&p("login"),s&&a(!0),o==="mobile"&&t&&t()},u=()=>{s&&p("signup"),s&&a(!0),o==="mobile"&&t&&t()},g=()=>{s&&a(!1)};return c("div",{style:{display:"inline"},children:[(()=>o==="ask"?e(tr,{onClick:m,children:"Ask Question"}):o==="link"?e(Ho,{to:"#",onClick:m,style:{cursor:"pointer"},children:"ask your own question."}):o==="upvote"?e(N,{tag:"button",onClick:m,"aria-label":"upvote",children:e(er,{"aria-hidden":"true",children:e(Pn,{})})}):o==="downvote"?e(N,{tag:"button",onClick:m,"aria-label":"downvote",children:e(or,{"aria-hidden":"true",children:e(Un,{})})}):o==="mobile"?c("div",{children:[c(D,{tag:"div",onClick:m,children:[e(nr,{"aria-hidden":"true"}),"Log In"]}),c(D,{tag:"div",onClick:u,children:[e(rr,{"aria-hidden":"true"}),"Sign Up"]})]}):c(ir,{children:[e(ar,{onClick:m,children:"Log In"}),e(sr,{onClick:u,children:"Sign Up"})]}))(),r?c(Wn,{onClose:g,children:[e(jn,{onClose:g}),e(Hn,{children:l==="login"?e(hn,{setAuthType:p,closeModal:g}):e(kn,{setAuthType:p,closeModal:g})})]}):null]})};var tr=n(V).withConfig({displayName:"AuthFormOnButton___StyledButton",componentId:"sc-1ng5y0b-0"})({"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 37.5%, var(--tw-bg-opacity))"},fontSize:".9375rem","@media (min-width: 768px)":{fontSize:"1rem"}}),er=n(T).withConfig({displayName:"AuthFormOnButton___StyledSvgIcon",componentId:"sc-1ng5y0b-1"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"}),or=n(T).withConfig({displayName:"AuthFormOnButton___StyledSvgIcon2",componentId:"sc-1ng5y0b-2"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"}),nr=n(Nt).withConfig({displayName:"AuthFormOnButton___StyledExitToAppIcon",componentId:"sc-1ng5y0b-3"})({marginRight:"0.5rem",fontSize:"1.2em"}),rr=n(it).withConfig({displayName:"AuthFormOnButton___StyledPersonAddIcon",componentId:"sc-1ng5y0b-4"})({marginRight:"0.5rem",fontSize:"1.2em"}),ir=n("div").withConfig({displayName:"AuthFormOnButton___StyledDiv",componentId:"sc-1ng5y0b-5"})({display:"inline-flex"}),ar=n(V).withConfig({displayName:"AuthFormOnButton___StyledButton2",componentId:"sc-1ng5y0b-6"})({fontSize:".9375rem",marginRight:"0.75rem"}),sr=n(V).withConfig({displayName:"AuthFormOnButton___StyledButton3",componentId:"sc-1ng5y0b-7"})({fontSize:".9375rem"});const Wt=t=>{const l=t,{src:o,alt:r,to:a,styles:s}=l,i=x(l,["src","alt","to","styles"]);return e(dr,f(d({to:a},i),{$_css:[{minWidth:"1rem",minHeight:"1rem",borderRadius:"0.375rem",marginRight:"0.5rem"},s&&s.avatarRoot],children:e(lr,{src:o,alt:r,$_css2:[{color:"rgba(0, 0, 0, 0)",width:"100%",height:"100%",objectFit:"cover",textAlign:"center",borderRadius:"inherit"},s&&s.img]})}))};var dr=n(O).withConfig({displayName:"Avatar___StyledLink",componentId:"sc-dgotro-0"})(["",""],t=>t.$_css),lr=n("img").withConfig({displayName:"Avatar___StyledImg",componentId:"sc-dgotro-1"})(["",""],t=>t.$_css2);const cr=({user:t,logoutUser:o})=>{const[r,a]=h.exports.useState(void 0),s=Boolean(r),i=m=>{a(m.currentTarget)},l=()=>{a(void 0)},p=()=>{o(),l()};return c("div",{children:[c(pr,{tag:"button",onClick:i,"aria-label":s?"hide User settings":"show User settings",children:[t?e(mr,{to:`/user/${t.username}`,alt:t.username,src:`https://secure.gravatar.com/avatar/${t._id}?s=164&d=identicon`}):null,e(de,{})]}),e(st,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:l,children:t?c("div",{children:[c(D,{tag:"a",href:`/user/${t.username}`,onClick:l,children:[e(ur,{"aria-hidden":"true",children:e(Mt,{})}),"My Profile"]}),c(D,{tag:"div",onClick:p,children:[e(gr,{"aria-hidden":"true",children:e(Lt,{})}),"Logout: ",t.username]})]}):e(Qt,{buttonType:"mobile",closeMenu:l})})]})};var pr=n(N).withConfig({displayName:"UserMenuMobile___StyledIconButton",componentId:"sc-vardmv-0"})({fontSize:"1.5em"}),mr=n(Wt).withConfig({displayName:"UserMenuMobile___StyledAvatar",componentId:"sc-vardmv-1"})({width:"1.2em",height:"1.2em",fontSize:".8em"}),ur=n(T).withConfig({displayName:"UserMenuMobile___StyledSvgIcon",componentId:"sc-vardmv-2"})({marginRight:"0.5rem"}),gr=n(T).withConfig({displayName:"UserMenuMobile___StyledSvgIcon2",componentId:"sc-vardmv-3"})({marginRight:"0.5rem"});const hr=({user:t,logoutUser:o})=>{const[r,a]=h.exports.useState(void 0),s=p=>{a(p.currentTarget)},i=()=>{a(void 0)},l=()=>{o(),i()};return e("div",{children:t?c("div",{style:{display:"inline"},children:[c(yr,{onClick:s,children:[e(Wt,{to:`/user/${t.username}`,alt:t.username,src:`https://secure.gravatar.com/avatar/${t._id}?s=164&d=identicon`,styles:{avatarRoot:{width:"1.5em",height:"1.5em"}}}),e("span",{children:t.username}),e(T,{"aria-hidden":"true",children:e(le,{})})]}),c(st,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:i,children:[c(D,{tag:"a",href:`/user/${t.username}`,onClick:i,children:[e(fr,{"aria-hidden":"true",children:e(Mt,{})}),"My Profile"]}),c(D,{tag:"div",onClick:l,children:[e(wr,{"aria-hidden":"true",children:e(Lt,{})}),"Logout"]})]})]}):e(Qt,{})})};var yr=n(ct).withConfig({displayName:"UserMenuDesktop___StyledEmptyLink",componentId:"sc-tnxd8t-0"})({fontSize:".9375rem",display:"flex",alignItems:"center",justifyContent:"center"}),fr=n(T).withConfig({displayName:"UserMenuDesktop___StyledSvgIcon",componentId:"sc-tnxd8t-1"})({marginRight:"0.5rem"}),wr=n(T).withConfig({displayName:"UserMenuDesktop___StyledSvgIcon2",componentId:"sc-tnxd8t-2"})({marginRight:"0.5rem"});const jt=r=>{var a=r,{setSearchOpen:t}=a,o=x(a,["setSearchOpen"]);const[s,i]=h.exports.useState(""),l=ce(),p=u=>{u.preventDefault(),s!==""&&l(`/search/${s}`)},m=()=>{t&&t(!1),i("")};return e(vr,f(d({},o),{$_css:[{flexGrow:".6"}],children:e("form",{onSubmit:p,children:e(Sr,{tag:"input",type:"search",placeholder:"Search\u2026",value:s,onChange:u=>i(u.target.value),styles:{inputRoot:{paddingTop:"0.25rem",paddingBottom:"0.25rem"}},fullWidth:!0,InputProps:{startAdornment:e(_r,{children:e(Bt,{})}),endAdornment:s||t?e(F,{children:e(br,{"aria-label":"Cancel search",tag:"button",onClick:m,children:e(pe,{})})}):null}})})}))};var vr=n("div").withConfig({displayName:"SearchBar___StyledDiv",componentId:"sc-supvrm-0"})(["",""],t=>t.$_css),_r=n(F).withConfig({displayName:"SearchBar___StyledInputAdornment",componentId:"sc-supvrm-1"})({fontSize:"1.5em","--tw-text-opacity":"1",color:"rgba(160, 174, 192, var(--tw-text-opacity))"}),br=n(N).withConfig({displayName:"SearchBar___StyledIconButton",componentId:"sc-supvrm-2"})({padding:"0",fontSize:"1.5em"}),Sr=n(Q).withConfig({displayName:"SearchBar___StyledTextField",componentId:"sc-supvrm-3"})({lineHeight:".75rem"});const xr=n.div.withConfig({displayName:"NavBar__AppBar",componentId:"sc-1b086mi-0"})(()=>[{width:"100%",display:"flex",flexDirection:"column",flexShrink:"0",zIndex:"1100",boxSizing:"border-box",position:"sticky",top:"0",left:"auto",right:"0",color:"inherit",borderStyle:"solid",borderTopWidth:"4px","--tw-border-opacity":"1",borderTopColor:"rgba(237, 100, 166, var(--tw-border-opacity))","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderBottomWidth:"1px",borderBottomColor:"rgba(160, 174, 192, var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))"}]),Ir=n.div.withConfig({displayName:"NavBar__ToolBar",componentId:"sc-1b086mi-1"})(()=>[{display:"flex",alignItems:"center",position:"relative",paddingLeft:"0.5rem",paddingRight:"0.5rem",minHeight:"48px","@media (min-width: 768px)":{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}]),Cr=n.div.withConfig({displayName:"NavBar__Container",componentId:"sc-1b086mi-2"})(()=>[{width:"100%",display:"flex",alignItems:"center",marginLeft:"auto",marginRight:"auto","@media (min-width: 1280px)":{maxWidth:"1280px"}}]),kr=n.div.withConfig({displayName:"NavBar__MdScreenTopLeft",componentId:"sc-1b086mi-3"})(()=>[{display:"none",marginRight:"0.5rem","@media (min-width: 640px)":{display:"inline-flex",alignItems:"center"}}]),$r=n.div.withConfig({displayName:"NavBar__SmScreenTopLeft",componentId:"sc-1b086mi-4"})({marginRight:"1rem",display:"flex",alignItems:"center","@media (min-width: 640px)":{display:"none"}}),Dr=n.div.withConfig({displayName:"NavBar__SmScreenTopRight",componentId:"sc-1b086mi-5"})({display:"flex",alignItems:"center","@media (min-width: 640px)":{display:"none"}}),Ar=n.div.withConfig({displayName:"NavBar__MdScreenTopRight",componentId:"sc-1b086mi-6"})({display:"none","@media (min-width: 640px)":{display:"block"}}),Nr=()=>{const{user:t,logoutUser:o}=Y(),[r,a]=h.exports.useState(!1),s=me();h.exports.useEffect(()=>{r&&a(!1)},[]);const i=()=>{o(),s.resetStore()};return e(xr,{children:c(Ir,{children:[!r&&c(Cr,{children:[c(Mr,{children:[c($r,{children:[e(po,{}),e(Lr,{to:"/",children:e("img",{src:K,width:"25px",height:"25px",alt:"sof-logo"})})]}),e(kr,{children:c(Br,{to:"/",children:[e("img",{src:K,width:"28px",height:"28px",alt:"sof-logo",style:{marginRight:"5px"}}),"stack",e("strong",{children:"underflow"})]})}),e(Rr,{})]}),c(Dr,{children:[e(Tr,{tag:"button",onClick:()=>a(l=>!l),"aria-label":"search",children:e(Bt,{})}),e(cr,{user:t,logoutUser:i})]}),e(Ar,{children:e(hr,{user:t,logoutUser:i})})]}),r&&e(jt,{setSearchOpen:a})]})})};var Mr=n("div").withConfig({displayName:"NavBar___StyledDiv",componentId:"sc-1b086mi-7"})({display:"flex",flexGrow:"1",alignItems:"center"}),Lr=n(O).withConfig({displayName:"NavBar___StyledLink",componentId:"sc-1b086mi-8"})({paddingLeft:"0.5rem",paddingRight:"0.5rem",marginBottom:"0.25rem"}),Br=n(O).withConfig({displayName:"NavBar___StyledLink2",componentId:"sc-1b086mi-9"})({marginRight:"0.25rem",display:"flex",alignItems:"center"}),Rr=n(jt).withConfig({displayName:"NavBar___StyledSearchBar",componentId:"sc-1b086mi-10"})({display:"none","@media (min-width: 640px)":{display:"block"}}),Tr=n(N).withConfig({displayName:"NavBar___StyledIconButton",componentId:"sc-1b086mi-11"})({fontSize:"1.5em"});const Er=({children:t})=>c(oo,{children:[e(Nr,{}),t]}),zr=()=>e(Er,{children:e(to,{})}),Or="https://suf-mern-gql-backend.herokuapp.com/",Fr=new ue({uri:Or}),Pr=ge(()=>{const t=q.loadUser();return{headers:{authorization:t?t.token:null}}}),Ur=new he({cache:new ye({typePolicies:{Question:{fields:{upvotedBy:{merge(t,o){return o}},downvotedBy:{merge(t,o){return o}},comments:{merge(t,o){return o}},answers:{merge(t,o){return o}},tags:{merge(t,o){return o}}}},Answer:{fields:{upvotedBy:{merge(t,o){return o}},downvotedBy:{merge(t,o){return o}},comments:{merge(t,o){return o}}}}}}),link:fe([Pr,Fr])}),qr=Rt`*, ::before, ::after {
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
        }`,Qr=Rt({body:{WebkitTapHighlightColor:"hsl(206,100%,52%)",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}),Wr=()=>c(R,{children:[e(qr,{}),e(Qr,{})]}),jr=L.forwardRef(function(o,r){const y=o,{open:a,anchorOrigin:s,children:i}=y,l=x(y,["open","anchorOrigin","children"]);let p,m={transform:"var(--tw-transform)",bottom:"24px",left:"50%","--tw-translate-x":"-50%",right:"auto"};const{vertical:u,horizontal:g}=s;return g==="left"&&u==="top"?p={"@media (min-width: 768px)":{left:"24px",top:"24px",right:"auto"}}:g==="right"&&u==="top"?p={"@media (min-width: 768px)":{right:"24px",top:"24px",left:"auto"}}:g==="center"&&u==="top"?p={"@media (min-width: 768px)":{left:"50%",top:"24px","--tw-translate-x":"-50%",transform:"var(--tw-transform)"}}:g==="right"&&u==="bottom"?p={"@media (min-width: 768px)":{right:"24px",bottom:"24px",left:"auto"}}:g==="left"&&u==="bottom"?p={"@media (min-width: 768px)":{left:"24px",bottom:"24px",right:"auto"}}:g==="center"&&u==="bottom"&&(p={bottom:"24px",left:"50%","--tw-translate-x":"-50%",transform:"var(--tw-transform)",right:"auto"}),e(R,{children:a?e(Hr,f(d({ref:r},l),{$_css:[{position:"fixed",zIndex:"1400",display:"flex",alignItems:"center",justifyContent:"flex-start"},m,p],children:i})):null})});var Hr=n("div").withConfig({displayName:"Snackbar___StyledDiv",componentId:"sc-gqqpl0-0"})(["",""],t=>t.$_css);const Vr=()=>{const{notification:t,clearNotif:o}=dt();if(!(t!=null&&t.message))return null;const{message:r,severity:a}=t;return e(jr,{open:!!t,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e(Ut,{onClose:()=>o(),severity:a,children:r})})};we.createRoot(document.getElementById("root")).render(e(L.StrictMode,{children:e(ve,{client:Ur,children:e(_e,{basename:"/suf-mern-gql-frontend/",children:e(Le,{children:c(vo,{children:[e(Wr,{}),e(Vr,{}),e(zr,{})]})})})})}));export{Qt as A,_i as B,ei as C,Be as D,oi as E,R as F,ni as G,_o as H,F as I,ii as J,ai as K,We as L,si as M,di as N,ti as O,Zr as P,ci as Q,wi as R,bo as S,Q as T,N as U,So as V,Jr as W,Xr as X,qt as Y,c as a,vi as b,V as c,Y as d,li as e,gi as f,Ft as g,Wt as h,Ho as i,e as j,hi as k,mi as l,ui as m,pi as n,ri as o,qo as p,T as q,Pn as r,Un as s,fi as t,dt as u,Wn as v,jn as w,Hn as x,bi as y,yi as z};
