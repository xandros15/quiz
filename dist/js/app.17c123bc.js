(function(e){function t(t){for(var n,c,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)c=s[p],a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0055":function(e,t,r){},"113c":function(e,t,r){},"18b6":function(e,t,r){},"464c":function(e,t,r){"use strict";var n=r("113c"),a=r.n(n);a.a},"56ac":function(e,t,r){"use strict";var n=r("0055"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.answering?r("h2",{staticClass:"panel answering"},[e._v("Answering Player: "+e._s(e.answering.name))]):e._e(),e.players.length>0?r("ol",{staticClass:"players panel"},e._l(e.playersSorted,function(t,n){return r("Player",{key:t.name,attrs:{isCurrent:e.current&&t.name===e.current.name,isTakeover:e.takeover&&t.name===e.takeover.name,player:t,index:n}})}),1):e._e(),e.top.length>1?r("div",{staticClass:"top"},e._l(e.top,function(t){return r("h3",{key:t.name},[e._v("#"+e._s(t.place)+" "+e._s(t.name))])}),0):e._e(),e.players.length>1?r("Order",{staticClass:"order"}):e._e(),e.players.length>0?r("div",{staticClass:"answer"},[e.takeover?e._e():r("Btn",{attrs:{color:"blue"},on:{click:e.pass}},[e._v("pass")]),r("Btn",{attrs:{color:"green"},on:{click:e.correct}},[e._v("Correct")]),r("Btn",{attrs:{color:"red"},on:{click:e.incorrect}},[e._v("Incorrect")])],1):e._e(),r("div",{staticClass:"panel new-player"},[r("label",[e._v("\n            New player: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createPlayer(t)},input:function(t){t.target.composing||(e.name=t.target.value)}}})])])],1)},o=[],c=(r("7f7f"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn",class:[{active:e.activated},"btn-"+e.color],on:{click:function(t){return e.$emit("click")},mouseup:e.mouseUp,mousedown:e.mouseDown}},[e._t("default")],2)}),s=[],i={name:"btn",props:{color:String,isActive:Boolean},data:function(){return{toggled:!1}},computed:{activated:function(){return this.isActive||this.toggled}},methods:{mouseUp:function(){this.toggled=!1},mouseDown:function(){this.toggled=!0}}},u=i,l=(r("464c"),r("2877")),p=Object(l["a"])(u,c,s,!1,null,"7f35d3cd",null),d=p.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"btn-group"},[r("Btn",{attrs:{color:"green",isActive:e.isActive("game")},on:{click:function(t){return e.changeOrder("game")}}},[e._v("game")]),r("Btn",{attrs:{color:"red",isActive:e.isActive("takeover")},on:{click:function(t){return e.changeOrder("takeover")}}},[e._v("takeover")]),r("Btn",{attrs:{color:"blue",isActive:e.isActive("places")},on:{click:function(t){return e.changeOrder("places")}}},[e._v("places")])],1)},f=[],h={name:"order",components:{Btn:d},methods:{changeOrder:function(e){this.$store.dispatch("changeOrder",e)},isActive:function(e){return this.order===e}},computed:{order:function(){return this.$store.state.order}}},v=h,y=Object(l["a"])(v,m,f,!1,null,"3df925c4",null),g=y.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{style:e.style},[r("h3",[r("span",{staticClass:"meta clickable",class:{"not-allowed":e.isCurrent},on:{click:e.toggleTakeover}},[e._v("\n            "+e._s(e.player.name)+"\n        ")]),r("span",{staticClass:"meta"},[r("span",{staticClass:"clickable",class:{"not-allowed":e.isCurrent},on:{click:e.toggleTakeover}},[e._v("\n                Score:\n        ")]),e.editingScore?r("input",{directives:[{name:"model",rawName:"v-model",value:e.editCache,expression:"editCache"},{name:"focus",rawName:"v-focus"}],staticClass:"input-edit",attrs:{title:"score",type:"number"},domProps:{value:e.editCache},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.endChangeScore(t)},blur:e.endChangeScore,input:function(t){t.target.composing||(e.editCache=t.target.value)}}}):r("span",{staticClass:"clickable",class:{"not-allowed":!e.isGameOrder},on:{click:e.changeScore}},[e._v("\n                "+e._s(e.player.score)+"\n            ")])]),r("span",{staticClass:"meta"},[r("span",{staticClass:"clickable",class:{"not-allowed":e.isCurrent},on:{click:e.toggleTakeover}},[e._v("\n                HP:\n            ")]),e.editingHp?r("input",{directives:[{name:"model",rawName:"v-model",value:e.editCache,expression:"editCache"},{name:"focus",rawName:"v-focus"}],staticClass:"input-edit",attrs:{title:"HP",type:"number"},domProps:{value:e.editCache},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.endChangeHp(t)},blur:e.endChangeHp,input:function(t){t.target.composing||(e.editCache=t.target.value)}}}):r("span",{staticClass:"clickable",class:{"not-allowed":!e.isGameOrder},on:{click:e.changeHp}},[e._v("\n                "+e._s(e.player.hp)+"\n            ")])]),r("span",{staticClass:"meta clickable",on:{click:e.removePlayer}},[e._v("\n            ❌\n        ")])])])},C=[],b={name:"player",props:{isCurrent:Boolean,isTakeover:Boolean,player:{type:Object,required:!0}},data:function(){return{name:this.player.name,editCache:"",editingScore:!1,editingHp:!1}},directives:{focus:{inserted:function(e){e.focus()}}},methods:{toggleTakeover:function(){this.$store.dispatch("toggleTakeover",this.name)},removePlayer:function(){this.$store.dispatch("removePlayer",this.name)},changeScore:function(){this.isGameOrder&&(this.editCache=this.player.score,this.editingScore=!0)},changeHp:function(){this.isGameOrder&&(this.editCache=this.player.hp,this.editingHp=!0)},endChangeHp:function(){this.editingHp=!1,this.$store.dispatch("setHp",{name:this.name,hp:this.editCacheNumber})},endChangeScore:function(){this.editingScore=!1,this.$store.dispatch("setScore",{name:this.name,score:this.editCacheNumber})}},computed:{isGameOrder:function(){return this.$store.getters.isGameOrder},editCacheNumber:function(){return"string"===typeof this.editCache?parseFloat(this.editCache):this.editCache},style:function(){return this.isCurrent?"color: #232aae":this.isTakeover?"color: #ea8800":""}}},_=b,P=(r("56ac"),Object(l["a"])(_,k,C,!1,null,"5a2fbc05",null)),w=P.exports,O={components:{Player:w,Order:g,Btn:d},name:"Players",data:function(){return{name:""}},methods:{createPlayer:function(){var e=this;this.name.length>=3&&this.$store.dispatch("createPlayer",this.name).then(function(){e.name=""})},pass:function(){this.$store.dispatch("pass")},correct:function(){this.$store.dispatch("correct")},incorrect:function(){this.$store.dispatch("incorrect")}},computed:{takeover:function(){return this.$store.state.takeover},current:function(){return this.$store.state.current},players:function(){return this.$store.state.players},playersSorted:function(){return this.$store.getters.playersSorted},top:function(){return this.$store.getters.top},answering:function(){return this.$store.getters.answering}}},S=O,x=(r("a69d"),Object(l["a"])(S,a,o,!1,null,"defce43a",null)),$=x.exports,T=r("2f62"),H=r("bfa9"),j=(r("7514"),r("20d6"),function(e){var t=e.commit,r=e.state;if(r.current){var n=r.players.findIndex(function(e){return e.name===r.current.name}),a=r.players[(n+1)%r.players.length].name;t("setCurrentPlayer",a)}else if(r.players.length>0){var o=r.players[0].name;t("setCurrentPlayer",o)}else t("removeCurrentPlayer");t("removeTakeover")}),A=function(e,t){var r=e.commit,n=e.state;t.length>=3&&!n.players.find(function(e){return e.name===t})?(r("createPlayer",t),n.current||r("setCurrentPlayer",t)):alert("Player exist")},B=function(e,t){var r=e.commit,n=e.state,a=e.dispatch,o=n.players.find(function(e){return e.name===t});o&&confirm("Are you sure you want to remove ".concat(t,"?"))&&(n.takeover&&n.takeover.name===t&&r("removeTakeover"),1===n.players.length?(r("removeCurrentPlayer"),r("removePlayer",t)):n.current&&o.name===n.current.name?(a("nextTurn"),r("removePlayer",t)):r("removePlayer",t))},N=function(e,t){var r=e.commit;r("changeOrder",t)},E=function(e){var t=e.commit,r=e.state,n=e.dispatch;r.takeover?t("addPoints",{name:r.takeover.name,points:1}):t("addPoints",{name:r.current.name,points:2}),n("nextTurn")},G=function(e){var t=e.commit,r=e.state,n=e.dispatch;r.takeover?t("removeHp",r.takeover.name):t("addHp",r.current.name),n("nextTurn")},M=function(e){var t=e.commit,r=e.state,n=e.dispatch;r.takeover||(t("addHp",r.current.name),n("nextTurn"))},F=function(e,t){var r=e.commit,n=e.state;n.current&&n.current.name===t||(n.takeover&&n.takeover.name===t?r("removeTakeover"):r("takeover",t))},D=function(e,t){var r=e.commit,n=t.name,a=t.score;r("setScore",{name:n,score:a})},I=function(e,t){var r=e.commit,n=t.name,a=t.hp;r("setHp",{name:n,hp:a})},J={setScore:D,setHp:I,toggleTakeover:F,pass:M,correct:E,incorrect:G,changeOrder:N,nextTurn:j,createPlayer:A,removePlayer:B},U=(r("ac4d"),r("8a81"),r("ac6a"),r("55dd"),function(e){var t=e.players.slice(0);return"takeover"===e.order?t.sort(function(e,t){return e.score<t.score?-1:e.score>t.score?1:e.hp<t.hp?1:e.hp>t.hp?-1:void 0}):"places"===e.order&&t.sort(function(e,t){return e.score<t.score?1:e.score>t.score?-1:e.hp<t.hp?1:e.hp>t.hp?-1:void 0}),t}),q=3,z=function(e){var t=e.players.slice(0);t.sort(function(e,t){return e.score<t.score?1:e.score>t.score?-1:e.hp<t.hp?1:e.hp>t.hp?-1:void 0});var r=[],n=1,a=function(e){var t=r[r.length-1];return!(!e||!t)&&(t.score===e.score&&t.hp===e.hp)},o=!0,c=!1,s=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var l=i.value;if(r.length>0&&!a(l)){if(r.length>=q)break;n++}l.place=n,r.push(l)}}catch(p){c=!0,s=p}finally{try{o||null==u.return||u.return()}finally{if(c)throw s}}return r},K=function(e){return e.takeover||e.current||null},L=function(e){return"game"===e.order},Q={isGameOrder:L,top:z,playersSorted:U,answering:K},R=function(e,t){e.players=e.players.filter(function(e){return e.name!==t})},V=function(e,t){var r=t.name,n=t.points,a=e.players.find(function(e){return e.name===r});a.score+=n+a.hp,a.hp=0},W=function(e,t){var r=e.players.find(function(e){return e.name===t});r.hp=0},X=function(e,t){var r=e.players.find(function(e){return e.name===t});r.hp++},Y=function(e,t){e.order=t},Z=function(e){e.current=null},ee=function(e,t){e.current=e.players.find(function(e){return e.name===t})},te=function(e,t){e.players.push({name:t,score:0,hp:0})},re=function(e,t){e.takeover=e.players.find(function(e){return e.name===t})},ne=function(e){e.takeover=null},ae=function(e,t){var r=t.name,n=t.hp,a=e.players.find(function(e){return e.name===r});a.hp=parseFloat(n)},oe=function(e,t){var r=t.name,n=t.score,a=e.players.find(function(e){return e.name===r});a.score=parseFloat(n)},ce={setHp:ae,setScore:oe,takeover:re,removeTakeover:ne,removePlayer:R,addPoints:V,removeHp:W,addHp:X,changeOrder:Y,createPlayer:te,setCurrentPlayer:ee,removeCurrentPlayer:Z};n["a"].use(T["a"]);var se=!1,ie=new H["a"]({key:"my-app",storage:localStorage}),ue=new T["a"].Store({state:{order:"game",players:[],takeover:null,current:null},mutations:ce,actions:J,getters:Q,strict:se,plugins:[ie.plugin]}),le=ue;n["a"].config.productionTip=!1,new n["a"]({store:le,render:function(e){return e($)}}).$mount("#app")},a69d:function(e,t,r){"use strict";var n=r("18b6"),a=r.n(n);a.a}});
//# sourceMappingURL=app.17c123bc.js.map