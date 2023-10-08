"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60219],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const i={title:"TDD Review",id:"tdd-review",slug:"tdd-review",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1b_tdd_review.md"},o=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-review",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-review",title:"TDD Review",description:"We learned about the basics of Test-Driven Development in Introduction to Programming. So far, we have used the basic principles of TDD to help organize and plan our code \u2014 but we aren't actually executing any tests yet. Well, we're about to start doing that!",source:"@site/docs/intermediate-javascript/5_test-driven-development-and-environments-with-javascript/1b-tdd-review.md",sourceDirName:"intermediate-javascript/5_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-review",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-review",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"TDD Review",id:"tdd-review",slug:"tdd-review",hide_table_of_contents:!0,sidebar_position:25,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1b_tdd_review.md"},sidebar:"intermediate-javascript",previous:{title:"webpack and npm Practice",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/webpack-and-npm-practice"},next:{title:"Red Green Refactor Workflow",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/red-green-refactor-workflow"}},l={},d=[{value:"The Benefits of Test-Driven Development",id:"the-benefits-of-test-driven-development",level:2},{value:"TDD Helps Us Create a Plan",id:"tdd-helps-us-create-a-plan",level:3},{value:"It&#39;s Easier to Tackle Complex Problems",id:"its-easier-to-tackle-complex-problems",level:3},{value:"It Prevents Errors and Makes Bugs Easier to Locate",id:"it-prevents-errors-and-makes-bugs-easier-to-locate",level:3},{value:"It Allows Us to Create Projects Faster",id:"it-allows-us-to-create-projects-faster",level:3},{value:"New Features Are Built Upon Reliable Code",id:"new-features-are-built-upon-reliable-code",level:3},{value:"It Keeps Code DRY",id:"it-keeps-code-dry",level:3},{value:"It&#39;s Employable",id:"its-employable",level:3},{value:"Writing Coded Tests",id:"writing-coded-tests",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We learned about the basics of ",(0,a.kt)("a",{parentName:"p",href:"/introduction-to-programming/arrays-and-looping/overview-of-test-driven-development-tdd-with-text-analyzer"},"Test-Driven Development")," in Introduction to Programming. So far, we have used the basic principles of TDD to help organize and plan our code \u2014 but we aren't actually executing any tests yet. Well, we're about to start doing that!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"At this point, you will no longer need to add pseudocode tests in your READMEs.")," That was practice for writing actual tests which we can run with software, and that's exactly what we're about to start doing with Jest!"),(0,a.kt)("h2",{id:"the-benefits-of-test-driven-development"},"The Benefits of Test-Driven Development"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before we move on to learning more about the testing workflow and using Jest, let's look at all the advantages of TDD and why it's so helpful to the development process."),(0,a.kt)("h3",{id:"tdd-helps-us-create-a-plan"},"TDD Helps Us Create a Plan"),(0,a.kt)("p",null,"By taking time to think through a program, identify behaviors, and tackle the simplest first, we're creating a game plan. We are laying out each step we need to take in detail, which leads to the next benefit."),(0,a.kt)("h3",{id:"its-easier-to-tackle-complex-problems"},"It's Easier to Tackle Complex Problems"),(0,a.kt)("p",null,"Even the most experienced coders can struggle with approaching complex issues. By identifying and testing the smallest possible behavior at a time, we can take baby steps towards solving bigger problems."),(0,a.kt)("h3",{id:"it-prevents-errors-and-makes-bugs-easier-to-locate"},"It Prevents Errors and Makes Bugs Easier to Locate"),(0,a.kt)("p",null,"When we implement and test a single behavior at a time, we're preventing errors. Testing each behavior before moving on allows us to spot bugs as soon as they're introduced."),(0,a.kt)("p",null,"Without TDD, we might not spot some of these bugs until they break our application. To make matters worse, if we add more code after introducing a bug, other parts of our application will likely be reliant on our buggy code. To resolve this issue, we'd need to locate the bug, resolve it, and potentially alter all the code that depends on the buggy code. That's a lot of work."),(0,a.kt)("h3",{id:"it-allows-us-to-create-projects-faster"},"It Allows Us to Create Projects Faster"),(0,a.kt)("p",null,"Starting a complex project can be daunting. Even if we aren't sure how to code the more difficult features of our application, we can hit the ground running by implementing smaller, identifiable functionality. As we work, the bigger picture will come into focus."),(0,a.kt)("h3",{id:"new-features-are-built-upon-reliable-code"},"New Features Are Built Upon Reliable Code"),(0,a.kt)("p",null,"By testing functionality as it's implemented and ensuring previous tests still pass when new functionality is introduced, new features are always built on a foundation of reliable, tested code."),(0,a.kt)("h3",{id:"it-keeps-code-dry"},"It Keeps Code DRY"),(0,a.kt)("p",null,"By implementing the least amount of code to pass each test, we keep our code DRY. By approaching each piece of our project's functionality individually, we are likely to write more modular code. Modular code is easier to maintain, update, and debug."),(0,a.kt)("h3",{id:"its-employable"},"It's Employable"),(0,a.kt)("p",null,"Testing is an important part of the tech industry and many tech careers rely on it \u2014 ranging from developers and QA testers to devops specialists and site reliability engineers."),(0,a.kt)("h2",{id:"writing-coded-tests"},"Writing Coded Tests"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Up to this point, we've written pseudocode tests and then manually checked to see if our code works. This is a time-consuming and unrealistic way to test our code \u2014 and it's not what professionals do. "),(0,a.kt)("p",null,"Now we're ready to level up our TDD skills by writing automated tests for each behavior. While writing coded tests may take longer at first, we'll be able to test all of our program's behaviors with a single command."))}u.isMDXComponent=!0}}]);