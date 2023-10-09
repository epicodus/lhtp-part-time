"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87788],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Form Input Types",id:"form-input-types",slug:"form-input-types",hide_table_of_contents:!0,sidebar_position:24,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4b_form_input_types.md"},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers-part-2/form-input-types",id:"introduction-to-programming/javascript-and-web-browsers-part-2/form-input-types",title:"\ud83d\udcd3 Form Input Types",description:"We've already seen how to gather input from text fields, but there are a variety of other types of form fields as well: select boxes, radio buttons, and checkboxes are perhaps the most prominent.",source:"@site/docs/introduction-to-programming/4_javascript-and-web-browsers-part-2/4b-form-input-types.md",sourceDirName:"introduction-to-programming/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming/javascript-and-web-browsers-part-2/form-input-types",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/form-input-types",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"\ud83d\udcd3 Form Input Types",id:"form-input-types",slug:"form-input-types",hide_table_of_contents:!0,sidebar_position:24,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4b_form_input_types.md"},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f Practice: Event Listeners",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-event-listeners"},next:{title:"\ud83d\udcd3 Calculator with Forms and Branching",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/calculator-with-forms-and-branching"}},s={},p=[{value:"Select Boxes",id:"select-boxes",level:2},{value:"Radio Buttons",id:"radio-buttons",level:2},{value:"Checkboxes",id:"checkboxes",level:2},{value:"Button Types \u2014 A Review",id:"button-types--a-review",level:2},{value:"More HTML5 Input Types",id:"more-html5-input-types",level:2},{value:"Date",id:"date",level:3},{value:"Color",id:"color",level:3},{value:"More to Explore",id:"more-to-explore",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've already seen how to gather input from text fields, but there are a variety of other types of form fields as well: select boxes, radio buttons, and checkboxes are perhaps the most prominent."),(0,a.kt)("p",null,"HTML5, finalized in 2014 and now widely supported, also introduced a number of additional values for the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute on inputs, including date, color, email, tel, url, number, and many others. See the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"},"MDN documentation on the HTML ",(0,a.kt)("inlineCode",{parentName:"a"},"<input>")," element")," for a full list of HTML input types. "),(0,a.kt)("p",null,"Bootstrap also has more information about ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/forms/overview/"},"form input types on their documentation"),". We always recommend trying out Bootstrap in your projects periodically, if not regularly, because it has easy-to-implement, pre-built styles that makes a webpage look polished and modern."),(0,a.kt)("p",null,"Generally as you come across the need to gather input in a particular way, you should do some research to figure out how to read input in that way. We'll introduce a few of the most common input field types. But first, a note of warning: ",(0,a.kt)("strong",{parentName:"p"},"always ",(0,a.kt)("inlineCode",{parentName:"strong"},"parseInt()")," number values that are retrieved from forms"),"."),(0,a.kt)("p",null,"Just because you mark your HTML input field as ",(0,a.kt)("em",{parentName:"p"},"number"),", ",(0,a.kt)("em",{parentName:"p"},"date"),", or ",(0,a.kt)("em",{parentName:"p"},"tel"),", don't expect it to come in as the JavaScript ",(0,a.kt)("strong",{parentName:"p"},"number")," type. Marking it in your html as ",(0,a.kt)("inlineCode",{parentName:"p"},'type="number"')," just means that the browser will do some preliminary checking to encourage the user to enter a number rather than some text. But when you use ",(0,a.kt)("inlineCode",{parentName:"p"},'document.querySelector("input").value')," to read the input, it will still come in as a JavaScript ",(0,a.kt)("em",{parentName:"p"},"string"),", not a ",(0,a.kt)("em",{parentName:"p"},"number"),". The HTML input types mostly just help indicate to the user what type of input is expected and/or allow the user to more easily enter a value such as a date or color."),(0,a.kt)("h2",{id:"select-boxes"},"Select Boxes"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'Select boxes are form inputs where the user can only select one item. These are often called "dropdown menus".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/select-box-form-input.png",alt:"select-boxes-form-input-type"})),(0,a.kt)("p",null,"This goes inside the form in your html:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="select-form">\n  <select id="beverage">\n    <option>Coffee</option>\n    <option>Tea</option>\n    <option>Kombucha</option>\n    <option>Water</option>\n  </select>\n  <button type="submit">Submit Selection</button>\n</form>\n')),(0,a.kt)("p",null,"And this is one way to read out the value in your form submit event handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function handleSelect(event) {\n  event.preventDefault();\n  const selection = document.getElementById("beverage").value;\n}\n\nwindow.addEventListener("load", function() {\n  document.getElementById("select-form").addEventListener("submit", handleSelect);\n});\n')),(0,a.kt)("p",null,"If you wanted to instead give each option a value different from the text the user sees, you could set a ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," attribute on each ",(0,a.kt)("inlineCode",{parentName:"p"},"<option>")," element to define each value, something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="select-form">\n  <select id="beverage">\n    <option value="1">Coffee</option>\n    <option value="2">Tea</option>\n    <option value="3">Kombucha</option>\n    <option value="4">Water</option>\n  </select>\n  <button type="submit">Submit Selection</button>\n</form>\n')),(0,a.kt)("p",null,"Now when you gather the input with ",(0,a.kt)("inlineCode",{parentName:"p"},'document.getElementById("beverage").value')," you'll get ",(0,a.kt)("inlineCode",{parentName:"p"},'"1"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"2"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"3"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"4"'),". Note that they still come in as strings, so in this case you would probably want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"parseInt()")," to convert the inputted data to a number. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"},"Check out the MDN reference page for the ",(0,a.kt)("inlineCode",{parentName:"a"},"<select>")," element for more information.")," You'll find a handy built-in console that lets you test out this element, as well as information on other attributes we can use with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<option>")," elements."),(0,a.kt)("h2",{id:"radio-buttons"},"Radio Buttons"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Radio buttons allow the user to select one and only one option from a list."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/radio-button-form-input.png",alt:"form-input-types-radio-buttons"})),(0,a.kt)("p",null,"Here's an example of doing radio buttons:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="radio-form">\n  <label>\n    <input type="radio" name="flavor" value="chocolate" checked>\n    Chocolate\n  </label><br />\n  <label>\n    <input type="radio" name="flavor" value="vanilla">\n    Vanilla\n  </label><br />\n  <label>\n    <input type="radio" name="flavor" value="cookies and cream">\n    Cookies & Cream\n  </label><br />\n  <button type="submit">Submit Selection</button>\n</form>\n')),(0,a.kt)("p",null,"In this code snippet, we've set the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute of our inputs to ",(0,a.kt)("inlineCode",{parentName:"p"},"radio"),". For formatting, we've added ",(0,a.kt)("inlineCode",{parentName:"p"},"<br />")," tags after each label in order to stack the form options vertically. "),(0,a.kt)("p",null,"Including the same ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attribute and value on every radio button input is crucial to the function of this form type. The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attribute groups all of the radio buttons together in order to ensure that only one radio button is selected at a time."),(0,a.kt)("p",null,"We've also added a new attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"checked")," to the first radio button input: ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="radio" name="flavor" value="chocolate" checked>'),". This means that this radio button is selected by default. The ",(0,a.kt)("inlineCode",{parentName:"p"},"checked")," attribute is optional, but it's always a good idea to have a default value selected. Otherwise, a user may forget to choose one of the options, resulting in an ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," value when a form is submitted."),(0,a.kt)("p",null,"Notice how each ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>")," is nested inside of a label elements. This enables the label as well as the radio button itself to be clicked in order to make a selection. We could also enable this feature using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," attribute on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<label>")," and a matching ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>"),", like in the code snippet below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="radio-form">\n  <input type="radio" name="flavor" value="chocolate" id="choc" checked>\n  <label for="choc">Chocolate</label><br />\n  <input type="radio" name="flavor" value="vanilla" id="van">\n  <label for="van">Vanilla</label><br />\n  <input type="radio" name="flavor" value="cookies and cream" id="cookies">\n  <label for="cookies">Cookies & Cream </label><br />\n  <button type="submit">Submit Selection</button>\n</form>\n')),(0,a.kt)("p",null,"Take note that our code will still work if we don't use either formatting (nesting inputs in the label or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attributes), but this will make it so that only the radio button itself can be clicked to make a selection."),(0,a.kt)("p",null,"And a way to read the value selected:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function handleRadio(event) {\n  event.preventDefault();\n  const radioSelection = document.querySelector("input[name=\'flavor\']:checked").value;\n}\n\nwindow.addEventListener("load", function() {\n  document.getElementById("radio-form").addEventListener("submit", handleRadio);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\"input[name='flavor']:checked\"")," is a newer more complicated query selector. Let's break this down:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"input")," targets any inputs in the DOM."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[name='flavor']")," tells the querySelector method to look only at elements with a ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," attribute set to ",(0,a.kt)("inlineCode",{parentName:"li"},"'flavor'"),". This ensures that we're looking at all of our radio button inputs, which all share the same ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," attribute and value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":checked")," makes sure that we grab the value of only the radio input that is selected.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"},"Check out the MDN reference page for the ",(0,a.kt)("inlineCode",{parentName:"a"},'<input type="radio">')," element for more information.")," You'll find a handy built-in console that lets you test out this element, as well as information on other attributes we can use with the radio inputs."),(0,a.kt)("h2",{id:"checkboxes"},"Checkboxes"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Checkboxes work similarly to radio buttons, but allow users to select multiple options. Because we want to be able to collect ",(0,a.kt)("em",{parentName:"p"},"all"),"  of a user's selections, we will first need to learn about something called an ",(0,a.kt)("em",{parentName:"p"},"array"),", which we will do in the next course section. In its simplest form, an array is simply a list of multiple items packaged together."),(0,a.kt)("h2",{id:"button-types--a-review"},"Button Types \u2014 A Review"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute that we set for a ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," element will change how we can use it in our HTML. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<button type="submit">Submit Form</button>\n')),(0,a.kt)("p",null,"A button with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"submit"')," is meant to be used in form elements, and it causes a submission event on a form. The default reaction to a submission event is to refresh the page. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button">Show More Information</button>\n')),(0,a.kt)("p",null,"A button with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"button"')," makes the button element have no default behavior and do nothing when pressed by default. If we are targeting a submit event with an event listener and we use include ",(0,a.kt)("inlineCode",{parentName:"p"},'type="button"')," on our form's button, our code will break. This is because we can target a click event on a button with ",(0,a.kt)("inlineCode",{parentName:"p"},'type="button"'),", but not a  submit event, so we cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},'type="button"')," for a button element within an HTML form. Using ",(0,a.kt)("inlineCode",{parentName:"p"},'type="button"')," on a button element is great for showing/hiding elements, or changing styles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<button>Click Me</button>\n")),(0,a.kt)("p",null,"What about a ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," element with no ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute specified? This comes down to context. When unspecified, the default ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute value for buttons is ",(0,a.kt)("inlineCode",{parentName:"p"},'type="submit"'),". So, if the button is used in a form without a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute, we can still target and respond to a submission event. If a button is used outside of a form, we can also target and respond to a click event."),(0,a.kt)("p",null,"So why bother specifying a button's ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute? It makes the functionality of our code easier to understand at a glance. It also introduces finer control when we are specific about the purpose of a ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," element. Finally, properly using HTML elements helps screen readers navigate our websites. This is a topic that's a part of the larger topic of web accessibility. There's more to learn than we have the time to cover in the program. In fact, some developers focus their entire careers on accessibility. If you want to learn more, ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"},'visit the article "HTML: A good basis for accessibility" on MDN'),"."),(0,a.kt)("h2",{id:"more-html5-input-types"},"More HTML5 Input Types"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"date"},"Date"),(0,a.kt)("p",null,"The date input type provides an easier interface for users to browse, select, and input dates:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/date-select-form-input.png",alt:"form-input-type-date-picker"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<label for="born">Date of birth:</label>\n<input id="born" type="date">\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const dob = document.getElementById("born").value;\n')),(0,a.kt)("h3",{id:"color"},"Color"),(0,a.kt)("p",null,"You may not have seen this one before! The color form input type, when clicked, opens a special panel where users can fine-tune and select specific colors:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/color-select-form-input.png",alt:"form-input-type-color-selector"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<label for="color">What is your favorite color?</label>\n<input id="color" type="color">\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const favoriteColor = document.getElementById("color").value;\n')),(0,a.kt)("h3",{id:"more-to-explore"},"More to Explore"),(0,a.kt)("p",null,"There's more that we haven't covered in this lesson. Check out these resources about other HTML5 input types and how to style them with Bootstrap:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"},"MDN Reference Page on the HTML ",(0,a.kt)("inlineCode",{parentName:"a"},"<input>")," element"))," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types"},"An Article on Using HTML5 Input Types"))," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://getbootstrap.com/docs/5.3/forms/overview/"},"Bootstrap's Styling Documentation for Forms"))," ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And don't forget too always ",(0,a.kt)("inlineCode",{parentName:"strong"},"parseInt()")," number values that are retrieved from forms!")))}c.isMDXComponent=!0}}]);