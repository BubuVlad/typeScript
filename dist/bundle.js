(()=>{"use strict";var e=function(e){this.id=e.id,this.name=e.name,this.image=e.image,this.description=e.description,this.type=e.type},t=function(){function e(){this._items=[]}return e.prototype.addItem=function(e){this._items.some((function(t){return t.name===e.name}))?console.log("Este deja"):this._items.push(e)},e.prototype.removeItem=function(e){this._items.splice(this._items.indexOf(e),1)[0]},Object.defineProperty(e.prototype,"items",{get:function(){return this._items},enumerable:!1,configurable:!0}),e}(),i=new e({id:1,name:"Lego",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",description:"Best for plenty.",type:"simple"}),n=new e({id:2,name:"Batman",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",description:"Best for plenty.",type:"simple"}),o=new e({id:3,name:"Robin",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",description:"Best for plenty.",type:"simple"}),m=new e({id:4,name:"Joker",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",description:"Best for plenty.",type:"simple"}),a=new t;a.addItem(i),a.addItem(n),a.addItem(o),a.addItem(m),a.addItem(n),a.addItem(o),a.addItem(m);var s,d,r=function(e,t){for(var i=0,n=t.length,o=e.length;i<n;i++,o++)e[o]=t[i];return e}([],a.items);console.log("List initial: ",r),a.removeItem(n),console.log("List after remove: ",a),a.addItem(n),s=a,d=document.getElementById("productList"),s.items.forEach((function(e){d.appendChild(function(e){var t=document.createElement("div");t.classList.add("item");var i=document.createElement("h3"),n=document.createElement("p"),o=document.createElement("div"),m=document.createElement("img");return m.setAttribute("src",e.image),m.setAttribute("alt",e.name),i.innerText=e.name,n.innerText=e.description,t.appendChild(i),t.appendChild(o),o.appendChild(m),t.appendChild(n),t}(e))}))})();