"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56298],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={title:"Shape Tracker, Ping Pong, Sphinx, Queen Attack",id:"shape-tracker-ping-pong-sphinx-queen-attack",slug:"shape-tracker-ping-pong-sphinx-queen-attack",hide_table_of_contents:!0,sidebar_position:5,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_shape_tracker_ping_pong_sphinx_queen_attack.md"},o=void 0,l={unversionedId:"c-and-net/test-driven-development-with-c/shape-tracker-ping-pong-sphinx-queen-attack",id:"c-and-net/test-driven-development-with-c/shape-tracker-ping-pong-sphinx-queen-attack",title:"Shape Tracker, Ping Pong, Sphinx, Queen Attack",description:"Goal: Use branching, looping, and other foundational C# concepts to build working console applications with C#. Don't worry about trying to complete all the exercises. Focus on getting more comfortable with C# and understanding key concepts.",source:"@site/docs/c-and-net/6_test-driven-development-with-c/1a-classwork-shape-tracker-ping-pong-sphinx-queen-attack.md",sourceDirName:"c-and-net/6_test-driven-development-with-c",slug:"/c-and-net/test-driven-development-with-c/shape-tracker-ping-pong-sphinx-queen-attack",permalink:"/c-and-net/test-driven-development-with-c/shape-tracker-ping-pong-sphinx-queen-attack",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Shape Tracker, Ping Pong, Sphinx, Queen Attack",id:"shape-tracker-ping-pong-sphinx-queen-attack",slug:"shape-tracker-ping-pong-sphinx-queen-attack",hide_table_of_contents:!0,sidebar_position:5,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_shape_tracker_ping_pong_sphinx_queen_attack.md"},sidebar:"c-and-net",previous:{title:"Journal #8",permalink:"/c-and-net/test-driven-development-with-c/journal-8"},next:{title:"A Closer Look at Compiling and Executing C# Programs",permalink:"/c-and-net/test-driven-development-with-c/a-closer-look-at-compiling-and-executing-c-programs"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Shape Tracker",id:"shape-tracker",level:3},{value:"Setup",id:"setup",level:4},{value:"Prompts",id:"prompts",level:4},{value:"Ping-Pong",id:"ping-pong",level:3},{value:"Riddles of the Sphinx",id:"riddles-of-the-sphinx",level:3},{value:"Queen Attack",id:"queen-attack",level:3},{value:"Hints",id:"hints",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," Use branching, looping, and other foundational C# concepts to build working console applications with C#. Don't worry about trying to complete all the exercises. Focus on getting more comfortable with C# and understanding key concepts."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is a strongly typed language?"),(0,r.kt)("li",{parentName:"ul"},"What is a compiler?"),(0,r.kt)("li",{parentName:"ul"},"What data types are included with C#? How are they different from JavaScript?"),(0,r.kt)("li",{parentName:"ul"},"What is the difference between a property and a field?"),(0,r.kt)("li",{parentName:"ul"},"What is an access modifier? What is the best practice with the access modifier we give to fields?"),(0,r.kt)("li",{parentName:"ul"},"What is an auto-implemented property?"),(0,r.kt)("li",{parentName:"ul"},"What is the entry point to console applications?"),(0,r.kt)("li",{parentName:"ul"},"What role does a project file (",(0,r.kt)("inlineCode",{parentName:"li"},".csproj")," file) play in console apps?"),(0,r.kt)("li",{parentName:"ul"},"In terms of project structure, where is code for our console's user interface placed? "),(0,r.kt)("li",{parentName:"ul"},"In terms of project structure, where is business logic placed?  ")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Complete the Shape Tracker project prompt listed below, then move on to any other project prompt.")," Complete as many additional projects as you have the time for. It's okay if you only work on the Shape Tracker project prompt."),(0,r.kt)("h3",{id:"shape-tracker"},"Shape Tracker"),(0,r.kt)("p",null,"Extend the functionality of the Shape Tracker app to practice with Test-Driven Development and console apps."),(0,r.kt)("h4",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You are welcome to use your own version of the Shape Tracker app, if you coded along with the weekend homework, or you can clone down the version of Shape Tracker with (almost) completed business logic, tests, and user interface logic for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class. Make sure to access the branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"2_complete_testing"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone https://github.com/epicodus-lessons/prework-TDD-with-shape-tracker-csharp-net6\n$ git fetch --all\n$ git checkout 2_complete_testing\n")),(0,r.kt)("h4",{id:"prompts"},"Prompts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We have fully tested and complete business logic for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class, but our user interface in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," doesn't give users the option to see all triangles using the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.GetAll()")," method, or clear all triangles using the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.ClearAll()")," method. It's your job to fix this issue and add in user interface for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.GetAll()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.ClearAll()")," methods. Take your time to discuss the best way to provide users access to this functionality and create a game plan for the changes you'll need to make to achieve this functionality. Since we don't have testing for the UI, you'll need to manually test your changes to ensure they are working as expected. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new model! Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," class that contains fields (or properties) for two sides and a method to calculate the area of those two sides. Here are a few notes:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic."),(0,r.kt)("li",{parentName:"ul"},"Create your business logic before you make any changes to the UI logic. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class should be in its own file within the models folder. If you are unsure what the namespace should be, or what setup should look like for the new ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle.cs")," file, revisit the pre-work lesson ",(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/c-and-net/basic-console-apps/console-app-project-structure-how-to-add-more-code-files"},"Console App Project Structure: How to Add More Code Files"),"."),(0,r.kt)("li",{parentName:"ul"},"Similarly, there should be a separate test file for the ",(0,r.kt)("inlineCode",{parentName:"li"},"RectangleTests")," class. If you are unsure what setup should look like for the new ",(0,r.kt)("inlineCode",{parentName:"li"},"RectangleTests.cs")," file, revisit the pre-work lesson ",(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/c-and-net/tdd-and-debugging/mstest-configuration-and-setup"},"Console App Project Structure: How to Add More Code Files"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure you understand the best practice of making fields private and the difference between a field, property, and auto-implemented property. If you are uncertain about any of these concepts, make sure to practice with them as you create the ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class. Revisit the relevant pre-work lessons as necessary."),(0,r.kt)("li",{parentName:"ul"},"The area of a rectangle is calculated by multiplying the two sides of a rectangle.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Optionally, create another model: the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ellipse")," class. We want our ",(0,r.kt)("inlineCode",{parentName:"li"},"Ellipse")," class to save two values for radius and calculate the area of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ellipse"),". You'll follow the same process as when you created the ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class. Here are a few important notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic."),(0,r.kt)("li",{parentName:"ul"},"Create your business logic before you make any changes to the UI logic. "),(0,r.kt)("li",{parentName:"ul"},"Make sure you are following the naming conventions for the file, class, and namespace names. "),(0,r.kt)("li",{parentName:"ul"},"To calculate the area of an ellipse, we use the formula ",(0,r.kt)("inlineCode",{parentName:"li"},"\u03c0ab"),", where we multiple pi ",(0,r.kt)("inlineCode",{parentName:"li"},"\u03c0")," by the first radius ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),", by the second radius ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),". You should use the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.math.pi?view=net-6.0"},(0,r.kt)("inlineCode",{parentName:"a"},"Math.Pi")," field")," to complete this calculation.")),(0,r.kt)("h3",{id:"ping-pong"},"Ping-Pong"),(0,r.kt)("p",null,"Ping-pong is a classic programming exercise that utilizes branching and looping. Here's how it works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user enters a number and the application returns all numbers from 1 to the user input with the following changes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All numbers divisible by 3 are replaced by ",(0,r.kt)("em",{parentName:"li"},'"ping"'),"."),(0,r.kt)("li",{parentName:"ul"},"All numbers divisible by 5 are replaced by ",(0,r.kt)("em",{parentName:"li"},'"pong"')),(0,r.kt)("li",{parentName:"ul"},"All numbers divisible by both 3 and 5 are replaced by ",(0,r.kt)("em",{parentName:"li"},'"ping-pong"'),".")))),(0,r.kt)("p",null,"If the user enters ",(0,r.kt)("inlineCode",{parentName:"p"},"15"),", the program will return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1\n2\n"ping"\n4\n"pong"\n"ping"\n7\n8\n"ping"\n"pong"\n11\n"ping"\n13\n14\n"ping-pong"\n')),(0,r.kt)("p",null,"Your goal is to write a console ping-pong application with a few requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,r.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,r.kt)("h3",{id:"riddles-of-the-sphinx"},"Riddles of the Sphinx"),(0,r.kt)("p",null,"Create a console application where the Sphinx asks a riddle and the user must answer the riddle correctly. If the riddle is answered correctly, the Sphinx asks a second riddle and so on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start with one riddle. If the user answers correctly, the Sphinx is defeated. If the user is incorrect, the Sphinx eats the user."),(0,r.kt)("li",{parentName:"ul"},"Once the application is working with a single riddle, add a few more."),(0,r.kt)("li",{parentName:"ul"},"Try writing a method to randomize which riddle the Sphinx asks.")),(0,r.kt)("p",null,"Here are the requirements for this application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,r.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,r.kt)("h3",{id:"queen-attack"},"Queen Attack"),(0,r.kt)("p",null,"In chess, a queen can move horizontally, vertically, and diagonally, making it the most powerful piece on the board. If another piece is within its line of sight along these three lines, the queen may attack it."),(0,r.kt)("p",null,"Create a console application where the user can enter X and Y coordinates for both a queen and another chess piece. The program should return whether the queen is capable of 'attacking' the other chess piece."),(0,r.kt)("p",null,"Here are the requirements for this application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use TDD and the RGR workflow to develop your business logic. "),(0,r.kt)("li",{parentName:"ul"},"Create your business logic before you create your UI logic. ")),(0,r.kt)("h4",{id:"hints"},"Hints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the user submits coordinates, the program should create an instance of a ",(0,r.kt)("inlineCode",{parentName:"li"},"Queen")," class, with properties for its X and Y coordinates."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Queen")," class should have a method that takes X and a Y coordinate as arguments, and returns ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the queen can attack the given space, and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," if it cannot."),(0,r.kt)("li",{parentName:"ul"},"A message should be displayed to inform the user of the results.")),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Did you write your business logic before your user interface logic?"),(0,r.kt)("li",{parentName:"ul"},"Did you use Test-Driven Development to create your business logic? "),(0,r.kt)("li",{parentName:"ul"},"Are tests following best practices? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Everything in the business logic has a test for it."),(0,r.kt)("li",{parentName:"ul"},"Each test tests for just one behavior."),(0,r.kt)("li",{parentName:"ul"},"If a method has multiple paths, there's a test for each path."))),(0,r.kt)("li",{parentName:"ul"},"Are all tests passing?"),(0,r.kt)("li",{parentName:"ul"},"Does your project have a ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md"),"?"),(0,r.kt)("li",{parentName:"ul"},"Does your project have a ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore"),"?")))}h.isMDXComponent=!0}}]);