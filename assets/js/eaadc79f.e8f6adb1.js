"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82837],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={title:"webpack and npm Practice",id:"webpack-and-npm-practice",slug:"webpack-and-npm-practice",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1a_classwork_webpack_and_npm_practice.md"},i=void 0,l={unversionedId:"intermediate-javascript/test-driven-development/webpack-and-npm-practice",id:"intermediate-javascript/test-driven-development/webpack-and-npm-practice",title:"webpack and npm Practice",description:"Goal: Practice using npm and webpack to streamline your development process.",source:"@site/docs/intermediate-javascript/5_test-driven-development/1a-classwork-webpack-and-npm-practice.md",sourceDirName:"intermediate-javascript/5_test-driven-development",slug:"/intermediate-javascript/test-driven-development/webpack-and-npm-practice",permalink:"/intermediate-javascript/test-driven-development/webpack-and-npm-practice",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"webpack and npm Practice",id:"webpack-and-npm-practice",slug:"webpack-and-npm-practice",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1a_classwork_webpack_and_npm_practice.md"},sidebar:"intermediate-javascript",previous:{title:"Journal #5",permalink:"/intermediate-javascript/test-driven-development/journal-5"},next:{title:"TDD Review",permalink:"/intermediate-javascript/test-driven-development/tdd-review"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Shape Tracker",id:"shape-tracker",level:3},{value:"Journal",id:"journal",level:3},{value:"Challenging: Memory",id:"challenging-memory",level:3},{value:"Most Challenging: Simon",id:"most-challenging-simon",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),": Practice using npm and webpack to streamline your development process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Separate logic into at least two JS files (business logic and interface logic). Use ",(0,a.kt)("inlineCode",{parentName:"li"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"export")," statements to get them communicating."),(0,a.kt)("li",{parentName:"ul"},"Configure webpack to include all of the functionality covered in the section's weekend homework."),(0,a.kt)("li",{parentName:"ul"},"Configure ESLint to lint your JavaScript files.")),(0,a.kt)("p",null,"We recommend building every webpack environment from scratch today. Then, in the future, you can copy/paste your configuration files and run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm install")," in the root of your project to set it up.."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is npm? Why is it useful for our projects?"),(0,a.kt)("li",{parentName:"ul"},"What is webpack and what is it used for?"),(0,a.kt)("li",{parentName:"ul"},"What is the difference between concatenation and minification?"),(0,a.kt)("li",{parentName:"ul"},"What is linting? Why is it useful in development?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You are not expected to complete all of the project prompts on this page. Start by following along with the weekend homework. Then proceed to the journal project. If you have additional time, pick either Memory or Simon."),(0,a.kt)("p",null,"Feel free to expand on these problems to challenge yourself if you want, but only after your environment is fully set up."),(0,a.kt)("h3",{id:"shape-tracker"},"Shape Tracker"),(0,a.kt)("p",null,"Follow along with the homework to set up a basic environment. Make sure to start by creating your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file! Also, don't build out any business logic. In upcoming homework, we'll use test-driven development to write Shape Tracker's business logic. Just focus on getting familiar with the new tools we are using."),(0,a.kt)("h3",{id:"journal"},"Journal"),(0,a.kt)("p",null,"Create a journaling website where a user can write entries including at least a title and body. Create ",(0,a.kt)("inlineCode",{parentName:"p"},"Entry")," objects that include a method to return the number of words in the entry. Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. Finally, add a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"getTeaser")," to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words."),(0,a.kt)("h3",{id:"challenging-memory"},"Challenging: Memory"),(0,a.kt)("p",null,"It's fine if you just work on Shape Tracker and Journal today, but if you are looking for more of a challenge, create a game based on the card game Memory."),(0,a.kt)("p",null,"You'll need to generate a grid of cards. Each card can have a word or number on it, and there should be two of each card. If you have a deck of ten cards there should be five different pairs of cards."),(0,a.kt)("p",null,"All cards should start face down. Each time the user takes a turn, they click on two cards. When a card is clicked, the pictures should be revealed. If the user gets a pair of cards with the same picture, the cards remain face-up.  If the user's selected cards are different, they should return to face down. When all the cards are face up, the user has won. The object of the game is to find all the pairs in as few turns as possible."),(0,a.kt)("p",null,"If you'd like to try this prompt with images instead of numbers or words, you will need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"image-loader"),", which we haven't covered yet. See the lesson on ",(0,a.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/managing-images-with-webpack"},"Managing Images with webpack")," for more information."),(0,a.kt)("h3",{id:"most-challenging-simon"},"Most Challenging: Simon"),(0,a.kt)("p",null,"This prompt takes the challenge level up another notch. Create a version of the game ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4YhVyt4q5HI"},"Simon"),". In Simon, the game generates a sequence of colored lights for you to mirror. It starts out simple; first only one color, then if you get that right then you have to remember 2 colors. The sequence does not change every time, it just gets longer and longer."),(0,a.kt)("p",null,"For example, here is a sequence of turns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'["red"]\n["red", "blue"]\n["red", "blue", "yellow"]\n["red", "blue", "yellow", "red"]\n["red", "blue", "yellow", "red", "red"]\n["red", "blue", "yellow", "red", "red", "yellow"]\n...\n')),(0,a.kt)("p",null,"This is just an example. You do not have to use the above format to generate sequences, "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint:")," Since this game involves timed events (we have to time how fast it takes for the sequence to play on each turn) you may wish to investigate ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/setInterval"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"window.setInterval()")," method"),".  "),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependencies are managed with npm."),(0,a.kt)("li",{parentName:"ul"},"webpack is used to lint, bundle, and process code."),(0,a.kt)("li",{parentName:"ul"},"User interface and business logics are separated into different files.")))}u.isMDXComponent=!0}}]);