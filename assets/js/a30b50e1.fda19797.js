"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9146],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7896),r=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Lists and Redirects in a Controller",id:"lists-and-redirects-in-a-controller",slug:"lists-and-redirects-in-a-controller",hide_table_of_contents:!0,sidebar_position:27,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1e_lists_and_redirects_in_a_controller.md"},a=void 0,l={unversionedId:"c-and-net/basic-web-applications/lists-and-redirects-in-a-controller",id:"c-and-net/basic-web-applications/lists-and-redirects-in-a-controller",title:"\ud83d\udcd3 Lists and Redirects in a Controller",description:"We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a list of things to do, not a single item.",source:"@site/docs/c-and-net/8_basic-web-applications/1e-lists-and-redirects-in-a-controller.md",sourceDirName:"c-and-net/8_basic-web-applications",slug:"/c-and-net/basic-web-applications/lists-and-redirects-in-a-controller",permalink:"/c-and-net/basic-web-applications/lists-and-redirects-in-a-controller",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"\ud83d\udcd3 Lists and Redirects in a Controller",id:"lists-and-redirects-in-a-controller",slug:"lists-and-redirects-in-a-controller",hide_table_of_contents:!0,sidebar_position:27,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1e_lists_and_redirects_in_a_controller.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Request-Response Loop and HTTP Methods with ASP.NET Core MVC",permalink:"/c-and-net/basic-web-applications/request-response-loop-and-http-methods-with-aspnet-core-mvc"},next:{title:"\ud83d\udcd3 Loops and Conditionals with Razor",permalink:"/c-and-net/basic-web-applications/loops-and-conditionals-with-razor"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a ",(0,r.kt)("em",{parentName:"p"},"list")," of things to do, not a single item."),(0,r.kt)("p",null,"In this lesson, we'll update our controller to return a list of to dos. In the process, we'll also cover using redirects to DRY up our code. In the next lesson, we'll update our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.cshtml")," view to display our list."),(0,r.kt)("p",null,"Let's change our controller code to pass in multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s to the view, not just a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),". Note that this will not compile until we update our views, in the next lesson:"),(0,r.kt)("div",{class:"filename"},"HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nusing System.Collections.Generic;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [HttpGet("/")]\n    public ActionResult Index()\n    {\n\n      List<Item> allItems = Item.GetAll();\n      return View(allItems);\n    }\n\n    ...\n\n    [HttpPost("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return RedirectToAction("Index");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"First, we need to update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route method so that the route has access to all ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s. We'll use the static ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAll()")," method to store a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s in the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"allItems"),". We then pass ",(0,r.kt)("inlineCode",{parentName:"p"},"allItems")," to the view."),(0,r.kt)("p",null,"Note that we also need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"using System.Collections.Generic;")," to our file now that we've added a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," to our controller."),(0,r.kt)("p",null,"We also make an update to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," route method as well. As we discussed in the last lesson, this route only needs to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),". It doesn't care about updating a view. While we could add ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Item> allItems = Item.GetAll();")," to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," method, it wouldn't be very DRY."),(0,r.kt)("p",null,"Instead, we can use a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"RedirectToAction()")," to redirect to another route. ",(0,r.kt)("inlineCode",{parentName:"p"},"RedirectToAction()")," takes a route method as an argument. ",(0,r.kt)("inlineCode",{parentName:"p"},'RedirectToAction("Index");')," tells the server to invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route after the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," route has been invoked. This means we don't have to repeat the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()"),". We can just tell ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," to redirect to ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," instead."),(0,r.kt)("p",null,"In the next lesson, we'll update our view to display a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s with loops and conditionals."))}u.isMDXComponent=!0}}]);