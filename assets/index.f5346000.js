var k=Object.defineProperty,$=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var v=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,h=(t,e)=>{for(var o in e||(e={}))I.call(e,o)&&v(t,o,e[o]);if(b)for(var o of b(e))V.call(e,o)&&v(t,o,e[o]);return t},f=(t,e)=>$(t,D(e));import{m as T,o as l,c as u,w as p,v as y,a as i,b as w,r as _,d as q,F as C,e as A,f as L,g as H,h as x,i as N,l as a,j as E}from"./vendor.c2b496e9.js";const U=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=o(n);fetch(n.href,d)}};U();var m=(t,e)=>{const o=t.__vccOpts||t;for(const[s,n]of e)o[s]=n;return o};const B={data(){return{currentContent:""}},watch:{currentContent(t,e){this.searchTodo(this.currentContent)}},methods:f(h({},T(["searchTodo","deleteDoneTodo"])),{clearContent(){this.currentContent=""},keyboardHandler(t){switch(t.key){case"Escape":this.clearContent();break}},handleClearDone(){this.deleteDoneTodo()}})},M={class:"card",id:"omnibox-container"};function O(t,e,o,s,n,d){return l(),u("div",M,[p(i("input",{type:"text",id:"omnibox",placeholder:"G\xF5 t\u1EA1i \u0111\xE2y \u0111\u1EC3 search \u2022 Nh\u1EA5n Esc = clear thanh search","onUpdate:modelValue":e[0]||(e[0]=r=>n.currentContent=r),onKeyup:e[1]||(e[1]=(...r)=>d.keyboardHandler&&d.keyboardHandler(...r))},null,544),[[y,n.currentContent]]),i("input",{type:"button",value:"X\xF3a todo \u0111\xE3 xong",onClick:e[2]||(e[2]=(...r)=>d.handleClearDone&&d.handleClearDone(...r))})])}var S=m(B,[["render",O]]);const F={data(){return{currentContent:""}},methods:f(h({},T(["addTodo"])),{clearContent(){this.currentContent=""},keyboardHandler(t){switch(t.key){case"Enter":this.handleAdd();break;case"Escape":this.clearContent();break}},handleAdd(){this.currentContent.trim().length>0&&this.addTodo(this.currentContent),this.clearContent()}})},G={class:"card",id:"omnibox-container"};function K(t,e,o,s,n,d){return l(),u("div",G,[p(i("input",{type:"text",id:"omnibox",placeholder:"G\xF5 t\u1EA1i \u0111\xE2y \u0111\u1EC3 th\xEAm todo \u2022 Nh\u1EA5n Enter = nh\u1EA5n n\xFAt Th\xEAm","onUpdate:modelValue":e[0]||(e[0]=r=>n.currentContent=r),onKeyup:e[1]||(e[1]=(...r)=>d.keyboardHandler&&d.keyboardHandler(...r))},null,544),[[y,n.currentContent]]),i("input",{type:"button",value:"Th\xEAm",onClick:e[2]||(e[2]=(...r)=>d.handleAdd&&d.handleAdd(...r))})])}var Q=m(F,[["render",K]]);const j={props:["id","content","done"],data(){return{_content:this.content,_done:this.done}},watch:{_content:function(){this.handleUpdate()},_done:function(){this.handleUpdate()}},methods:f(h({},T(["updateTodo","deleteTodo"])),{handleUpdate(){this.updateTodo({id:this.id,content:this._content,done:this._done})},handleDelete(){this.deleteTodo(this.id)}})},P={class:"todo-item"};function X(t,e,o,s,n,d){return l(),u("div",P,[p(i("input",{type:"checkbox",class:"item-done","onUpdate:modelValue":e[0]||(e[0]=r=>this._done=r)},null,512),[[w,this._done]]),p(i("input",{type:"text",class:"item-content","onUpdate:modelValue":e[1]||(e[1]=r=>this._content=r)},null,512),[[y,this._content]]),i("input",{type:"button",value:"X\xF3a",onClick:e[2]||(e[2]=(...r)=>d.handleDelete&&d.handleDelete(...r))})])}var R=m(j,[["render",X]]);const z={props:["todos"],components:{TodoItem:R}},J={id:"todo-list",class:"card"},W={id:"todo-list-empty-placeholder"};function Y(t,e,o,s,n,d){const r=_("todo-item");return l(),u("div",J,[p(i("div",W,"(danh s\xE1ch tr\u1ED1ng)",512),[[q,o.todos.length===0]]),(l(!0),u(C,null,A(o.todos,c=>(l(),L(r,{id:c.id,content:c.content,done:c.done,key:c.id},null,8,["id","content","done"]))),128))])}var Z=m(z,[["render",Y]]);const ee={components:{SearchBox:S,AddBox:Q,TodoList:Z},computed:h({},H(["todos"])),mounted(){console.log(this.todos)}};function te(t,e,o,s,n,d){const r=_("search-box"),c=_("add-box"),g=_("todo-list");return l(),u(C,null,[x(r),x(c),x(g,{todos:t.todos},null,8,["todos"])],64)}var oe=m(ee,[["render",te]]),ne=N({state:{searchQuery:"",allTodos:[{id:a.exports.uniqueId(),content:"H\u1ECDc Vue",done:!0},{id:a.exports.uniqueId(),content:"H\u1ECDc Vuex",done:!0},{id:a.exports.uniqueId(),content:"T\xECm hi\u1EC3u React",done:!1},{id:a.exports.uniqueId(),content:"T\xECm hi\u1EC3u Vue",done:!1},{id:a.exports.uniqueId(),content:"T\xECm hi\u1EC3u Svelte",done:!1},{id:a.exports.uniqueId(),content:"\u0110i ng\u1EE7 \u{1F4A4}",done:!0},{id:a.exports.uniqueId(),content:"Vi\u1EBFt b\xE0i thuy\u1EBFt tr\xECnh",done:!0}]},getters:{todos:(t,e)=>t.allTodos.filter(o=>o.content.toLowerCase().includes(t.searchQuery.toLowerCase()))},actions:{searchTodo(t,e){const o="searchTodoMutation";t.commit(o,e)},addTodo({commit:t},e){t("addTodo",e)},updateTodo({commit:t},e){t("updateTodo",e)},deleteTodo({commit:t},e){t("deleteTodo",e)},deleteDoneTodo({commit:t}){t("deleteDoneTodo")}},mutations:{searchTodoMutation(t,e){t.searchQuery=e},addTodo(t,e){t.allTodos.unshift({id:a.exports.uniqueId(),content:e,done:!1})},updateTodo(t,e){const o=a.exports.findIndex(t.allTodos,s=>s.id===e.id);console.log(o),t.allTodos.splice(o,1,e)},deleteTodo(t,e){t.allTodos=t.allTodos.filter(o=>o.id!==e)},deleteDoneTodo(t){t.allTodos=t.allTodos.filter(e=>e.done!==!0)}}});E(oe).use(ne).mount("#app");