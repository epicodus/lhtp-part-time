"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[95054],{30876:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(2784);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),d=i,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return o?n.createElement(m,r(r({ref:t},u),{},{components:o})):n.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},71558:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7896),i=(o(2784),o(30876));const a={title:"Hosting with Firebase",id:"hosting-with-firebase",slug:"hosting-with-firebase",hide_table_of_contents:!0,sidebar_position:30,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2c_hosting_with_firebase.md",paginationNext:null},r=void 0,l={unversionedId:"react/react-with-nosql/hosting-with-firebase",id:"react/react-with-nosql/hosting-with-firebase",title:"Hosting with Firebase",description:"In addition to providing database and authentication functionality, Firebase also provides free hosting (at least for smaller sites). As a site scales up, Firebase services do have a cost. However, this is a great solution for smaller portfolio sites. If you do end up building a site that scales, that can be a good problem to have \u2014 perhaps you have the beginnings of a start-up. If so, a cloud-based solution like Firebase will help with many of the headaches that scaling up can cause, ranging from efficient database queries to fast hosting.",source:"@site/docs/react/8_react-with-nosql/2c-hosting-with-firebase.md",sourceDirName:"react/8_react-with-nosql",slug:"/react/react-with-nosql/hosting-with-firebase",permalink:"/react/react-with-nosql/hosting-with-firebase",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Hosting with Firebase",id:"hosting-with-firebase",slug:"hosting-with-firebase",hide_table_of_contents:!0,sidebar_position:30,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2c_hosting_with_firebase.md",paginationNext:null},sidebar:"react",previous:{title:"Adding Wait Time to the Queue",permalink:"/react/react-with-nosql/adding-wait-time-to-the-queue"},next:{title:"Applying for Jobs",permalink:"/react/react-with-nosql/applying-for-jobs"}},s={},p=[{value:"Log In to Firebase via Command Line",id:"log-in-to-firebase-via-command-line",level:2},{value:"Starting the Hosting Process",id:"starting-the-hosting-process",level:2},{value:"Connecting To a Firebase Project",id:"connecting-to-a-firebase-project",level:2},{value:"Configuring Project Hosting Details",id:"configuring-project-hosting-details",level:2},{value:"<code>firebase.json</code>",id:"firebasejson",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Re-Deploying",id:"re-deploying",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to providing database and authentication functionality, Firebase also provides free hosting (at least for smaller sites). As a site scales up, Firebase services do have a cost. However, this is a great solution for smaller portfolio sites. If you do end up building a site that scales, that can be a good problem to have \u2014 perhaps you have the beginnings of a start-up. If so, a cloud-based solution like Firebase will help with many of the headaches that scaling up can cause, ranging from efficient database queries to fast hosting."),(0,i.kt)("p",null,"In this lesson, we'll cover the steps necessary to host a site using Firebase. Fortunately, it's very easy to deploy with Firebase CLI. "),(0,i.kt)("p",null,"Start by installing the Firebase CLI globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm install -g firebase-tools\n")),(0,i.kt)("h2",{id:"log-in-to-firebase-via-command-line"},"Log In to Firebase via Command Line"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To actually use the Firebase CLI, we need to log in with the following command in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"firebase login\n")),(0,i.kt)("p",null,"This should prompt you to sign in via your Google account in the browser. In any case, make sure to provide the username and password you use to sign into the Firebase console."),(0,i.kt)("p",null,"We can verify we are connected by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"firebase projects:list\n")),(0,i.kt)("p",null,"This will list out all of our Firebase projects."),(0,i.kt)("h2",{id:"starting-the-hosting-process"},"Starting the Hosting Process"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll continue to use the Help Queue as our examle project to learn how to host with Firebase, so navigate to the root directory of your Help Queue project. To begin the hosting process, run the following command. This command should always be run in the root directory of the project you want to host."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ firebase init hosting\n")),(0,i.kt)("p",null,"You'll be prompted with the question: ",(0,i.kt)("inlineCode",{parentName:"p"},"You're about to initialize a Firebase project in this directory. Are you ready to proceed?"),". As a response, input ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," into the command line."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-init-hosting.png",alt:"Terminal output from running `firebase init hosting`."})),(0,i.kt)("h2",{id:"connecting-to-a-firebase-project"},"Connecting To a Firebase Project"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we'll be prompted to select a Firebase project to connect our local repo to. This is the message we'll see in the terminal:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"First, let's associate this project directory with a Firebase project.\nYou can create multiple project aliases by running firebase use --add,\nbut for now we'll just set up a default project.")),(0,i.kt)("p",null,"Next, we'll be prompted to select a default Firebase project for our local project directory. You can select either a new or existing project. Since we're hosting our Help Queue app and we already have a Firebase project for it, we'll select ",(0,i.kt)("inlineCode",{parentName:"p"},"Use an existing project"),"."),(0,i.kt)("p",null,"Firebase will then list all of the Firebase projects that you have. This list should match all of the projects that you have created in the Firebase console. Select the project that you want to connect to. We'll choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"help-queue")," Firebase project in order to associate it with our local Help Queue project."),(0,i.kt)("h2",{id:"configuring-project-hosting-details"},"Configuring Project Hosting Details"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we'll be taken through a series of prompts for \"Hosting Setup,\" which will configure our project's deployment details. "),(0,i.kt)("p",null,"For the question ",(0,i.kt)("inlineCode",{parentName:"p"},"What do you want to use as your public directory?"),", type in ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),". (You can also just hit enter and change the configuration file later, which we'll discuss soon.)"),(0,i.kt)("p",null,"Next, for the question ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure as a single-page app (rewrite all urls to /index.html)?"),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"."),(0,i.kt)("p",null,"Next, for the question ",(0,i.kt)("inlineCode",{parentName:"p"},"Set up automatic builds and deploys with GitHub? (y/N)"),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"."),(0,i.kt)("p",null,"Finally, for the question ",(0,i.kt)("inlineCode",{parentName:"p"},"File public/index.html already exists. Overwrite? (y/N)"),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"."),(0,i.kt)("p",null,"At this point, Firebase will automatically generate ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".firebaserc")," files for us. Then, we'll see a success message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"+  Firebase initialization complete!\n")),(0,i.kt)("h3",{id:"firebasejson"},(0,i.kt)("inlineCode",{parentName:"h3"},"firebase.json")),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.json")," file should look similar to this one (but may not match exactly):"),(0,i.kt)("div",{class:"filename"},"firebase.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "hosting": {\n    "public": "build",\n    "ignore": [\n      "firebase.json",\n      "**/.*",\n      "**/node_modules/**"\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},'"public"')," needs to have a value of ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"')," because create-react-app will put all of our assets in a ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory when we run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build"),". If it has a different value in your ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.json"),", you should change it now."),(0,i.kt)("h2",{id:"deploying"},"Deploying"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we should create a build of our project to make sure there are no issues that need resolving in our project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm run build\n")),(0,i.kt)("p",null,"We are almost ready to deploy. However, it's a good idea to make sure everything looks good ",(0,i.kt)("em",{parentName:"p"},"before")," we deploy. We can do this with ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase")," CLI tools. In the root directory of your project, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ firebase serve\n")),(0,i.kt)("p",null,"This will run our project at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),". You can make sure that everything looks just as you expect."),(0,i.kt)("p",null,"Once you are done, you can shut down the local server and deploy your project with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ firebase deploy --only hosting\n")),(0,i.kt)("p",null,"You'll get output similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ firebase deploy --only hosting\n\n=== Deploying to 'help-queue-dc855'...\n\ni  deploying hosting\ni  hosting[help-queue-dc855]: beginning deploy...\ni  hosting[help-queue-dc855]: found 15 files in build\n+  hosting[help-queue-dc855]: file upload complete\ni  hosting[help-queue-dc855]: finalizing version...\n+  hosting[help-queue-dc855]: version finalized\ni  hosting[help-queue-dc855]: releasing new version...\n+  hosting[help-queue-dc855]: release complete\n\n+  Deploy complete!\n\nProject Console: https://console.firebase.google.com/project/help-queue-dc855/overview\nHosting URL: https://help-queue-dc855.web.app\n")),(0,i.kt)("p",null,"Firebase will deploy our project to the following subdomains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PROJECT_ID.web.app\nPROJECT_ID.firebaseapp.com\n")),(0,i.kt)("p",null,"Where, ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"PROJECT_ID"))," is the name of your project. In the example code above, the name of the project is ",(0,i.kt)("inlineCode",{parentName:"p"},"help-queue-dc855"),", so we'd be able to find our project at these locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://help-queue-dc855.web.app/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://help-queue-dc855.firebaseapp.com/"))),(0,i.kt)("h3",{id:"re-deploying"},"Re-Deploying"),(0,i.kt)("p",null,"If you need to make changes to your application and deploy again, follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make the changes in your code."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")," to create a build that's optimized for production."),(0,i.kt)("li",{parentName:"ul"},"Optionally, run ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase serve")," to make sure your project works and looks as expected."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase deploy --only hosting")," to deploy your project again.")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If you want to access and configure other Firebase services from the command line, you can access these options with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ firebase init\n")),(0,i.kt)("p",null,"You'll see output similar to what follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-init.png",alt:"Terminal output from running `firebase init`."})),(0,i.kt)("p",null,"Generally you won't be configuring Firebase services via the command line until you learn exactly what is involved with the service you are implementing, so make sure to reference ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cli"},"the docs on the Firebase CLI"),", as well as ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/build"},"the general Firebase user guides for their product offerings"),"."),(0,i.kt)("p",null,"Similarly, if you want to deploy another firebase service other than hosting, you would use another flag, or the deploy command without a flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ firebase deploy\n")),(0,i.kt)("p",null,"You may also want to add a custom domain for your hosted site, especially if this is a portfolio site. For more information on setting up your own domain, check out ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting/custom-domain"},"Firebase's custom domain documentation"),"."),(0,i.kt)("p",null,"Finally, if your deployed site is connected to a database, it's highly recommended that you take a closer look at Firebase's ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/rules"},"security rules"),". Remember how the default rules that Firebase provides allow full read/write access for just thirty days? This is intentional. Having full read/write access while developing a site that no one else can access is fine. However, once the site is deployed, you'll need to update these security rules."))}h.isMDXComponent=!0}}]);