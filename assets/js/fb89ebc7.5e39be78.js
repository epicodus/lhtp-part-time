"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[58002],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,c=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return r?n.createElement(c,s(s({ref:t},p),{},{components:r})):n.createElement(c,s({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={title:"HTTP CRUD Methods",id:"http-crud-methods",slug:"http-crud-methods",hide_table_of_contents:!0,sidebar_position:32,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2b_http_crud_methods.md"},s=void 0,i={unversionedId:"c-and-net/basic-web-applications/http-crud-methods",id:"c-and-net/basic-web-applications/http-crud-methods",title:"HTTP CRUD Methods",description:"In this lesson, we'll discuss CRUD functionality and cover the remaining two HTTP methods: PATCH and DELETE. Together, the functionality offered by the full range of HTTP methods (GET, POST, PATCH and DELETE) is commonly referred to as CRUD in the industry.",source:"@site/docs/c-and-net/8_basic-web-applications/2b-http-crud-methods.md",sourceDirName:"c-and-net/8_basic-web-applications",slug:"/c-and-net/basic-web-applications/http-crud-methods",permalink:"/c-and-net/basic-web-applications/http-crud-methods",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"HTTP CRUD Methods",id:"http-crud-methods",slug:"http-crud-methods",hide_table_of_contents:!0,sidebar_position:32,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2b_http_crud_methods.md"},sidebar:"c-and-net",previous:{title:"To Do List, Car Dealership, Parcels, Job Board - Part 2 (day 2)",permalink:"/c-and-net/basic-web-applications/to-do-list-car-dealership-parcels-job-board---part-2-day-2"},next:{title:"Deleting Items",permalink:"/c-and-net/basic-web-applications/deleting-items"}},l={},d=[{value:"HTTP Request Methods",id:"http-request-methods",level:2},{value:"GET",id:"get",level:3},{value:"The <em>Read</em> Part of CRUD",id:"the-read-part-of-crud",level:4},{value:"POST",id:"post",level:3},{value:"The <em>Create</em> Part of CRUD",id:"the-create-part-of-crud",level:4},{value:"PATCH",id:"patch",level:3},{value:"The <em>Update</em> Part of CRUD",id:"the-update-part-of-crud",level:4},{value:"DELETE",id:"delete",level:3},{value:"The <em>Delete</em> Part of CRUD",id:"the-delete-part-of-crud",level:4},{value:"Visual Reference",id:"visual-reference",level:2},{value:"Limitations of HTML Forms",id:"limitations-of-html-forms",level:2},{value:"Working Around HTML Limitations in MVC",id:"working-around-html-limitations-in-mvc",level:3}],p={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll discuss ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," functionality and cover the remaining two HTTP methods: PATCH and DELETE. Together, the functionality offered by the full range of HTTP methods (GET, POST, PATCH and DELETE) is commonly referred to as ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," in the industry."),(0,a.kt)("h2",{id:"http-request-methods"},"HTTP Request Methods"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CRUD")," stands for ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"C"),"reate ",(0,a.kt)("strong",{parentName:"em"},"R"),"ead ",(0,a.kt)("strong",{parentName:"em"},"U"),"pdate ",(0,a.kt)("strong",{parentName:"em"},"D"),"elete"),". It's essentially shorthand for the full list of things we can do with objects in MVC programs. Each of these actions corresponds with a different HTTP method. Let's walk through each part of CRUD, and discuss the HTTP method that corresponds with each CRUD term. Some of this will be review:"),(0,a.kt)("h3",{id:"get"},"GET"),(0,a.kt)("h4",{id:"the-read-part-of-crud"},"The ",(0,a.kt)("em",{parentName:"h4"},"Read")," Part of CRUD"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GET")," requests information from the server, which is usually displayed to users. ASP.NET includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpGet()")," method for GET requests."),(0,a.kt)("h3",{id:"post"},"POST"),(0,a.kt)("h4",{id:"the-create-part-of-crud"},"The ",(0,a.kt)("em",{parentName:"h4"},"Create")," Part of CRUD"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," adds information on the server. MVC has an ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpPost()")," method for POST requests. To create POST requests, we do three things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"method")," attribute of ",(0,a.kt)("inlineCode",{parentName:"li"},"post")," to an HTML form."),(0,a.kt)("li",{parentName:"ol"},"Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," attribute with the intended path of the post request."),(0,a.kt)("li",{parentName:"ol"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," attribute of ",(0,a.kt)("inlineCode",{parentName:"li"},"submit")," to the form's button.")),(0,a.kt)("p",null,"When the form is submitted, it will trigger a POST request."),(0,a.kt)("p",null,"In MVC, ",(0,a.kt)("strong",{parentName:"p"},"HTML forms without a ",(0,a.kt)("inlineCode",{parentName:"strong"},"method")," attribute of ",(0,a.kt)("inlineCode",{parentName:"strong"},"post")," are sent as GET requests instead.")," This is a common error!"),(0,a.kt)("h3",{id:"patch"},"PATCH"),(0,a.kt)("h4",{id:"the-update-part-of-crud"},"The ",(0,a.kt)("em",{parentName:"h4"},"Update")," Part of CRUD"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PATCH")," also updates the server, but in a more specific manner than POST. PATCH updates ",(0,a.kt)("em",{parentName:"p"},"existing")," information while POST usually adds entirely new data to the server."),(0,a.kt)("p",null,"For instance, if we update the caption of a photo we posted on Facebook, we're submitting a PATCH request. The photo already exists on their server and we're just updating one of the photo's attributes."),(0,a.kt)("p",null,"Here's a handy trick to remember the difference between POST and PATCH:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PATCH is like patching an old pair of jeans or a favorite quilt. The (well-loved) item already exists, we're just altering it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"POST is like posting to social media. That photo, tweet, or status didn't exist on their servers until you posted it. You're making something new!"))),(0,a.kt)("h3",{id:"delete"},"DELETE"),(0,a.kt)("h4",{id:"the-delete-part-of-crud"},"The ",(0,a.kt)("em",{parentName:"h4"},"Delete")," Part of CRUD"),(0,a.kt)("p",null,"As its name suggests, ",(0,a.kt)("strong",{parentName:"p"},"DELETE")," removes data from the server. It, too, is like a more specific POST request. It does not add any new information and simply removes the specified data."),(0,a.kt)("h2",{id:"visual-reference"},"Visual Reference"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It's a bit confusing that CRUD terms don't match the HTTP method names (besides DELETE). However, it'll become second-nature before too long. For now, here's a handy reference:"),(0,a.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/http-crud-methods-screenshot-1.png",width:"100%"}),(0,a.kt)("h2",{id:"limitations-of-html-forms"},"Limitations of HTML Forms"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It's also important to understand the limitations of HTML forms. Primarily, ",(0,a.kt)("strong",{parentName:"p"},"HTML forms can only trigger GET and POST requests"),"."),(0,a.kt)("p",null,"At one point, early drafts of HTML5 forms ",(0,a.kt)("em",{parentName:"p"},"did")," support different requests. Those curious can see drafts from W3 ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/2010/WD-html5-20100624/association-of-controls-and-forms.html#attr-fs-method"},"here"),". (W3 is the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/Consortium/"},"World Wide Web Consortium"),". They develop standards for HTML and the web as a whole.) But support was ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/Bugs/Public/show_bug.cgi?id=10671"},"later removed")," before HTML5's release."),(0,a.kt)("h3",{id:"working-around-html-limitations-in-mvc"},"Working Around HTML Limitations in MVC"),(0,a.kt)("p",null,"ASP.NET Core 6.0 ",(0,a.kt)("em",{parentName:"p"},"does")," actually contain ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpPut()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpDelete()")," methods to define routes to handle these requests. However, we cannot trigger them using forms. Even a button that submits a request technically counts as an HTML form."),(0,a.kt)("p",null,"These methods are only included to create APIs, where other websites request data without forms or front-end user interfaces, so they don't encounter the same limitations. We'll be building APIs with ASP.NET later in this course."),(0,a.kt)("p",null,"Because ",(0,a.kt)("strong",{parentName:"p"},"HTML forms only execute GET and POST requests, we must use POST requests to update and/or delete records.")," This may feel hacky, but until HTML itself changes, it's the industry standard. We'll see how this works in the next few lessons."))}h.isMDXComponent=!0}}]);