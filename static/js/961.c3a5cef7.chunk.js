"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(e,r,n){n.r(r);var t=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),u=n(87),l=n(933),p=n(691),d=n(184);r.default=function(){var e,r,n=(0,i.useState)(null),c=(0,a.Z)(n,2),f=c[0],v=c[1],h=(0,o.UO)().movieId,x=(0,o.TH)(),j=(0,i.useRef)(null!==(e=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/goit-react-hw-05-movies/movies");if((0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.TP)(h);case 3:r=e.sent,console.log(r),v(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),null===f)return null;var m=null!==f.poster_path?"https://image.tmdb.org/t/p/w500".concat(f.poster_path):"";return(0,d.jsxs)("div",{children:[(0,d.jsx)(u.rU,{to:j.current,children:(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:"Back"})})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:m,alt:"poster",width:200}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:f.title}),(0,d.jsxs)("p",{children:["Rating: ",f.vote_average.toFixed(1)]}),(0,d.jsx)("p",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("p",{children:"Genres"}),(0,d.jsx)("p",{children:f.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsxs)("div",{children:[(0,d.jsx)(p.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),(0,d.jsx)("div",{children:"Loading..."})]}),children:(0,d.jsx)(o.j3,{})})]})]})}},933:function(e,r,n){n.d(r,{Df:function(){return o},M1:function(){return l},TP:function(){return u},tx:function(){return p},z8:function(){return d}});var t=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="efefe08e94bd9ee9cf1ab3405d7246aa",o=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(encodeURIComponent(r),"&api_key=").concat(i));case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.c3a5cef7.chunk.js.map