"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[96160],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Overview of Test-Driven Development (TDD) with Text Analyzer",id:"overview-of-test-driven-development-tdd-with-text-analyzer",slug:"overview-of-test-driven-development-tdd-with-text-analyzer",hide_table_of_contents:!0,sidebar_position:23,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2b_test_driven_development_overview.md"},i=void 0,s={unversionedId:"introduction-to-programming/arrays-and-looping/overview-of-test-driven-development-tdd-with-text-analyzer",id:"introduction-to-programming/arrays-and-looping/overview-of-test-driven-development-tdd-with-text-analyzer",title:"\ud83d\udcd3 Overview of Test-Driven Development (TDD) with Text Analyzer",description:"As our projects get more complex, we need to break our code down into a series of smaller, more manageable programming tasks. It's absolutely essential we do this. Otherwise, it's easy to get overwhelmed if we try to take on too much at once. When we are working on complex business logic, we can use a development technique called Test-Driven Development, or TDD, to break our logic down into smaller problems that are easier to solve and reason about.",source:"@site/docs/introduction-to-programming/5_arrays-and-looping/2b-test-driven-development-overview.md",sourceDirName:"introduction-to-programming/5_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/overview-of-test-driven-development-tdd-with-text-analyzer",permalink:"/introduction-to-programming/arrays-and-looping/overview-of-test-driven-development-tdd-with-text-analyzer",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"\ud83d\udcd3 Overview of Test-Driven Development (TDD) with Text Analyzer",id:"overview-of-test-driven-development-tdd-with-text-analyzer",slug:"overview-of-test-driven-development-tdd-with-text-analyzer",hide_table_of_contents:!0,sidebar_position:23,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2b_test_driven_development_overview.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Building a Text Analyzer",permalink:"/introduction-to-programming/arrays-and-looping/building-a-text-analyzer"},next:{title:"\ud83d\udcd3 Text Analyzer with TDD: wordCounter()",permalink:"/introduction-to-programming/arrays-and-looping/text-analyzer-with-tdd-wordcounter"}},l={},u=[{value:"Breaking Down Problems with TDD",id:"breaking-down-problems-with-tdd",level:2},{value:"Test Examples &amp; Our First Test",id:"test-examples--our-first-test",level:3},{value:"Test Syntax",id:"test-syntax",level:3},{value:"Always Test Small Pieces of Functionality, Incrementally",id:"always-test-small-pieces-of-functionality-incrementally",level:3},{value:"Our Second Test",id:"our-second-test",level:3},{value:"What Should We Test For Next?",id:"what-should-we-test-for-next",level:3},{value:"Looking for Opportunities to Refactor",id:"looking-for-opportunities-to-refactor",level:3},{value:"Testing Your Code",id:"testing-your-code",level:3}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As our projects get more complex, we need to break our code down into a series of smaller, more manageable programming tasks. It's absolutely essential we do this. Otherwise, it's easy to get overwhelmed if we try to take on too much at once. When we are working on complex business logic, we can use a development technique called ",(0,a.kt)("strong",{parentName:"p"},"Test-Driven Development"),", or ",(0,a.kt)("strong",{parentName:"p"},"TDD"),", to break our logic down into smaller problems that are easier to solve and reason about."),(0,a.kt)("p",null,"In this lesson, we'll give an overview of what Test-Driven Development is and how we'll use it, covering:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test syntax: comparing tests written with Jest's syntax and pseudocode syntax. (Until we get to automated testing, we'll be writing pseudocode tests and manually testing them.)"),(0,a.kt)("li",{parentName:"ul"},"The TDD process by writing two tests for our Text Analyzer's ",(0,a.kt)("inlineCode",{parentName:"li"},"wordCounter()")," function."),(0,a.kt)("li",{parentName:"ul"},"How to figure out what to test for, and how to test and write code incrementally."),(0,a.kt)("li",{parentName:"ul"},"Opportunities for refactoring."),(0,a.kt)("li",{parentName:"ul"},"The TDD process as far as actually testing our code in the DevTools console: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"first writing the test, "),(0,a.kt)("li",{parentName:"ul"},"then writing the code that will make your test pass, "),(0,a.kt)("li",{parentName:"ul"},"and then running the test's code in the DevTools console to manually verify that your test passes (the actual output matches what you expected), which ultimately means that the code for your function is correct.")))),(0,a.kt)("p",null,"In the two lessons that follow, we'll actually build the Text Analyzer application (start with the business logic), demonstrating how to use TDD. So for now, just read through this lesson with the goal of understanding. "),(0,a.kt)("h2",{id:"breaking-down-problems-with-tdd"},"Breaking Down Problems with TDD"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In TDD, we break our code down into the smallest pieces of functionality we can. Next, we write a test for a piece of functionality ",(0,a.kt)("em",{parentName:"p"},"before")," we add that functionality to our code. Finally, we add the code to make that test pass. "),(0,a.kt)("p",null,"These tests are also known as ",(0,a.kt)("strong",{parentName:"p"},"specs"),". For now, we are going to manually test all of our specs. Then, when we get to ",(0,a.kt)("a",{parentName:"p",href:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/test-driven-development-and-environments-with-javascript-objectives"},"Test-Driven Development and Environments with JavaScript"),", we'll start using software that automates the testing process. We'll also dive more deeply into the testing process by learning the ",(0,a.kt)("a",{parentName:"p",href:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/red-green-refactor-workflow"},"Red Green Refactor workflow")," when we test with Jest."),(0,a.kt)("p",null,"However, we aren't quite there yet. In the past, students have found automated testing overwhelming when we introduce it too early in the program. For that reason, we wait until Intermediate JavaScript to cover automated testing. However, we believe that the thought process behind Test-Driven Development is absolutely essential to breaking down tough problems into more manageable solutions. That's why we'll start writing tests in pseudocode now. We'll put all of our pseudocode tests in our project's README. Instead of using automated tests, we'll test our code in the console until it passes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Also note that we'll only be writing tests for our business logic.")," While there is software for testing User Interface logic, we won't learn how to do that in this program."),(0,a.kt)("h3",{id:"test-examples--our-first-test"},"Test Examples & Our First Test"),(0,a.kt)("p",null,"First, here's an example of ",(0,a.kt)("strong",{parentName:"p"},"a test written in JavaScript using Jest"),", a testing framework we'll learn about in Intermediate JavaScript. By the way, you don't need to write any code yet \u2014 just read along for now. We'll start building the application in the next lesson."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"describe('word counter', () => {\n  test('should return 1 if a passage has just one word', () => {\n    const text = \"hello\";\n    expect(wordCounter(text)).toEqual(1);\n  });\n});\n")),(0,a.kt)("p",null,"The test above takes a word and then tests whether a function named ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCounter()")," correctly returns the correct word count. This will actually be our first test for our text analyzer application, too. "),(0,a.kt)("p",null,"Instead of using Jest syntax, though, we will write our tests in pseudocode. Here's an example of ",(0,a.kt)("strong",{parentName:"p"},"the same test written in pseudocode"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Describe: wordCounter()\n\nTest: "It should return 1 if a passage has just one word."\nCode:\nconst text = "hello";\nwordCounter(text);\nExpected Output: 1\n')),(0,a.kt)("h3",{id:"test-syntax"},"Test Syntax"),(0,a.kt)("p",null,'We use specific syntax in our tests to communicate our testing goals \u2014 what we are testing, what outcome we\'re expecting, and how we are testing it. The tests we write in pseudocode are borrowing the syntax from Jest, the JavaScript testing framework we will use to write automated tests in the next course, Intermediate JavaScript. Using our first pseudocode test (shown above), let\'s explore the syntax "describe", "test", "code", and "expected output".'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Describe")," is a common term in testing. It's used to organize tests. For example, we might make a little application with three different functions, all of which need several tests. Here, we'll use one describe statement for each function, and group all of the tests for that function below the describe statement. In our example, we're describing the ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCounter()")," function.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test")," breaks down what the test is doing in plain English. In the example above, we see that the test ",(0,a.kt)("inlineCode",{parentName:"p"},"'It should return 1 if a passage has just one word'")," is actually not code for the machine. Instead, it communicates to other developers (and ourselves) what the test is supposed to do.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Code")," is where we'll put any code we need to run in order to check that our test is working. We don't actually need to have a separate variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),". We could also just pass ",(0,a.kt)("inlineCode",{parentName:"p"},'"hello"')," directly into the function. We split it out here just to show that you can add multiple lines of code if needed. Also, we don't actually define the ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCounter()"),' function here. That code goes in our actual scripts. Instead we just call on the code we want to test in the "code" section of our pseudocode test.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Expected Output")," is what we expect our test result to be. This usually means seeing if a function we've written returns what we expect. In this case, we expect the output of ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCounter(text);")," to equal ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."))),(0,a.kt)("h3",{id:"always-test-small-pieces-of-functionality-incrementally"},"Always Test Small Pieces of Functionality, Incrementally"),(0,a.kt)("p",null,"You might be wondering why we are writing such a simple test. It's so basic: input a single word and have the function return ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"? We hardly have to do anything to pass the test. We could just do the following to get our test passing manually in the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function wordCounter(word) {\n  return 1;\n}\n")),(0,a.kt)("p",null,"Try this out in the console and then put in the code from the ",(0,a.kt)("strong",{parentName:"p"},"Code")," section of the test. You'll see it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"It seems so simple but that's the point. This is the first step of our journey. We've actually determined some important things for our function including its name, how many parameters it has (one) and what we should call that parameter (",(0,a.kt)("inlineCode",{parentName:"p"},"word"),"), and what the function returns (a number). It's a start!"),(0,a.kt)("p",null,"Our test should test the smallest possible thing we can test. Then we should write the minimum amount of code needed to pass the test."),(0,a.kt)("p",null,"Let's reiterate that, except in bold: ",(0,a.kt)("strong",{parentName:"p"},"Test the smallest thing possible. Then write the minimum amount of code to make the test pass.")," Yes, it's that important. We could even go so far as to say a journey of a thousand miles begins with... baby steps. If we are baby stepping through our code, it will be ",(0,a.kt)("em",{parentName:"p"},"much")," easier to solve hard problems. It won't quite be child's play but we'll have an essential tool at our disposal that can help us avoid getting overwhelmed and frustrated."),(0,a.kt)("h3",{id:"our-second-test"},"Our Second Test"),(0,a.kt)("p",null,"The next step is... you guessed it. Another baby step. What's the next smallest thing we can test? Well, how about two words?"),(0,a.kt)("p",null,"Let's write another pseudocode test and add it to the first. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Describe: wordCounter()\n\nTest: "It should return 1 if a passage has just one word."\nCode:\nconst text = "hello";\nwordCounter(text);\nExpected Output: 1\n\n\x3c!-- Our second test. --\x3e\nTest: "It should return 2 if a passage has two words."\nCode:\nconst text = "hello there";\nwordCounter(text);\nExpected Output: 2\n')),(0,a.kt)("p",null,"Let's take a look at what we've added. First of all, we don't need to use ",(0,a.kt)("strong",{parentName:"p"},"Describe")," again because we are still testing the same function. Remember, we can group all of our tests related to this function in one ",(0,a.kt)("strong",{parentName:"p"},"Describe")," block."),(0,a.kt)("p",null,"Other than that, our test looks very similar to the first test. We've added a word to the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," variable and now the ",(0,a.kt)("strong",{parentName:"p"},"Expected Output")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,a.kt)("p",null,"Next, we need to update the function so that ",(0,a.kt)("em",{parentName:"p"},"both")," tests pass. We can't just do something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function wordCounter(text) {\n  return 2;\n}\n")),(0,a.kt)("p",null,"That breaks the first test. So we need to actually update our method and write some new code. Because we are practicing loops, let's use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to solve the problem. It's not the easiest way to solve this problem but it's good practice and we can refactor it soon."),(0,a.kt)("p",null,"Before looking at the function below, we recommend trying to write the loop yourself with your pair. (You can do so in the DevTools console.)"),(0,a.kt)("p",null,"Here are a few hints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use ",(0,a.kt)("inlineCode",{parentName:"li"},"String.prototype.split()")," to split strings into arrays."),(0,a.kt)("li",{parentName:"ul"},"You'll also need a variable to keep track of the ",(0,a.kt)("inlineCode",{parentName:"li"},"wordCount")," since the loop will go through each element in the array, incrementing the ",(0,a.kt)("inlineCode",{parentName:"li"},"wordCount")," each time.")),(0,a.kt)("p",null,"Once you're ready, here is the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function wordCounter(text) {\n  let wordCount = 0;\n  const textArray = text.split(" ");\n  textArray.forEach(function(word) {\n    wordCount++;\n  });\n  return wordCount;\n}\n')),(0,a.kt)("p",null,"Let's walk through the function line by line to reiterate what we've learned about ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," and looping in general."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Our loop is going to be counting all the words in a text passage, incrementing the total number of words by one each time through the loop. We need to store that information somewhere. That's why we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCount")," variable starting at ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". Otherwise, we won't be able to increment the word count.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We also can't iterate through a string with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". We need to turn it into an array first. We can do that with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.split()"),". For this method, we need to pass in a separator as an argument to define how our string should be split it up. We want the method to split up the string based on spaces between words so we use the separator ",(0,a.kt)("inlineCode",{parentName:"p"},'" "'),". We save the split array in a variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray"),". This will return ",(0,a.kt)("inlineCode",{parentName:"p"},'["hello", "there"]')," for the string ",(0,a.kt)("inlineCode",{parentName:"p"},'"hello there"'),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCount")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," because it will change while ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," because once a value is assigned to ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray")," will not change again. As always, think carefully about when you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),". We ",(0,a.kt)("em",{parentName:"p"},"could")," still change values in ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray")," even if it's a ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," communicates to other developers that ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray")," won't change in this function.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now it's time to iterate through each element in our ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray"),". We use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to do so. The parameter of the callback function passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," should be accurately named so we don't get confused. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray")," is split into words, it makes sense to name the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"word"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Each time through the loop, we increment ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCount")," by one. We are using some new notation here. ",(0,a.kt)("inlineCode",{parentName:"p"},"++")," indicates that the value should increase by increments of one. Saying ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCount++")," is a shorter way of saying ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCount = wordCount + 1"),". You will see the ",(0,a.kt)("inlineCode",{parentName:"p"},"++")," notation a lot and we recommend you use it, too.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, once we are done looping, we return the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"wordCount"),"."))),(0,a.kt)("p",null,'Try it out in the DevTools console. Both of our tests will "pass" and return the correct value. '),(0,a.kt)("h3",{id:"what-should-we-test-for-next"},"What Should We Test For Next?"),(0,a.kt)("p",null,"In fact, our function will now work for ",(0,a.kt)("em",{parentName:"p"},"any")," word count except... well, there are quite a few exceptions. This is what testing is all about \u2014 identifying exceptions! For example, what about this string?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"There are 17 cats."\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"17")," isn't a word, it's a number."),(0,a.kt)("p",null,"What about an empty string? Try this out in the DevTools console and you'll see that the value of ",(0,a.kt)("inlineCode",{parentName:"p"},'wordCounter("");')," is ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," even though the string we passed in has ",(0,a.kt)("em",{parentName:"p"},"no")," words."),(0,a.kt)("p",null,"What about punctuation? What if a value that's not a string gets passed into the function? What about... well, you see what we mean. We need to write tests for as many of these use cases, making our function really robust. And with each change to the function, our function still needs to pass ",(0,a.kt)("em",{parentName:"p"},"all")," of our tests. The testing framework that we'll use in Intermediate JavaScript makes checking that all tests are passing really easy, because the testing is automated. Since we are doing things manually, we don't have to manually check ",(0,a.kt)("em",{parentName:"p"},"every")," test every time. That would be too tedious. But we do still need to check our latest test and it can be useful to spot check any other tests you might be concerned about."),(0,a.kt)("h3",{id:"looking-for-opportunities-to-refactor"},"Looking for Opportunities to Refactor"),(0,a.kt)("p",null,"Also, each time we update our code, we should think about opportunities to refactor. For example, we can solve this problem without any loop with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.length")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function wordCounter(text) {\n  return text.split(" ").length;\n}\n')),(0,a.kt)("p",null,"While this simplifies our code \u2014 and all of our tests so far will still be passing \u2014 we'd still need to think about numbers, punctuations, empty strings, and so on. Note that when we build out this function further in the next lesson, we will go back to using a loop. We're going to do things the hard way to improve our looping skills."),(0,a.kt)("h3",{id:"testing-your-code"},"Testing Your Code"),(0,a.kt)("p",null,"When we get to Intermediate JavaScript, our tests will be automated and written in code, but for now, we'll test our functions in the DevTools console to verify that they return what we expect. "),(0,a.kt)("p",null,"To test your function, paste the function you're testing into the console and then add the ",(0,a.kt)("strong",{parentName:"p"},"Code")," section of the test that you wrote. For instance, we might copy in ",(0,a.kt)("inlineCode",{parentName:"p"},'wordCounter("Hi there, friend!")')," to make sure it equals 3 (an ",(0,a.kt)("strong",{parentName:"p"},"Expected Output"),"). "),(0,a.kt)("p",null,"Working in this manner might feel like slow going, but we should always be testing our code to make sure it is working correctly even if we have to do so manually. Manual testing will also allow us to solidify coding concepts and really take a look at what's going wrong (or right) with our code. Remember that manual testing includes writing the pseudocode test first, then writing/updating the function in your scripts, and then running your test in the DevTools console by calling the function to see whether the result matches what you expected."),(0,a.kt)("p",null,"If writing tests is still a bit murky, don't worry. We'll continue to use test-driven development in the next lesson as we start building out our application."))}h.isMDXComponent=!0}}]);