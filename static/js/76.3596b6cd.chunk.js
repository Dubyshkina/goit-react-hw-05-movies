"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(933),p="Cast_list__GlWio",f="Cast_listItem__UvJjd",l="Cast_imageWrapper__KhHum",v="Cast_image__mOsuM",m="Cast_name__6UbFm",d="Cast_character__tKDlA",h=n(184),_=function(){var t=(0,s.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],_=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.M1)(_);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t(n)}),[n,_]),null===n?null:(0,h.jsx)("ul",{className:p,children:n.map((function(t){var e=t.id,n=t.character,r=t.name,a=t.profile_path,c=null!==a?"https://image.tmdb.org/t/p/w500".concat(a):"";return(0,h.jsxs)("li",{className:f,children:[(0,h.jsx)("div",{className:l,children:(0,h.jsx)("img",{src:c,alt:r,className:v})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:m,children:r}),(0,h.jsx)("p",{className:d,children:n})]})]},e)}))})}},933:function(t,e,n){n.d(e,{Df:function(){return o},M1:function(){return p},TP:function(){return i},tx:function(){return f},z8:function(){return l}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="efefe08e94bd9ee9cf1ab3405d7246aa",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(encodeURIComponent(e),"&api_key=").concat(s));case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.3596b6cd.chunk.js.map