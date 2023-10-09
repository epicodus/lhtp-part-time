"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21422],{30876:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,o(o({ref:t},l),{},{components:a})):n.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7896),i=(a(2784),a(30876));const r={title:"\ud83d\udcd3 Further Exploration: Animations with React",id:"further-exploration-animations-with-react",slug:"further-exploration-animations-with-react",hide_table_of_contents:!0,sidebar_position:4,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2c_further_exploration_ui_animations_and_interactivity.md"},o=void 0,s={unversionedId:"react/react-with-apis-part-2/further-exploration-animations-with-react",id:"react/react-with-apis-part-2/further-exploration-animations-with-react",title:"\ud83d\udcd3 Further Exploration: Animations with React",description:"We can use animation for a wide range of effects such as guided focus, loading wheels, visualizations, and for improving a user's experience, among other things.",source:"@site/docs/react/11_react-with-apis-part-2/2c-further-exploration-ui-animations-and-interactivity.md",sourceDirName:"react/11_react-with-apis-part-2",slug:"/react/react-with-apis-part-2/further-exploration-animations-with-react",permalink:"/react/react-with-apis-part-2/further-exploration-animations-with-react",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udcd3 Further Exploration: Animations with React",id:"further-exploration-animations-with-react",slug:"further-exploration-animations-with-react",hide_table_of_contents:!0,sidebar_position:4,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2c_further_exploration_ui_animations_and_interactivity.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Further Exploration: Data Visualization",permalink:"/react/react-with-apis-part-2/further-exploration-data-visualization"},next:{title:"\u270f\ufe0f React with API (Multi-Week Project) (day 2)",permalink:"/react/react-with-apis-part-2/react-with-api-multi-week-project-day-2"}},c={},p=[{value:"React Transition Group",id:"react-transition-group",level:3},{value:"react-spring",id:"react-spring",level:3},{value:"Framer Motion",id:"framer-motion",level:3},{value:"React-Motion",id:"react-motion",level:3}],l={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We can use animation for a wide range of effects such as guided focus, loading wheels, visualizations, and for improving a user's experience, among other things."),(0,i.kt)("p",null,"If we look at notable React applications we can see this interactivity in action. For instance, check out Airbnb's site. Notice how the menu options slide in and out in a when hovering over the logo. Another example is the loading animations at the bottom of the page:"),(0,i.kt)("img",{alt:"animations-on-airbnb-site",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/airbnb-animations-example.gif",width:"90%"}),(0,i.kt)("p",null,"Subtle effects like this can make a huge impact on user experience. Loading animations let users know that more information is coming and hopefully provide a pleasant transition."),(0,i.kt)("p",null,"The online store Everlane is also built with React. Let's take a look at some of the animations on their splash page:"),(0,i.kt)("img",{alt:"animations-on-everlane-site",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/everlane-animations.gif",width:"90%"}),(0,i.kt)("p",null,"Links and other clickable content change color when hovered over, adding a feeling of interactivity and responsiveness. Menus and navigation options slide in and out of views and images in the carousel also slide gently in and out. This gives the site a professional, polished look \u2014 and also encourages the user to have a pleasant experience."),(0,i.kt)("p",null,"In this lesson, we'll discuss some of the animation tools at our disposal. Most of these tools can also be used with React Native applications."),(0,i.kt)("h3",{id:"react-transition-group"},"React Transition Group"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transitions")," are just what they sound like \u2014 a type of animation that changes as components enter and leave the DOM."),(0,i.kt)("p",null,"The React core team has created an add-on called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-transition-group/tree/v1-stable"},"React Transition Group"),". This library specializes in performing CSS transitions. The library works by providing access to a built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"<ReactCSSTransitionGroup>")," component."),(0,i.kt)("p",null,"For more information, check out ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/animation.html"},"Animation Add-Ons")," in the React documentation."),(0,i.kt)("h3",{id:"react-spring"},"react-spring"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.react-spring.io/"},"react-spring")," library is easy to implement and even incorporates its own custom React hooks. This is a great library to start with. Check out some ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/examples/package/react-spring"},"examples")," of react-spring animations. react-spring currently provides five custom hooks. More information on these hooks can be found in the docs starting ",(0,i.kt)("a",{parentName:"p",href:"https://react-spring.io/hooks/use-chain"},"here"),". Each hook also has a demo for it."),(0,i.kt)("h3",{id:"framer-motion"},"Framer Motion"),(0,i.kt)("p",null,'Framer Motion describes itself as a "a production-ready animation and gesture library." Motion divides its functionality into animations, ',(0,i.kt)("a",{parentName:"p",href:"https://www.framer.com/api/motion/gestures/"},"gestures"),', and variants. "Gestures" refer to animations related to hovering, dragging, and tapping. We can think of these animations as responding to the gestures we make with a mouse or touch screen. The library also provides ',(0,i.kt)("a",{parentName:"p",href:"https://www.framer.com/api/motion/examples/"},"examples")," of Framer Motion animations."),(0,i.kt)("h3",{id:"react-motion"},"React-Motion"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/chenglou/react-motion"},"React-Motion")," was one of the inspirations for react-spring. Check out the GitHub documentation, which includes some examples of animations."),(0,i.kt)("p",null,"Similar to React Transition Group, React Motion provides pre-made components. We can pass props to these components to help us create animations. The primary built-in components are: ",(0,i.kt)("inlineCode",{parentName:"p"},"<Motion/>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<StaggeredMotion/>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<TransitionMotion/>"),"."),(0,i.kt)("p",null,"If you'd like to explore React Motion further, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chenglou/react-motion"},"documentation"),"."))}h.isMDXComponent=!0}}]);