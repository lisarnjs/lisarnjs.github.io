"use strict";(self.webpackChunklisarnjs_blog=self.webpackChunklisarnjs_blog||[]).push([[633],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return y}});var a=n(7294),r=n(8733),l=n(795),i=n(6920),m=n(6799),s=n(8871);var o=e=>{let{post:t}=e;return null};const c=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(m.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:c.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(o,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(s.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function y(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),m=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,m.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:m="",children:s=null,canonicalUrl:o=""}=e;const c=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:y,siteDescription:d,siteImage:g,author:h,siteLanguage:E}=c,v={title:t?t+" | "+p:u,description:n||d,url:""+y+(i||""),image:""+y+(m||g)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,v.title),a.createElement("meta",{name:"description",content:v.description}),a.createElement("meta",{name:"image",content:v.image}),a.createElement("meta",{property:"og:title",content:v.title}),a.createElement("meta",{property:"og:url",content:v.url}),a.createElement("meta",{property:"og:description",content:v.description}),a.createElement("meta",{property:"og:image",content:v.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:v.title}),a.createElement("meta",{name:"twitter:url",content:v.url}),a.createElement("meta",{name:"twitter:description",content:v.description}),a.createElement("meta",{name:"twitter:image",content:v.image}),a.createElement("meta",{name:"twitter:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,s)}},4796:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m.F},default:function(){return s}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"class"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-Dart",title:"example"},"// class안에서 변수를 정의할 때는 타입을 꼭 지정해줘야함(var 사용nono)\nclass Player {\n\tString name = 'lisa';\n\t// 만약 name을 변경하지 못하게 하고 싶다면? 아래처럼!!\n\tfinal String name = 'lisa';\n\n\tint xp = 1500;\n\n\tvoid sayHello(){\n\t\t// this.name = lisa 로 this를 사용해도 정상적으로 작동하지만 권장되지 않음\n\t\tprint('Hi my name is $name');\n\t}\n\n\t// 어쩔 수 없이 this를 사용해야 할 경우\n\t// class의 method안에 같은 이름의 변수명을 사용해야 할 때\n\tvoid sayHello(){\n\t\tvar name = 'nico';\n\t\t// Hi my name is nico, player name is lisa\n\t\tprint('Hi my name is $name, player name is ${this.name}');\n\t}\n}\n\nvoid main() {\n\tvar player = Player();\n\tprint(player.name); //lisa\n\tplayer.name = 'lala';\n\tprint(player.name); //lala\n\n\tplayer.sayHello(); //Hi my name is lisa\n}\n")),"\n",a.createElement(t.h2,null,"constructors"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-Dart",title:"example"},"class Player {\n\t// 바로 집어넣을거기 때문에 late는 필요없다\n\tfinal String name;\n\tint xp;\n\n\t// 어차피 클래스에서 이미 타입을 지정해줬기 때문에 위 변수에 바로 집어넣어준다\n\tPlayer(this.name, this.xp);\n\n\tvoid sayHello() {\n\t\tprint('Hi my name is $name');\n\t}\n}\nvoid main() {\n\tvar player = Player('lisa', 1500);\n\tplayer.sayHello(); // Hi my name is lisa\n\n\tvar player2 = Player('mandoo', 2000);\n\tplayer2.sayHello(); // Hi my name is mandoo\n}\n")),"\n",a.createElement(t.h2,null,"named constructor parameters"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-Dart",title:"example"},"class Player {\n\tfinal String name;\n\tint xp;\n\tString team;\n\tint age;\n\n\t// {}로 감싸줌으로써 함수 인자의 순서는 중요X but 인자의 이름을 명시해줘야함\n\t// 하지만 각 인자가 null일 경우를 대비해야함 -> 아마 에러를 표출할 것이다. (dart = null safety이기 때문)\n\t// 해결방법 : 옵션에 기본값 주기 or required지정해주기\n\tPlayer({required this.name, required this.xp, required this.team, required this.age});\n\n\tvoid sayHello() {\n\t\tprint('Hi my name is $name');\n\t}\n}\nvoid main() {\n\t// named constructor parameters 사용X\n\t// 얘는 순서를 지켜야하고, 인자가 무슨 역할을 하는지 기억하고 있어야해서 불편함\n\tvar player = Player('nico', 1500, 'red', 12);\n\n\t// named constructor parameters 사용O\n\t// 얘는 이름을 명시함으로써 순서 지킬 필요 없고, 무슨 인자가 빠졌는지도 컴파일단계에서 알려줌\n\t// flutter 에서는 이 방법을 선호하여 사용함\n\tvar player = Player(\n\t\tname: 'lisa',\n\t\txp: 1500,\n\t\tteam: 'red',\n\t\tage: 12\n\t)\n\tplayer.sayHello(); //Hi my name is lisa\n}\n")),"\n",a.createElement(t.h2,null,"named constructors"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-Dart",title:"example"},"class Player {\n\tfinal String name;\n\tint xp;\n\tString team;\n\tint age;\n\n\tPlayer({required this.name, required this.xp, required this.team, required this.age});\n\n\t// 초기화 시켜주는 method\n\t// :(콜론)이 제일 중요함!! -> : = Player객체를 초기화하겠다는 뜻\n\tPlayer.createBluePlayer({\n\t\trequired String name,\n\t\trequired int age\n\t}) : this.age = age, // 이 class의 age, name은 받아온 값으로 할당시켜줌\n\t\t\t this.name = name,\n\t\t\t this.team = 'blue', // 나머지 team, xp를 'blue',0으로 초기화시켜줌\n\t\t\t this.xp = 0;\n\n\tPlayer.createBluePlayer(String name,int age) //당연히 positional형식으로도 가능함\n\t: this.age = age, //이 class의 age, name은 받아온 값으로 할당시켜줌\n\t  this.name = name,\n\t  this.team = 'blue', //나머지 team, xp를 'blue',0으로 초기화시켜줌\n\t  this.xp = 0;\n\n\tvoid sayHello() {\n\t\tprint('Hi my name is $name');\n\t}\n}\nvoid main() {\n\tvar bluePlayer = Player.createBluePlayer( // named 형식\n\t\tname: 'blueNico',\n\t\tage: 12\n\t)\n\tvar redPlayer = Player.createRedPlayer('redNico',12) // positional 형식\n}\n")),"\n",a.createElement(t.h2,null,"recap"),"\n",a.createElement(t.p,null,"✅ API로부터 여러 Player가 들어있는 목록을 받는다고 가정해보자!"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-Dart",title:"example"},"class Player {\n\tfinal String name;\n\tint xp;\n\tString team;\n\n\t// Player class의 생성 + 초기화 작업을 하는 method\n\tPlayer.fromJson(Map<String, dynamic> playerJson)\n\t\t: name = playerJson['name'],\n\t\t\txp = playerJson['xp'],\n\t\t\tteam = playerJson['team'];\n\n\tvoid sayHello() {\n\t\tprint('Hi my name is $name');\n\t}\n}\n\nvoid main() {\n\tvar apiData = [\n\t\t{\n\t\t\t'name' : 'nico',\n\t\t\t'team': 'red',\n\t\t\t'xp': 0,\n\t\t},\n\t\t{\n\t\t\t'name' : 'lynn',\n\t\t\t'team': 'red',\n\t\t\t'xp': 0,\n\t\t},\n\t\t{\n\t\t\t'name' : 'dal',\n\t\t\t'team': 'red',\n\t\t\t'xp': 0,\n\t\t},\n\t]\n\n\tapiData.forEach((playerJson) {\n\t\tvar player = Player.fromJson(playerJson);\n\t\tplayer.sayHello();\n\t})\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},m=n(4765);function s(e){return a.createElement(m.Z,e,a.createElement(i,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-dart-class-part-1-index-mdx-ce2bb2d3727849e169c6.js.map