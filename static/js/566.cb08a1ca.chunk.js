"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{243:function(n,t,r){function e(n,t,r,e,o,c,a){try{var u=n[c](a),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,c){var a=n.apply(t,r);function u(n){e(a,o,c,u,i,"next",n)}function i(n){e(a,o,c,u,i,"throw",n)}u(void 0)}))}}r.d(t,{jf:function(){return d},hG:function(){return l},Cm:function(){return m},do:function(){return u},pS:function(){return i},qF:function(){return h},Jk:function(){return f}});var c=r(757),a=r.n(c),u="https://picsum.photos/200/300",i="https://image.tmdb.org/t/p/w300",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWY5N2Y4MmQ4ZDQ5MDg1Y2UyMzlmOWIzZTNlMmZhZCIsInN1YiI6IjY1ZTg2ZjRiYTFhOWJhMDE4NWJmMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N52ZU8Yy9IzrON1WX2UYvsIciDECC_sAUCcmjx29Yxs"}},p=function(){var n=o(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t,s);case 2:return r=n.sent,console.log(r),n.next=6,r.json();case 6:if(e=n.sent,console.log(e),r.ok){n.next=10;break}throw new Error("Failed to fetch data");case 10:return n.abrupt("return",e);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=o(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",n.next=3,p("https://api.themoviedb.org/3/trending/all/day");case 3:return t=n.sent,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=o(a().mark((function n(t,r){var e,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&page=").concat(r),n.next=3,p(e);case 3:return o=n.sent,console.log(o),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=o(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),n.next=3,p(r);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=o(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),n.next=3,p(r);case 3:return e=n.sent,console.log(e),n.abrupt("return",e.cast);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=o(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),n.next=3,p(r);case 3:return e=n.sent,console.log(e),n.abrupt("return",e.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},179:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e=r(439),o=r(243),c=r(791),a=r(87),u="TrendingToday_list__l6AoX",i="TrendingToday_trending__Jkj1K",s="TrendingToday_link__L6FvT",p=r(184),f=function(){var n=(0,c.useState)([]),t=(0,e.Z)(n,2),r=t[0],f=t[1];return(0,c.useEffect)((function(){(0,o.Jk)().then((function(n){return f(n)})).catch((function(n){return console.error("Error with fetching trending movies:"+n)}))}),[]),(0,p.jsx)("ul",{className:u,children:r.map((function(n){var t=n.id,r=n.poster_path,e=n.title,c=n.name;return(0,p.jsx)("li",{className:i,children:(0,p.jsxs)(a.rU,{className:s,to:"/movies/".concat(t),children:[(0,p.jsx)("img",{src:r?"".concat(o.pS).concat(r):o.do,alt:"Poster of film ".concat(e||c),width:"200"}),(0,p.jsx)("p",{children:e||c})]})},t)}))})},h="Home_container__w+u63",l=function(){return(0,p.jsxs)("main",{className:h,children:[(0,p.jsx)("h1",{children:"Trending Today"}),(0,p.jsx)(f,{})]})}}}]);
//# sourceMappingURL=566.cb08a1ca.chunk.js.map