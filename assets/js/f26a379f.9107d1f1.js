"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[77811],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const r={title:"Building a Functional Application (Part 1)",id:"building-a-functional-application-part-1",slug:"building-a-functional-application-part-1",hide_table_of_contents:!0,sidebar_position:30,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0l_building_a_functional_application.md"},i=void 0,l={unversionedId:"react/functional-programming-with-javascript/building-a-functional-application-part-1",id:"react/functional-programming-with-javascript/building-a-functional-application-part-1",title:"Building a Functional Application (Part 1)",description:"Let's use all the concepts we've learned so far to build a simple application. In this application, a user is growing a plant. The plant needs water, soil, and sunshine. The user may increment a plant's values through the functions hydrate(), feed(), and giveLight().",source:"@site/docs/react/2_functional-programming-with-javascript/0l-building-a-functional-application.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/building-a-functional-application-part-1",permalink:"/react/functional-programming-with-javascript/building-a-functional-application-part-1",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Building a Functional Application (Part 1)",id:"building-a-functional-application-part-1",slug:"building-a-functional-application-part-1",hide_table_of_contents:!0,sidebar_position:30,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0l_building_a_functional_application.md"},sidebar:"react",previous:{title:"Storing State in Closures",permalink:"/react/functional-programming-with-javascript/storing-state-in-closures"},next:{title:"Building a Functional Application (Part 2)",permalink:"/react/functional-programming-with-javascript/building-a-functional-application-part-2"}},s={},p=[{value:"An Object-Oriented Approach",id:"an-object-oriented-approach",level:2},{value:"Problems With Our Object-Oriented Approach",id:"problems-with-our-object-oriented-approach",level:3},{value:"A Functional Approach",id:"a-functional-approach",level:2},{value:"Abstracting Our Methods Into a Single Function",id:"abstracting-our-methods-into-a-single-function",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's use all the concepts we've learned so far to build a simple application. In this application, a user is growing a plant. The plant needs water, soil, and sunshine. The user may increment a plant's values through the functions ",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"feed()"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"giveLight()"),"."),(0,o.kt)("h2",{id:"an-object-oriented-approach"},"An Object-Oriented Approach"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Before we take a functional approach, let's take a quick look at how we might implement this small program from an object-oriented perspective:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Plant {\n  constructor() {\n    this.water = 0;\n    this.soil = 0;\n    this.light = 0;\n  }\n\n  hydrate() {\n    this.water ++\n  }\n\n  feed() {\n    this.soil ++\n  }\n\n  giveLight() {\n    this.light ++\n  }\n}\n")),(0,o.kt)("p",null,"To create and hydrate a plant, we'd do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> let plant = new Plant();\n> plant.hydrate()\n> plant\nPlant {water: 1, soil: 0, light: 0}\n")),(0,o.kt)("p",null,"The program above is simple and easy to read. However, from a functional perspective, there are several problems with this approach. Let's discuss these issues. As we do, keep in mind that both functional programming and object-oriented programming have many advantages. We are not advocating for one approach over the other \u2014 the most important thing is to use the right tool for the job. Many developers incorporate aspects of both object-oriented and functional programming."),(0,o.kt)("h3",{id:"problems-with-our-object-oriented-approach"},"Problems With Our Object-Oriented Approach"),(0,o.kt)("p",null,"From a functional perspective, though, this application is not very flexible and may be prone to bugs. Let's look at why:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All methods must be called on instances of the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Plant")," class.")," While these methods are nicely encapsulated, they aren't very reusable. If we wanted instances of other classes to have the same functionality, we'd need to use inheritance \u2014 or have repeated code elsewhere. "),(0,o.kt)("p",null,"From a functional approach, we'll want to use composition instead. That means we won't use a class. It also means that our methods will be more modular and reusable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our methods have side effects.")," Remember that pure functions can't have side effects. Our methods definitely have side effects \u2014 they are altering the state of a plant object!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our methods mutate state.")," Not only do our methods have side effects \u2014 they are directly mutating state. While this is common in object-oriented programming, it's a no-no in functional programming."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our functions don't return anything.")," Pure functions also need to return something. However, none of our methods return anything."),(0,o.kt)("p",null,"So how should we refactor our application to have a more functional approach?"),(0,o.kt)("h2",{id:"a-functional-approach"},"A Functional Approach"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's start by creating a reusable function that we can use to ",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"feed()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"giveLight()")," to a plant. Specifically, we will create a pure function that isn't in a class. This will solve the problems with the methods above all at once. Because it will be pure, it will have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No side effects;"),(0,o.kt)("li",{parentName:"ul"},"No state mutation;"),(0,o.kt)("li",{parentName:"ul"},"A return value.")),(0,o.kt)("p",null,"Let's do that now."),(0,o.kt)("h3",{id:"abstracting-our-methods-into-a-single-function"},"Abstracting Our Methods Into a Single Function"),(0,o.kt)("p",null,"Let's start by rewriting our ",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const hydrate = (plant) => {\n  return {\n    ...plant,\n    water: (plant.water || 0) + 1\n  }\n};\n")),(0,o.kt)("p",null,"In the example above, we create a function literal. The function takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"plant")," as an argument. It will not mutate state. Instead, it will return a new object that represents the plant's new state. We will use the spread operator to return the new state of the plant. The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"plant.water")," will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"(plant.water || 0) + 1"),". Note that we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," operator here \u2014 if an object doesn't contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"water")," property, then ",(0,o.kt)("inlineCode",{parentName:"p"},"plant.water")," will equal ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),". This way, the value default to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"water")," property."),(0,o.kt)("p",null,"In theory, the function isn't mutating state because we are returning a new object. (Unfortunately, in reality, JavaScript is still referencing \u2014 and mutating \u2014 the original object because it creates a shallow clone, not a deep clone. But we'd need to use a special library to ensure we have a deep clone, so we won't worry about that right now!)"),(0,o.kt)("p",null,"Just like that, we've addressed the primary issues with our ",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate()")," function!"),(0,o.kt)("p",null,"We could then do the same thing for our other two functions. For instance, here's a new ",(0,o.kt)("inlineCode",{parentName:"p"},"feed()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const feed = (plant) => {\n  return {\n    ...plant,\n    soil: (plant.soil || 0) + 1\n  }\n};\n")),(0,o.kt)("p",null,"This function pretty much looks the same as the previous one. Also, it doesn't seem very reusable. It can only take an object that has a ",(0,o.kt)("inlineCode",{parentName:"p"},"soil")," property and then increment that ",(0,o.kt)("inlineCode",{parentName:"p"},"soil")," property by 1. Because the methods look so similar, we clearly have a chance to refactor here."),(0,o.kt)("p",null,"Remember that functional programming is an attempt to make our code more abstract and reusable. This is in contrast to object-oriented programming, which is often about making our code more concrete and encapsulated."),(0,o.kt)("p",null,"So how can we refactor this method to take in and alter ",(0,o.kt)("inlineCode",{parentName:"p"},"soil"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"water"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"light"),"? We could do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const changePlantState = (plant, property) => {\n  return {\n    ...plant,\n    [property]: (plant[property] || 0) + 1\n  }\n}\n")),(0,o.kt)("p",null,"Now we are passing in both a ",(0,o.kt)("inlineCode",{parentName:"p"},"plant")," and the specific ",(0,o.kt)("inlineCode",{parentName:"p"},"property")," that we want to change. Note that we can use square brackets to pass the value of a variable into an object key or property. This is a piece of functionality from ES6."),(0,o.kt)("p",null,"Now we can call this function like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let plant = { soil: 0, light: 0, water: 0 }\n> changePlantState(plant, "soil")\n{soil: 1, light: 0, water: 0}\n')),(0,o.kt)("p",null,"And just like that, we've reduced three functions into one."),(0,o.kt)("p",null,"While this is a good first step in terms of refactoring, we can do more to make this function reusable and flexible. Here's how our function is still limited:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's still specific to plants when we could technically use it to increment any property of any object by 1. We can rename the variables to be more abstract."),(0,o.kt)("li",{parentName:"ul"},"Why should we limit ourselves to just incrementing a plant property by 1? If we were going to turn this into a game, we'd probably want ways to increment (or decrement) different properties in different ways. Our function would be much more flexible if it could do this."),(0,o.kt)("li",{parentName:"ul"},"Finally, this function takes multiple arguments, so it might be nice to turn this into an unary function with just one argument. (Hint: we will need to curry our function to do this.)")),(0,o.kt)("p",null,"Let's handle this one step at a time."),(0,o.kt)("p",null,"First, we'll make our variables more abstract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const changeState = (state, prop) => {\n  return {\n    ...state,\n    [prop]: (state[prop] || 0) + 1\n  }\n}\n")),(0,o.kt)("p",null,"Now our function is no longer limited to just working with plants. It could increment any property of state by 1. Note that we call the property passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"prop"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," is a common name for this variable and you'll see it frequently in React."),(0,o.kt)("p",null,"Our function is gradually improving but it could still be a lot better. Why would we want to limit ourselves to just incrementing a property by 1? Let's refactor our function again. Now it will also accept a ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const changeState = (state, prop, value) => ({\n  ...state,\n  [prop] : (state[prop] || 0) + value\n})\n")),(0,o.kt)("p",null,"This is a very small change but it makes our function even more flexible. In the process, though, we've created another problem. We went from having an unary function with just one argument to a function with three arguments."),(0,o.kt)("p",null,"How can we solve this problem, too? It's time to curry this function! Our outer function will take just one argument. This outer function will return a second function which takes another argument. Finally, this inner function will return yet another inner function that will take the final argument. Here's how our curried function looks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const changeState = (prop) => {\n  return (value) => {\n    return (state) => ({\n      ...state,\n      [prop] : (state[prop] || 0) + value\n    })\n  }\n}\n")),(0,o.kt)("p",null,"You may be wondering if there's any value in currying this function. Don't we still have to pass in three arguments? Well, there is a method to our madness \u2014 or rather, a function to our funny business. Now we can create some function factories!"),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," is passed into the outer function, then ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is passed to the inner function, and finally, ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," is passed to the innermost function. We could pass in those arguments in any order we like. However, our current setup isn't accidental. We can now use this function to make some smaller, more specific functions. Here are some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const feed = changeState("soil");\nconst hydrate = changeState("water");\nconst giveLight = changeState("light");\n')),(0,o.kt)("p",null,"We just used our function to easily create more specific functions for each kind of property. We could add 5 to the soil of a plant by doing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"feed(5)(plant)\n")),(0,o.kt)("p",null,"We could theoretically drill down and get even more specific:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const blueFood = changeState("soil")(5)\nconst greenFood = changeState("soil")(10)\nconst yuckyFood = changeState("soil")(-5)\n')),(0,o.kt)("p",null,"Now we can do the following with a plant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"blueFood(plant)\n")),(0,o.kt)("p",null,"This will increase a plant's food level by 5."),(0,o.kt)("p",null,"None of this flexibility would've been possible without currying!"),(0,o.kt)("p",null,"We've now incorporated the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Our function is pure, does not mutate state, and has no side effects;"),(0,o.kt)("li",{parentName:"ul"},"Our function is unary and takes only one argument;"),(0,o.kt)("li",{parentName:"ul"},"Our function uses currying, which allows us to reuse it as a function factory;"),(0,o.kt)("li",{parentName:"ul"},"Our function takes advantage of closures (because we wouldn't be able to curry without it);"),(0,o.kt)("li",{parentName:"ul"},"Our function is sufficiently abstracted that it could be used with other types of objects that could be incremented or decremented as well.")),(0,o.kt)("p",null,"That's a lot of extra power that we didn't have with our object-oriented methods!"),(0,o.kt)("p",null,"At this point, we have a solid start on our first functional application. However, we still don't have any way to store state. In the next lesson, we'll use closures to store state in our application."))}h.isMDXComponent=!0}}]);