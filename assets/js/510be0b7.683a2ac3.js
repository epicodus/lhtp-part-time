"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89512],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Firestore Queries",id:"firestore-queries",slug:"firestore-queries",hide_table_of_contents:!0,sidebar_position:28,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_firestore_queries.md"},o=void 0,l={unversionedId:"react/react-with-nosql/firestore-queries",id:"react/react-with-nosql/firestore-queries",title:"\ud83d\udcd3 Firestore Queries",description:"As our data gets more complex, we'll want to use queries to filter our data. In Rails and .NET, we used each framework's respective ORM (Active Record and Entity) to write queries that include where clauses.",source:"@site/docs/react/8_react-with-nosql/2a-firestore-queries.md",sourceDirName:"react/8_react-with-nosql",slug:"/react/react-with-nosql/firestore-queries",permalink:"/react/react-with-nosql/firestore-queries",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"\ud83d\udcd3 Firestore Queries",id:"firestore-queries",slug:"firestore-queries",hide_table_of_contents:!0,sidebar_position:28,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_firestore_queries.md"},sidebar:"react",previous:{title:"\u270f\ufe0f Technical Interview Practice: NoSQL",permalink:"/react/react-with-nosql/technical-interview-practice-nosql"},next:{title:"\ud83d\udcd3 Adding Wait Time to the Queue",permalink:"/react/react-with-nosql/adding-wait-time-to-the-queue"}},s={},u=[{value:"Simple Firestore Queries",id:"simple-firestore-queries",level:2},{value:"Comparison Operators",id:"comparison-operators",level:3},{value:"Ordering and Limiting Query Data",id:"ordering-and-limiting-query-data",level:3},{value:"Compound Queries",id:"compound-queries",level:2},{value:"Running Firestore Queries in Firebase Console",id:"running-firestore-queries-in-firebase-console",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As our data gets more complex, we'll want to use queries to filter our data. In Rails and .NET, we used each framework's respective ORM (Active Record and Entity) to write queries that include ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clauses."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clause can be used to filter data, and fortunately, Firestore uses this terminology, too."),(0,a.kt)("p",null,"Firebase offers solid documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/query-data/queries"},"Firestore queries"),"."),(0,a.kt)("p",null,"When we discussed data structures in the weekend homework, we considered a hypothetical use case of an application for finding and reviewing trails. Let's see how we might structure some queries for finding different trails based on their ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"trailLength"),"."),(0,a.kt)("h2",{id:"simple-firestore-queries"},"Simple Firestore Queries"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Firestore has a variety of functions that we can use to build queries that filter and sort our database data. Let's look at a simple Firestore query to get us started. This query will get documents in our database that have a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," that matches ",(0,a.kt)("inlineCode",{parentName:"p"},'"Enchantment Trail"'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { query, collection, where, getDocs } from \'firebase/firestore\'\nimport { db } from \'./../firebase.js\'\n\nconst q = query(\n  collection(db, "trails"), \n  where("name", "==", "Enchantment Trail")\n);\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query()")," function helps us create a query. The first argument is always the collection reference that we want to filter and sort, and the second argument represents how we want to sort or filter the specified collection.  We've added a ",(0,a.kt)("inlineCode",{parentName:"p"},"where()")," function call as the second argument in ",(0,a.kt)("inlineCode",{parentName:"p"},"query()"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"where()")," function takes three arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1st Arg: the document field that we want to filter by."),(0,a.kt)("li",{parentName:"ul"},"2nd Arg: a comparison operator, like ",(0,a.kt)("inlineCode",{parentName:"li"},"=="),"."),(0,a.kt)("li",{parentName:"ul"},"3rd Arg: the value that should be matched. ")),(0,a.kt)("p",null,"If we then wanted to use this query in a call to the database, we would pass it as the argument to a ",(0,a.kt)("inlineCode",{parentName:"p"},"getDocs()")," function call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(collection(db, "trails"), where("name", "==", "Enchantment Trail"))\n\nconst querySnapshot = await getDocs(q);\nquerySnapshot.forEach((doc) => {\n  console.log(doc.id, " => ", doc.data());\n});\n')),(0,a.kt)("p",null,"Or, we could set up a listener, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(collection(db, "trails"), where("name", "==", "Enchantment Trail"))\n\nconst unsub = onSnapshot(q, (querySnapshot) => {\n  console.log("Current data: ", querySnapshot.data());\n});\n')),(0,a.kt)("h3",{id:"comparison-operators"},"Comparison Operators"),(0,a.kt)("p",null,"There are a ",(0,a.kt)("em",{parentName:"p"},"lot")," of comparison operators. Here's the full list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<")," less than"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<=")," less than or equal to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," equal to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," greater than"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">=")," greater than or equal to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," not equal to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"array-contains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"array-contains-any")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"not-in"))),(0,a.kt)("p",null,"We won't get into depth about how to use each of these. If you are interested in learning more or finding a solution to a specific querying use case in your code, visit ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/query-data/queries#query_operators"},"the docs on query operators"),"."),(0,a.kt)("h3",{id:"ordering-and-limiting-query-data"},"Ordering and Limiting Query Data"),(0,a.kt)("p",null,"We can order how data is returned from the database with the ",(0,a.kt)("inlineCode",{parentName:"p"},"orderBy()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"limit()")," functions. To learn how to use these functions, and their limitations, visit the following docs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/query-data/order-limit-data"},"Order and Limit Data"))),(0,a.kt)("p",null,"We can also paginate the Firestore data with the ",(0,a.kt)("inlineCode",{parentName:"p"},"startAt()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endAt()")," functions. To learn how to use these functions, and their limitations, visit the following docs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/query-data/query-cursors"},"Paginate Data with Query Cursors"))),(0,a.kt)("h2",{id:"compound-queries"},"Compound Queries"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"What if we wanted to find trails in a specific region that are longer than ten miles? Can't we just include two ",(0,a.kt)("inlineCode",{parentName:"p"},"where()")," functions in our ",(0,a.kt)("inlineCode",{parentName:"p"},"query()")," function, like this?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(\n  collection(db, "trails"), \n  where("region", "==" "Enchantments"),\n  where("trailLength", ">", 10)\n);\n')),(0,a.kt)("p",null,"Yes, we can! This is known as a ",(0,a.kt)("strong",{parentName:"p"},"compound query"),". These kinds of queries are common with ORMs like ActiveRecord (Rails) and Entity (.NET). We can also do compound queries in Firestore, but only after we do some initial configuration."),(0,a.kt)("p",null,'Firestore requires an index for every query. A database index is similar to an index in a book. If we want to find all the passages about "loops" in a book on JavaScript, we could do so much faster if we can look in an index and find the specific page numbers where loops are mentioned. Otherwise, we\'d have to go through every single page of the book to find all the passages on loops.'),(0,a.kt)("p",null,"A database index works the same way. It's a structure that allows our queries to be conducted much more efficiently. This is why Firestore requires indexes for all queries \u2014 so it can be extremely fast."),(0,a.kt)("p",null,"Firestore automatically indexes all fields, which is why we can do simple queries without creating a custom index. However, for certain compound queries, we have to create the indexes ourselves. This is explained in the ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/query-data/queries#compound_queries"},"docs for compound queries"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can chain multiple equality operators (== or array-contains) methods to create more specific queries (logical AND). However, you must create a composite index to combine equality operators with the inequality operators, <, <=, >, and !=.")),(0,a.kt)("p",null,"Here's an example of a query that combines an equality operator with an inequality operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(\n  collection(db, "trails"), \n  where("trailLength", ">", 10),\n  where("trailLength", "!=", 15)\n);\n')),(0,a.kt)("p",null,"There is good news, however. If we try to make a query in our code for a combination of fields that aren't properly indexed, our application will throw an error \u2014 along with a link to create the missing index. Don't panic if this happens \u2014 just follow the link and let Firestore take care of the hard work for you."),(0,a.kt)("p",null,"You can also create indexes manually by clicking on the ",(0,a.kt)("em",{parentName:"p"},"Indexes")," tab within the ",(0,a.kt)("em",{parentName:"p"},"Firestore Database")," section of the Firebase console. However, the documentation actually recommends just trying to make queries via an application and following the link if needed. For information on manually creating indexes, see ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/query-data/indexing"},"Managing indexes in Cloud Firestore"),"."),(0,a.kt)("p",null,"There's one more rule for complex queries: we can only use the equality operators (also called \"range\" operators) or the inequality operator on a single field in a complex query. For example, the following query is valid, because we're only querying the ",(0,a.kt)("inlineCode",{parentName:"p"},"trailLength")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(\n  collection(db, "trails"), \n  where("trailLength", ">", 10),\n  where("trailLength", "<=", 15)\n);\n')),(0,a.kt)("p",null,"However, the following query is invalid because it queries two different fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(\n  collection(db, "trails"), \n  where("trailLength", ">", 10),\n  where("region", "==", "Enchantments")\n);\n')),(0,a.kt)("p",null,"If you run intro any issues creating compound queries, visit ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/query-data/queries#compound_queries"},"the Firestore docs on compound queries")," to get more information about the rules and requirements. "),(0,a.kt)("h2",{id:"running-firestore-queries-in-firebase-console"},"Running Firestore Queries in Firebase Console"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can also explore simple queries in the Firebase console, however it's important to note that the queries that are generated are shown in the ",(0,a.kt)("em",{parentName:"p"},"Web/JavaScript version 8")," (the namespaced version), instead of version 9 (the modular version) that we are using. So, you'll need to translate these queries into version 9 syntax by referencing the Firebase docs."),(0,a.kt)("p",null,"Let's take a look!"),(0,a.kt)("p",null,"Start by clicking on the ",(0,a.kt)("em",{parentName:"p"},"Firestore Database")," tab of a Firebase project. As stated previously, the project that we'll use in these examples is the fictional app that lists and rates trails in the Pacific NorthWest. "),(0,a.kt)("p",null,"Our data is sorted into three columns. The left column has the ",(0,a.kt)("inlineCode",{parentName:"p"},"trails")," collection, the middle column has our ",(0,a.kt)("inlineCode",{parentName:"p"},"trail")," documents, and the right column has the fields of a selected document."),(0,a.kt)("p",null,"There's a small icon at the top of the middle column (circled in red in the image below) that allows us to filter data in a collection:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-console-filter.png",alt:"Icon shows how we can filter data in Firebase."})),(0,a.kt)("p",null,"If we click on this icon, we can create our own filters. We just need to specify the field and condition we want to filter by. "),(0,a.kt)("p",null,"In the following example, we are looking for all trails in the Enchantments region:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/example-of-filter.png",alt:"This filter shows just trails in the Enchantments region."})),(0,a.kt)("p",null,"One thing that's nice is that the console helpfully shows us what the query actually looks like, so we can use this to test simple queries and actually copy and paste the query code into our application."),(0,a.kt)("p",null,"Here's how the query looks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'.collection("trails")\n  .where("region", "==", "Enchantments");\n')),(0,a.kt)("p",null,"This is pretty straightforward. The ",(0,a.kt)("inlineCode",{parentName:"p"},"where()")," clause takes three arguments: a field name, an operator such as ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," or ",(0,a.kt)("inlineCode",{parentName:"p"},">"),", and the value that the field should have."),(0,a.kt)("p",null,"The only issue is that we'll need to translate this into web/JavaScript version 9 using the ",(0,a.kt)("inlineCode",{parentName:"p"},"query()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"where()")," functions. This is what our translation would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const q = query(collection(db, "trails"), where("region", "==", "Enchantments"));\n')))}d.isMDXComponent=!0}}]);