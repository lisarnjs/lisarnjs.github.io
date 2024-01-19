"use strict";(self.webpackChunklisarnjs_blog=self.webpackChunklisarnjs_blog||[]).push([[451],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(6920),c=n(6799),o=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:h,siteLanguage:b}=s,f={title:t?t+" | "+p:u,description:n||d,url:""+g+(i||""),image:""+g+(c||E)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:b}),r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}},8732:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",br:"br"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"갑자기 플러터를 시작한다고?"),"\n",r.createElement(t.p,null,"적은 인원의 개발팀(프론트엔드 1명, 백엔드 1명에서 프론트엔드가 '나'이다)이 존재하는 스타트업에서",r.createElement(t.br),"\n","웹 개발을 넘어 앱 개발에 도전해보고 싶다고 한다."),"\n",r.createElement(t.p,null,"웹에 집중도가 낮아지다가 나의 필요성이 사라지지 않을까?라는 걱정과",r.createElement(t.br),"\n","flutter는 모바일(ios, android), 웹 등 크로스 플랫폼 개발이 가능하다는 소식을 접하고",r.createElement(t.br),"\n","또 요즘 기반을 잘 다져 성장해 온 flutter가 트렌드처럼 떠오른 것이 합쳐져",r.createElement(t.br),"\n",'"그래 이왕 이렇게 된 거 새로운 기술 하나 더 익혀볼까?"라는 결론을 만들어버렸다.'),"\n",r.createElement(t.p,null,"물론 난 아직 주니어 레벨이기도 하고,",r.createElement(t.br),"\n","난 더 깊고 진하게 FE 공부를 하고 싶고 그 정도 능력치를 갖고 싶기 때문에",r.createElement(t.br),"\n","내가 가던 길은 계속 직진할 것이다."),"\n",r.createElement(t.p,null,"어쩌다보니 두 마리 토끼를 잡는 듯한 그림이여서 불안하기는 했다.",r.createElement(t.br),"\n","하지만 언젠간 마주쳐야 하는 상황이라고 생각하기도 했다."),"\n",r.createElement(t.p,null,"또한, 개발팀 내부에서도 둘이서 최상의 시너지를 낼 수 있는 선택이었다."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(4765);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-start-flutter-index-mdx-dec21216d3d91b9a344a.js.map