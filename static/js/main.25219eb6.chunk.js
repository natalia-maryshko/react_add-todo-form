(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),s=a(2),c=a(6),o=(a(14),a(1)),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],b=function(e){var t,a=e.todo,n=(t=a.userId,j.find((function(e){return e.id===t}))||null);return Object(u.jsxs)("article",{"data-id":a.id,className:d()("TodoInfo",{"TodoInfo--completed":a.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a.title}),n&&Object(u.jsx)(m,{user:n})]})},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(b,{todo:e})}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],f=function(e){var t=e.users,a=e.onSubmit,n=Object(o.useState)(""),i=Object(s.a)(n,2),r=i[0],c=i[1],l=Object(o.useState)(!1),d=Object(s.a)(l,2),m=d[0],j=d[1],b=Object(o.useState)(0),h=Object(s.a)(b,2),O=h[0],f=h[1],p=Object(o.useState)(!1),x=Object(s.a)(p,2),v=x[0],S=x[1];return Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),j(!r.trim()),S(!O),r.trim()&&O&&(a({title:r,id:0,completed:!1,userId:O}),c(""),f(0),j(!1),S(!1))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["Title:\xa0\xa0",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",placeholder:"Enter a title",value:r,onChange:function(e){c(e.target.value),j(!1)}})]}),m&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"user-id",children:"User:\xa0"}),Object(u.jsxs)("select",{"data-cy":"userSelect",id:"user-id",name:"user",value:O,onChange:function(e){f(+e.target.value),S(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),t.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),v&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},p=function(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1},x=function(){var e=Object(o.useState)(O),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(f,{users:j,onSubmit:function(e){var t=Object(r.a)(Object(r.a)({},e),{},{id:p(a)});n((function(e){return[].concat(Object(c.a)(e),[t])}))}}),Object(u.jsx)(h,{todos:a})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.25219eb6.chunk.js.map