"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88958],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const r={title:"Data Types: Detection, Conversion, and Review",id:"data-types-detection-conversion-and-review",slug:"data-types-detection-conversion-and-review",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0t_data_types_detection_conversion_and_review.md"},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/data-types-detection-conversion-and-review",id:"introduction-to-programming/javascript-and-web-browsers/data-types-detection-conversion-and-review",title:"Data Types: Detection, Conversion, and Review",description:"We discussed basic data types right when we got started with JavaScript. However, it's so important to understand and know how to use these data types that we will review them in this lesson. Keep in mind that JavaScript data types are divided into two categories: primitives and objects. In this lesson, we'll review JavaScript primitives.",source:"@site/docs/introduction-to-programming/3_javascript-and-web-browsers/0t-data-types-detection-conversion-and-review.md",sourceDirName:"introduction-to-programming/3_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/data-types-detection-conversion-and-review",permalink:"/introduction-to-programming/javascript-and-web-browsers/data-types-detection-conversion-and-review",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Data Types: Detection, Conversion, and Review",id:"data-types-detection-conversion-and-review",slug:"data-types-detection-conversion-and-review",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0t_data_types_detection_conversion_and_review.md"},sidebar:"introduction-to-programming",previous:{title:"Practice: Assignment, Comparison, and Equality Operators",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-assignment-comparison-and-equality-operators"},next:{title:"Another Look at JavaScript Objects",permalink:"/introduction-to-programming/javascript-and-web-browsers/another-look-at-javascript-objects"}},s={},p=[{value:"Review of JavaScript Data Types: Primitives",id:"review-of-javascript-data-types-primitives",level:2},{value:"Number",id:"number",level:3},{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Undefined",id:"undefined",level:3},{value:"Data Type Detection",id:"data-type-detection",level:2},{value:"Documentation on the <code>typeof</code> Operator",id:"documentation-on-the-typeof-operator",level:3},{value:"Data Type Conversion",id:"data-type-conversion",level:2},{value:"Changing a String into a Number",id:"changing-a-string-into-a-number",level:3},{value:"Changing a Number into a String",id:"changing-a-number-into-a-string",level:3},{value:"Changing a Boolean into a String",id:"changing-a-boolean-into-a-string",level:3},{value:"MDN Documentation Links",id:"mdn-documentation-links",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We discussed basic data types right when we got started with JavaScript. However, it's so important to understand and know how to use these data types that we will review them in this lesson. Keep in mind that JavaScript data types are divided into two categories: ",(0,o.kt)("strong",{parentName:"p"},"primitives")," and ",(0,o.kt)("strong",{parentName:"p"},"objects"),". In this lesson, we'll review JavaScript primitives."),(0,o.kt)("p",null,"We'll also learn about data type ",(0,o.kt)("strong",{parentName:"p"},"conversion")," and ",(0,o.kt)("strong",{parentName:"p"},"detection"),"!"),(0,o.kt)("h2",{id:"review-of-javascript-data-types-primitives"},"Review of JavaScript Data Types: Primitives"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You've already seen ",(0,o.kt)("strong",{parentName:"p"},"numbers"),", ",(0,o.kt)("strong",{parentName:"p"},"strings"),", ",(0,o.kt)("strong",{parentName:"p"},"booleans"),", and ",(0,o.kt)("strong",{parentName:"p"},"undefined"),". These are 4 of the 7 basic data types, or ",(0,o.kt)("strong",{parentName:"p"},"primitives"),", in JavaScript. The fifth is ",(0,o.kt)("strong",{parentName:"p"},"null"),", which represents nothingness. Don't worry about null for now \u2014 we'll learn more about it down the road. And as we mentioned before, we won't concern ourselves with ",(0,o.kt)("strong",{parentName:"p"},"symbols")," or ",(0,o.kt)("strong",{parentName:"p"},"bigint")," in this course."),(0,o.kt)("h3",{id:"number"},"Number"),(0,o.kt)("p",null,"Unsurprisingly, the number type represents numbers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"42")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3.14")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NaN"),' (stands for "not a number", but is considered a number)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Infinity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Infinity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"const favoriteNumber = 42;"))),(0,o.kt)("p",null,"You can use certain methods on numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> 3.14159.toFixed(2);\n"3.14"\n')),(0,o.kt)("h3",{id:"string"},"String"),(0,o.kt)("p",null,"As you've seen, the string type represents text."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"hello, world!"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'const greeting = "hello, world!";'))),(0,o.kt)("p",null,"You can use certain methods on strings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> "hello".toUpperCase();\n"HELLO"\n> "hello".charAt(2);\n"l"\n> "hello".toUpperCase().charAt(2);\n"L"\n')),(0,o.kt)("h3",{id:"boolean"},"Boolean"),(0,o.kt)("p",null,"Booleans can only hold 2 possible values \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> 5 > 3;\ntrue\n> 5 > 10;\nfalse\n> "hello".charAt(2) === "e";\nfalse\n> const enrolledAtEpicodus = true;\n> enrolledAtEpicodus;\ntrue\n')),(0,o.kt)("p",null,"You'll discover soon just how important booleans are to programming."),(0,o.kt)("h3",{id:"undefined"},"Undefined"),(0,o.kt)("p",null,"The undefined data type has only one possible value: ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"When declaring a variable without giving it a value (",(0,o.kt)("inlineCode",{parentName:"p"},"let myNumber;"),"), JavaScript creates the variable without a value, and so its value is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"undefined")),". Even when declaring a variable and assigning it a value at the same time (",(0,o.kt)("inlineCode",{parentName:"p"},"let favoriteNumber = 42;"),"), JavaScript actually creates the variable initially without a value, temporarily giving it a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", before then assigning it the value to the right of the equals sign. This is kind of a subtle point, so don't worry too much about it at the moment."),(0,o.kt)("p",null,"Additionally, there are some functions and methods that do not return any value, in which case the return value is actually ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". You'll learn more about this when we learn how to write our own methods and functions."),(0,o.kt)("h2",{id:"data-type-detection"},"Data Type Detection"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"It's important to understand the difference between the number ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," and the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"5"'),". To the computer, they are two entirely different things, as illustrated by this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> const myNumber = 5;\n> const myOtherNumber = 10;\n> const myText = "5";\n> const myOtherText = "10";\n> myNumber + myOtherNumber;\n15\n> myText + myOtherText;\n"510"\n')),(0,o.kt)("p",null,"When we added ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," we got 15, but when we added ",(0,o.kt)("inlineCode",{parentName:"p"},'"10"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"5"')," it concatenated the two strings together."),(0,o.kt)("p",null,"Likewise, the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," is not the same as the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"true"'),"."),(0,o.kt)("p",null,"In the example above, somewhat confusingly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," operator works on both numbers and strings \u2014 just with different results. However, methods will only work on a specific data type. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"48432.78.toFixed(1);")," works just fine, but trying to do ",(0,o.kt)("inlineCode",{parentName:"p"},'"48432.78".toFixed(1);')," results in an error because there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.toFixed()")," method that works on a string. In other words, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"},(0,o.kt)("inlineCode",{parentName:"a"},"Number.prototype.toFixed()"))," is a method that exists in JavaScript, but ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.toFixed()")," is not. "),(0,o.kt)("p",null,"Likewise, ",(0,o.kt)("inlineCode",{parentName:"p"},'"hello".charAt(2);')," works, but ",(0,o.kt)("inlineCode",{parentName:"p"},"314159.charAt(2)")," does not. This is because ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"},(0,o.kt)("inlineCode",{parentName:"a"},"String.prototype.charAt()"))," is a JavaScript method, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Number.prototype.charAt()")," is not."),(0,o.kt)("p",null,"We can check the data type of a variable or value with the ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof")," JavaScript operator as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> typeof 5;\n"number"\n> typeof "5";\n"string"\n> typeof true;\n"boolean"\n> typeof "true";\n"string"\n> const greeting = "hello world";\n> typeof greeting;\n"string"\n')),(0,o.kt)("h3",{id:"documentation-on-the-typeof-operator"},"Documentation on the ",(0,o.kt)("inlineCode",{parentName:"h3"},"typeof")," Operator"),(0,o.kt)("p",null,"Visit this link for the reference page on the ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof")," operator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"},"typeof"))," ")),(0,o.kt)("h2",{id:"data-type-conversion"},"Data Type Conversion"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Often we'll need to convert data types in order to manipulate them or use them in a way that works for our program. Let's look at a few different examples now."),(0,o.kt)("h3",{id:"changing-a-string-into-a-number"},"Changing a String into a Number"),(0,o.kt)("p",null,"As we'll soon learn, input from a web browser will come in as a string and we will need to convert it to a number before working with it."),(0,o.kt)("p",null,"We can convert a string to a number by passing a string to JavaScript's built-in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"parseInt()"))," function (we'll cover more on functions soon):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> const inputtedAge = "45";\n> inputtedAge;\n"45"\n> typeof inputtedAge;\n"string"\n> const myAge = parseInt(inputtedAge);\n> myAge;\n45\n> typeof myAge;\n"number"\n')),(0,o.kt)("p",null,"Note that if you try to use ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt()")," to convert a string not actually containing a number, the result is the number ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> const name = "Andrea";\n> const nonsense = parseInt(name);\n> nonsense;\nNaN\n')),(0,o.kt)("h3",{id:"changing-a-number-into-a-string"},"Changing a Number into a String"),(0,o.kt)("p",null,"If you need to go the other way around, you can convert a number to a string by calling the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Number.prototype.toString()"))," method on the number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> const myNumber = 42;\n> myNumber;\n42\n> typeof myNumber;\n"number"\n> const convertedNumber = myNumber.toString();\n> convertedNumber;\n"42"\n> typeof convertedNumber;\n"string"\n')),(0,o.kt)("p",null,"We can also call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Number.prototype.toString()")," on a number directly instead of on a variable that has a number value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// two dots here is correct\n> 42..toString();\n"42"\n> (42).toString();\n"42"\n')),(0,o.kt)("p",null,"The two dots in this example are correct! Try it in the browser's DevTools console if you're not sure. The first dot is interpreted by JavaScript as a decimal point. For example, in the number ",(0,o.kt)("inlineCode",{parentName:"p"},"42.0")," there is a decimal point between the 2 and the 0. ",(0,o.kt)("inlineCode",{parentName:"p"},"42.0.toString()")," is the shorter version of ",(0,o.kt)("inlineCode",{parentName:"p"},"42..toString()"),". It's not really important to understand why JavaScript is like this at this stage in learning. You can always look up a method when you are in doubt about how to use it. If you prefer, you can choose to use parentheses like ",(0,o.kt)("inlineCode",{parentName:"p"},"(42).toString()")," for the same results."),(0,o.kt)("h3",{id:"changing-a-boolean-into-a-string"},"Changing a Boolean into a String"),(0,o.kt)("p",null,"You can also convert a boolean to a string by calling the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Boolean.prototype.toString()"))," method on the boolean:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> const enrolledInEpicodus = true;\n> enrolledInEpicodus;\ntrue\n> typeof enrolledInEpicodus;\n"boolean"\n> const convertedBool = enrolledInEpicodus.toString();\n> convertedBool;\n"true"\n> typeof convertedBool;\n"string"\n')),(0,o.kt)("p",null,"We can also call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean.prototype.toString()")," on a boolean directly instead of on a variable that has a boolean value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> false.toString();\n"false"\n')),(0,o.kt)("h3",{id:"mdn-documentation-links"},"MDN Documentation Links"),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Number.prototype.toString()"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean.prototype.toString()")," by following these links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt"},(0,o.kt)("inlineCode",{parentName:"a"},"parseInt()")))," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString"},(0,o.kt)("inlineCode",{parentName:"a"},"Number.prototype.toString()")))," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean.prototype.toString()"))))))}c.isMDXComponent=!0}}]);