(function(e){function t(t){for(var n,s,a=t[0],c=t[1],u=t[2],l=0,b=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/texnomart-interview/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"019d":function(e,t,o){"use strict";o("bf7d")},1230:function(e,t,o){"use strict";o("fb8a")},1604:function(e,t,o){e.exports=o.p+"img/edit-interface.46aa2e76.svg"},"1ad7":function(e,t,o){"use strict";o("e002")},"1e0e":function(e,t,o){"use strict";o("7c54")},"32c6":function(e,t,o){},"535d":function(e,t,o){"use strict";o("bcd2")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={id:"nav"};function i(e,t){var o=Object(n["D"])("router-view");return Object(n["v"])(),Object(n["e"])("div",r,[Object(n["h"])(o)])}o("8a93");var s=o("6b0d"),a=o.n(s);const c={},u=a()(c,[["render",i]]);var d=u,l=o("6c02"),b={class:"home"},f={class:"home__route"},m=Object(n["g"])(" Question Content (1) "),p=Object(n["g"])(" User Form Content (2) "),v=Object(n["g"])(" Todos Content (3) ");function O(e,t,o,r,i,s){var a=Object(n["D"])("router-link");return Object(n["v"])(),Object(n["e"])("div",b,[Object(n["f"])("div",f,[Object(n["h"])(a,{class:"home__route-links",to:{name:"questions-content"}},{default:Object(n["M"])((function(){return[m]})),_:1}),Object(n["h"])(a,{class:"home__route-links",to:{name:"user-form"}},{default:Object(n["M"])((function(){return[p]})),_:1}),Object(n["h"])(a,{class:"home__route-links",to:{name:"todos-content"}},{default:Object(n["M"])((function(){return[v]})),_:1})])])}var j={name:"Home"};o("019d");const h=a()(j,[["render",O],["__scopeId","data-v-735a3082"]]);var g=h;function y(e,t,o,r,i,s){var a=Object(n["D"])("base-form-generator");return Object(n["v"])(),Object(n["e"])("div",null,[Object(n["f"])("button",{class:"go__back-button",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})},"Go Back"),Object(n["h"])(a,{schema:i.examSchema,onSubmitFormProperties:s.submitProperties},null,8,["schema","onSubmitFormProperties"])])}o("d3b7"),o("159b"),o("4e82"),o("e9c4");var _=o("506a"),x=(o("b0c0"),function(e){return Object(n["y"])("data-v-4968651d"),e=e(),Object(n["w"])(),e}),D=["for"],T=x((function(){return Object(n["f"])("input",{class:"form__content-submit-button",type:"submit",value:"Submit"},null,-1)}));function w(e,t,o,r,i,s){var a=Object(n["D"])("v-field"),c=Object(n["D"])("error-message"),u=Object(n["D"])("v-form");return Object(n["v"])(),Object(n["e"])("div",null,[Object(n["h"])(u,{onSubmit:s.submitProperties,class:"form"},{default:Object(n["M"])((function(){return[(Object(n["v"])(!0),Object(n["e"])(n["a"],null,Object(n["C"])(o.schema,(function(e){var t=e.type,o=e.name,r=e.question,i=e.answers,u=e.rules;return Object(n["v"])(),Object(n["e"])("div",{key:t+o,class:"form__content"},[Object(n["f"])("h3",null,Object(n["G"])(r),1),s.isTypeCheckboxOrRadio(t)?(Object(n["v"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["C"])(i,(function(e){var r=e.text,i=e.id;return Object(n["v"])(),Object(n["e"])("label",{for:o+r,key:r},[Object(n["h"])(a,{class:"form__content-input",rules:u,name:o,id:o+r,type:t,value:i},null,8,["rules","name","id","type","value"]),Object(n["f"])("span",null,Object(n["G"])(r),1)],8,D)})),128)):(Object(n["v"])(),Object(n["d"])(a,{key:1,rules:u,name:o,id:o+t,type:t,class:"form__content-input"},null,8,["rules","name","id","type"])),Object(n["h"])(c,{name:o,class:"form__content-error-message"},null,8,["name"])])})),128)),T]})),_:1},8,["onSubmit"])])}o("c740"),o("4fad"),o("d81d");var P=o("7bb1"),k={name:"BaseFormGenerator",components:{VField:P["b"],VForm:P["c"],ErrorMessage:P["a"]},props:{schema:{type:Array,required:!0}},emits:["submitFormProperties"],methods:{isTypeCheckboxOrRadio:function(e){return"checkbox"===e||"radio"===e},isTypeInput:function(e){var t=["input","number","password","email"],o=t.findIndex((function(t){return t===e}));return-1!==o},submitProperties:function(e){var t=Object.entries(e),o=t.map((function(e){return e[1]}));this.$emit("submitFormProperties",o)}}};o("5af4");const I=a()(k,[["render",w],["__scopeId","data-v-4968651d"]]);var S=I,F={name:"TheQuestionsContent",components:{BaseFormGenerator:S},data:function(){return{examSchema:[{type:"radio",name:"one",question:"Informatsiya so'zi lotinchadan qaysi so'zdan olingan ?",answers:[{text:"informatio",id:0},{text:"Inform",id:1},{text:"Formatika",id:2}],rules:_["c"]().required()},{type:"checkbox",name:"two",question:"How to add a Checkboxes question to your survey:",answers:[{id:0,text:"Go to the Design survey section."},{id:1,text:"From the Builder section, choose Checkboxes"},{id:3,text:"Enter the question and answer text"},{id:4,text:"(Optional) Set up any additional options or settings"}],rules:_["a"]().required()},{type:"text",name:"three",question:"Familiya va Ismingizni yozib qoldiring:",answers:null,rules:_["c"]().required()}]}},methods:{submitProperties:function(e){var t=[{result:1,rate:4},{result:[0,3,4],rate:5},{result:"sultonov komron",rate:1}],o=0,n=function(e){o+=e};e.forEach((function(e,o){var r=t[o],i=r.result,s=r.rate,a=("number"===typeof e||"string"===typeof e)&&e===i;if(a&&n(s),Array.isArray(e)){var c=e.sort(),u=JSON.stringify(c)===JSON.stringify(i);u&&n(s)}})),alert("your overall rate : ".concat(o))}}};const C=a()(F,[["render",y]]);var q=C,A={class:"todos"},E={class:"todos__content"};function B(e,t,o,r,i,s){var a=Object(n["D"])("todos-form-interface"),c=Object(n["D"])("todos-list-interface");return Object(n["v"])(),Object(n["e"])("div",null,[Object(n["f"])("button",{class:"go__back-button",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})}," Go Back "),Object(n["f"])("div",A,[Object(n["h"])(a,{ref:"base-user-form",class:"todos__input",onSubmitProperties:s.addNewTodo},null,8,["onSubmitProperties"]),Object(n["f"])("div",E,[(Object(n["v"])(!0),Object(n["e"])(n["a"],null,Object(n["C"])(i.todos,(function(e,t){return Object(n["v"])(),Object(n["e"])("div",{key:e},[Object(n["h"])(c,{todo:e,index:t,onDeleteTodo:s.deleteTodo,onEditTodo:s.editTodo,onDroppedTodo:s.setDroppedTodo,onDraggedTodo:s.setDraggedTodo},null,8,["todo","index","onDeleteTodo","onEditTodo","onDroppedTodo","onDraggedTodo"])])})),128))])])])}o("a434");var G=function(e){return Object(n["y"])("data-v-08c92194"),e=e(),Object(n["w"])(),e},M={class:"form__content"},U=G((function(){return Object(n["f"])("p",null,"Write today plan",-1)})),$=G((function(){return Object(n["f"])("input",{class:"form__content-submit-button",type:"submit",value:"Add new todo"},null,-1)}));function H(e,t,o,r,i,s){var a=Object(n["D"])("v-field"),c=Object(n["D"])("error-message"),u=Object(n["D"])("v-form");return Object(n["v"])(),Object(n["e"])("div",null,[Object(n["h"])(u,{onSubmit:s.submitProperties,ref:"form",class:Object(n["p"])(["form",{"activate-form":i.editPosition}])},{default:Object(n["M"])((function(){return[Object(n["f"])("div",M,[U,Object(n["h"])(a,{rules:i.rules,name:"todo",type:"text",placeholder:"Write Todos",class:"form__content-input"},null,8,["rules"]),Object(n["h"])(c,{name:"todo",class:"form__content-error-message"})]),$]})),_:1},8,["onSubmit","class"])])}var N=o("5530"),V={name:"BaseFormGenerator",components:{VField:P["b"],VForm:P["c"],ErrorMessage:P["a"]},emits:["submit-properties"],data:function(){return{rules:_["c"]().min(5).required(),editPosition:!1,editingIndex:-1}},methods:{submitProperties:function(e,t){var o=t.resetForm,n=Object(N["a"])(Object(N["a"])({},e),{},{index:-1});this.editPosition&&(n.index=this.editingIndex),this.editPosition=!1,this.$emit("submit-properties",n),o()},editAddedTodo:function(e){var t=e.todo,o=e.index;this.editPosition=!0,this.editingIndex=o,this.$refs.form.setFieldValue("todo",t)}}};o("1ad7");const J=a()(V,[["render",H],["__scopeId","data-v-08c92194"]]);var L=J,z=o("1604"),R=o.n(z),W=o("7aff"),Q=o.n(W),K=function(e){return Object(n["y"])("data-v-31e320f3"),e=e(),Object(n["w"])(),e},X={class:"editor__buttons"},Y=K((function(){return Object(n["f"])("img",{src:R.a,alt:"edit interface icon"},null,-1)})),Z=[Y],ee=K((function(){return Object(n["f"])("img",{src:Q.a,alt:"delete interface icon"},null,-1)})),te=[ee];function oe(e,t,o,r,i,s){return Object(n["v"])(),Object(n["e"])("div",{draggable:"true",onDrag:t[2]||(t[2]=function(){return s.todoDrag&&s.todoDrag.apply(s,arguments)}),onDragleave:t[3]||(t[3]=function(){return s.todoDragLeave&&s.todoDragLeave.apply(s,arguments)}),onDragover:t[4]||(t[4]=Object(n["N"])((function(){return s.todoDragOver&&s.todoDragOver.apply(s,arguments)}),["prevent"])),onDrop:t[5]||(t[5]=function(){return s.todoDrop&&s.todoDrop.apply(s,arguments)}),class:Object(n["p"])(["todos__content-block",s.dragAndDropClasses])},[Object(n["f"])("p",null,Object(n["G"])(o.todo),1),Object(n["f"])("div",X,[Object(n["f"])("button",{class:"editor__buttons-edit",onClick:t[0]||(t[0]=function(e){return s.editTodo(o.index)})},Z),Object(n["f"])("button",{onClick:t[1]||(t[1]=function(e){return s.deleteTodo(o.index)}),class:"editor__buttons-delete"},te)])],34)}o("a9e3");var ne={name:"TodosListInterface",props:{todo:{type:String,required:!0},index:{type:Number,required:!0}},emits:["delete-todo","edit-todo","dragged-todo","dropped-todo"],data:function(){return{dragEnterClassActivate:!1,draggedElementActive:!1}},computed:{dragAndDropClasses:function(){return{"todos__content-drag-enter":this.dragEnterClassActivate}}},methods:{deleteTodo:function(e){this.$emit("delete-todo",e)},editTodo:function(e){this.$emit("edit-todo",e)},todoDrag:function(){this.$emit("dragged-todo",this.index)},todoDragOver:function(){this.dragEnterClassActivate=!0},todoDragLeave:function(){this.dragEnterClassActivate=!1},todoDrop:function(){this.dragEnterClassActivate=!1,this.$emit("dropped-todo",this.index)}}};o("1e0e");const re=a()(ne,[["render",oe],["__scopeId","data-v-31e320f3"]]);var ie=re,se={name:"TheTodosContent",components:{TodosFormInterface:L,TodosListInterface:ie},data:function(){return{todos:["Wake up Early.","Exercise daily.","Have a healthy breakfast, lunch, and dinner.","Keep room clean."],draggedItemIndex:0,droppedItemIndex:0}},methods:{addNewTodo:function(e){var t=e.todo,o=e.index;-1!==o?this.todos[o]=t:this.todos.push(t)},deleteTodo:function(e){this.todos.splice(e,1)},editTodo:function(e){var t=this.todos[e];this.$refs["base-user-form"].editAddedTodo({todo:t,index:e})},setDraggedTodo:function(e){this.draggedItemIndex=e},setDroppedTodo:function(e){this.droppedItemIndex=e,this.swapTodosPosition()},swapTodosPosition:function(){var e=this.draggedItemIndex,t=this.droppedItemIndex,o=this.todos[e],n=this.todos[t];this.todos[t]=o,this.todos[e]=n}}};o("535d");const ae=a()(se,[["render",B],["__scopeId","data-v-334a2e8c"]]);var ce=ae;function ue(e,t,o,r,i,s){var a=Object(n["D"])("base-user-form-generator");return Object(n["v"])(),Object(n["e"])("div",null,[Object(n["f"])("button",{class:"go__back-button",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})},"Go Back"),Object(n["h"])(a,{schema:i.userSchema,onSubmit:s.submitUserForm},null,8,["schema","onSubmit"])])}o("99af");var de=function(e){return Object(n["y"])("data-v-0303d0c8"),e=e(),Object(n["w"])(),e},le=de((function(){return Object(n["f"])("input",{class:"form__content-submit-button",type:"submit",value:"Submit"},null,-1)}));function be(e,t,o,r,i,s){var a=Object(n["D"])("v-field"),c=Object(n["D"])("error-message"),u=Object(n["D"])("v-form");return Object(n["v"])(),Object(n["e"])("div",null,[Object(n["h"])(u,{onSubmit:s.submitUserProperties,class:"form"},{default:Object(n["M"])((function(){return[(Object(n["v"])(!0),Object(n["e"])(n["a"],null,Object(n["C"])(o.schema,(function(e){var t=e.type,o=e.name,r=e.label,i=e.rules;return Object(n["v"])(),Object(n["e"])("div",{key:t+o,class:"form__content"},[Object(n["f"])("p",null,Object(n["G"])(r),1),Object(n["h"])(a,{rules:i,name:o,id:o+t,type:t,class:"form__content-input"},null,8,["rules","name","id","type"]),Object(n["h"])(c,{name:o,class:"form__content-error-message"},null,8,["name"])])})),128)),le]})),_:1},8,["onSubmit"])])}var fe={name:"BaseFormGenerator",components:{VField:P["b"],VForm:P["c"],ErrorMessage:P["a"]},props:{schema:{type:Array,required:!0}},emits:["submit"],methods:{submitUserProperties:function(e,t){var o=t.resetForm;this.$emit("submit",e),o()}}};o("1230");const me=a()(fe,[["render",be],["__scopeId","data-v-0303d0c8"]]);var pe=me,ve={name:"TheUserFormContent",components:{BaseUserFormGenerator:pe},data:function(){return{userSchema:[{type:"text",name:"username",placeholder:"Username",label:"Username",rules:_["c"]().min(3).required()},{type:"password",name:"userPassword",placeholder:"Password",label:"Password",rules:_["c"]().min(6).required()},{type:"text",name:"userPin",placeholder:"User JSHSHIR",label:"User Individual PINFL",rules:_["c"]().length(14).required()},{type:"date",name:"userBirthdate",placeholder:"Birthdate",label:"Birthdate",rules:_["b"]().required()}]}},methods:{submitUserForm:function(e){var t=e.username,o=e.userPassword,n=e.userPin,r=e.userBirthdate,i="Username : ".concat(t," , Password : ").concat(o," , JSHSHIR : ").concat(n," , Birthdate : ").concat(r);alert(i)}}};const Oe=a()(ve,[["render",ue]]);var je=Oe,he=[{path:"/",name:"Home",component:g},{path:"/questions",name:"questions-content",component:q},{path:"/user-form",name:"user-form",component:je},{path:"/todos",name:"todos-content",component:ce}],ge=Object(l["a"])({history:Object(l["b"])("/texnomart-interview/"),routes:he}),ye=ge;Object(n["c"])(d).use(ye).mount("#app")},"5af4":function(e,t,o){"use strict";o("32c6")},"7aff":function(e,t,o){e.exports=o.p+"img/delete-interface.63ca5ca5.svg"},"7c54":function(e,t,o){},"8a93":function(e,t,o){"use strict";o("f4f0")},bcd2:function(e,t,o){},bf7d:function(e,t,o){},e002:function(e,t,o){},f4f0:function(e,t,o){},fb8a:function(e,t,o){}});
//# sourceMappingURL=app.bcf340cc.js.map