"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44588],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={title:"Practice: String and Number Methods",id:"practice-string-and-number-methods",slug:"practice-string-and-number-methods",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0o_classwork_practice_string_and_number_methods.md"},o=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/practice-string-and-number-methods",id:"introduction-to-programming/javascript-and-web-browsers/practice-string-and-number-methods",title:"Practice: String and Number Methods",description:"Goal",source:"@site/docs/introduction-to-programming/3_javascript-and-web-browsers/0o-classwork-practice-string-and-number-methods.md",sourceDirName:"introduction-to-programming/3_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/practice-string-and-number-methods",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-string-and-number-methods",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Practice: String and Number Methods",id:"practice-string-and-number-methods",slug:"practice-string-and-number-methods",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0o_classwork_practice_string_and_number_methods.md"},sidebar:"introduction-to-programming",previous:{title:"String and Number Methods",permalink:"/introduction-to-programming/javascript-and-web-browsers/string-and-number-methods"},next:{title:"Journal #2 Discussion",permalink:"/introduction-to-programming/javascript-and-web-browsers/journal-2-discussion"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"String Methods Practice",id:"string-methods-practice",level:3},{value:"Number Methods Practice",id:"number-methods-practice",level:3}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),": In the string and number methods lesson, we learned:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methods are a type of function. Not all functions are methods."),(0,a.kt)("li",{parentName:"ul"},"Methods always belong to a specific data type."),(0,a.kt)("li",{parentName:"ul"},"We call methods on a receiver."),(0,a.kt)("li",{parentName:"ul"},"There are built-in JavaScript methods for strings and numbers"),(0,a.kt)("li",{parentName:"ul"},"Methods can be chained"),(0,a.kt)("li",{parentName:"ul"},"You can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," operator on strings in place of the ",(0,a.kt)("inlineCode",{parentName:"li"},"concat")," method"),(0,a.kt)("li",{parentName:"ul"},"You can call methods on variables that represent strings or numbers")),(0,a.kt)("p",null,"Now that we've covered methods, strings, and numbers independently, practice common methods meant specifically for strings and numbers by completing the exercises listed below."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is a receiver for a method? "),(0,a.kt)("li",{parentName:"ul"},"What is the difference between a function and a method?"),(0,a.kt)("li",{parentName:"ul"},"What is a return value? What does it represent?"),(0,a.kt)("li",{parentName:"ul"},"What is an argument? How do you provide one to a method in JavaScript?"),(0,a.kt)("li",{parentName:"ul"},"What does 'chaining' methods mean? What does that look like?"),(0,a.kt)("li",{parentName:"ul"},"Name one string method."),(0,a.kt)("li",{parentName:"ul"},"Name one number method."),(0,a.kt)("li",{parentName:"ul"},"Name two ways to combine multiple strings together.")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Complete both of the prompts below."),(0,a.kt)("h3",{id:"string-methods-practice"},"String Methods Practice"),(0,a.kt)("p",null,"Practice calling methods on strings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Concatenate the following strings together:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"hi"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"there"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"hey"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"there"'),", and ",(0,a.kt)("inlineCode",{parentName:"li"},'"friend!')))),(0,a.kt)("li",{parentName:"ul"},"Uppercase the following string: ",(0,a.kt)("inlineCode",{parentName:"li"},'"hey there friend!"')),(0,a.kt)("li",{parentName:"ul"},"Uppercase just the ",(0,a.kt)("inlineCode",{parentName:"li"},'"hey"')," and then concatenate it to ",(0,a.kt)("inlineCode",{parentName:"li"},'"there"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"friend!"'))),(0,a.kt)("h3",{id:"number-methods-practice"},"Number Methods Practice"),(0,a.kt)("p",null,"Practice calling methods on numbers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set a variable equal to a number."),(0,a.kt)("li",{parentName:"ul"},"Call a method on that variable that turns the number into a string."),(0,a.kt)("li",{parentName:"ul"},"Set a new variable equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"3.14159265359"),"."),(0,a.kt)("li",{parentName:"ul"},"Call a method on the new variable that limits the number of decimals to ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," so that the result is ",(0,a.kt)("inlineCode",{parentName:"li"},"3.141"),".")))}d.isMDXComponent=!0}}]);