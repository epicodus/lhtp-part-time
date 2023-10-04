"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46479],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7896),a=(r(2784),r(30876));const i={title:"Redux Store Review",id:"redux-store-review",slug:"redux-store-review",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_redux_store_review.md"},o=void 0,l={unversionedId:"react/react-with-redux/redux-store-review",id:"react/react-with-redux/redux-store-review",title:"Redux Store Review",description:"In the last lesson, we built a small application and learned about the Redux library. Redux on its own is relatively simple. However, Redux will become more complicated when we combine it with our React applications using the React Redux library, and start to build more complex reducers. Before we move on, let's review the basics.",source:"@site/docs/react/6_react-with-redux/0i-redux-store-review.md",sourceDirName:"react/6_react-with-redux",slug:"/react/react-with-redux/redux-store-review",permalink:"/react/react-with-redux/redux-store-review",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Redux Store Review",id:"redux-store-review",slug:"redux-store-review",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_redux_store_review.md"},sidebar:"react",previous:{title:"The Redux Store",permalink:"/react/react-with-redux/the-redux-store"},next:{title:"Introduction to React Redux Library",permalink:"/react/react-with-redux/introduction-to-react-redux-library"}},s={},u=[{value:"Redux Summary",id:"redux-summary",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we built a small application and learned about the Redux library. Redux on its own is relatively simple. However, Redux will become more complicated when we combine it with our React applications using the React Redux library, and start to build more complex reducers. Before we move on, let's review the basics. "),(0,a.kt)("h3",{id:"redux-summary"},"Redux Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Redux provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore()")," function which we can use to create a Redux store. An application will only ever have a single Redux store.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"createStore()")," takes a reducer as an argument. Reducers take the current state along with an action and determine how the store's state tree should be redrawn. Without reducers, the store wouldn't know how to handle actions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Redux store in our application has an immutable state tree. That means state will be redrawn when it's updated. Remember that immutability is a central tenet of functional programming!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We use Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"getState()")," method to get the current state of the store.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We use Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()")," method to send an action to the store. We pass along the action type \u2014 along with any other data needed to complete the action \u2014 as an argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method to listen for any changes to the store. A change in the state tree could trigger any number of things such as an update to the page or a change to the UI.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Generally, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getState()")," method in combination with the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method. This is because we will be most interested in making changes to our UI when the store is updated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Redux uses the ",(0,a.kt)("strong",{parentName:"p"},"pubsub")," pattern. Objects can publish updates to the store (with the ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()")," method) while dependents can subscribe to changes (with the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method). Publishers and subscribers don't know about each other.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When we use React Redux, we won't use Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method directly. However, the React Redux code we write will still be using ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," under the hood.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Redux also provides an ",(0,a.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," method. This allows a dependent to stop listening for changes. It's kind of like when we decide to cancel a magazine subscription."))))}p.isMDXComponent=!0}}]);