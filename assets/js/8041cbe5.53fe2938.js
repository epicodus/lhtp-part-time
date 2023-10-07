"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29508],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7896),n=(a(2784),a(30876));const i={title:"React with API (Multi-Week Project) (day 2)",id:"react-with-api-multi-week-project-day-2",slug:"react-with-api-multi-week-project-day-2",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1a_classwork_react_with_api_three_day_project.md"},o=void 0,l={unversionedId:"react/react-with-apis/react-with-api-multi-week-project-day-2",id:"react/react-with-apis/react-with-api-multi-week-project-day-2",title:"React with API (Multi-Week Project) (day 2)",description:"Goals: Build a React application that makes API calls. Follow along with the weekend lessons to make an API call with the useReducer() hook, and then a light/dark theme with context. Then spend the remaining class sessions building out an API project with your pair or group. This project will combine a React front end with an API from your back end language class.",source:"@site/docs/react/10_react-with-apis/1a-classwork-react-with-api-three-day-project-day-2.md",sourceDirName:"react/10_react-with-apis",slug:"/react/react-with-apis/react-with-api-multi-week-project-day-2",permalink:"/react/react-with-apis/react-with-api-multi-week-project-day-2",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"React with API (Multi-Week Project) (day 2)",id:"react-with-api-multi-week-project-day-2",slug:"react-with-api-multi-week-project-day-2",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1a_classwork_react_with_api_three_day_project.md"},sidebar:"react",previous:{title:"Prior Course Section Survey",permalink:"/react/react-with-apis/prior-course-section-survey"},next:{title:"React with API (Multi-Week Project) (day 3)",permalink:"/react/react-with-apis/react-with-api-multi-week-project-day-3"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"React with API Calls and Context",id:"react-with-api-calls-and-context",level:3},{value:"Full Stack Project",id:"full-stack-project",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goals:")," Build a React application that makes API calls. Follow along with the weekend lessons to make an API call with the ",(0,n.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, and then a light/dark theme with context. Then spend the remaining class sessions building out an API project with your pair or group. This project will combine a React front end with an API from your back end language class."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At what point in a React component's lifecycle might we make an API call and why?"),(0,n.kt)("li",{parentName:"ul"},"When should we prefer to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook versus the ",(0,n.kt)("inlineCode",{parentName:"li"},"useState()")," hook for state management?"),(0,n.kt)("li",{parentName:"ul"},"Is context a state management tool? Explain why or why not."),(0,n.kt)("li",{parentName:"ul"},"Name some use cases for context."),(0,n.kt)("li",{parentName:"ul"},"Name alternatives to using context.")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"react-with-api-calls-and-context"},"React with API Calls and Context"),(0,n.kt)("p",null,"Work through the weekend homework to make a React application that makes an API call to the NY Times API. Then implement a light/dark mode in the Help Queue with the use of context."),(0,n.kt)("h3",{id:"full-stack-project"},"Full Stack Project"),(0,n.kt)("p",null,"Spend the next three class sessions building a React application around an API built during your back end language class. You may create any type of application as long as it uses the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React"),(0,n.kt)("li",{parentName:"ul"},"React hooks to manage state"),(0,n.kt)("li",{parentName:"ul"},"The Fetch API ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If you wish, you may also try React Native, which is designed for mobile development. See the upcoming homework if you are interested."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Back end API works correctly."),(0,n.kt)("li",{parentName:"ul"},"Application parses API response and displays response data in the UI."),(0,n.kt)("li",{parentName:"ul"},"State is managed with hooks."),(0,n.kt)("li",{parentName:"ul"},"Front and back end have their own repositories and detailed READMEs with local deployment instructions and links to other repos related to the project.")))}d.isMDXComponent=!0}}]);