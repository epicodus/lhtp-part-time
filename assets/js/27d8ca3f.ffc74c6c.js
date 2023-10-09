"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71277],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const o={title:"\ud83d\udcd3 The Redux Store",id:"the-redux-store",slug:"the-redux-store",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_the_redux_store.md"},s=void 0,i={unversionedId:"react/react-with-redux/the-redux-store",id:"react/react-with-redux/the-redux-store",title:"\ud83d\udcd3 The Redux Store",description:"Now we have a reducer that can handle some actions. Everything we've done so far is vanilla JavaScript. We're ready to start working with Redux itself.",source:"@site/docs/react/6_react-with-redux/0h-the-redux-store.md",sourceDirName:"react/6_react-with-redux",slug:"/react/react-with-redux/the-redux-store",permalink:"/react/react-with-redux/the-redux-store",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\ud83d\udcd3 The Redux Store",id:"the-redux-store",slug:"the-redux-store",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_the_redux_store.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Anatomy of a Reducer",permalink:"/react/react-with-redux/anatomy-of-a-reducer"},next:{title:"\ud83d\udcd3 Redux Store Review",permalink:"/react/react-with-redux/redux-store-review"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now we have a reducer that can handle some actions. Everything we've done so far is vanilla JavaScript. We're ready to start working with Redux itself."),(0,r.kt)("p",null,"In this lesson, we will cover the Redux ",(0,r.kt)("strong",{parentName:"p"},"store"),". A Redux store does the following things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Holds our application state;"),(0,r.kt)("li",{parentName:"ul"},"Allows us to access state in our application with the function ",(0,r.kt)("inlineCode",{parentName:"li"},"getState()"),";"),(0,r.kt)("li",{parentName:"ul"},"Allows us to actually update state (with help from our reducers) using the ",(0,r.kt)("inlineCode",{parentName:"li"},"dispatch()")," function, which takes an action as an argument.")),(0,r.kt)("p",null,"That's all it does. It is a ",(0,r.kt)("strong",{parentName:"p"},"single source of truth")," that holds our application state. Because it is a single source of truth, there can only ever be one store in an application. "),(0,r.kt)("p",null,"In this lesson, we will use the reducer we built in previous lessons to create a small JavaScript project. The goal of this project is to demonstrate how Redux works. We are doing this independently of React because we need to use special bindings (provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux")," package) to use Redux with React. It isn't terribly difficult to set up a project with this package. However, it can be challenging for beginners to separate Redux code from the code needed to connect Redux to React. Our goal here is to keep Redux as simple as possible for now and focus on exploring how the Redux store works."),(0,r.kt)("p",null,"To explore these concepts in isolation, we're going to create a new project (but don't worry, we'll come back to the other ticket-queue app we've been building soon!). Create a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"learning-about-redux")," and add the following file:"),(0,r.kt)("div",{class:"filename"},"index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js"><\/script>\n    <script type="text/javascript" src="learning-about-redux.js"><\/script>\n    <title>Learning About Redux</title>\n  </head>\n  <body>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"This file has a link to a CDN for Redux as well as a link to the ",(0,r.kt)("inlineCode",{parentName:"p"},"learning-about-redux.js")," script we are about to create. "),(0,r.kt)("p",null,"As a quick refresher, ",(0,r.kt)("strong",{parentName:"p"},"CDN")," stands for ",(0,r.kt)("strong",{parentName:"p"},"Content Delivery Network"),", which is a way to tell the browser that is loading our project to fetch resources from a specific library we want to use in our project. We've used CDNs in the past with Bootstrap. Two alternatives to using a CDN are to simply download the files of a library and put them in your project folder, or to set up a package manager like ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," and load libraries to your project via a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".  "),(0,r.kt)("p",null,"Next, add a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"learning-about-redux.js")," to the project directory. We aren't going to worry about import statements, webpack, or anything else. Our file will just contain the reducer we built along with a few basic Redux methods and ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to log what is happening."),(0,r.kt)("p",null,"Here's the code:"),(0,r.kt)("div",{class:"filename"},"learning-about-redux.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// REDUCER \u2014 this is the same code we wrote in our previous app.\n\nconst ticketListReducer = (state = {}, action) => {\n  const { names, location, issue, id } = action;\n  switch (action.type) {\n  case 'ADD_TICKET':\n    return Object.assign({}, state, {\n      [id]: {\n        names: names,\n        location: location,\n        issue: issue,\n        id: id\n      }\n    });\n  case 'DELETE_TICKET':\n    const newState = { ...state };\n    delete newState[id];\n    return newState;\n  default:\n    return state;\n  }\n};\n\n// REDUX STORE \u2014 Everything below this line is new code!\n\nconst { createStore } = Redux;\n\nconst store = createStore(ticketListReducer);\n\nconsole.log(store.getState());\n\nconst unsubscribe = store.subscribe(() => console.log(store.getState()));\n\nstore.dispatch({\n  type: 'ADD_TICKET',\n  names: 'Jasmine and Justine',\n  location: '2a',\n  issue: 'Reducer has side effects.',\n  id: 1\n});\n\nstore.dispatch({\n  type: 'ADD_TICKET',\n  names: 'Brann and Rose',\n  location: '3b',\n  issue: 'Problems understanding Redux.',\n  id: 2\n});\n\nstore.dispatch({\n  type: 'DELETE_TICKET',\n  id: 1\n});\n\nunsubscribe();\n")),(0,r.kt)("p",null,"We start with the reducer we've already created. We don't need to rehash this here, so let's skip right to the new code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We start by using destructuring to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),". (Remember that Redux is coming from the CDN.) We need this function to actually build our store.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next, we create our store:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const store = createStore(ticketListReducer);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createStore()")," takes a reducer as an argument. The reducer tells the store how it should handle actions. Otherwise, the store wouldn't know how to handle any actions."),(0,r.kt)("p",null,"We save our created store in a constant called ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),". This ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," holds our application's state tree. The state tree is immutable \u2014 which means that the store will replace it with a new immutable structure each time it needs to be updated. Think of it as cleaning the old representation of state off a whiteboard and then drawing up a new representation."),(0,r.kt)("p",null,"You may wonder why we are saving the store as a ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," if the store itself can have changing representations of state. Well, ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," is still a signal to other developers that they shouldn't modify the store at all. We'll let Redux handle that behind the scenes!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next, we can check the state of our store with ",(0,r.kt)("inlineCode",{parentName:"li"},"getState()"),". Note that ",(0,r.kt)("inlineCode",{parentName:"li"},"getState()")," is a method \u2014 we need to call it ",(0,r.kt)("strong",{parentName:"li"},"on")," our store.")),(0,r.kt)("p",null,"Our learning application doesn't have a UI \u2014 we are just checking changes to state with ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()"),", so make sure to open the console when you run the project in the browser."),(0,r.kt)("p",null,"The following line logs our initial state in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(store.getState());\n")),(0,r.kt)("p",null,"If we run our code in the browser, the console will show that the initial state is an empty object as expected. (This will be the first line that shows up in the console.)"),(0,r.kt)("p",null,"However, this isn't very helpful for logging changes to the store's state."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In order to actually log changes to state, we need to listen for changes with the ",(0,r.kt)("inlineCode",{parentName:"li"},"subscribe()")," method. You may remember that we ",(0,r.kt)("a",{parentName:"li",href:"/react/functional-programming-with-javascript/state"},"briefly discussed the ",(0,r.kt)("strong",{parentName:"a"},"pubsub")," pattern")," when we learned about functional programming. ")),(0,r.kt)("p",null,"A quick refresher: the pubsub pattern is a variant of the observer pattern. Various dependents (in an application) will listen for changes by ",(0,r.kt)("strong",{parentName:"p"},"subscribing")," to the store. Meanwhile, other objects will be ",(0,r.kt)("strong",{parentName:"p"},"publishing")," changes to the store. The publishers and subscribers don't need to know about each other \u2014 instead, the store acts as an intermediary."),(0,r.kt)("p",null,"We subscribe to our store with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = store.subscribe(() => console.log(store.getState()));\n")),(0,r.kt)("p",null,"Let's take a closer look at this code. We are subscribing to the store with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe()")," method and storing that in a constant called ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe"),"."),(0,r.kt)("p",null,"Note that we can call the code above ",(0,r.kt)("strong",{parentName:"p"},"without")," saving it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe")," constant. However, then we won't be able to unsubscribe to it later."),(0,r.kt)("p",null,"In our code, we are passing an anonymous function to ",(0,r.kt)("inlineCode",{parentName:"p"},"store.subscribe()"),". Each time there's a change in the store, our subscription will be triggered, causing this code to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(store.getState());\n")),(0,r.kt)("p",null,"When we subscribe, it just means our code is actively listening. For example, when we subscribe to a magazine, it doesn't mean we get an issue immediately. It just means that the next time an issue is published, we will get that issue."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We've subscribed \u2014 now what about getting the new issue of that magazine? Well, we need to ",(0,r.kt)("strong",{parentName:"li"},"publish")," it first. In this metaphor, the Redux store is our magazine. The store needs to be updated (a new issue of the magazine created) in order to trigger our subscription. In our Help Queue project, the store is holding our tickets. How do we update the store? We do this with the ",(0,r.kt)("inlineCode",{parentName:"li"},"dispatch()")," method. We dispatch three actions in the code below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch({\n  type: 'ADD_TICKET',\n  names: 'Jasmine and Justine',\n  location: '2a',\n  issue: 'Reducer has side effects.',\n  id: 1\n});\n\nstore.dispatch({\n  type: 'ADD_TICKET',\n  names: 'Brann and Rose',\n  location: '3b',\n  issue: 'Problems understanding Redux.',\n  id: 2\n});\n\nstore.dispatch({\n  type: 'DELETE_TICKET',\n  id: 1\n});\n")),(0,r.kt)("p",null,"Each time an action is dispatched, it will trigger our subscription and log the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"store.getState()")," to the console."),(0,r.kt)("p",null,"If we run this application in the browser, we'll see four messages logged in the console. Our store changes as actions are dispatched to it!"),(0,r.kt)("p",null,"Finally, we can call ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," to end our subscription. In the magazine metaphor, this means we've read enough issues of the magazine and we don't want more issues to come in the mail. For our Help Queue project, this means that we're no longer interested in tracking any store updates. When working with Redux, developers often use a dev tool like ",(0,r.kt)("inlineCode",{parentName:"p"},"store.subscribe(() => console.log(store.getState()));")," for debugging purposes."),(0,r.kt)("p",null,"When we use bindings to combine Redux and React, we won't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe()")," method ourselves. Instead, we'll use React Redux to handle subscribing for us. We'll do that because React Redux will optimize the subscription process for us \u2014 and make it easier in the process. However, even though we won't be using ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe()")," any longer, it's still important to know how it works."),(0,r.kt)("p",null,"In the next lesson, we'll review what we've learned so far about Redux. Even though the basics are relatively straightforward, it's very important to understand just what's happening in a Redux store."))}d.isMDXComponent=!0}}]);