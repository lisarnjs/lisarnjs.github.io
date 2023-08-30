"use strict";(self.webpackChunklisarnjs_blog=self.webpackChunklisarnjs_blog||[]).push([[24],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(6920),c=n(6799),o=n(8871);var u=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(u,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(s,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:u=""}=e;const m=(0,l.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:f,author:h,siteLanguage:E}=m,v={title:t?t+" | "+s:p,description:n||d,url:""+g+(i||""),image:""+g+(c||f)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:E}),r.createElement("title",null,v.title),r.createElement("meta",{name:"description",content:v.description}),r.createElement("meta",{name:"image",content:v.image}),r.createElement("meta",{property:"og:title",content:v.title}),r.createElement("meta",{property:"og:url",content:v.url}),r.createElement("meta",{property:"og:description",content:v.description}),r.createElement("meta",{property:"og:image",content:v.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:v.title}),r.createElement("meta",{name:"twitter:url",content:v.url}),r.createElement("meta",{name:"twitter:description",content:v.description}),r.createElement("meta",{name:"twitter:image",content:v.image}),r.createElement("meta",{name:"twitter:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),u?r.createElement("link",{rel:"canonical",href:u}):null,o)}},3830:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"문제 설명"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://leetcode.com/problems/contains-duplicate/"},"문제 보러가기")),"\n",r.createElement(t.p,null,"배열 안에 중복된 요소가 있는지 검사하는 문제이다."),"\n",r.createElement(t.p,null,"배열에서 중복된 요소가 있으면 true를, 없다면 false를 return하면 된다."),"\n",r.createElement(t.h2,null,"Example"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"Input: nums = [1,2,3,1]\nOutput: true\n\nInput: nums = [1,2,3,4]\nOutput: false\n\nInput: nums = [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n\n")),"\n",r.createElement(t.h2,null,"풀이"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"\n// * @param {number[]} nums\n// * @return {boolean}\n\n\n// 내 풀이 1\nvar containsDuplicate = function(nums) {\n    let count = 0\n    for(let i = 0; i < nums.length ; i++){\n        for(let j = i+1; j < nums.length; j++ ){\n            if(nums[i] === nums[j]) {\n                count++\n                return count >= 1 //중복 발견하면 바로 return\n            }\n        }\n    }\n\n    return false //중복 없으면 for문 다 돌기 때문에 return false\n};\n\n// 내 풀이 2\nvar containsDuplicate = function(nums) {\n    let hash = {} //해시테이블 설정\n\n    for (let num of nums) {\n        if(hash[num]) return true //해시테이블에 이미 있으면 바로 return\n        hash[num] = true //없으면 해시테이블에 저장\n\n    }\n\n    return false\n};\n\n// 다른 풀이 1\nvar containsDuplicate = function(nums) {\n    // set(nums) 는 nums 배열에서 중복값을 제외한 객체를 생성한다. 즉, 알아서 중복값을 빼준다.\n    const s = new Set(nums)\n\t\t//중복이 있었다면 중복 숫자는 삭제되어 배열의 길이가 달라짐\n\t\treturn s.size !== nums.length\n};\n\n// 다른 풀이 2\nvar containsDuplicate = function(nums) {\n    nums.sort((a,b) => a-b); //숫자를 오름차순으로 정렬!!\n\n    for(let i = 0; i <= nums.length-1; i++){\n        if(nums[i] === nums[i+1]){\n            return true //중복이 있다면 오름차순 정렬을 했기 때문에 같이 붙어있을거임\n        }\n    }\n    return false\n};\n\n// 다른 풀이 3\nvar containsDuplicate = function(nums) {\n    let set = new Set() // {} 빈 객체 만들기\n\n    for (let num of nums) {\n\t\t\t\tconsole.log(set) - A\n        if (set.has(num)) return true //객체에 num이 포함되있으면 true\n        set.add(num) //객체에 num이 없으면 객체에 추가\n    }\n    return false\n\n\t\tex) nums = [1,2,3,1]\n\t\t\t\t// console.log(set) - A output\n\t\t\t\tSet(0) {}\n\t\t\t\tSet(1) { 1 }\n\t\t\t\tSet(2) { 1, 2 }\n\t\t\t\tSet(3) { 1, 2, 3 }\n};\n\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(4765);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-contains-duplicate-index-mdx-d42361d23c13ed12ee39.js.map