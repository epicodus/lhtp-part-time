"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89599],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Address Book: Finding and Deleting Contacts",id:"address-book-finding-and-deleting-contacts",slug:"address-book-finding-and-deleting-contacts",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0k_address_book_finding_and_deleting_contacts.md"},r=void 0,s={unversionedId:"intermediate-javascript/object-oriented-javascript/address-book-finding-and-deleting-contacts",id:"intermediate-javascript/object-oriented-javascript/address-book-finding-and-deleting-contacts",title:"\ud83d\udcd3 Address Book: Finding and Deleting Contacts",description:"We can now add a Contact to our AddressBook. However, this feature isn't very helpful unless we can also retrieve a contact later. This feature is necessary for any application that uses a real database \u2014 it's just as important to be able to retrieve data from the database as it is to store it. In this lesson, we'll create an AddressBook.prototype.findContact() method that allows us to find a Contact by its id property.",source:"@site/docs/intermediate-javascript/3_object-oriented-javascript/0k-address-book-finding-and-deleting-contacts.md",sourceDirName:"intermediate-javascript/3_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/address-book-finding-and-deleting-contacts",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-finding-and-deleting-contacts",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\ud83d\udcd3 Address Book: Finding and Deleting Contacts",id:"address-book-finding-and-deleting-contacts",slug:"address-book-finding-and-deleting-contacts",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0k_address_book_finding_and_deleting_contacts.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 Address Book: Unique IDs",permalink:"/intermediate-javascript/object-oriented-javascript/address-book-unique-ids"},next:{title:"\ud83d\udcd3 VS Code: Bracket Colorization and Guides",permalink:"/intermediate-javascript/object-oriented-javascript/vs-code-bracket-colorization-and-guides"}},d={},c=[{value:"Finding <code>Contact</code>s",id:"finding-contacts",level:2},{value:"Testing it Out",id:"testing-it-out",level:3},{value:"Deleting <code>Contact</code>s",id:"deleting-contacts",level:2}],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We can now add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),". However, this feature isn't very helpful unless we can also retrieve a contact later. This feature is necessary for any application that uses a real database \u2014 it's just as important to be able to retrieve data from the database as it is to store it. In this lesson, we'll create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.findContact()")," method that allows us to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," by its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,o.kt)("h2",{id:"finding-contacts"},"Finding ",(0,o.kt)("inlineCode",{parentName:"h2"},"Contact"),"s"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This method will actually be really easy to write \u2014 and very efficient. Here it is:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nAddressBook.prototype.findContact = function(id) {\n  if (this.contacts[id] !== undefined) {\n    return this.contacts[id];\n  }\n  return false;\n};\n\n...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, our new method takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," as an argument. This will contain the unique ID we assigned to each ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," in the last lesson.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we use a conditional to check if ",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts[id] !== undefined"),". If we try to find a property in an object that doesn't exist, JavaScript will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". We don't want our method to return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", though. We want it to return a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," and if that ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," doesn't exist, we'll return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". So if this conditional isn't met, that means the contact doesn't exist in the database and the method will return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"So if ",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts[id]")," isn't ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", we'll return that specific contact (",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts[id]"),"). There's no need to iterate through the object. If our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook")," mock database were an array, we'd have to loop through each of the contacts until we find a matching ID \u2014 which isn't efficient at all. Finding a value by its key in a JavaScript object means it's super fast to look up a contact \u2014 no matter how big the address book gets."))),(0,o.kt)("p",null,"By the way, here's an interesting fact \u2014 under the hood, JavaScript stores all the properties of an object in an array. So technically, we are kind of using an array to look things up. However, JavaScript uses a very efficient ",(0,o.kt)("strong",{parentName:"p"},"hashing algorithm")," so that each key in an object corresponds to an index in an array. It does this because it's very fast to find an element in an array based on its index. This is more advanced stuff which we cover in our ",(0,o.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/computer-science/bit-manipulation-and-hashing/hash-tables"},"Hash Tables")," computer science curriculum. We don't recommend looking at this lesson yet as it's more advanced, but later in the program, you'll have an opportunity to learn about this."),(0,o.kt)("h3",{id:"testing-it-out"},"Testing it Out"),(0,o.kt)("p",null,"Let's test out our new method. Like before, we'll copy/paste the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," into the DevTools console. "),(0,o.kt)("p",null,"Next, enter the following in the console to populate our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let addressBook = new AddressBook();\n> let contact = new Contact("Ada", "Lovelace", "808-555-0100");\n> let contact2 = new Contact("Grace", "Hopper", "503-555-0199");\n> addressBook.addContact(contact);\n> addressBook.addContact(contact2);\n')),(0,o.kt)("p",null,"Then we'll confirm our code provided each ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," by inspecting each object's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> contact.id;\n1\n> contact2.id;\n2\n")),(0,o.kt)("p",null,"Once again, notice our ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object has an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property even though the constructor didn't assign this property. We could update our constructor to assign an ID right away but it's not necessary to do so. Constructors are great for any properties that need to be created on initialization of an object \u2014 but it's also okay to add properties to an object later."),(0,o.kt)("p",null,"Now we can test our new ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.findContact()")," method by providing it an ID number and confirming it returns the correct info. Let's try getting our second contact's information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> addressBook.findContact(2);\nContact\xa0{firstName: "Grace", lastName: "Hopper", phoneNumber: "503-555-0199", id: 2}\n')),(0,o.kt)("p",null,"Woohoo! We've confirmed that ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.findContact()")," successfully locates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," using the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,o.kt)("p",null,"There's something else to note here, something that's not really ideal about JavaScript objects. Remember how when we identified a contact by their first name, we had to do ",(0,o.kt)("inlineCode",{parentName:"p"},'this.contacts["Ada"]'),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts[Ada]"),"? We don't have to do that here. You might think that makes sense because the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property is a number, but see what happens when we try this out in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> addressBook.findContact("2");\nContact\xa0{firstName: "Grace", lastName: "Hopper", phoneNumber: "503-555-0199", id: 2}\n')),(0,o.kt)("p",null,"You might think this is because JavaScript is doing loose equality and converting the string into an integer, but actually it's the other way around. Object properties can be strings (or symbols) but not numbers. We can verify that the keys are actually strings by doing the following in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> Object.keys(addressBook.contacts)[0];\n"1"\n> typeof Object.keys(addressBook.contacts)[0];\n"string"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.keys()")," method (a ",(0,o.kt)("strong",{parentName:"p"},"static")," method called on the object type, and not the instance) returns all the keys in an object. Remember, object keys are object property names. We are using bracket notation to look at the first key in ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook.contacts[0]"),". You'll see it is ",(0,o.kt)("inlineCode",{parentName:"p"},'"1"')," \u2014 a string, and not a number! We can even verify this by using ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof")," to return the type of the key, which shows that it is indeed a string."),(0,o.kt)("p",null,"So, because JavaScript can do loose equality for us, we can write ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook.findContact(2)")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'addressBook.findContact("2")'),". While this is confusing, this is just how JavaScript objects work. In the next section, we'll learn about a type of object called a Map that cleans up these issues \u2014 but for this section, we are going to stay focused on basic objects \u2014 in all their glory."),(0,o.kt)("h2",{id:"deleting-contacts"},"Deleting ",(0,o.kt)("inlineCode",{parentName:"h2"},"Contact"),"s"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's add one more prototype method for practice. What if we wanted to delete a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," from our ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook"),"? Here's a method to do that. We'll add it right below ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook.prototype.findContact()"),":"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nAddressBook.prototype.deleteContact = function(id) {\n  if (this.contacts[id] === undefined) {\n    return false;\n  }\n  delete this.contacts[id];\n  return true;\n};\n\n...\n")),(0,o.kt)("p",null,"It's very similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"AddressBook.prototype.findContact()"),". If there's no ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," object at the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," (",(0,o.kt)("inlineCode",{parentName:"p"},"this.contacts[id] === undefined"),"), the method will return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," because no such contact exists and nothing was deleted."),(0,o.kt)("p",null,"Otherwise, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," to delete the contact based on its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"delete this.contacts[id];\n")),(0,o.kt)("p",null,"This will simply remove the key-value pair from the object. We can test it out by adding this method to our console code and then doing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let addressBook = new AddressBook();\n> let contact = new Contact("Ada", "Lovelace", "503-555-0100");\n> let contact2 = new Contact("Grace", "Hopper", "503-555-0199");\n> addressBook.addContact(contact);\n> addressBook.addContact(contact2);\n> addressBook;\n  AddressBook {contacts: {\u2026}, currentId: 2}\n  contacts: {1: Contact, 2: Contact}\n  currentId: 2\n  [[Prototype]]: Object\n> addressBook.deleteContact(1);\n> addressBook.contacts;\n  AddressBook {contacts: {\u2026}, currentId: 2}\n  contacts: {2: Contact}\n  currentId: 2\n  [[Prototype]]: Object\n')),(0,o.kt)("p",null,"We'll see that that ",(0,o.kt)("inlineCode",{parentName:"p"},"addressBook.contacts")," now has only one contact. The ",(0,o.kt)("inlineCode",{parentName:"p"},"currentId")," is still ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", though, and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," will ",(0,o.kt)("em",{parentName:"p"},"never")," be used as an ID again even though the contact with that ID has been deleted. Once again, that's how a real database works."),(0,o.kt)("p",null,"After following along with this lesson, our entire ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," file will look like this:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic for AddressBook ---------\nfunction AddressBook() {\n  this.contacts = {};\n  this.currentId = 0;\n}\n\nAddressBook.prototype.addContact = function(contact) {\n  contact.id = this.assignId();\n  this.contacts[contact.id] = contact;\n};\n\nAddressBook.prototype.assignId = function() {\n  this.currentId += 1;\n  return this.currentId;\n};\n\nAddressBook.prototype.findContact = function(id) {\n  if (this.contacts[id] !== undefined) {\n    return this.contacts[id];\n  }\n  return false;\n};\n\nAddressBook.prototype.deleteContact = function(id) {\n  if (this.contacts[id] === undefined) {\n    return false;\n  }\n  delete this.contacts[id];\n  return true;\n};\n\n// Business Logic for Contacts ---------\nfunction Contact(firstName, lastName, phoneNumber) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.phoneNumber = phoneNumber;\n}\n\nContact.prototype.fullName = function() {\n  return this.firstName + " " + this.lastName;\n};\n')),(0,o.kt)("p",null,"You can also experiment with adding other methods as well. For instance, try adding an ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact.prototype.update()")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," prototype. The main focus in this section is constructors and prototype methods so we encourage you to focus on business logic and increasing your understanding of these key concepts. When working with business logic, make sure to test it in the console before incorporating it into your UI logic."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/4_finding_and_deleting_contacts"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))))}u.isMDXComponent=!0}}]);