"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[245],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"Introduction to webpack",id:"introduction-to-webpack",slug:"introduction-to-webpack",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0i_introduction_to_webpack.md"},r=void 0,s={unversionedId:"intermediate-javascript/test-driven-development/introduction-to-webpack",id:"intermediate-javascript/test-driven-development/introduction-to-webpack",title:"Introduction to webpack",description:"webpack is a module bundler that bundles our code. A module is a single JavaScript file. As a bundler, webpack stitches together separate modules (JavaScript files) into a single file called a bundle. By bundling our code, we can make our website more efficient at loading and processing its resources, because the source code has been optimized.",source:"@site/docs/intermediate-javascript/5_test-driven-development/0i-introduction-to-webpack.md",sourceDirName:"intermediate-javascript/5_test-driven-development",slug:"/intermediate-javascript/test-driven-development/introduction-to-webpack",permalink:"/intermediate-javascript/test-driven-development/introduction-to-webpack",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Introduction to webpack",id:"introduction-to-webpack",slug:"introduction-to-webpack",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0i_introduction_to_webpack.md"},sidebar:"intermediate-javascript",previous:{title:"Installing Dependencies with npm",permalink:"/intermediate-javascript/test-driven-development/installing-dependencies-with-npm"},next:{title:"Configuring webpack and Using npm Scripts",permalink:"/intermediate-javascript/test-driven-development/configuring-webpack-and-using-npm-scripts"}},l={},p=[{value:"Introduction to webpack",id:"introduction-to-webpack",level:2},{value:"How Does webpack Work?",id:"how-does-webpack-work",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"webpack is a ",(0,o.kt)("strong",{parentName:"p"},"module bundler")," that bundles our code. A ",(0,o.kt)("strong",{parentName:"p"},"module")," is a single JavaScript file. As a bundler, webpack stitches together separate modules (JavaScript files) into a single file called a bundle. By bundling our code, we can make our website more efficient at loading and processing its resources, because the source code has been optimized. "),(0,o.kt)("p",null,"That may not seem like much, but imagine a large, complex application with hundreds of files using many different libraries and dependencies. We need all these files and libraries to work together. That's where webpack comes in."),(0,o.kt)("h2",{id:"introduction-to-webpack"},"Introduction to webpack"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The following gif from ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack's homepage")," is a very helpful visualization of what it does as a module bundler."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/webpack-homepage-gif.gif",alt:"A visualization of taking several modules and bundling them into single outputs."})),(0,o.kt)("p",null,"As the gif suggests, other than JavaScript, webpack can also bundle styles, images, and other assets (like fonts). These files are also considered modules. To bundle files types other than JavaScript, webpack uses loaders. A webpack ",(0,o.kt)("strong",{parentName:"p"},"loader")," is a tool that enables webpack to work with a certain type of file, so it can process it and bundle it. Loaders don't come installed with webpack \u2014 we always need to install packages to use loaders in our projects."),(0,o.kt)("p",null,"Through webpack configurations, we can also optimize our code ",(0,o.kt)("em",{parentName:"p"},"and")," improve our development experience. We use plugins and built-in webpack configurations to do this. A ",(0,o.kt)("strong",{parentName:"p"},"built-in webpack configuration")," is just that \u2014 tooling options that come out of the box with webpack. "),(0,o.kt)("p",null,"Just like loaders, plugins don't come installed with webpack \u2014 we always need to install packages to use plugins in our projects. A webpack ",(0,o.kt)("strong",{parentName:"p"},"plugin")," is a tool that works on the entire bundle to optimize its performance or improve our developer experience. "),(0,o.kt)("p",null,"There are several other popular tools for achieving the same goals, including Gulp.js and Grunt.js. These tools are known as ",(0,o.kt)("strong",{parentName:"p"},"task runners"),". A task runner is exactly what it sounds like: a tool to run tasks such as concatenation (combining multiple files into one) and minification (changing variable names and removing blank spaces to make the file smaller). webpack does the same things, but it does so through loaders and plugins."),(0,o.kt)("p",null,"webpack is the most popular solution today and it's used with major frameworks such as React and Angular. If you're interested, you can explore Gulp.js or Grunt.js in your own time \u2014 though they aren't as widely used now that module bundlers have taken over. You're not expected to know the fine points of the differences between module bundlers and task runners while you're at Epicodus, but you're encouraged to do some additional reading on your own."),(0,o.kt)("p",null,"Over the remaining weekend homework, we'll make incremental additions to our webpack configuration. We will also provide a basic explanation of what webpack is doing. These lessons are not designed to be exhaustive. For exhaustive details, the webpack documentation is excellent. We recommend referring back to the ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"documentation")," if you have further questions or need clarification about webpack."),(0,o.kt)("h3",{id:"how-does-webpack-work"},"How Does webpack Work?"),(0,o.kt)("p",null,"So how does webpack work and why is it so useful?"),(0,o.kt)("p",null,"webpack uses a ",(0,o.kt)("strong",{parentName:"p"},"dependency graph")," to recursively manage an application's assets. A graph is a data structure that describes complex and non-linear relationships between objects. ",(0,o.kt)("strong",{parentName:"p"},"Recursive")," just means to perform the same action over and over again until a goal is met. For webpack, the goal is working through each module in a project and identifying its dependencies (files it depends on to function). The result is a dependency graph. "),(0,o.kt)("p",null,"This all sounds complicated, and it truthfully is, but the good news is that we don't need to understand how webpack works under the hood in order to use it. We'll let webpack do most of the heavy lifting for us. Let's take a look at an example to better understand how webpack creates a dependency graph."),(0,o.kt)("p",null,"Imagine that we're building an application that makes very complex peanut butter and jelly sandwiches. As a result, we have multiple JavaScript files for managing the creation of these sandwiches: ",(0,o.kt)("inlineCode",{parentName:"p"},"peanut-butter.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jelly.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bread.js"),". "),(0,o.kt)("p",null,"As a module bundler, webpack is perfect for this job, but how does it know where to start its bundling process? Well, in addition to our typical source code, we need to identify an ",(0,o.kt)("strong",{parentName:"p"},"entry point"),". "),(0,o.kt)("p",null,"Think of an ",(0,o.kt)("strong",{parentName:"p"},"entry point")," as a door leading into our application. webpack needs this entry point in order to recursively gather all the other files the application needs. A bigger application may have multiple entry points but we'll only be working with one."),(0,o.kt)("p",null,"The entry point for our applications is the file ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),", where we keep our user interface logic. Why ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"? it's simply a common naming convention for an entry point file. "),(0,o.kt)("p",null,"Here's what the first few lines of ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," might look like:"),(0,o.kt)("div",{class:"filename"},"index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PeanutButter } from './peanut-butter.js'\nimport { Jelly } from './jelly.js'\nimport { Bread } from './bread.js'\nimport '../css/styles.css'\n\n...\n")),(0,o.kt)("p",null,"We haven't covered ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements just yet \u2014 we'll do so in a few lessons. For now, just be aware that an ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statement is exactly what it sounds like: a way to import code that's in one file into another file."),(0,o.kt)("p",null,"When we tell webpack to load ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),", webpack will recursively load and concatenate all the code from ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," as well as any required code from other files, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"peanut-butter.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jelly.js"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"bread.js"),"."),(0,o.kt)("p",null,"And if ",(0,o.kt)("inlineCode",{parentName:"p"},"jelly.js")," imports code from yet another file called ",(0,o.kt)("inlineCode",{parentName:"p"},"blueberry.js"),", webpack would gather that code, too. "),(0,o.kt)("p",null,"In the end, webpack will gather all of this code into a single file with a name like ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle.js"),". In fact, this is exactly what we'll call our bundled code. Remember how we mentioned that our finished project will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory with a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle.js")," inside it? Well, webpack automatically creates that folder and file for us! "),(0,o.kt)("p",null,"And just like that, our code is bundled into one file."),(0,o.kt)("p",null,"As we mentioned previously, webpack will not just load our project's JavaScript files, but also many other types of assets as long as we're using the right loaders and plugins. That's why we'll ultimately store all our source code (CSS, HTML, JS, and other assets) in our ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory \u2014 so that webpack can process all of these files."),(0,o.kt)("p",null,"In general, we don't really need to worry about how webpack is gathering its resources. This is one of those things where the tool we're using will take care of things for us and we don't need to dig too much deeper. However, it's good to have a general sense of what webpack is actually up to behind the scenes. Ultimately, as long as you correctly set up your webpack configuration file and use ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements, webpack will take care of the rest for you."))}u.isMDXComponent=!0}}]);