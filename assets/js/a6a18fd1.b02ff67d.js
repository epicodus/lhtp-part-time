"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[57190],{30876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const o={title:"\ud83d\udcd3 Map, Reduce and Filter",id:"map-reduce-and-filter",slug:"map-reduce-and-filter",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/map_reduce_and_filter.md"},i=void 0,l={unversionedId:"react/functional-programming-with-javascript/map-reduce-and-filter",id:"react/functional-programming-with-javascript/map-reduce-and-filter",title:"\ud83d\udcd3 Map, Reduce and Filter",description:"JavaScript provides some built-in methods that are commonly used in functional programming. In fact, we already have experience with Array.prototype.map(), one of the most popular of these methods.",source:"@site/docs/react/2_functional-programming-with-javascript/map-reduce-and-filter.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/map-reduce-and-filter",permalink:"/react/functional-programming-with-javascript/map-reduce-and-filter",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\ud83d\udcd3 Map, Reduce and Filter",id:"map-reduce-and-filter",slug:"map-reduce-and-filter",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/map_reduce_and_filter.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Currying",permalink:"/react/functional-programming-with-javascript/currying"},next:{title:"\ud83d\udcd3 Recursion",permalink:"/react/functional-programming-with-javascript/recursion"}},s={},p=[{value:"<code>map()</code>",id:"map",level:2},{value:"<code>reduce()</code>",id:"reduce",level:2},{value:"<code>filter()</code>",id:"filter",level:2},{value:"Summary",id:"summary",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JavaScript provides some built-in methods that are commonly used in functional programming. In fact, we already have experience with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", one of the most popular of these methods."),(0,r.kt)("p",null,"We'll start by taking a look at why ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," is so useful in functional programming. Then we'll cover ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filter()"),", two other extremely popular methods used in functional programming."),(0,r.kt)("h2",{id:"map"},(0,r.kt)("inlineCode",{parentName:"h2"},"map()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's say we want to take all the numbers in an array and multiply them by 2. We'll quickly compare how we can solve this problem using both a loop and ",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),". This is review from Introduction to Programming:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numArray = [1, 2, 3, 4, 5];\nlet doubledArray = [];\nnumArray.forEach(function(element) {\n  doubledArray.push(element * 2);\n});\ndoubledArray;\n")),(0,r.kt)("p",null,"In the example above, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach()")," to double each element in an array. From a functional perspective, there are several issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We must initialize an empty array and then store the new values in this array. As a result, we are mutating an array instead of creating a new constant. This is something we want to avoid."),(0,r.kt)("li",{parentName:"ul"},"The example above is imperative instead of declarative. We are telling the computer exactly what to do (imperative) instead of telling the computer the end result we want (declarative).")),(0,r.kt)("p",null,"Now let's look at ",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numArray = [1, 2, 3, 4, 5];\nconst doubledArray = numArray.map(function(element) {\n  return element * 2;\n});\ndoubledArray;\n")),(0,r.kt)("p",null,"In the example above, we don't mutate an array. Instead, we save mapped ",(0,r.kt)("inlineCode",{parentName:"p"},"numArray")," into a new constant."),(0,r.kt)("p",null,"The example above is declarative, not imperative. We don't explicitly tell the computer to initialize a new array, loop through an array of numbers, double each element in the array, and then push those doubled numbers into the initialized array. Instead, we just tell the computer that we want a new array with each value doubled."),(0,r.kt)("p",null,"We can make ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," even more concise with arrow functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const doubledArray = numArray.map (e => e * 2);\n")),(0,r.kt)("p",null,"Remember that with arrow functions we can take advantage of implicit return so we don't need to explicitly state ",(0,r.kt)("inlineCode",{parentName:"p"},"return"),"."),(0,r.kt)("p",null,"We also make the variable more abstract (",(0,r.kt)("inlineCode",{parentName:"p"},"e")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),"), which makes this even more concise and abstracted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"Array.prototype.map()")," whenever you want to modify every element in an array.")),(0,r.kt)("h2",{id:"reduce"},(0,r.kt)("inlineCode",{parentName:"h2"},"reduce()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to reduce an array to a single element. One of the most common usages is to sum an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numArray = [3, 7, 5];\nconst summedArray = numArray.reduce(function(currentValue, element) {\n  return element + currentValue;\n}, 0);\n")),(0,r.kt)("p",null,"In the example above, reduce takes two arguments. The first is the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentValue")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," function. The second is the ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," of the array. Finally, note the ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," after the function itself. This is an initial value that we can optionally provide. That way, ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," knows what the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentValue")," will start with. Note that if we wanted to multiply or divide, this initial value would be ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". Otherwise, we'd be multipling or dividing by zero!"),(0,r.kt)("p",null,"While this functionality is very helpful, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," to do so much more. For example, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," to do things like find the longest or shortest string in an array. However, we won't provide a code snippet for that here. Instead, let's look at a more complex example."),(0,r.kt)("p",null,"Let's say we have a group of friends that are planning on spending a weekend at the ocean. We have a data set that lists each friend's name as well as an array of the three things each friend most wants to do on the coast:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const friends = [\n  {\n    name: "Jasmine",\n    wantToDo: ["hike", "go out to eat", "swim"]\n  },\n  {\n    name: "Ada",\n    wantToDo: ["play games", "hike", "cook meals"]\n  },\n  {\n    name: "Desmond",\n    wantToDo: ["sleep", "swim", "play games"]\n  },\n  {\n    name: "Andres",\n    wantToDo: ["hike", "swim", "play games"]\n  }\n];\n')),(0,r.kt)("p",null,"Next, we want to determine which ",(0,r.kt)("inlineCode",{parentName:"p"},"wantToDo"),"s are most popular \u2014 that will help this group of friends determine how to spend the weekend."),(0,r.kt)("p",null,"How could ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," possibly be helpful for this? Well, ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," is extremely helpful for manipulating data. In the example above, it would be difficult to find the most popular ",(0,r.kt)("inlineCode",{parentName:"p"},"wantToDo"),"s based on the structure of this data set. After all, the data we want is nested pretty deeply: we are looking for a series of arrays that are contained within the property of a series of objects which are in turn contained in an array."),(0,r.kt)("p",null,"Fortunately, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," to turn our array of objects into an array that contains all of our ",(0,r.kt)("inlineCode",{parentName:"p"},"wantToDo"),"s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const toDos = friends.reduce(function(array, friend) {\n  return array.concat(friend.wantToDo);\n}, []);\n")),(0,r.kt)("p",null,"In the snippet above, our initial condition is an empty array ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," will iterate through each ",(0,r.kt)("inlineCode",{parentName:"p"},"friend")," and return their ",(0,r.kt)("inlineCode",{parentName:"p"},"wantToDo")," property, which will be concatenated into our ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),". Think of this as being like summing an array of numbers. However, in this case, instead of adding numbers, we are adding arrays to our original array. Because we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"concat"),", which will add two arrays together into one larger array, our final result will be a series of arrays reduced into one single larger array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> toDos\n["hike", "go out to eat", "swim", "play games", "hike", "cook meals", "sleep", "swim", "play games", "hike", "swim", "play games"]`\n')),(0,r.kt)("p",null,"Now we have a more manageable dataset to work with. Let's use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," yet again. This time, we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"voteTally")," object with key-value pairs. Each key will be a ",(0,r.kt)("inlineCode",{parentName:"p"},"toDo")," while the value of the key will be the number of times it shows up in the array. Here's how we can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const toDoTally = toDos.reduce(function(voteTally, toDo) {\n  voteTally[toDo] = (voteTally[toDo] || 0) + 1;\n  return voteTally;\n}, {});\n")),(0,r.kt)("p",null,"In this snippet, our ",(0,r.kt)("inlineCode",{parentName:"p"},"voteTally")," starts with an initial value ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),". We will be adding key-value pairs to this object. We will set the value of the key in this line: ",(0,r.kt)("inlineCode",{parentName:"p"},"voteTally[toDo] = (voteTally[toDo] || 0) + 1;"),". Note the or (",(0,r.kt)("inlineCode",{parentName:"p"},"||"),") syntax here. This states that if there is no key ",(0,r.kt)("inlineCode",{parentName:"p"},"voteTally[toDo]")," in the object, then the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"voteTally[toDo]")," should be set to 0. Otherwise, we'll use the value that already exists in the key. Finally, we'll increment the value by 1."),(0,r.kt)("p",null,"This returns the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> toDoTally\n{\n  "hike:": 3,\n  "go out to eat": 1,\n  "swim": 3,\n  "play games": 3,\n  "cook meals": 1,\n  "sleep": 1\n}\n')),(0,r.kt)("p",null,"Now we have a tally of each ",(0,r.kt)("inlineCode",{parentName:"p"},"wantToDo")," stored in a single object. Finally, we can sort this if we wish:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mostPopular = Object.entries(toDoTally).sort(function(a,b) { return b[1] - a[1] });\n")),(0,r.kt)("p",null,"We pass an object as an argument into ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.entries()"),", which will return all the key-value pairs in that object in the form of an array. Now we can sort these in descending order. If you aren't familiar with how ",(0,r.kt)("inlineCode",{parentName:"p"},"sort()")," works, check the Mozilla ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"documentation"),". We won't explain it in depth here because ",(0,r.kt)("inlineCode",{parentName:"p"},"sort()")," mutates the array it is called on, which means it's generally a poor choice for functional programming. However, in the example above, at least we aren't mutating a variable. Nor is ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.entries(toDoTally)")," a previously existing array, which makes it more acceptable here. This returns the following array of arrays:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> mostPopular\n[["hike", 3], ["swim", 3], ["play games", 3], ["go out to eat", 1], ["cook meals", 1], ["sleep", 1]]\n')),(0,r.kt)("p",null,"Now we can clearly see that this group of friends would like to spend the weekend hiking, swimming, and playing games."),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," to manipulate much larger datasets as well. Note that our goal won't always be to come up with a final answer with ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()"),". Sometimes we might just want to take a dataset and then manipulate it into something more manageable to work with."),(0,r.kt)("p",null,"At this point, it should be clear that we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," to reduce arrays into any type of object, not just a string or a number. Many of the most powerful applications of ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," involve returning another array or an object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"Array.prototype.reduce()"),' whenever you want to "reduce" an array down to a single element.')),(0,r.kt)("h2",{id:"filter"},(0,r.kt)("inlineCode",{parentName:"h2"},"filter()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," any time we want to filter an array or collection based on certain conditions. For instance, let's say we want to filter the following array to only include numbers greater than 10:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numArray = [7, 14, 32, 8];\nconst filteredArray = numArray.filter(e => e > 10);\n")),(0,r.kt)("p",null,"In the example above, we simply have to specify the condition (",(0,r.kt)("inlineCode",{parentName:"p"},"e > 10"),") that we want our final array to have. This is very declarative!"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"filter()")," is extremely powerful. For instance, we can use it to \"search\" an array of objects by a specific property. Here's an example. Let's say we want to find all the employees at a company that are developers from the following array of objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const employees = [\n  {\n    name: "Ada",\n    role: "developer"\n  },\n  {\n    name: "Tom",\n    role: "HR"\n  },\n  {\n    name: "Jasmine",\n    role: "developer"\n  },\n  {\n    name: "Hank",\n    role: "administrative assistant"\n  }\n];\n')),(0,r.kt)("p",null,"Now we can use filter to see which employees are developers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const developers = employees.filter(e => e.role === \"developer\");\n[ { name: 'Ada', role: 'developer' },\n  { name: 'Jasmine', role: 'developer' } ]\n")),(0,r.kt)("p",null,"We simply need to specify which employee has a ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," equal to ",(0,r.kt)("inlineCode",{parentName:"p"},'"developer"'),", which we do with ",(0,r.kt)("inlineCode",{parentName:"p"},'e.role === "developer"'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"Array.prototype.filter()")," whenever you want to filter an array based on certain conditions.")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this lesson, we explored how we can use three common JavaScript array methods in functional programming. Remember that looping is imperative while the three methods detailed above are declarative. Just as importantly, none of these three methods mutate state. They all return new results, which makes them excellent for immutability."),(0,r.kt)("p",null,"Try finding use cases in your own applications to apply these three methods. You will also get a chance to whiteboard with these methods in this course section."))}c.isMDXComponent=!0}}]);