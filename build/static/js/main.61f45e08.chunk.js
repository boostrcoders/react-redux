(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/mylogo2.d916940f.png"},22:function(e,t,n){e.exports=n(42)},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(18),c=n.n(l),r=n(9),i=n(12),s=n(1),u="NEW_TODO_CHANGED",d="ADD_TODO",m="TOGGLE_TODO_DONE",h="REMOVE _TODO",v="ALL_DONE",p="STATUS_ALL_DONE",E="VIEW_STATUS",w={activePage:"Todo List",newTodo:"",allDone:0,view:"Show All",todos:[{title:"Learn React",done:!1},{title:"Learn React2",done:!1}]},g={newTodoChanged:function(e){return{type:u,newTodo:e}},addTodo:function(e){return{type:d,todo:e}},toggleTodoDone:function(e){return{type:m,toggle:e}},removeTodo:function(e){return{type:h,index:e}},allDone:function(){return{type:v}},statusAllDone:function(){return{type:p}},viewStatus:function(e){return{type:E,viewInput:e}}};var f=n(3),T=n(20),D=(n(31),n(6)),b=n(7),O=n(10),k=n(8),N=n(11);n(33);var S=function(e){return a.a.createElement("div",{className:"custom-nav"},a.a.createElement("nav",null,a.a.createElement("div",{className:"icon",onClick:function(){var e=document.querySelector("nav").style.height;console.log(e),"0px"===e||""===e?(document.querySelector("nav").style.height="210px",document.querySelector(".icon").classList.add("show")):(document.querySelector("nav").style.height="0px",document.querySelector(".icon").classList.remove("show"))}},a.a.createElement("div",{className:"hamburger"})),a.a.createElement("ul",{id:"nav-body"},a.a.createElement("li",{className:"active"},a.a.createElement("a",{href:"#home"},"Home")),a.a.createElement("li",null,a.a.createElement("a",{href:"#news"},"News")),a.a.createElement("li",null,a.a.createElement("a",{href:"#contact"},"Contact")),a.a.createElement("li",null,a.a.createElement("a",{href:"#about"},"About")))))},y=(n(35),n(21)),A=n.n(y),j=function(){return a.a.createElement("div",{className:"logo"},a.a.createElement("a",{href:"#home"},a.a.createElement("img",{width:"50px",height:"50px",src:A.a,alt:"JM"})))},_=(n(37),function(){return a.a.createElement("div",{className:"custom-header"},a.a.createElement(j,null),a.a.createElement(S,null))}),x=(n(5),function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.formSubmitted},a.a.createElement("input",{type:"checkbox",id:"toggle"}),a.a.createElement("label",{htmlFor:"toggle",className:"btn"}),a.a.createElement("input",{type:"text",name:"newTodo",onChange:function(t){return e.newTodoChange(t.target.value)},value:e.newTodo,placeholder:"Input task here...",className:"textInput"})))}),C=function(e){return a.a.createElement("div",{className:"Active"===e.view&&!1===e.todo.done?"task-card show":"Done"===e.view&&!0===e.todo.done?"task-card show":"Show All"===e.view?"task-card show":"task-card hide",key:e.index},a.a.createElement("label",{className:"task"},a.a.createElement("input",{type:"checkbox",id:"task-item",onChange:function(t){return e.toggleTodoDone(t,e.index)},checked:e.todo.done}),a.a.createElement("span",{className:e.todo.done?"todo-done":""},e.todo.title),a.a.createElement("span",{className:"checkmark"})),a.a.createElement("span",{className:"delete-task",title:"Delete",onClick:function(){return e.removeTodo(e.index)}},"\u2715"))},L=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"sub-menu"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("label",{className:"task"},a.a.createElement("input",{type:"checkbox",id:"task-item",onChange:function(){return e.checkAll()},checked:!!e.allDone}),a.a.createElement("span",{className:e.allDone?"todo-done":""},e.allDone?"Uncheck All":"All Done"),a.a.createElement("span",{className:"checkmark"}))))),a.a.createElement("div",{className:"task-container"},e.todos.map(function(t,n){return a.a.createElement(C,{view:e.view,toggleTodoDone:e.toggleTodoDone,removeTodo:e.removeTodo,todo:t,index:n,key:n})})),a.a.createElement("div",{className:"sub-menu"},a.a.createElement("ul",null,a.a.createElement("li",{className:"Show All"===e.view?"active":"",onClick:function(){return e.viewStatus("Show All")}},"Show All"),a.a.createElement("li",{className:"Active"===e.view?"active":"",onClick:function(){return e.viewStatus("Active")}},"Active"),a.a.createElement("li",{className:"Done"===e.view?"active":"",onClick:function(){return e.viewStatus("Done")}},"Done"))))},I=function(e){function t(){return Object(D.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"formSubmitted",value:function(e){e.preventDefault(),this.props.onAddTodo({title:this.props.newTodo,done:!1}),this.props.onNewTodoChanged(""),this.props.onStatusAllDone()}},{key:"toggleTodoDone",value:function(e,t){this.props.onToggleTodoDone({index:t,checked:e.target.checked}),this.props.onStatusAllDone()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"main-content"},a.a.createElement("div",null,a.a.createElement("div",{className:"title-input-bar"},a.a.createElement("span",null,this.props.activePage),a.a.createElement(x,{newTodo:this.props.newTodo,formSubmitted:function(t){return e.formSubmitted(t)},newTodoChange:this.props.onNewTodoChanged})),a.a.createElement(L,{view:this.props.view,viewStatus:this.props.onViewStatus,allDone:this.props.allDone,toggleTodoDone:this.toggleTodoDone.bind(this),removeTodo:this.props.onRemoveTodo,todos:this.props.todos,checkAll:this.props.onAllDone})))}}]),t}(o.Component);var R=Object(r.b)(function(e){return{activePage:e.activePage,newTodo:e.newTodo,allDone:e.allDone,todos:e.todos,view:e.view}},function(e){return{onNewTodoChanged:function(t){e(g.newTodoChanged(t))},onAddTodo:function(t){e(g.addTodo(t))},onToggleTodoDone:function(t){e(g.toggleTodoDone(t))},onRemoveTodo:function(t){e(g.removeTodo(t))},onAllDone:function(){e(g.allDone())},onStatusAllDone:function(){e(g.statusAllDone())},onViewStatus:function(t){console.log(t),e(g.viewStatus(t))}}})(I),V=(n(40),function(e){function t(){return Object(D.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(_,null),a.a.createElement(R,null))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=Object(f.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)({},e,{newTodo:t.newTodo});case d:return Object(s.a)({},e,{todos:[].concat(Object(i.a)(e.todos),[t.todo])});case m:var n=Object(i.a)(e.todos);return n[t.toggle.index].done=t.toggle.checked,Object(s.a)({},e,{todos:n});case h:var o=Object(i.a)(e.todos);return o.splice(t.index,1),Object(s.a)({},e,{todos:o});case v:var a=!0;e.allDone&&(a=!1);var l=e.todos.map(function(e){return Object(s.a)({},e,{done:a})});return Object(s.a)({},e,{allDone:a,todos:l});case p:var c=0;return e.todos.map(function(e){return e.done&&c++,c}),console.log(c),Object(s.a)({},e,{allDone:c===e.todos.length});case E:return Object(s.a)({},e,{view:t.viewInput});default:return e}},Object(f.c)(Object(f.a)(T.logger),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(a.a.createElement(r.a,{store:q},a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){}},[[22,2,1]]]);
//# sourceMappingURL=main.61f45e08.chunk.js.map