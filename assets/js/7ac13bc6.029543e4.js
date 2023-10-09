"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43157],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),h=o,m=l["".concat(d,".").concat(h)]||l[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Address Book: Unique IDs",id:"address-book-unique-ids",slug:"address-book-unique-ids",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0j_address_book_unique_ids.md"},r=void 0,s={unversionedId:"intermediate-javascript/object-oriented-javascript/address-book-unique-ids",id:"intermediate-javascript/object-oriented-javascript/address-book-unique-ids",title:"\ud83d\udcd3 Address Book: Unique IDs",description:"As mentioned in the last lesson, a real world application would use a database. In a database, each individual Contact would have a unique ID. This allows us to identify records by a unique ID instead of something like their name, which isn't guaranteed to be unique. Right now, we are identifying each of our Contacts by their firstName property. However, there are multiple problems with that approach. An ID needs to be unique \u2014 but what if you have two Contacts that each have the same firstName property? In our case, it would be better if each Contact has a numerical ID \u2014 and we'll want to ensure that each ID is different \u2014 just like in a real database.",source:"@site/docs/intermediate-javascript/3_object-oriented-javascript/0j-address-book-unique-ids.md",sourceDirName:"intermediate-javascript/3_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/address-book-unique-ids",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-unique-ids",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\ud83d\udcd3 Address Book: Unique IDs",id:"address-book-unique-ids",slug:"address-book-unique-ids",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0j_address_book_unique_ids.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 Address Book: Objects Within Objects",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-objects-within-objects"},next:{title:"\ud83d\udcd3 Address Book: Finding and Deleting Contacts",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-finding-and-deleting-contacts"}},d={},p=[{value:"Unique Object IDs",id:"unique-object-ids",level:2}],c={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As mentioned in the last lesson, a real world application would use a database. In a database, each individual ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," would have a unique ID. This allows us to identify records by a unique ID instead of something like their name, which isn't guaranteed to be unique. Right now, we are identifying each of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s by their ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," property. However, there are multiple problems with that approach. An ID needs to be unique \u2014 but what if you have two ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s that each have the same ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," property? In our case, it would be better if each ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," has a numerical ID \u2014 and we'll want to ensure that each ID is different \u2014 just like in a real database."),(0,o.kt)("h2",{id:"unique-object-ids"},"Unique Object IDs"),(0,o.kt)("p",null,"Let's update our code so each ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," is assigned an ID as soon as it's created."),(0,o.kt)("p",null,"We'll update several functions to make this work. First, let's update the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," constructor to instantiate new ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),"s with a ",(0,o.kt)("inlineCode",{parentName:"p"},"currentId")," property:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n  this.currentId = 0;\n}\n\n...\n")),(0,o.kt)("p",null,"Now each time a new ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," is created, it will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"currentId")," property that begins at ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". What is the point of doing this? Well, our IDs are going to increase sequentially. But how does our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," know the lowest available ID that hasn't been used yet? It would be terribly inefficient to have to look through ",(0,o.kt)("em",{parentName:"p"},"all")," the stored ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s to see which IDs aren't being used \u2014 and it wouldn't even be effective because it wouldn't account for the IDs of deleted ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s. In a real-world database, an ID is ",(0,o.kt)("em",{parentName:"p"},"never")," reused \u2014 even if the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," or other entry it's referring to is deleted."),(0,o.kt)("p",null,"So we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"this.currentId")," to track the next available ID number that we can issue to a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),". This means that our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," also needs to handle assigning IDs and incrementing ",(0,o.kt)("inlineCode",{parentName:"p"},"this.currentId")," by 1. We'll do this by defining another prototype method called ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.assignId()"),":"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Business Logic for AddressBook ---------\n\n...\n\nAddressBook.prototype.assignId = function() {\n  this.currentId += 1;\n  return this.currentId;\n};\n\n...\n")),(0,o.kt)("p",null,"This new method will increment the ",(0,o.kt)("inlineCode",{parentName:"p"},"this.currentId")," property on the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," object by 1 and return the updated value. This mimics a database by creating sequentially incrementing ID values which are never repeated so they are always unique."),(0,o.kt)("p",null,"Finally, we need to call this new ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.assignId()")," method whenever we add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),". We already have a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.addContact()")," that adds contacts to our mock database. We just need to update it to use our new sequential IDs as keys instead of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," property."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Business Logic for AddressBook ---------\n\n...\n\nAddressBook.prototype.addContact = function(contact) {\n  contact.id = this.assignId();\n  this.contacts[contact.id] = contact;\n};\n\n...\n")),(0,o.kt)("p",null,"Let's take a closer look at the updates here."),(0,o.kt)("p",null,"First take note that the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," instance that we are calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.addContact()")," method on. Anytime we are in a prototype method and we refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", we are referencing the object instance that the method is called on. The same is true for constructor functions. Anytime we are in a constructor function and we reference ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", we are referring to the object instance that the constructor function creates.  "),(0,o.kt)("p",null,"When we call ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.addContact(contact)"),", we are passing in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object that has ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"phoneNumber")," properties. It doesn't have an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property yet."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"contact.id = this.assignId();"),", we create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object that we are passing into ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.addContact()"),", and we set its value to the result of calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.assignId()")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.assignId()")," method increments ",(0,o.kt)("inlineCode",{parentName:"p"},"this.currentId")," by 1 and returns a number representing the current ID, and this number is what is assigned as the value of the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object."),(0,o.kt)("p",null,"Technically, we don't need a separate method for assigning IDs \u2014 but it's always a good idea to keep our code separate. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.assignId()")," has only one job \u2014 figure out the next sequential ID and return it. It doesn't need to know anything about contacts. If we later decided to use a different system for assigning IDs, we'd only need to change the code in one place. This principle to follow when writing code is called ",(0,o.kt)("strong",{parentName:"p"},"separation of concerns"),"."),(0,o.kt)("p",null,"Another important thing to emphasize is that we can add new properties to an object whenever we want. It doesn't have to happen in an object's constructor. For instance, there's no mention of an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," constructor. We could ",(0,o.kt)("em",{parentName:"p"},"technically")," do something like this in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," constructor \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"this.id = undefined"),". It's not very clean, though, and it's completely unnecessary to do so. Instead, we can easily add this new property later \u2014 and that's exactly what we do in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.addContact()")," function."),(0,o.kt)("p",null,"Finally, we're also using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"'s new ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property as a key when we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.contacts[contact.id] = contact;\n")),(0,o.kt)("p",null,"In this line of code, ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," we've created. Our instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," property which itself contains an object that stores the key-value pairs of all our ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s. In the line of code above, we are creating a key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," object which corresponds to the new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"s ID. The value associated with the key is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object itself."),(0,o.kt)("p",null,"This is a big improvement over using the ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," property as a key."),(0,o.kt)("p",null,"So to recap, we now assign a sequential ID to every new ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object. Once an ID is assigned to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," is added to the address book's ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," property, which is our mock database. ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," objects are stored via key-value pairs in the mock database, where the key is equal to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact"),"'s ID and the value is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object itself."),(0,o.kt)("p",null,"The updated ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," file should now look like this:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n  this.currentId = 0;\n}\n\nAddressBook.prototype.addContact = function(contact) {\n  contact.id = this.assignId();\n  this.contacts[contact.id] = contact;\n};\n\nAddressBook.prototype.assignId = function() {\n  this.currentId += 1;\n  return this.currentId;\n};\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,o.kt)("p",null,"We can now create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," and add it to our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," mock database! When we do so, it will have a unique ID. It doesn't have the complexity or efficiency of a real database, but soon we'll be able to use our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," to retrieve specific contacts just as we would with an actual database."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/3_unique_ids"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}u.isMDXComponent=!0}}]);