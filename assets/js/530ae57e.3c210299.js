"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[178],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const o={title:"\ud83d\udcd3 API: Update and Delete",id:"api-update-and-delete",slug:"api-update-and-delete",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_API_update_and_delete.md"},l=void 0,r={unversionedId:"c-and-net/building-an-api/api-update-and-delete",id:"c-and-net/building-an-api/api-update-and-delete",title:"\ud83d\udcd3 API: Update and Delete",description:"In the last lesson, we added create and read functionality to our Cretaceous Park API. In this lesson, we'll add update and delete functionality as well.",source:"@site/docs/c-and-net/16_building-an-api/0f-API-update-and-delete.md",sourceDirName:"c-and-net/16_building-an-api",slug:"/c-and-net/building-an-api/api-update-and-delete",permalink:"/c-and-net/building-an-api/api-update-and-delete",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\ud83d\udcd3 API: Update and Delete",id:"api-update-and-delete",slug:"api-update-and-delete",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_API_update_and_delete.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 API: Create and Read",permalink:"/c-and-net/building-an-api/api-create-and-read"},next:{title:"\ud83d\udcd3 API: Adding Parameters to a Get Request to Support Query Strings",permalink:"/c-and-net/building-an-api/api-adding-parameters-to-a-get-request-to-support-query-strings"}},s={},p=[{value:"Adding Update Functionality",id:"adding-update-functionality",level:2},{value:"Test It Out!",id:"test-it-out",level:3},{value:"Supporting Partial Updates",id:"supporting-partial-updates",level:3},{value:"Adding Delete Functionality",id:"adding-delete-functionality",level:2},{value:"Benefits of RESTful Standards",id:"benefits-of-restful-standards",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we added create and read functionality to our Cretaceous Park API. In this lesson, we'll add update and delete functionality as well."),(0,i.kt)("h2",{id:"adding-update-functionality"},"Adding Update Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll start by editing an animal. In order to do so, we'll use a new HTTP verb in our route called PUT. PUT is like POST in that it makes a change to the server. However, PUT changes existing information while POST creates new information. Because of this PUT requires a body with the entire updated animal object (including the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId"),"). We'll make PUT requests to this endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PUT http://localhost:5000/api/animals/{id}\n")),(0,i.kt)("p",null,"Here's our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Put()")," controller action:"),(0,i.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    // PUT: api/Animals/5\n    [HttpPut("{id}")]\n    public async Task<IActionResult> Put(int id, Animal animal)\n    {\n      if (id != animal.AnimalId)\n      {\n        return BadRequest();\n      }\n\n      _db.Animals.Update(animal);\n\n      try\n      {\n        await _db.SaveChangesAsync();\n      }\n      catch (DbUpdateConcurrencyException)\n      {\n        if (!AnimalExists(id))\n        {\n          return NotFound();\n        }\n        else\n        {\n          throw;\n        }\n      }\n\n      return NoContent();\n    }\n\n    private bool AnimalExists(int id)\n    {\n      return _db.Animals.Any(e => e.AnimalId == id);\n    }\n...\n')),(0,i.kt)("p",null,"Once again, this looks similar to code we'd use in an MVC web application, with a few key differences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpPut]")," verb template. This specifies that the request made to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Put()")," controller action needs to specify the PUT Http action verb.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We'll determine which animal will be updated based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," parameter in the URL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, we check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," in the request URL matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"animal.AnimalId")," property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," object passed into our controller action by the request body. If they do not match, it means that the request is poorly formatted, so we use ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.badrequest?view=aspnetcore-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase.BadRequest()")," method")," to return a HTTP status code of 400 Bad Request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the request is formatted correctly, then we proceed to updating the animal in our database. The code to update an animal should already be familiar. We use EF Core's built-in methods to update the animal in the database and then save the changes. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We then ask our database to save changes asynchronously. In the process of doing this, we handle the possible error of the animal with the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," not existing. To do this we use a try/catch block along with a newly created private method called ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalExists()")," (for use within the controller, and to DRY up our code). If an animal by the specified id in the request URL does not exist, then we'll return a 404 Not Found HTTP status code via ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.notfound?view=aspnetcore-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase.NotFound()")," method"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, notice that we return ",(0,i.kt)("inlineCode",{parentName:"p"},"NoContent();")," at the end of the method. This will return a HTTP status code of 204 No Content, which means that the request has completed successfully, but there's no need to navigate away from the current page. To learn more about the 204 status code, visit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204"},"the MDN docs"),"."))),(0,i.kt)("h3",{id:"test-it-out"},"Test It Out!"),(0,i.kt)("p",null,"Let's test our new PUT API endpoint using Postman."),(0,i.kt)("p",null,"We'll make a call to the following endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),". This is exactly the same as the URL for getting an individual animal's details. The difference is that we need to specify a PUT request instead of a GET request."),(0,i.kt)("p",null,"According to the HTTP specification, a PUT request requires the client to send the entire updated entity, not just the changes. The body of the API call will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "animalId": 1,\n  "species": "Woolly Mammoth",\n  "name": "Matilda the Woolly Mammoth",\n  "age": 8\n}\n')),(0,i.kt)("p",null,"This specifies that an animal with an ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," property of 1 (as specified in the URL of ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),") should be updated so that it's now Matilda the Woolly Mammoth with an age of 8. Here's how this request will look in Postman:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet-web-api-postman-put-request-with-body.png",alt:"Adding a body to a PUT request to `http://localhost:5000/api/animals/1` using Postman."})),(0,i.kt)("p",null,"We'll see a 204 No Content response from the API if our request is successful. "),(0,i.kt)("p",null,"We can also confirm that our animal has been updated as expected by changing our PUT request into a GET request in Postman and then making another call to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),". We should get our edited animal back."),(0,i.kt)("h3",{id:"supporting-partial-updates"},"Supporting Partial Updates"),(0,i.kt)("p",null,"As noted earlier, the PUT action requires an entire object with all of its properties in order to make an update to it in the database. Well, there's an alternative to this: to support partial updates, use PATCH instead:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH"},"PATCH on MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/jsonpatch?view=aspnetcore-6.0"},"Handling PATCH requests in ASP.NET Core Web APIs"))),(0,i.kt)("h2",{id:"adding-delete-functionality"},"Adding Delete Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now we're ready to add delete functionality. To do so, we'll use a new HTTP verb in a new controller action called ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAnimal()"),". We'll make DELETE requests to the following endpoint, where ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," is the variable for the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," of the animal that we want to remove from out database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE http://localhost:5000/api/animals/{id}\n")),(0,i.kt)("p",null,"Here's the new ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAnimal()")," controller action:"),(0,i.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    // DELETE: api/Animals/5\n    [HttpDelete("{id}")]\n    public async Task<IActionResult> DeleteAnimal(int id)\n    {\n      Animal animal = await _db.Animals.FindAsync(id);\n      if (animal == null)\n      {\n        return NotFound();\n      }\n\n      _db.Animals.Remove(animal);\n      await _db.SaveChangesAsync();\n\n      return NoContent();\n    }\n...\n')),(0,i.kt)("p",null,"Note the new ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpDelete]")," verb template. It takes an argument for ",(0,i.kt)("inlineCode",{parentName:"p"},'"{id}"'),", which means that the request URL is supposed to be ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE http://localhost:5000/api/animals/{id}"),". It also means that we are relying on the URL to get the animal's id, just like with our ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Put()")," controller action methods."),(0,i.kt)("p",null,"Also just like our other controller actions, our ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAnimal()")," method is asynchronous and it makes use of ",(0,i.kt)("inlineCode",{parentName:"p"},"ControllerBase")," class methods to return HTTP status codes."),(0,i.kt)("p",null,"Other than that, the code is largely the same as what we'd see in a MVC web application. EF Core doesn't care whether it gets information from an API or a web application when manipulating the database."),(0,i.kt)("p",null,"We can make our delete request by specifying the DELETE verb in Postman and making an API call to the following URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),". This will delete Matilda the Woolly Mammoth, just like time did."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet-web-api-postman-delete-request.png",alt:"Sending a DELETE request to `http://localhost:5000/api/animals/1` using Postman."})),(0,i.kt)("p",null,"We'll see a 204 No Content response from the API if our request is successful. "),(0,i.kt)("h3",{id:"benefits-of-restful-standards"},"Benefits of RESTful Standards"),(0,i.kt)("p",null,"Notice that we are able to have full CRUD functionality with only two URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals\n")),(0,i.kt)("p",null,"and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals/1\n")),(0,i.kt)("p",null,"The benefits of RESTful standards become more readily apparent with an API. Developers don't need to search through documentation in order to surmise the correct URLs for an API. "),(0,i.kt)("p",null,"While a user of a web application might not notice that a URL in the browser is RESTful, a developer using an API certainly will notice whether the URL is RESTful and easy to work with. We should always keep the names of our endpoints as RESTful as possible."),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/2_crud_functionality"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Cretaceous Park API: ",(0,i.kt)("inlineCode",{parentName:"a"},"2_crud_functionality")))))}c.isMDXComponent=!0}}]);