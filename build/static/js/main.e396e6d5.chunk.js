(this.webpackJsonptube_app=this.webpackJsonptube_app||[]).push([[0],{40:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i(14),n=i.n(s),a=i(3),r=i(0),d=function(e){var t=e.onTermSubmit,i=Object(c.useState)(""),s=Object(a.a)(i,2),n=s[0],d=s[1];return Object(r.jsx)("div",{className:"search-bar ui segment",children:Object(r.jsx)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(n)},children:Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Video search"}),Object(r.jsx)("input",{type:"text",placeholder:"please enter here",value:n,onChange:function(e){d(e.target.value)}})]})})})},o=i(15),l=i.n(o).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyCsIkFTfE0tfiMOs6efG7Vvekr_YyeYQYE"}}),u=(i(40),function(e){return Object(r.jsxs)("div",{onClick:function(t){e.onVideoSelect(e.video)},className:"item video-item",children:[Object(r.jsx)("img",{alt:e.video.snippet.title,className:"ui image",src:e.video.snippet.thumbnails.medium.url}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{className:"header",children:[" ",e.video.snippet.title," "]})})]})}),j=function(e){var t=e.videos.map((function(t){return Object(r.jsx)(u,{onVideoSelect:e.onVideoSelect,video:t},t.id.videoId)}));return Object(r.jsx)("div",{className:"ui relaxed devided list",children:t})},b=function(e){if(!e.video)return Object(r.jsx)("div",{children:" Loading...."});var t="https://www.youtube.com/embed/".concat(e.video.id.videoId);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"ui embed",children:Object(r.jsx)("iframe",{title:"video player",src:t,allowfullscreen:"true"})}),Object(r.jsxs)("div",{className:"ui segment",children:[Object(r.jsx)("h4",{className:"ui header",children:e.video.snippet.title}),Object(r.jsxs)("p",{children:[" ",e.video.snippet.description]})]})]})},v=i(5),m=i.n(v),p=i(16),h=function(e){var t=Object(c.useState)([]),i=Object(a.a)(t,2),s=i[0],n=i[1];Object(c.useEffect)((function(){r(e)}),[e]);var r=function(){var e=Object(p.a)(m.a.mark((function e(t){var i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("/search",{params:{q:t}});case 2:i=e.sent,console.log(i),n(i.data.items);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[s,r]},O=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),i=t[0],s=t[1],n=h("buildings"),o=Object(a.a)(n,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){s(l[0])}),[l]),Object(r.jsxs)("div",{className:"ui container",children:[Object(r.jsx)(d,{onTermSubmit:u}),"There are ",l.length," videos matching your search result ..",Object(r.jsx)("div",{className:"ui grid",children:Object(r.jsxs)("div",{className:"ui row",children:[Object(r.jsx)("div",{className:"eleven wide column",children:Object(r.jsx)(b,{video:i})}),Object(r.jsx)("div",{className:"five wide column",children:Object(r.jsx)(j,{onVideoSelect:function(e){s(e)},videos:l})})]})})]})};n.a.render(Object(r.jsx)(O,{}),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e396e6d5.chunk.js.map