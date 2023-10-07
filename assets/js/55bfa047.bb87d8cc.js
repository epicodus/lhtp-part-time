"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29064],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7896),n=(a(2784),a(30876));const o={title:"ASP.NET Core MVC Practice",id:"aspnet-core-mvc-practice",slug:"aspnet-core-mvc-practice",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_mvc_practice.md"},i=void 0,l={unversionedId:"c-and-net/basic-web-applications/aspnet-core-mvc-practice",id:"c-and-net/basic-web-applications/aspnet-core-mvc-practice",title:"ASP.NET Core MVC Practice",description:"Goal: Become familiar with setting up an ASP.NET Core MVC application and solve simple problems that use forms and dynamic views.",source:"@site/docs/c-and-net/8_basic-web-applications/1a-classwork-mvc-practice.md",sourceDirName:"c-and-net/8_basic-web-applications",slug:"/c-and-net/basic-web-applications/aspnet-core-mvc-practice",permalink:"/c-and-net/basic-web-applications/aspnet-core-mvc-practice",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"ASP.NET Core MVC Practice",id:"aspnet-core-mvc-practice",slug:"aspnet-core-mvc-practice",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_mvc_practice.md"},sidebar:"c-and-net",previous:{title:"Journal #9",permalink:"/c-and-net/basic-web-applications/journal-9"},next:{title:"Journal #9 Discussion",permalink:"/c-and-net/basic-web-applications/journal-9-discussion"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Friend Letter",id:"friend-letter",level:3},{value:"Mad Libs",id:"mad-libs",level:3},{value:"Past Projects",id:"past-projects",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," Become familiar with setting up an ASP.NET Core MVC application and solve simple problems that use forms and dynamic views."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Discuss the basic parts of a project in MVC.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What are Views?"),(0,n.kt)("li",{parentName:"ul"},"What does the Controller do?"),(0,n.kt)("li",{parentName:"ul"},"How does the model fit in?"))),(0,n.kt)("li",{parentName:"ul"},"What is Razor markup syntax?"),(0,n.kt)("li",{parentName:"ul"},"How do we enable Developer Exception Pages?"),(0,n.kt)("li",{parentName:"ul"},"What are the steps for setting up an ASP.NET Core MVC project?"),(0,n.kt)("li",{parentName:"ul"},"How can we gather form data in an MVC route? What needs to be in place to make this possible?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"friend-letter"},"Friend Letter"),(0,n.kt)("p",null,"Work through the weekend homework to create the Friend Letter application. Make sure to carefully follow how data moves throughout the MVC framework as you do this. Once the base application in the lessons is complete, modify the letter to include variables for different vacation locations and different items to be brought back as souvenirs."),(0,n.kt)("h3",{id:"mad-libs"},"Mad Libs"),(0,n.kt)("p",null,"Create a digital Mad Libs game using ASP.NET Core MVC. Users should be presented with a form with fields for various parts of speech (nouns, adjectives, adverbs, exclamations, and so on). After filling out and submitting that form, they should navigate to a page containing a story that has used their provided words in its text."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Begin small, gathering and using only a few key words.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After completing a short Mad Libs with user-provided words, expand it further. Add new variables to the form and story.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Additionally, try to format the story output in a visually-appealing way.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Further Exploration"),": Consider allowing users to select from multiple Mad Libs themes, stories, or templates before being presented a form. Each different story should require a unique combination of words, and therefore have its own unique form. ",(0,n.kt)("strong",{parentName:"p"},"Hint:")," You can link to a different route by adding the route's path to a standard ",(0,n.kt)("inlineCode",{parentName:"p"},"<a>")," tag. For instance, a ",(0,n.kt)("inlineCode",{parentName:"p"},"Puppy()")," route with the route decorator ",(0,n.kt)("inlineCode",{parentName:"p"},'[Route("/puppy-story")]')," could be accessed from another page with the link ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="/puppy-story">Click here for puppies!</a>'),"."))),(0,n.kt)("h3",{id:"past-projects"},"Past Projects"),(0,n.kt)("p",null,"Choose a few of the console-only projects from the last course section and turn them into applications with fully-functional web interfaces using ASP.NET Core MVC."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can we use the Mad Libs website correctly? Does the code make sense?"),(0,n.kt)("li",{parentName:"ul"},"For applications that are alterations of last section's assignments: do the tests still pass?")))}d.isMDXComponent=!0}}]);