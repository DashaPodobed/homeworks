(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{13:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},17:function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},18:function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},19:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},25:function(e,t,n){e.exports={App:"App_App__1Sc4o"}},26:function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(24),s=n.n(c),i=(n(33),n(25)),o=n.n(i),j=n(8),l=n(2),u=n(7),b=n.n(u),d=n(0);var h=function(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("img",{src:e.avatar,className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("p",{className:b.a.name,children:e.name}),Object(d.jsxs)("p",{className:b.a.text,children:[" ",e.message]}),Object(d.jsx)("span",{className:b.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Artem",m="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",p="20:00";var _=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{avatar:x,name:O,message:m,time:p}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=n(5);var v=function(e){return Object(d.jsxs)("div",{children:[e.affair.name,e.affair.priority,Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(d.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(a.useState)(g),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(f.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},N=n(28),S=n(26),y=n.n(S),w=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onKeyPressAddName,i=y.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(d.jsx)("span",{children:r}),Object(d.jsx)("button",{onClick:a,children:"add"}),Object(d.jsx)("span",{children:c})]})},A=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(f.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(f.a)(o,2),l=j[0],u=j[1],b=function(){n(s),alert("Hello, ".concat(s," !")),i("")},h=t.length;return Object(d.jsx)(w,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("name is require!"))},addUser:b,error:l,totalUsers:h,onKeyPressAddName:function(e){"Enter"===e.key&&b()}})},T=n(42);var I=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(A,{users:n,addUserCallback:function(e){r([{_id:Object(T.a)(),name:e}].concat(Object(N.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},H=n(9),W=n(10),J=n(13),M=n.n(J),E=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(M.a.error," ").concat(i||""),l="".concat(M.a.errorInput," ").concat(s?M.a.errorInput:M.a.superInput," ").concat(s," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},F=n(17),L=n.n(F),P=n(18),B=n.n(P),K=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,["red","className"]),r="".concat(t?B.a.red:B.a.default," ").concat(n);return Object(d.jsx)("button",Object(H.a)({className:r},a))},U=n(19),X=n.n(U),G=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:X.a.spanClassName,children:r})]})};var q=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(f.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:L.a.column,children:[Object(d.jsx)(E,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(E,{className:L.a.blue}),Object(d.jsx)(K,{children:"default"}),Object(d.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(K,{disabled:!0,children:"disabled"}),Object(d.jsx)(G,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(G,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var R=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{}),Object(d.jsx)(C,{}),Object(d.jsx)(I,{}),Object(d.jsx)(q,{})]})};var z=function(){return Object(d.jsx)("div",{children:"Junior"})};var Z=function(){return Object(d.jsx)("div",{children:"Junior Plus"})},Q="/pre-junior",Y="/junior",$="/junior+";var D=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:Q,component:R}),Object(d.jsx)(l.a,{path:Y,component:z}),Object(d.jsx)(l.a,{path:$,component:Z}),"// add routes"]})})},V=n(6),ee=n.n(V);var te=function(){return Object(d.jsxs)("div",{className:ee.a.header,children:[Object(d.jsx)(j.b,{to:Q,className:ee.a.link,activeClassName:ee.a.activeLink,children:"PreJunior"}),Object(d.jsx)(j.b,{to:Y,className:ee.a.link,activeClassName:ee.a.activeLink,children:"Junior"}),Object(d.jsx)(j.b,{to:$,className:ee.a.link,activeClassName:ee.a.activeLink,children:"Junior+"}),Object(d.jsx)("div",{className:ee.a.block})]})};var ne=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(te,{}),Object(d.jsx)(D,{})]})})};var ae=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={header:"HW5_header__fgR5q",link:"HW5_link__3bpqs",activeLink:"HW5_activeLink__124Aj",block:"HW5_block__1qXpL"}},7:function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}}},[[40,1,2]]]);
//# sourceMappingURL=main.7a9d6006.chunk.js.map