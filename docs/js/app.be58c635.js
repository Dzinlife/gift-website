(function(t){function e(e){for(var a,c,s=e[0],u=e[1],o=e[2],p=0,d=[];p<s.length;p++)c=s[p],r[c]&&d.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1070:function(t,e,n){},"135b":function(t,e,n){},"14fe":function(t,e,n){},1889:function(t,e,n){"use strict";var a=n("14fe"),r=n.n(a);r.a},"254c":function(t,e,n){"use strict";var a=n("48e8"),r=n.n(a);r.a},2607:function(t,e,n){},"2cec":function(t,e,n){"use strict";var a=n("6feb"),r=n.n(a);r.a},3041:function(t,e,n){},"370a":function(t,e,n){"use strict";var a=n("52fa"),r=n.n(a);r.a},"3c79":function(t,e,n){"use strict";var a=n("2607"),r=n.n(a);r.a},4113:function(t,e,n){"use strict";var a=n("1070"),r=n.n(a);r.a},"488b":function(t,e,n){"use strict";var a=n("7b48"),r=n.n(a);r.a},"48e8":function(t,e,n){},"490c":function(t,e,n){"use strict";var a=n("135b"),r=n.n(a);r.a},"52fa":function(t,e,n){},"6bc4":function(t,e,n){},"6cbb":function(t,e,n){"use strict";var a=n("7b41"),r=n.n(a);r.a},"6daa":function(t,e,n){"use strict";var a=n("3041"),r=n.n(a);r.a},"6feb":function(t,e,n){},"7b41":function(t,e,n){},"7b48":function(t,e,n){},"7faf":function(t,e,n){"use strict";var a=n("8fba"),r=n.n(a);r.a},8759:function(t,e,n){"use strict";var a=n("c5fd"),r=n.n(a);r.a},"8fba":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.a56ca3d0.svg"},ad4b:function(t,e,n){"use strict";var a=n("bebc"),r=n.n(a);r.a},b598:function(t,e,n){"use strict";var a=n("cf65"),r=n.n(a);r.a},bebc:function(t,e,n){},c219:function(t,e,n){"use strict";var a=n("e9bb"),r=n.n(a);r.a},c5fd:function(t,e,n){},c733:function(t,e,n){"use strict";var a=n("6bc4"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("website-header",{staticClass:"header"}),n("router-view",{staticClass:"view"}),n("website-footer")],1)},i=[],c=n("d225"),s=n("308d"),u=n("6bb5"),o=n("4e2b"),l=n("9ab4"),p=n("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("9b19")}})]),a("div",{staticClass:"menu-button",on:{click:function(e){t.showMenu=!t.showMenu}}}),a("transition",{attrs:{name:"fade"}},[t.showMenu?a("div",{staticClass:"menu"},[t.data?a("ul",{on:{click:function(e){t.showMenu=!1}}},[a("router-link",{attrs:{to:{name:"aboutus"}}},[a("li",[a("h1",[t._v(t._s(t.data.data.about_us_label))])])]),a("router-link",{attrs:{to:{name:"services"}}},[a("li",[a("h1",[t._v(t._s(t.data.data.services_label))])])]),a("router-link",{attrs:{to:{name:"ourbrands"}}},[a("li",[a("h1",[t._v(t._s(t.data.data.our_brands_label))])])]),a("router-link",{attrs:{to:{name:"partnership"}}},[a("li",[a("h1",[t._v(t._s(t.data.data.partnership_label))])])]),a("router-link",{attrs:{to:{name:"contact"}}},[a("li",[a("h1",[t._v(t._s(t.data.data.contact_label))])])])],1):t._e()]):t._e()])],1)},h=[],f=(n("96cf"),n("3b8d")),b=n("b0b4"),v=(n("a481"),n("386d"),n("7514"),n("c974")),m=n.n(v),g=n("4328"),j=n.n(g),y=n("a78e"),O=n.n(y),x=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.home?n("div",{staticClass:"home"},[n("c-article",{attrs:{id:t.home.data.about_us.id}}),n("hr"),n("c-article",{attrs:{id:t.home.data.services.id}}),n("hr"),n("c-article",{attrs:{id:t.home.data.our_brands.id}}),n("hr"),n("c-article",{attrs:{id:t.home.data.partnership.id}}),n("hr"),n("c-article",{attrs:{id:t.home.data.contact.id}}),n("hr")],1):t._e()},w=[],k=n("4bb5"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"article"},[t._l(t.data.data,function(e,a){return[n(t.componentNameByKey(a),{key:a,tag:"component",attrs:{data:e}})]}),t.data.data.more?n("a",{attrs:{href:t.data.data.more.url}},[n("div",{staticClass:"more-button"},[n("h4",[t._v(t._s(t.data.data["more-text"]))])])]):t._e()],2):t._e()},R=[],I=(n("28a5"),n("f499")),$=n.n(I),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data&&t.isGroupContent(t.data)?n("div",[t._l(t.data,function(e,a){return[n("c-section",{key:a,attrs:{data:e.section}}),a<t.data.length-1?n("div",{key:a+"-hr",staticClass:"hr"}):t._e()]})],2):t.data&&"object"===typeof t.data?n("c-section",{attrs:{data:t.data}}):t._e()},S=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.html)}})},D=[],H=n("36eb"),T=n.n(H),P=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.html=null,t}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"onData",value:function(t){t&&(this.html=T.a.RichText.asHtml(t))}}]),e}(p["c"]);l["a"]([Object(p["b"])()],P.prototype,"data",void 0),l["a"]([Object(p["d"])("data",{immediate:!0})],P.prototype,"onData",null),P=l["a"]([p["a"]],P);var L=P,A=L,B=n("2877"),W=Object(B["a"])(A,M,D,!1,null,null,null),z=W.exports,G=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"isGroupContent",value:function(t){return t.every(function(t){return"section"in t})}}]),e}(p["c"]);l["a"]([Object(p["b"])()],G.prototype,"data",void 0),G=l["a"]([Object(p["a"])({components:{CSection:z}})],G);var N=G,q=N,F=(n("8759"),Object(B["a"])(q,E,S,!1,null,"2080d34c",null)),J=F.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",t._l(t.data,function(t,e){return n("div",{key:e,staticClass:"article-wrapper"},[n("c-article",{attrs:{id:t.article.id}})],1)}),0):t._e()},U=[],V=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.html=null,t}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"beforeCreate",value:function(){this.$options.components.CArticle=Yt}}]),e}(p["c"]);l["a"]([Object(p["b"])()],V.prototype,"data",void 0),V=l["a"]([p["a"]],V);var X=V,Q=X,Y=(n("4113"),Object(B["a"])(Q,K,U,!1,null,"49c45c22",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("img",{attrs:{src:t.data.url}}):t._e()},et=[],nt=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(p["c"]);l["a"]([Object(p["b"])()],nt.prototype,"data",void 0),nt=l["a"]([p["a"]],nt);var at=nt,rt=at,it=(n("3c79"),Object(B["a"])(rt,tt,et,!1,null,"4b0c58b8",null)),ct=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data&&t.data.length?n("div",{staticClass:"list"},t._l(t.data,function(e,a){return n("div",{key:a,staticClass:"list-item"},[n("div",{staticClass:"list-img"},[n("img",{attrs:{src:e.image.url}})]),n("div",{staticClass:"list-info"},[n("h4",[t._v(t._s(e.name))]),n("c-content",{attrs:{data:e.description}})],1)])}),0):t._e()},ut=[],ot=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.html=null,t}return Object(o["a"])(e,t),e}(p["c"]);l["a"]([Object(p["b"])()],ot.prototype,"data",void 0),ot=l["a"]([Object(p["a"])({components:{CContent:J}})],ot);var lt=ot,pt=lt,dt=(n("6daa"),Object(B["a"])(pt,st,ut,!1,null,"68c81d02",null)),ht=dt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data&&t.data.length?n("div",t._l(t.data,function(e,a){return n("div",{key:a,staticClass:"list-item"},[n("div",{staticClass:"list-img"},[n("img",{attrs:{src:e.image.url}})]),n("div",{staticClass:"list-info"},[n("h4",[t._v(t._s(e.name))]),n("c-content",{attrs:{data:e.description}})],1)])}),0):t._e()},bt=[],vt=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.html=null,t}return Object(o["a"])(e,t),e}(p["c"]);l["a"]([Object(p["b"])()],vt.prototype,"data",void 0),vt=l["a"]([Object(p["a"])({components:{CContent:J}})],vt);var mt=vt,gt=mt,jt=(n("b598"),Object(B["a"])(gt,ft,bt,!1,null,"304596e4",null)),yt=jt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("c-section",{staticClass:"subtitle",attrs:{data:t.data}}):t._e()},xt=[],_t=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(p["c"]);l["a"]([Object(p["b"])()],_t.prototype,"data",void 0),_t=l["a"]([Object(p["a"])({components:{CSection:z}})],_t);var wt=_t,kt=wt,Ct=(n("254c"),Object(B["a"])(kt,Ot,xt,!1,null,"d4b8507c",null)),Rt=Ct.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",[n("light-box-control",{attrs:{imgs:t.data.map(function(t){return t.image.url})}})],1):t._e()},$t=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lightbox"},[n("LightBox",{attrs:{imgs:t.imgs,index:t.galleryIndex}}),n("div",{staticClass:"control-nav"},t._l(t.imgs.length,function(e,a){return n("div",{key:a,staticClass:"nav-dot",class:{active:a===t.galleryIndex}})}),0),n("div",{staticClass:"control"},[n("button",{staticClass:"prev",class:{disabled:t.galleryIndex<=0},on:{click:function(e){t.galleryIndex-=1}}}),n("div",{staticClass:"divider"}),n("button",{staticClass:"next",class:{disabled:t.galleryIndex>=this.imgs.length-1},on:{click:function(e){t.galleryIndex+=1}}})])],1)},St=[],Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"light-box",style:{height:t.height+"px",transition:t.heightTransition?"height 0.3s ease-out":"none"}},t._l(t.imgs,function(e,a){return n("div",{staticClass:"img-wrapper",style:t.imgStyle(a)},[n("img",{ref:"imgs",refInFor:!0,attrs:{src:e}})])}),0)},Dt=[];n("ac6a");function Ht(t,e){var n=.88,a=n*t+(1-n)*e;return a}var Tt={name:"light-box",props:{imgs:{default:[]},index:{default:0}},mounted:function(){this.setHeight(),this.$refs.imgs.forEach(this.getDemension),window.addEventListener("resize",this.setHeight)},beforeDestroy:function(){var t=this;window.removeEventListener("resize",this.setHeight),this.demensions.forEach(function(e,n){clearInterval(t.demensions[n])})},computed:{},watch:{index:function(t,e){t<0||t>this.imgs.length-1||(this.setHeight(!0),clearTimeout(this.timer),this.indexInterpolation=Ht(this.indexInterpolation,t))},indexInterpolation:function(t,e){var n=this;Math.abs(t-this.index)<.001?this.timer=setTimeout(function(t){n.indexInterpolation=n.index},16):this.timer=setTimeout(function(e){n.indexInterpolation=Ht(t,n.index)},16)},demensions:function(){this.setHeight()}},methods:{getDemension:function(t,e){var n=this;this.demensions[e]=setInterval(function(a){t.naturalWidth&&(clearInterval(n.demensions[e]),n.$set(n.demensions,e,[t.naturalWidth,t.naturalHeight]))},10)},setHeight:function(t){if(this.demensions[this.index]){var e=this.$refs.imgs[this.index],n=(e.offsetWidth,e.offsetHeight);this.height!==n&&(this.heightTransition=!0===t,this.height=n)}},imgStyle:function(t){var e=t-this.indexInterpolation;var n=this.imgs.length-1,a=Math.round(this.indexInterpolation),r=n-Math.abs(t-a);return{transform:"translate3d(".concat(100*e,"%,0,0)"),zIndex:r}},prev:function(){},next:function(){}},data:function(){return{height:380,heightTransition:!1,indexInterpolation:this.index,demensions:new Array(this.imgs.length)}}},Pt=Tt,Lt=(n("1889"),Object(B["a"])(Pt,Mt,Dt,!1,null,"1d8953be",null)),At=Lt.exports,Bt={name:"light-box-control",components:{LightBox:At},props:{imgs:{default:[]},value:{default:0}},watch:{galleryIndex:function(t,e){(t<0||t>this.imgs.length-1)&&(this.galleryIndex=e),this.$emit("input",this.galleryIndex)}},methods:{},data:function(){return{galleryIndex:this.value}}},Wt=Bt,zt=(n("6cbb"),Object(B["a"])(Wt,Et,St,!1,null,"b380cbce",null)),Gt=zt.exports,Nt=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(p["c"]);l["a"]([Object(p["b"])()],Nt.prototype,"data",void 0),Nt=l["a"]([Object(p["a"])({components:{LightBoxControl:Gt}})],Nt);var qt=Nt,Ft=qt,Jt=(n("ad4b"),Object(B["a"])(Ft,It,$t,!1,null,"38fdecd4",null)),Kt=Jt.exports,Ut=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.data=null,t}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"onId",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Te(e);case 2:this.data=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"onData",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.data=e?JSON.parse($()(e)):null;case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"componentNameByKey",value:function(t){var e=t.split("_")[0];switch(e){case"title":return"c-section";case"content":return"c-content";case"articlelist":return"article-list";case"image":return"c-image";case"compact-list":return"compact-list";case"list":return"list";case"subtitle":return"subtitle";case"gallery":return"gallery";default:return null}}}]),e}(p["c"]);l["a"]([k["a"]],Ut.prototype,"home",void 0),l["a"]([Object(p["b"])()],Ut.prototype,"id",void 0),l["a"]([Object(p["b"])()],Ut.prototype,"fetchedData",void 0),l["a"]([Object(p["d"])("id",{immediate:!0})],Ut.prototype,"onId",null),l["a"]([Object(p["d"])("fetchedData",{immediate:!0})],Ut.prototype,"onData",null),Ut=l["a"]([Object(p["a"])({components:{CContent:J,CSection:z,ArticleList:Z,CImage:ct,List:ht,CompactList:yt,Subtitle:Rt,Gallery:Kt}})],Ut);var Vt=Ut,Xt=Vt,Qt=(n("2cec"),Object(B["a"])(Xt,C,R,!1,null,"43483d70",null)),Yt=Qt.exports,Zt=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"aboutUs",get:function(){return this.home.data.about_us}},{key:"services",get:function(){return this.home.data.services}},{key:"brands",get:function(){return this.home.data.brands}}]),e}(p["c"]);l["a"]([k["a"]],Zt.prototype,"home",void 0),Zt=l["a"]([Object(p["a"])({components:{CArticle:Yt}})],Zt);var te=Zt,ee=te,ne=(n("c219"),Object(B["a"])(ee,_,w,!1,null,null,null)),ae=ne.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("PREVIEW")])},ie=[],ce=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"created",value:function(){Ue()}}]),e}(p["c"]);ce=l["a"]([p["a"]],ce);var se=ce,ue=se,oe=Object(B["a"])(ue,re,ie,!1,null,null,null),le=oe.exports,pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unique-article"},[t.data?n("c-article",{attrs:{fetchedData:t.data}}):t._e()],1)},de=[],he=(n("7f7f"),function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.data=null,t}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"load",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.data=null,t.t0=this.$route.name,t.next="aboutus"===t.t0?4:"brand"===t.t0?8:"contact"===t.t0?12:"ourbrands"===t.t0?16:"partnership"===t.t0?20:"services"===t.t0?24:28;break;case 4:return t.next=6,De("about_us");case 6:return this.data=t.sent,t.abrupt("break",28);case 8:return t.next=10,Le("brand",this.$route.params.uid);case 10:return this.data=t.sent,t.abrupt("break",28);case 12:return t.next=14,De("contact");case 14:return this.data=t.sent,t.abrupt("break",28);case 16:return t.next=18,De("ourbrands");case 18:return this.data=t.sent,t.abrupt("break",28);case 20:return t.next=22,De("partnership");case 22:return this.data=t.sent,t.abrupt("break",28);case 24:return t.next=26,De("services");case 26:return this.data=t.sent,t.abrupt("break",28);case 28:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(p["c"]));l["a"]([Object(p["d"])("$route",{immediate:!0})],he.prototype,"load",null),he=l["a"]([Object(p["a"])({components:{CArticle:Yt}})],he);var fe=he,be=fe,ve=(n("c733"),Object(B["a"])(be,pe,de,!1,null,"45c1864a",null)),me=ve.exports,ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[t.article?n("c-article",{key:t.$route.params.uid,attrs:{fetchedData:t.article}}):t._e(),n("div",{staticClass:"nav"},[n("router-link",{style:{visible:t.prev?"visible":"none"},attrs:{to:{name:"project",params:{uid:t.prev&&t.prev.uid}}}},[t.prev?n("div",{staticClass:"prev",style:{backgroundImage:"url('"+t.prev.data.gallery[0].image.url+"')"}},[n("div",{staticClass:"mask"},[t._v("PREV")])]):t._e()]),n("router-link",{style:{visible:t.next?"visible":"none"},attrs:{to:{name:"project",params:{uid:t.next&&t.next.uid}}}},[t.next?n("div",{staticClass:"next",style:{backgroundImage:"url('"+t.next.data.gallery[0].image.url+"')"}},[n("div",{staticClass:"mask"},[t._v("NEXT")])]):t._e()])],1)],1)},je=[],ye=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.article=null,t.next=null,t.prev=null,t.navReady=!1,t}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"reload",value:function(){this.prev=null,this.next=null,this.article=null,this.navReady=!1,this.load()}},{key:"created",value:function(){this.load()}},{key:"load",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Je("project",this.$route.params.uid);case 2:return this.article=t.sent,e=this.article.id,t.next=6,Ge(m.a.Predicates.at("document.type","project"),{orderings:"[document.last_publication_date]",pageSize:1,after:e}).then(function(t){t.results.length&&(n.next=t.results[0])});case 6:return t.next=8,Ge(m.a.Predicates.at("document.type","project"),{orderings:"[document.last_publication_date desc]",pageSize:1,after:e}).then(function(t){t.results.length&&(n.prev=t.results[0])});case 8:this.navReady=!0;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(p["c"]);l["a"]([Object(p["d"])("$route")],ye.prototype,"reload",null),ye=l["a"]([Object(p["a"])({components:{CArticle:Yt}})],ye);var Oe=ye,xe=Oe,_e=(n("dc2e"),Object(B["a"])(xe,ge,je,!1,null,"c6a296ba",null)),we=_e.exports;a["default"].use(x["a"]);var ke=new x["a"]({base:"/",routes:[{path:"/",name:"home",component:ae},{path:"/preview",name:"preview",component:le},{path:"/aboutus",name:"aboutus",component:me},{path:"/services",name:"services",component:me},{path:"/project/:uid",name:"project",component:we},{path:"/ourbrands",name:"ourbrands",component:me},{path:"/ourbrands/:uid",name:"brand",component:me},{path:"/partnership",name:"partnership",component:me},{path:"/contact",name:"contact",component:me}]}),Ce="https://gift.cdn.prismic.io/api/v2",Re=m.a.getApi(Ce),Ie=null;function $e(){return Ee.apply(this,arguments)}function Ee(){return Ee=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Re;case 2:return e=t.sent,n=O.a.get(m.a.previewCookie),a=e.refs.find(function(t){return!0===t.isMasterRef}).ref,r=j.a.parse(location.search.slice(1)),i="/preview"===location.pathname||r.preview,c=i&&n||a,Ie={ref:c},t.abrupt("return",e);case 10:case"end":return t.stop()}},t,this)})),Ee.apply(this,arguments)}function Se(t){return Me.apply(this,arguments)}function Me(){return Me=Object(f["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,t.next=3,$e();case 3:return a=t.sent,n?n.ref=Ie.ref:n=Ie,t.abrupt("return",a.query(e,n));case 6:case"end":return t.stop()}},t,this)})),Me.apply(this,arguments)}function De(t){return He.apply(this,arguments)}function He(){return He=Object(f["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,t.next=3,$e();case 3:return a=t.sent,n?n.ref=Ie.ref:n=Ie,t.abrupt("return",a.getSingle(e,n));case 6:case"end":return t.stop()}},t,this)})),He.apply(this,arguments)}function Te(t){return Pe.apply(this,arguments)}function Pe(){return Pe=Object(f["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,t.next=3,$e();case 3:return a=t.sent,n?n.ref=Ie.ref:n=Ie,t.abrupt("return",a.getByID(e,n));case 6:case"end":return t.stop()}},t,this)})),Pe.apply(this,arguments)}function Le(t,e){return Ae.apply(this,arguments)}function Ae(){return Ae=Object(f["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:null,t.next=3,$e();case 3:return r=t.sent,a?a.ref=Ie.ref:a=Ie,t.abrupt("return",r.getByUID(e,n,a));case 6:case"end":return t.stop()}},t,this)})),Ae.apply(this,arguments)}function Be(t){var e={name:t.type,params:{id:t.uid},query:{preview:!0}};return e}function We(){return ze.apply(this,arguments)}function ze(){return ze=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Re;case 2:return e=t.sent,n=j.a.parse(location.search.slice(1)),t.next=6,e.previewSession(n.token,Be,"/");case 6:a=t.sent,ke.replace(a);case 8:case"end":return t.stop()}},t,this)})),ze.apply(this,arguments)}function Ge(t,e){return Ne.apply(this,arguments)}function Ne(){return Ne=Object(f["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Se(e,n));case 1:case"end":return t.stop()}},t,this)})),Ne.apply(this,arguments)}function qe(t,e){return Fe.apply(this,arguments)}function Fe(){return Fe=Object(f["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",De(e,n));case 1:case"end":return t.stop()}},t,this)})),Fe.apply(this,arguments)}function Je(t,e,n){return Ke.apply(this,arguments)}function Ke(){return Ke=Object(f["a"])(regeneratorRuntime.mark(function t(e,n,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Le(e,n,a));case 1:case"end":return t.stop()}},t,this)})),Ke.apply(this,arguments)}function Ue(){return Ve.apply(this,arguments)}function Ve(){return Ve=Object(f["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",We());case 1:case"end":return t.stop()}},t,this)})),Ve.apply(this,arguments)}var Xe=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.showMenu=!1,t.data=null,t}return Object(o["a"])(e,t),Object(b["a"])(e,[{key:"created",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,qe("menu");case 2:this.data=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"onRouteChange",value:function(){this.showMenu=!1}}]),e}(p["c"]);l["a"]([Object(p["d"])("$route")],Xe.prototype,"onRouteChange",null),Xe=l["a"]([p["a"]],Xe);var Qe=Xe,Ye=Qe,Ze=(n("370a"),Object(B["a"])(Ye,d,h,!1,null,"42843db8",null)),tn=Ze.exports,en=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v("\n  © 2019 GiFT ltd.\n")])},nn=[],an={name:"footer"},rn=an,cn=(n("488b"),Object(B["a"])(rn,en,nn,!1,null,"7f6ab396",null)),sn=cn.exports,un=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(p["c"]);un=l["a"]([Object(p["a"])({components:{WebsiteHeader:tn,WebsiteFooter:sn}})],un);var on=un,ln=on,pn=(n("7faf"),n("490c"),Object(B["a"])(ln,r,i,!1,null,null,null)),dn=pn.exports,hn=n("2f62");a["default"].use(hn["a"]);var fn=new hn["a"].Store({state:{home:null},mutations:{setHome:function(t,e){t.home=e}},actions:{}});a["default"].config.productionTip=!1,qe("ho").then(function(t){fn.commit("setHome",t)}),new a["default"]({router:ke,store:fn,render:function(t){return t(dn)}}).$mount("#app")},cf65:function(t,e,n){},dc2e:function(t,e,n){"use strict";var a=n("f4a8"),r=n.n(a);r.a},e9bb:function(t,e,n){},f4a8:function(t,e,n){}});
//# sourceMappingURL=app.be58c635.js.map