"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92380],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Welcome to C#",id:"welcome-to-c",slug:"welcome-to-c",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_welcome_to_c.md",paginationPrev:null},i=void 0,l={unversionedId:"c-and-net/getting-started-with-c/welcome-to-c",id:"c-and-net/getting-started-with-c/welcome-to-c",title:"\ud83d\udcd3 Welcome to C#",description:"Welcome to the world of C# web development. C# is a strongly-typed, compiled language developed by Microsoft. In this lesson, we'll take a quick look at the language and its history.",source:"@site/docs/c-and-net/2_getting-started-with-c/0a-welcome-to-c.md",sourceDirName:"c-and-net/2_getting-started-with-c",slug:"/c-and-net/getting-started-with-c/welcome-to-c",permalink:"/c-and-net/getting-started-with-c/welcome-to-c",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udcd3 Welcome to C#",id:"welcome-to-c",slug:"welcome-to-c",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_welcome_to_c.md",paginationPrev:null},sidebar:"c-and-net",previous:{title:"C# and .NET (Part-Time)",permalink:"/c-and-net"},next:{title:"\ud83d\udcd3 Installing C# and .NET",permalink:"/c-and-net/getting-started-with-c/installing-c-and-net"}},s={},c=[{value:"What is C#?",id:"what-is-c",level:2},{value:"History",id:"history",level:2},{value:".NET Framework",id:"net-framework",level:2},{value:"Who Uses C# and .NET?",id:"who-uses-c-and-net",level:2},{value:"Pre-Work",id:"pre-work",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the world of C# web development. C# is a ",(0,a.kt)("strong",{parentName:"p"},"strongly-typed"),", ",(0,a.kt)("strong",{parentName:"p"},"compiled")," language developed by Microsoft. In this lesson, we'll take a quick look at the language and its history."),(0,a.kt)("h2",{id:"what-is-c"},"What is C#?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"C# (pronounced ",(0,a.kt)("em",{parentName:"p"},"see sharp"),") was developed by Microsoft in the late 1990's. It's part of a family of languages that evolved from the C/C++ languages, originating back in the 1960's."),(0,a.kt)("p",null,"Unlike JavaScript, C# is both ",(0,a.kt)("strong",{parentName:"p"},"compiled")," and ",(0,a.kt)("strong",{parentName:"p"},"strongly-typed"),". "),(0,a.kt)("p",null,"In a ",(0,a.kt)("strong",{parentName:"p"},"compiled")," language, the code you write is not the same as the code that your machine runs. Instead, the ",(0,a.kt)("strong",{parentName:"p"},"human-readable code")," you write is transformed, or compiled, into code that computers can read much more efficiently, which makes your code faster."),(0,a.kt)("p",null,"C# is also a ",(0,a.kt)("strong",{parentName:"p"},"strongly-typed")," language. This means every piece of data and every variable must be of a particular type. Not only that, we must explicitly list the type next to every variable we create. For example, here's a string saved to a variable in JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const myStr = "hello world";\n')),(0,a.kt)("p",null,"And here's how we would create the same string in C#:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'string myStr = "hello world";\n')),(0,a.kt)("p",null,"Notice that we list the data type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," before the name of the variable; this is what strong typing looks like, and we'll learn more about this as we continue through this course. "),(0,a.kt)("p",null,"There are many types of data in C# and there are rules about the ways the programmer can use these types of data. C# also gives you clear error messages when you don't follow the rules. We'll cover this in more detail in future lessons. Overall, strongly-typed programming languages are more secure, stable, and less error-prone."),(0,a.kt)("p",null,"The C# language also has a framework specially designed to work with it called ",(0,a.kt)("strong",{parentName:"p"},".NET")," (pronounced ",(0,a.kt)("em",{parentName:"p"},"dot net"),"). .NET can be used to quickly create software, web apps, and web APIs. We'll learn how to use .NET later in this course."),(0,a.kt)("h2",{id:"history"},"History"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'C# was originally called "Cool", which stands for ',(0,a.kt)("em",{parentName:"p"},"C-like Object-Oriented Language"),'. Microsoft ultimately decided to go with the more professional-sounding "C#" before it was announced as part of Microsoft\'s .NET initiative in 2000.'),(0,a.kt)("p",null,"Since then, it's become one of the most popular programming languages in the world. In the 2018 iteration of Stack Overflow's popular ",(0,a.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2018"},"Developer Survey"),', 35.3% of surveyed developers reported using C# regularly. 60.4% reported "loving" the language, beating out other well-known technologies like PHP, Java, and HTML by large margins. We think you\'ll love it too!'),(0,a.kt)("h2",{id:"net-framework"},".NET Framework"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Microsoft created the ",(0,a.kt)("strong",{parentName:"p"},".NET Framework")," around the same time C# was developed. A ",(0,a.kt)("strong",{parentName:"p"},"framework")," like .NET provides built-in code and functionality, which makes writing code easier and more efficient. .NET even includes a special environment for running C# applications."),(0,a.kt)("p",null,"Microsoft created the ",(0,a.kt)("strong",{parentName:"p"},".NET Framework")," around the same time C# was developed. A ",(0,a.kt)("strong",{parentName:"p"},"framework")," like .NET provides built-in code and functionality, which makes writing code easier and more efficient. .NET even includes a special environment for running C# applications."),(0,a.kt)("p",null,"Microsoft created the ",(0,a.kt)("strong",{parentName:"p"},".NET")," framework around the same time C# was developed. A ",(0,a.kt)("strong",{parentName:"p"},"framework")," like .NET provides built-in code and functionality, which makes writing code easier and more efficient. .NET even includes a special environment for running C# applications."),(0,a.kt)("p",null,'With cross-platform development so common, Microsoft moved to combine these tools (the original .NET Framework and .NET Core) in to one cross-platform framework called ".NET". This started with .NET 5 in 2020, and now Microsoft releases a new version of the modern .NET framework every year.'),(0,a.kt)("p",null,"Note that .NET (versions 5 and up) hasn't entirely replaced the original .NET framework, but it does replace .NET Core, and it is considered the new and modern standard."),(0,a.kt)("h2",{id:"who-uses-c-and-net"},"Who Uses C# and .NET?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Due to its longstanding reliability, C# can be found in almost every industry. Many private and public companies use C# for internal software, including financial services companies, medical facilities and educational institutions. It's also commonly used to create applications that run on Windows such as the Windows Installer, Skype, Silverlight (Netflix's video streaming player), and more. It's also a popular choice in video-game development and is used in Unity, Unreal Engine, Anvil, and other platforms."),(0,a.kt)("h2",{id:"pre-work"},"Pre-Work"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The next few lessons walk through installing necessary technologies for this course on your machine. (All necessary technologies are already installed on Epicodus computers.)"),(0,a.kt)("p",null,"The remainder of the pre-work homework will review general programming concepts we learned in Intro and Intermediate JS, such as variables, loops, objects, and branching. We'll discuss how to implement these same concepts in C#. Then, we'll learn how to create \"console apps\", applications that run in the command line."))}u.isMDXComponent=!0}}]);