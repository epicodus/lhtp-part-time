"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92953],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7896),n=(a(2784),a(30876));const o={title:"\u270f\ufe0f Farmers Market (Two-day Project) (day 2)",id:"farmers-market-two-day-project-day-2",slug:"farmers-market-two-day-project-day-2",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_css_practice_farmers_markets.md"},i=void 0,l={unversionedId:"react/react-fundamentals/farmers-market-two-day-project-day-2",id:"react/react-fundamentals/farmers-market-two-day-project-day-2",title:"\u270f\ufe0f Farmers Market (Two-day Project) (day 2)",description:"Goal: Practice adding local state to your application. For these projects, it is enough to add local state that allows users to toggle between components. However, you may wish to experiment with local state in other ways as well.",source:"@site/docs/react/4_react-fundamentals/2a-classwork-css-practice-farmers-markets-day-2.md",sourceDirName:"react/4_react-fundamentals",slug:"/react/react-fundamentals/farmers-market-two-day-project-day-2",permalink:"/react/react-fundamentals/farmers-market-two-day-project-day-2",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"\u270f\ufe0f Farmers Market (Two-day Project) (day 2)",id:"farmers-market-two-day-project-day-2",slug:"farmers-market-two-day-project-day-2",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_css_practice_farmers_markets.md"},sidebar:"react",previous:{title:"\u270f\ufe0f Farmers Market (Two-day Project)",permalink:"/react/react-fundamentals/farmers-market-two-day-project"},next:{title:"\u270f\ufe0f Technical Interview Preparation: React Fundamentals",permalink:"/react/react-fundamentals/technical-interview-preparation-react-fundamentals"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Adding Local State to Help Queue",id:"adding-local-state-to-help-queue",level:3},{value:"Farmer&#39;s Market Circuit",id:"farmers-market-circuit",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," Practice adding local state to your application. For these projects, it is enough to add local state that allows users to toggle between components. However, you may wish to experiment with local state in other ways as well."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is the difference between local state and shared state?"),(0,n.kt)("li",{parentName:"ul"},"What is conditional rendering and how is it useful in React?"),(0,n.kt)("li",{parentName:"ul"},"Why do we need to bind functions in React? What's the alternative to explicitly binding them?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"adding-local-state-to-help-queue"},"Adding Local State to Help Queue"),(0,n.kt)("p",null,"Work along with the homework to add local state to your Help Queue application."),(0,n.kt)("p",null,"Next, use conditional rendering to allow users to see the following three pages in sequence before reaching the ticket form:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Have you gone through all the steps on the Learn How to Program debugging lesson?"'),(0,n.kt)("li",{parentName:"ul"},'"Have you asked another pair for help?"'),(0,n.kt)("li",{parentName:"ul"},'"Have you spent 15 minutes going through the problem documenting every step?"')),(0,n.kt)("h3",{id:"farmers-market-circuit"},"Farmer's Market Circuit"),(0,n.kt)("p",null,"Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce and sells it at farmers markets throughout town. Since Avery's is at a different market almost every day, they've started a website to show customers which market they will be at on a given day."),(0,n.kt)("p",null,"Avery's also grows different crops in different seasons. They'd like to display what produce is available during which months on their site too."),(0,n.kt)("p",null,"Using React and all other tools we've covered so far, create a website that depicts this information. ",(0,n.kt)("strong",{parentName:"p"},"The data you'll use is in the ",(0,n.kt)("em",{parentName:"strong"},"Cheat Sheet")," section of this lesson.")," Also, take time to construct your entire environment from scratch. It's important to practice these fundamentals before we increase the complexity of our projects later in this course section!"),(0,n.kt)("p",null,"Try using local state to toggle between different days. Note that we can use conditional rendering for as many conditions as we want \u2014 including all seven days of the week!"),(0,n.kt)("p",null,"Once again, make sure to plan your application first and include a component diagram in your README."),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Components are used to create modular UI elements."),(0,n.kt)("li",{parentName:"ul"},"propTypes define data types for all component props."),(0,n.kt)("li",{parentName:"ul"},"Local state has been implemented and works correctly."),(0,n.kt)("li",{parentName:"ul"},"Application is well planned and includes a component diagram."),(0,n.kt)("li",{parentName:"ul"},"Application works as expected.")))}p.isMDXComponent=!0}}]);