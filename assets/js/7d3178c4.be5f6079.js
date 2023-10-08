"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3770],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},42936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7896),o=(a(2784),a(30876));const r={title:"Testing Best Practices",id:"testing-best-practices",slug:"testing-best-practices",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1h_good_fails_and_bad_fails.md"},i=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/testing-best-practices",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/testing-best-practices",title:"Testing Best Practices",description:"In this lesson, we'll cover some testing best practices \u2014 as well as go into a deeper dive regarding the differences between good and bad fails. Writing good fails instead of bad ones can really trip students up at first. And the implications of bad fails can be significant \u2014 extra time trying to find bugs, frustration, and less understanding about what's going wrong in the code. The implications get even bigger once we are out in the real world \u2014 for instance, if we don't test our code correctly, we might introduce breaking changes to production code, making our customers, coworkers, and employers upset. If possible, we don't want to do that.",source:"@site/docs/intermediate-javascript/5_test-driven-development-and-environments-with-javascript/1h-good-fails-and-bad-fails.md",sourceDirName:"intermediate-javascript/5_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/testing-best-practices",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/testing-best-practices",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"Testing Best Practices",id:"testing-best-practices",slug:"testing-best-practices",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1h_good_fails_and_bad_fails.md"},sidebar:"intermediate-javascript",previous:{title:"TDD with Jest: Testing the Triangle.prototype.checkType() Method",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-with-jest-testing-the-triangleprototypechecktype-method"},next:{title:"Test It Out, Sudoku Checker, Project Euler",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/test-it-out-sudoku-checker-project-euler"}},l={},d=[{value:"Good Testing Practices \u2014 and Failing Right",id:"good-testing-practices--and-failing-right",level:2},{value:"Bad Fails",id:"bad-fails",level:2},{value:"Summary",id:"summary",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll cover some testing best practices \u2014 as well as go into a deeper dive regarding the differences between good and bad fails. Writing good fails instead of bad ones can really trip students up at first. And the implications of bad fails can be significant \u2014 extra time trying to find bugs, frustration, and less understanding about what's going wrong in the code. The implications get even bigger once we are out in the real world \u2014 for instance, if we don't test our code correctly, we might introduce breaking changes to production code, making our customers, coworkers, and employers upset. If possible, we don't want to do that. "),(0,o.kt)("p",null,"Unfortunately, in the real world, there are many companies that don't test their code, though it's not due to anyone arguing that untested code is better. Instead, tight deadlines, small staff, tight budgets, poor management practices, legacy code, and many other complications can lead to code that isn't fully tested, or tested at all."),(0,o.kt)("p",null,"At Epicodus, we're focused on teaching best practices for testing. Ideally, you'll eventually work at a company that has good testing practices. Even if the company doesn't have good practices, you can bring your newfound knowledge to the company and make a difference immediately. In fact, it's very common for junior developers to start learning a codebase by writing tests first. Adding testing to a codebase is something you can often start doing right away \u2014 even if you don't fully understand the code you're working with. And doing so can add tremendous value to your company."),(0,o.kt)("h2",{id:"good-testing-practices--and-failing-right"},"Good Testing Practices \u2014 and Failing Right"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here are some testing best practices \u2014 as well as steps to make sure you get good fails \u2014 and in turn, good passes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Write tests for distinct behaviors.")," Often a function just needs one test, because it does one thing. However, if our function does multiple things, we should consider having a test for each behavior. This improves how easy to understand our code and tests are. It's OK to have multiple expectations for a single test. However, if a test has many expectations it can be a red flag that the test may cover multiple distinct behaviors and may need to be broken into multiple tests to improve comprehension.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("inlineCode",{parentName:"strong"},"Describe")," blocks to improve comprehension of your tests.")," You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Describe")," blocks for entire object types or for individual methods and functions, depending on how complicated each is. Similar to writing tests for distinct behaviors to clearly communicate the functionality of your code, ",(0,o.kt)("inlineCode",{parentName:"p"},"Describe")," blocks are meant to improve organization and comprehension of your test. If a class is more complex, you may want to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Describe")," block for each method instead of just the class.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Write the test first, not the code.")," We've already covered many of the reasons why we should write our tests before we write any code. This is the cornerstone of TDD because it's ",(0,o.kt)("em",{parentName:"p"},"test"),"-driven, not ",(0,o.kt)("em",{parentName:"p"},"code"),"-driven. We won't reiterate all the reasons we should write tests first as we've covered that elsewhere. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Write just enough of a function or method to get the code to fail.")," We can't just write a test, run it, and move on. That would be a bad fail. If we are testing a function, for instance, we need to at least add the ",(0,o.kt)("inlineCode",{parentName:"p"},"function")," keyword and the name of the function. Our test should at least return how our expectation wasn't met \u2014 such as by stating the expected result and returning the actual result (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," because we haven't written a function body yet).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Keep the code in your test to a minimum.")," In your tests, you should only write code that's required to run the piece of business logic that you are testing for. This usually involves invoking the business logic function you are testing and not much more. Adding more code than that can create problems by introducing bugs that are unrelated to our business logic. We want to isolate problems in our code, not create more problems by adding unnecessary code in our tests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Read the Jest output for failing tests.")," It's easy to just run a test, see that it's red, and assume that it's a good fail. It's tempting to be in a rush to write the code, especially if we're excited about it or have an idea about how to implement it. But just because it's red doesn't mean it's a good fail.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Always fix bad fails before moving onto the code.")," TDD means having a good fail before writing the code to pass the test. It doesn't mean writing a test, having a bad fail, and then writing some code. That is actually a recipe for disaster. We'll often see students looking for bugs in the wrong places when this happens \u2014 or just being utterly confused because their tests aren't pointing them in the right direction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Always commit your code after each passing test.")," This is part of having a strong commit history. Also, if you break your code and can't get it working again, you can always return to a commit where all tests are passing."))),(0,o.kt)("p",null,"Next, let's look at some examples of bad fails."),(0,o.kt)("h2",{id:"bad-fails"},"Bad Fails"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's cover some examples of bad fails based on the following tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Example from '../src/example.js';\n\ndescribe('Example', () => {\n\n  test('should correctly demonstrate bad fails', () => {\n    let example = new Example();\n    expect(example.data).toEqual(\"Bad fail!\");\n  });\n\n  test('should correctly demonstrate bad fails', () => {\n    let example = new Example();\n    expect(example.exampleFunction()).toEqual(\"This function returns a bad fail!\");\n  });\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test won't run because it can't find a file.")," Let's say that when we run the test suite above, we get the following error: ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot find module '../src/example.js' from 'example.test.js'"),"."),(0,o.kt)("p",null,"This means that the file doesn't exist ",(0,o.kt)("em",{parentName:"p"},"or")," there's an error in the path ",(0,o.kt)("em",{parentName:"p"},"or")," the file exists but there is an error in the file name."),(0,o.kt)("p",null,"This is a bad fail. Our test should always be able to correctly find the file it is looking for. We're not even correctly testing any code yet. All we've confirmed is that our tests can't find a file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test won't run because it can't find a function or constructor.")," So we realize that we don't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/example.js")," file yet \u2014 or that it's named ",(0,o.kt)("inlineCode",{parentName:"p"},"src/exmple.js")," \u2014 or even that for some reason it's not in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory. We fix that issue and run the test, only to get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"TypeError: _example.default is not a constructor\n")),(0,o.kt)("p",null,"This means that one of three things could be happening:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We haven't added a constructor for ",(0,o.kt)("inlineCode",{parentName:"li"},"Example")," yet."),(0,o.kt)("li",{parentName:"ul"},"There's a typo either in our test (such as ",(0,o.kt)("inlineCode",{parentName:"li"},"new Exmple()"),")."),(0,o.kt)("li",{parentName:"ul"},"There's a typo in our constructor.")),(0,o.kt)("p",null,"In the case of a missing function, we'll get an error like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"TypeError: example.exampleFunction is not a function\n")),(0,o.kt)("p",null,"These are both bad fails. Any functions or constructors that a test uses at the very least need to exist so that the test can properly run or test the constructor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test won't run because there's an error that breaks all the tests in a suite.")," An error in a test file can blow up the whole suite \u2014 or it can cause an individual test to fail."),(0,o.kt)("p",null,"Here's an example that will blow up the entire suite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Test suite failed to run\n\n    SyntaxError: /Users/staff/Desktop/test_env/__tests__/example.test.js: Unexpected token, expected \";\" (1:6)\n\n    > 1 | impor Example from '../src/example.js';\n        |       ^\n")),(0,o.kt)("p",null,"Can you see the error? There's a typo in the import statement \u2014 it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"impor"),". Any time you see ",(0,o.kt)("inlineCode",{parentName:"p"},"Test suite failed to run")," for any reason, it's a bad fail. It means the entire test file isn't able to run. Don't you dare start writing your code yet if you're in this situation! Get the tests working first."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test won't run because there's an error in an individual test.")," An error can also break just one test as well. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"should correctly demonstrate bad fails\n\n    ReferenceError: example is not defined\n\n       9 | \n      10 |   test('should correctly demonstrate bad fails', () => {\n    > 11 |     expect(example.exampleFunction()).toEqual(\"This function returns a bad fail!\");\n         |            ^\n      12 |   });\n")),(0,o.kt)("p",null,"Here we get the error ",(0,o.kt)("inlineCode",{parentName:"p"},"ReferenceError: example is not defined"),". In this case, it can be tempting to think this error is happening because we haven't defined something in our source code. Take a closer look at the error, though. In reality, it's because the line ",(0,o.kt)("inlineCode",{parentName:"p"},"let example = new Example();")," has been removed from the test \u2014 and there's no variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," in our test's scope."),(0,o.kt)("p",null,"There are a million and one different errors that can occur in a test \u2014 but all of them are bad fails. The test needs to be running correctly and be error-free or it will be a bad fail. Once again, make sure you get this working correctly before writing any code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test fails because we wrote bogus data in our test.")," Let's say we've got all the code we need in our constructor to get the first test passing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'export default function Example() {\n  this.data = "Bad fail!";\n}\n')),(0,o.kt)("p",null,"However, for some reason we want to make sure that we get a fail before our test passes... perhaps because we did things out of order and wrote our code before we wrote the test. So we update our test to do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  test('should correctly demonstrate bad fails', () => {\n    let example = new Example();\n    expect(example.data).toEqual(\"I'm sneaky! I'm gonna pretend this is a good fail!\");\n  });\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(received).toEqual(expected) // deep equality\n\nExpected: "I\'m sneaky! I\'m gonna pretend this is a good fail!"\nReceived: "Bad fail!"\n')),(0,o.kt)("p",null,"This is what is known as a test-based fail, not a code-based fail. The problem here is that we aren't actually testing to see if our code is working correctly \u2014 if we were, our expect statement would state "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(example.data).toEqual("Bad fail!");\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},'"Bad fail!"')," to match the code in the constructor. "),(0,o.kt)("p",null,"However, by changing the expect statement to match with ",(0,o.kt)("inlineCode",{parentName:"p"},"\"I'm sneaky! I'm gonna pretend this is a good fail!\""),", we're trying to manufacture a fail, instead of letting one happen naturally. "),(0,o.kt)("p",null,"The tests we write always need to be a source of truth. We always need to write a test so that it passes. If we change the code in our test to fail it, we could start getting confused, and we might run into false positives (or negatives). In other words, if we've inserted errors into the test, it's no longer a source of truth, and it's no longer reliable for testing our code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test fails (or even passes) because we put too much code in our test.")," Let's say we want to test that our constructor automatically adds a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},'"Bad fail!"')," to an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Example"),". This would be a truly horrible test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// This is hideous.\n\n  test(\'should instantiate an Example with a data property of Bad fail!\', () => {\n    let example = new Example();\n    const data1 = "Bad "\n    const data2 = "fail"\n    const data3 = "!"\n    const newData = data1.concat(data2).concat(data3);\n    example.data = newData;\n    expect(example.data).toEqual("Bad fail!");\n  });\n')),(0,o.kt)("p",null,"This test is actually going to pass if we at least correctly instantiate an ",(0,o.kt)("inlineCode",{parentName:"p"},"Example")," object. But it's such a bad pass that it's truly a bad fail. What happens here is that we've written code in the test to get the test to artificially pass. But we're supposed to be testing our source code, and we're not actually testing that when an ",(0,o.kt)("inlineCode",{parentName:"p"},"Example")," is instantiated, a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property with the right value is being created. Instead, we're writing the code manually in the test. "),(0,o.kt)("p",null,"If we were quality control elves in Santa's lab and our job was to inspect little toy cars being churned out of a machine to make sure they are painted red, we can't just take a car that's painted blue, paint it red, and say the machine is working correctly. In this analogy, our code is the machine. Always test to make sure the machine works. Don't alter the results (the test) to fit what you're hoping for."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And here's the worst fail of all:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Test suite failed to run\n\nYour test suite must contain at least one test.\n")),(0,o.kt)("p",null,"This means your suite doesn't even have any tests in it yet. Time to start adding some tests!"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Before we move on, let's reiterate an example of a good fail. We can do the following to ensure a good fail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the file is being accessed (no test errors)."),(0,o.kt)("li",{parentName:"ul"},"Make sure the function is being called."),(0,o.kt)("li",{parentName:"ul"},"It's fine if the function returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," \u2014 don't write bogus code in either the function or your test to turn a good fail into a bad one.")),(0,o.kt)("p",null,"Here's the error message on a good fail:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(received).toEqual(expected) // deep equality\n\nExpected: "This function returns a good fail!"\nReceived: undefined\n')),(0,o.kt)("p",null,"Here, we can see that the function was correctly called, which implies that our test was able to find the file as well. The function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," because we haven't added any code to the function body yet."),(0,o.kt)("p",null,"At this point, you should have a clear sense of the difference between good and bad fails. Ensuring your test has a good fail first is an important part of the process, and doing so can help you isolate bugs in your code. In general, these testing practices apply no matter what language you are writing in \u2014 with a few small modifications depending on the language. "),(0,o.kt)("p",null,"From here on out, you should be applying these best practices as best as you can whether you are writing tests in JavaScript, Ruby, C#, or another language."))}p.isMDXComponent=!0}}]);