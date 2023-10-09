"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[30106],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const o={title:"\ud83d\udcd3 Comparing and Cloning Arrays",id:"comparing-and-cloning-arrays",slug:"comparing-and-cloning-arrays",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0h_comparing_and_cloning_arrays.md"},i=void 0,s={unversionedId:"introduction-to-programming/arrays-and-looping/comparing-and-cloning-arrays",id:"introduction-to-programming/arrays-and-looping/comparing-and-cloning-arrays",title:"\ud83d\udcd3 Comparing and Cloning Arrays",description:'Unlike other data types we\'ve seen so far, we can\'t compare two arrays by using the === comparison operator. In JavaScript, two primitive data type values can be equal. For example, "abc" is the same as any other "abc". But arrays are different \u2014 no two arrays are the same, even if they have the exact same elements inside.',source:"@site/docs/introduction-to-programming/5_arrays-and-looping/0h-comparing-and-cloning-arrays.md",sourceDirName:"introduction-to-programming/5_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/comparing-and-cloning-arrays",permalink:"/introduction-to-programming/arrays-and-looping/comparing-and-cloning-arrays",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\ud83d\udcd3 Comparing and Cloning Arrays",id:"comparing-and-cloning-arrays",slug:"comparing-and-cloning-arrays",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0h_comparing_and_cloning_arrays.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Array Methods",permalink:"/introduction-to-programming/arrays-and-looping/array-methods"},next:{title:"\ud83d\udcd3 Debugging in JavaScript: Using a linter",permalink:"/introduction-to-programming/arrays-and-looping/debugging-in-javascript-using-a-linter"}},l={},p=[{value:"Comparing Arrays",id:"comparing-arrays",level:2},{value:"Cloning Arrays",id:"cloning-arrays",level:2},{value:"Additional Resources",id:"additional-resources",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unlike other data types we've seen so far, we can't compare two arrays by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"==="),' comparison operator. In JavaScript, two primitive data type values can be equal. For example, "abc" is the same as any other "abc". But arrays are different \u2014 ',(0,r.kt)("strong",{parentName:"p"},"no two arrays are the same, even if they have the exact same elements inside"),"."),(0,r.kt)("h2",{id:"comparing-arrays"},"Comparing Arrays"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you need to compare the ",(0,r.kt)("em",{parentName:"p"},"contents")," of two arrays, one way to accomplish this is to transform the arrays into strings using the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," method on each and comparing the return values. Be careful, though, because there are edge cases where this doesn't work correctly. An ",(0,r.kt)("strong",{parentName:"p"},"edge case")," in computer programming is a possible outcome of an operation that leads to unexpected or inconsistent results. Let's take a look at an example where we can effectively compare two arrays \u2014 and then let's tweak one of the arrays to make it a gotcha:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const a = [1,2,3];\n> const b = [1,2,3];\n> a === b;\nfalse\n> a.toString();\n"1,2,3"\n> a.toString() === b.toString();\ntrue\n')),(0,r.kt)("p",null,"Great! This works. But what if one of the arrays includes strings?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const c = [1,2,"3"];\n> const d = [1,2,3];\n> c === d;\nfalse\n> c.toString();\n"1,2,3"\n> d.toString();\n"1,2,3"\n> c.toString() === d.toString();\ntrue\n')),(0,r.kt)("p",null,"According to the rules of strict equality (",(0,r.kt)("inlineCode",{parentName:"p"},"==="),"), strings and numbers are different \u2014 as well they should be. That means that the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"3"')," inside array ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," should not be considered the same as the number ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," inside array ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),". However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.toString()")," method does not account for differing data types within each array: they are all turned into strings! So this is an example of when comparing the equality of two arrays by turning them into strings with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.toString()")," does not work effectively."),(0,r.kt)("p",null,"As with many things in computer programming, we've found a fairly effective solution that doesn't work all of the time. As a developer, a big part of your job is to find things that work \u2014 but also to understand the little ways and circumstances where things don't work."),(0,r.kt)("h2",{id:"cloning-arrays"},"Cloning Arrays"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here is another scenario where arrays operate differently than we might expect."),(0,r.kt)("p",null,"Suppose we have an array that we want to keep in its original form. We also need to manipulate this array in some way. We might have one variable hold the original array and another variable with a copy of the same array that we can change."),(0,r.kt)("p",null,"Try this in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const originalArray = [1,2,3,4,5];\n> originalArray;\n[1, 2, 3, 4, 5]\n> let cloneArray = originalArray;\n> cloneArray;\n[1, 2, 3, 4, 5]\n> cloneArray.push(6);\n6\n> cloneArray;\n[1, 2, 3, 4, 5, 6]\n")),(0,r.kt)("p",null,"What does ",(0,r.kt)("inlineCode",{parentName:"p"},"originalArray")," look like now? We haven't touched it, so we may assume it would retain its original value of ",(0,r.kt)("inlineCode",{parentName:"p"},"[1,2,3,4,5]"),". But if we check it again in the console, we'll see the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> originalArray;\n[1, 2, 3, 4, 5, 6]\n")),(0,r.kt)("p",null,"In JavaScript, the array is stored in memory. The variables ",(0,r.kt)("inlineCode",{parentName:"p"},"originalArray")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cloneArray")," are called ",(0,r.kt)("strong",{parentName:"p"},"pointers"),". A pointer references an object in memory but is ",(0,r.kt)("em",{parentName:"p"},"not")," the object itself. Therefore, as the array is changed, the new value is reflected in all of the variables that point to it."),(0,r.kt)("p",null,"The way to clone an array ",(0,r.kt)("em",{parentName:"p"},"without")," simply making another pointer is to create a new variable set to a new array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const cloneArray = originalArray.slice();\n")),(0,r.kt)("p",null,"Note that we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),' here in a slightly different way than we learned in the last lesson \u2014 without arguments. This just "slices" the whole array so we can save it in a new variable. This ensures that the new array really is an entirely separate entity instead of simply a pointer to the original array.'),(0,r.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"For more details on how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," method works, check out ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"MDN's JavaScript documentation"),"."))}m.isMDXComponent=!0}}]);