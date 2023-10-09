"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[85905],{30876:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(2784);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=p(a),d=s,u=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7896),s=(a(2784),a(30876));const o={title:"\ud83d\udcd3 Database Schema and Relationship Types",id:"database-schema-and-relationship-types",slug:"database-schema-and-relationship-types",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/database_schema_and_relationship_types.md"},i=void 0,r={unversionedId:"c-and-net/database-basics/database-schema-and-relationship-types",id:"c-and-net/database-basics/database-schema-and-relationship-types",title:"\ud83d\udcd3 Database Schema and Relationship Types",description:"Every database has a schema. A database schema is the structure that represents the way the database is built.  The database schema defines how data is stored in the database tables and how the relations among tables are associated.",source:"@site/docs/c-and-net/10_database-basics/database-schema-and-relationship-types.md",sourceDirName:"c-and-net/10_database-basics",slug:"/c-and-net/database-basics/database-schema-and-relationship-types",permalink:"/c-and-net/database-basics/database-schema-and-relationship-types",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\ud83d\udcd3 Database Schema and Relationship Types",id:"database-schema-and-relationship-types",slug:"database-schema-and-relationship-types",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/database_schema_and_relationship_types.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Prior Course Section Survey",permalink:"/c-and-net/database-basics/prior-course-section-survey"},next:{title:"\ud83d\udcd3 Using SQL Designer",permalink:"/c-and-net/database-basics/using-sql-designer"}},l={},p=[{value:"One-to-Many Relationships",id:"one-to-many-relationships",level:2},{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:2},{value:"One-to-One Relationships",id:"one-to-one-relationships",level:2},{value:"Visually Representing Database Schema",id:"visually-representing-database-schema",level:2}],h={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Every database has a ",(0,s.kt)("strong",{parentName:"p"},"schema"),". A database schema is the structure that represents the way the database is built.  The database schema defines how data is stored in the database tables and how the relations among tables are associated."),(0,s.kt)("p",null,"In this lesson, we'll create visual representations of database schema and talk about the most common SQL database relationships:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"one-to-many"),(0,s.kt)("li",{parentName:"ul"},"many-to-many"),(0,s.kt)("li",{parentName:"ul"},"one-to-one")),(0,s.kt)("h2",{id:"one-to-many-relationships"},"One-to-Many Relationships"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Here's a visual representation of our record store's database schema so far:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/RUBY/Week+3+-+Databases+with+SQL/one-to-many.png",alt:"record store schema"})),(0,s.kt)("p",null,"This representation includes both of our tables, the properties of each table, and the relationship between the two tables."),(0,s.kt)("p",null,"At this point, our application is fairly simple. There's a table for ",(0,s.kt)("inlineCode",{parentName:"p"},"albums")," and a table for ",(0,s.kt)("inlineCode",{parentName:"p"},"songs"),". Each song belongs to an album, which we represent with a line between the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," property in the ",(0,s.kt)("inlineCode",{parentName:"p"},"albums")," table and the ",(0,s.kt)("inlineCode",{parentName:"p"},"album_id")," property in the ",(0,s.kt)("inlineCode",{parentName:"p"},"songs")," table."),(0,s.kt)("p",null,"As we discussed in previous lessons, the relationship between these two tables is ",(0,s.kt)("strong",{parentName:"p"},"one-to-many"),'. An album can have many songs but a song can only have one album. In this kind of relationship, it\'s fairly common for the "many" to be ',(0,s.kt)("strong",{parentName:"p"},"dependent")," on the one. If this is the case, songs should only exist if they belong to an album. However, one-to-many relationships can also exist without the \"many\" being dependent. An example might be cargo that belongs to a ship. The cargo can only belong to one ship, but there may be times when the cargo hasn't been loaded and doesn't belong to a ship yet."),(0,s.kt)("h2",{id:"many-to-many-relationships"},"Many-to-Many Relationships"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Many-to-many relationships are more complicated because they involve a join table. Let's look at an example: a many-to-many relationship between ",(0,s.kt)("inlineCode",{parentName:"p"},"Album"),"s and ",(0,s.kt)("inlineCode",{parentName:"p"},"Artist"),"s."),(0,s.kt)("p",null,"It's evident that an ",(0,s.kt)("inlineCode",{parentName:"p"},"Artist")," should be able to have many ",(0,s.kt)("inlineCode",{parentName:"p"},"Album"),"s. However, a one-to-many isn't the best option here because an ",(0,s.kt)("inlineCode",{parentName:"p"},"Album")," could also have many ",(0,s.kt)("inlineCode",{parentName:"p"},"Artist"),"s. An example would be an album that's a compilation or a collaboration between multiple artists."),(0,s.kt)("p",null,"Let's take a look at a visual representation of the many-to-many relationship we'll build:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/RUBY/Week+3+-+Databases+with+SQL/many-to-many.png",alt:"record store schema with many-to-many relationship"})),(0,s.kt)("p",null,"In this case, we have a join table called ",(0,s.kt)("inlineCode",{parentName:"p"},"albums_artists")," that stores the relationships between the ",(0,s.kt)("inlineCode",{parentName:"p"},"artists")," table and the ",(0,s.kt)("inlineCode",{parentName:"p"},"albums")," table."),(0,s.kt)("p",null,"Sometimes a join table can be more complex. Some join tables also have other fields. An example might be a ",(0,s.kt)("inlineCode",{parentName:"p"},"checkout")," join table between ",(0,s.kt)("inlineCode",{parentName:"p"},"Patron"),"s and ",(0,s.kt)("inlineCode",{parentName:"p"},"Book"),"s at a library. The ",(0,s.kt)("inlineCode",{parentName:"p"},"due_date")," of a book would most likely go on the ",(0,s.kt)("inlineCode",{parentName:"p"},"checkout")," join table."),(0,s.kt)("p",null,"Join tables can have their own descriptive names such as in the ",(0,s.kt)("inlineCode",{parentName:"p"},"checkout")," example above. However, it's also common to have the name be a combination of the two tables that are being joined. If this is the case, the names should be in alphabetic order. In other words, we'd always call the join table for ",(0,s.kt)("inlineCode",{parentName:"p"},"Artist"),"s and ",(0,s.kt)("inlineCode",{parentName:"p"},"Album"),"s ",(0,s.kt)("inlineCode",{parentName:"p"},"albums_artists"),", not ",(0,s.kt)("inlineCode",{parentName:"p"},"artists-albums"),". We need to use an underscore to delimit table names, not a character like a dash, which SQL will not accept."),(0,s.kt)("h2",{id:"one-to-one-relationships"},"One-to-One Relationships"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"One-to-one relationships are less common but are still very important. It's not required to use one-to-one relationships in this course but you may wish to experiment with them or have a project that would work best with this relationship."),(0,s.kt)("p",null,"Two tables have a ",(0,s.kt)("strong",{parentName:"p"},"one-to-one relationship")," when a row on one table is related to ",(0,s.kt)("em",{parentName:"p"},"only one")," row on the other table. A common example is a relationship between ",(0,s.kt)("inlineCode",{parentName:"p"},"customers")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"accounts"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/database-schema/customers-accounts-schema.png",alt:"Customers-accounts schema"})),(0,s.kt)("p",null,"According to this schema, a customer can only have one account and an account can belong to only one customer.  The relationship between the customers table and the accounts table represents a one-to-one relationship."),(0,s.kt)("h2",{id:"visually-representing-database-schema"},"Visually Representing Database Schema"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"We will practice designing database schema using this free ",(0,s.kt)("a",{parentName:"p",href:"http://ondras.zarovi.cz/sql/demo/"},"SQL Designer Tool"),". From now on, include a visual representation of your database schema that shows all tables, properties, and relationships between tables. In the next lesson, we'll go over the basics of using this tool."))}m.isMDXComponent=!0}}]);