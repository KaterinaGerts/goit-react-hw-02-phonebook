(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__2XZgb"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__G79YM",label:"ContactForm_label__2Hmiy",input:"ContactForm_input__2Jraz",button:"ContactForm_button__2z9Xw"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(18),n(13)),s=n(4),u=n(5),l=n(7),b=n(6),m=n(11),d=n.n(m),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})},f=n(12),p=n(2),C=n.n(p),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit({name:a,number:c}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:C.a.label,children:["Name",Object(h.jsx)("input",{className:C.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:C.a.label,children:["Number",Object(h.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})}}]),n}(a.Component),_=n(3),v=n.n(_);function x(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(h.jsxs)("li",{className:v.a.name,children:[e,": ",Object(h.jsx)("span",{className:v.a.number,children:a}),Object(h.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return n(c)},children:"Delete"})]},c)}))})}var g=n(9),y=n.n(g),N=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:y.a.input})]})},S=n(22),k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(t){console.log(t)},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(S.a)(),name:n,number:a};t.state.contacts.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts!")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsx)(j,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{onSubmit:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(N,{value:t,onChange:this.changeFilter}),Object(h.jsx)(x,{contacts:e,onDeleteContact:this.deleteContact})]})})}}]),n}(a.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__3Hz7p",name:"ContactList_name__5WB3X",number:"ContactList_number__2MDkV",button:"ContactList_button__2KI6A"}},9:function(t,e,n){t.exports={label:"Filter_label__3GBzp",input:"Filter_input__3exkH"}}},[[20,1,2]]]);
//# sourceMappingURL=main.74458074.chunk.js.map