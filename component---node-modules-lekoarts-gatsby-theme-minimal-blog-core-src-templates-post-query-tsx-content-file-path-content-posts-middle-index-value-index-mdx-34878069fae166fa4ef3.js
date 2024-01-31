"use strict";(self.webpackChunklisarnjs_blog=self.webpackChunklisarnjs_blog||[]).push([[797],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),o=n(6920),i=n(6799),c=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(o.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),o=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,o.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:o="",image:i="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:h,siteLanguage:y}=s,f={title:t?t+" | "+p:u,description:n||d,url:""+g+(o||""),image:""+g+(i||E)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:y}),r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}},4228:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return c}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",a:"a",br:"br",strong:"strong",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"문제 설명"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://school.programmers.co.kr/learn/courses/30/lessons/120811"},"문제 보러가기")),"\n",r.createElement(t.p,null,"중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.",r.createElement(t.br),"\n","예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.",r.createElement(t.br),"\n","정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.\n단, array의 길이는 ",r.createElement(t.strong,null,"홀수"),"입니다."),"\n",r.createElement(t.h2,null,"Example"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"array = [1, 2, 7, 10, 11]\n> 7\n\narray = [9, -1, 0]\n> 0\n")),"\n",r.createElement(t.h2,null,"풀이"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"function solution(array) {\n  const sortArr = array.sort((a, b) => a - b);\n  const middleIndex = Math.floor(array.length / 2);\n\n  return sortArr[middleIndex];\n}\n")),"\n",r.createElement(t.p,null,"배열이 홀수의 길이로 내려오기 때문에\n배열의 길이를 2로 나누면 x.5 의 값들이 나온다.\n배열은 0부터 시작하기 때문에 .5를 내리면 중앙값이 나온다!"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"sortArray = [1, 2, 7, 10, 11]\nsortArray.length = 5\n5 / 2 = 2.5 => Math.floor(2.5) => 2\nsortArray[2] = 7\n> 7\n\nsortArray = [-1, 0, 9]\nsortArray.length = 3\n3 / 2 = 1.5 => Math.floor(1.5) => 1\nsortArray[1] = 0\n> 0\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(4765);function c(e){return r.createElement(i.Z,e,r.createElement(o,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-middle-index-value-index-mdx-34878069fae166fa4ef3.js.map