(this["webpackJsonpdoctor-eclinic"]=this["webpackJsonpdoctor-eclinic"]||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(9),r=a.n(n),i=(a(23),a(14)),l=a(10),o=a(16),j=a(22),u=a(64),b=a(65),d=a(63),m=a(31),O=a.n(m),h=(a(38),a(24),a(19),a(29)),x=a.n(h),f=a(2),g=function(e){var t=e.currData,a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],d=Object(c.useState)(function(){var e=localStorage.getItem("UserChatsHistory");return e?JSON.parse(e):[]}()),m=Object(l.a)(d,2),O=m[0],h=m[1];Object(c.useEffect)((function(){localStorage.setItem("UserChatsHistory",JSON.stringify(O))}),[O]);var g=(new Date).toLocaleString();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"chatcontainer",children:Object(f.jsxs)("div",{className:"chatcontainer__div",children:[Object(f.jsx)("div",{className:"chatcontainer__userdata",children:Object(f.jsxs)("h6",{children:["Doctor,",t]})}),Object(f.jsx)("div",{className:"chatcontainer__userbody",children:O.map((function(e,t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{className:"mt-4",children:e.input}),Object(f.jsx)("p",{children:g}),Object(f.jsx)("p",{children:e.image})]})}))}),Object(f.jsx)("form",{children:Object(f.jsxs)("div",{className:"chatcontainer__usermessage",children:[Object(f.jsx)("input",{value:n,type:"text",name:"name",onChange:function(e){return r(e.target.value)},placeholder:"Type a mesage",className:"message_field",autocomplete:"off"}),Object(f.jsx)("input",{value:u,type:"file",onChange:function(e){return b(e.target.value)},className:"sendFile",name:"file"}),Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(n);var t={input:n,image:u};r(""),h([].concat(Object(i.a)(O),[t])),console.log(O)},children:Object(f.jsx)(x.a,{className:"sendIcon"})})]})})]})})})},p=function(e){var t=e.onSubmit,a=e.currData,c=e.setCurrData,s=e.error,n=function(e){var t=e.target,s=t.name,n=t.value;c(Object(j.a)(Object(j.a)({},a),{},Object(o.a)({},s,n)))};return Object(f.jsxs)(u.a,{onSubmit:t,children:[Object(f.jsxs)(u.a.Group,{controlId:"formBasicname",children:[Object(f.jsx)(u.a.Label,{children:"Enter Name:"}),Object(f.jsx)(u.a.Control,{type:"name",placeholder:"Enter name",name:"name",value:a.name,onChange:n,autocomplete:"off"}),""!==s.name&&Object(f.jsx)(u.a.Text,{className:"text-muted",children:s.name})]}),Object(f.jsx)("br",{}),Object(f.jsxs)(u.a.Group,{controlId:"formBasicmessage",children:[Object(f.jsx)(u.a.Label,{children:"Enter Message:"}),Object(f.jsx)(u.a.Control,{type:"message",placeholder:"Enter Message",name:"message",value:a.message,onChange:n,autocomplete:"off"}),""!==s.message&&Object(f.jsx)(u.a.Text,{className:"text-muted",children:s.message})]}),Object(f.jsx)("br",{}),Object(f.jsx)(b.a,{className:"add_user",variant:"primary mt-4",type:"submit",block:!0,children:"Add Details"})]})};function v(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){return s(!1)},r={name:"",message:""},o=Object(c.useState)(r),j=Object(l.a)(o,2),u=j[0],b=j[1],m=Object(c.useState)({}),h=Object(l.a)(m,2),x=h[0],v=h[1],N=Object(c.useState)(function(){var e=localStorage.getItem("ModelSubmitFormData");return e?JSON.parse(e):[]}()),_=Object(l.a)(N,2),S=_[0],y=_[1];console.log("allData",S),Object(c.useEffect)((function(){localStorage.setItem("ModelSubmitFormData",JSON.stringify(S))}),[S]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"leftUseList",children:[Object(f.jsxs)("div",{className:"leftUseList_sidebar",style:{height:"100vh"},children:[Object(f.jsxs)("div",{className:"leftUseList_sidebar__add_button",children:[Object(f.jsx)("h6",{children:"Start a Conversation Click \ud83d\udc49"}),Object(f.jsx)(O.a,{className:"add_buttton",onClick:function(){return s(!0)},variant:"success"})]}),S.map((function(e,t){return Object(f.jsxs)("div",{className:"leftUseList__users",children:[Object(f.jsx)("img",{src:"https://www.seekpng.com/png/full/23-236651_doctors-and-nurses-transparent-png-sticker-transparent-background.png",width:"60px",alt:""}),Object(f.jsxs)("div",{className:"leftUseList__usersname",style:{display:"flex;flex-direction:column"},children:[Object(f.jsx)("h5",{children:e.name}),Object(f.jsx)("p",{children:e.message})]})]},t)}))]}),Object(f.jsxs)(d.a,{show:a,onHide:n,children:[Object(f.jsx)(d.a.Header,{closeButton:!0,children:Object(f.jsx)(d.a.Title,{children:"Add User Details \ud83e\udd35"})}),Object(f.jsx)(d.a.Body,{children:Object(f.jsx)(p,{onSubmit:function(e){e.preventDefault(),function(e){var t=e.name,a=e.message,c={};return c.name=""===t.trim()?"name is required*":"",c.message=""===a.trim()?"message is required*":"",v(c),Object.values(c).every((function(e){return""===e}))}(u)&&(y([].concat(Object(i.a)(S),[u])),b(r),n()),y([].concat(Object(i.a)(S),[u])),console.log(u)},currData:u,setCurrData:b,error:x})})]}),Object(f.jsx)(g,{})]})})}a(46);var N=function(){return Object(f.jsxs)("div",{className:"navbar",children:[Object(f.jsx)("img",{src:"../images/doctor_logo1.jpg",alt:"",width:"70px"}),Object(f.jsx)("h1",{children:"Doctor e-Clinic"})]})},_=(a(28),function(){return Object(f.jsx)("div",{className:"app",children:Object(f.jsxs)("div",{className:"app__body",children:[Object(f.jsx)(N,{}),Object(f.jsx)(v,{})]})})});a(47);r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.3677a6ff.chunk.js.map