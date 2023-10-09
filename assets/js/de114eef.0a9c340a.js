"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90330],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||s;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7896),i=(n(2784),n(30876));const s={title:"\ud83d\udcd3 Testing An Auto-Implemented Property",id:"testing-an-auto-implemented-property",slug:"testing-an-auto-implemented-property",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_testing_auto_implemented_property.md"},a=void 0,o={unversionedId:"c-and-net/tdd-and-debugging/testing-an-auto-implemented-property",id:"c-and-net/tdd-and-debugging/testing-an-auto-implemented-property",title:"\ud83d\udcd3 Testing An Auto-Implemented Property",description:"In this lesson, we'll work on implementing the next simplest behavior for our Triangle logic, which is giving triangles a second side:",source:"@site/docs/c-and-net/5_tdd-and-debugging/0f-testing-auto-implemented-property.md",sourceDirName:"c-and-net/5_tdd-and-debugging",slug:"/c-and-net/tdd-and-debugging/testing-an-auto-implemented-property",permalink:"/c-and-net/tdd-and-debugging/testing-an-auto-implemented-property",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\ud83d\udcd3 Testing An Auto-Implemented Property",id:"testing-an-auto-implemented-property",slug:"testing-an-auto-implemented-property",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_testing_auto_implemented_property.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Testing A Private Field through its Public Property and Organizing Tests with Arrange, Act, Assert",permalink:"/c-and-net/tdd-and-debugging/testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert"},next:{title:"\ud83d\udcd3 Testing A Private Field through its Getter and Setter Methods",permalink:"/c-and-net/tdd-and-debugging/testing-a-private-field-through-its-getter-and-setter-methods"}},l={},p=[{value:"Reference for the &quot;Red, Green, Refactor&quot; (RGR) Workflow",id:"reference-for-the-red-green-refactor-rgr-workflow",level:2},{value:"Testing the Auto-Implemented Public Property <code>Side2</code>",id:"testing-the-auto-implemented-public-property-side2",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior",level:3},{value:"3. Before coding, confirm the test fails.",id:"3-before-coding-confirm-the-test-fails",level:3},{value:"4. Implement the behavior with the least amount of code possible.",id:"4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4",level:3},{value:"(Again) 4. Implement the behavior with the least amount of code possible.",id:"again-4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don&#39;t, revisit step 4.",id:"5-confirm-the-test-passes-and-6-confirm-all-previous-tests-still-pass-if-they-dont-revisit-step-4",level:3},{value:"7.  Check if code can be refactored. If so, refactor and repeat step 6.",id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6",level:3},{value:"8.  Commit your passing code.",id:"8--commit-your-passing-code",level:3},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior-1",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"Steps 5. and 6. Confirm the new test and all previous tests are still passing.",id:"steps-5-and-6-confirm-the-new-test-and-all-previous-tests-are-still-passing",level:3},{value:"7.  Check if code can be refactored. If so, refactor and repeat step 6.",id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6-1",level:3},{value:"8.  Commit your passing code.",id:"8--commit-your-passing-code-1",level:3},{value:"9.  Repeat this process with the next simplest behavior.",id:"9--repeat-this-process-with-the-next-simplest-behavior",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll work on implementing the next simplest behavior for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," logic, which is giving triangles a second side:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We'll use the RGR workflow to test and create an auto-implemented property called ",(0,i.kt)("inlineCode",{parentName:"li"},"Side2"),"."),(0,i.kt)("li",{parentName:"ul"},"We'll treat the get and set actions of the auto-implemented property as two distinct behaviors, so we'll run through the steps of the RGR workflow twice: first we'll implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"Side2")," get action, then afterwards we'll implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"Side2")," set action."),(0,i.kt)("li",{parentName:"ul"},'When we write our tests, we\'ll use the organizational trick called "Arrange, Act, Assert" that we learned about in the last lesson.')),(0,i.kt)("p",null,"Let's get into it! "),(0,i.kt)("h2",{id:"reference-for-the-red-green-refactor-rgr-workflow"},'Reference for the "Red, Green, Refactor" (RGR) Workflow'),(0,i.kt)("hr",null),(0,i.kt)("p",null,'For reference, here\'s the "Red, Green, Refactor" (RGR) workflow we follow with TDD:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,i.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"red"},"Before coding, confirm the test fails.")),(0,i.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"green"},"Run the automated test to confirm it passes. If it doesn't, revisit step 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"green"},"Confirm all previous tests still pass. If it doesn't, revisit step 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,i.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,i.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,i.kt)("h2",{id:"testing-the-auto-implemented-public-property-side2"},"Testing the Auto-Implemented Public Property ",(0,i.kt)("inlineCode",{parentName:"h2"},"Side2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,i.kt)("p",null,"The next simplest behavior we'll tackle is creating a get action for the second side of a triangle. In terms of code, for our second side we'll create a public auto-implemented property called ",(0,i.kt)("inlineCode",{parentName:"p"},"Side2"),". "),(0,i.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior"},"2.  Write a coded test for this behavior."),(0,i.kt)("p",null,"Here's what the test will look like for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Side2")," get action:"),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // 3 tests omitted for brevity\n\n    [TestMethod]\n    public void GetSide2_ReturnsSide2_Int()\n    {\n      // Arrange\n      int length2 = 3;\n      Triangle newTriangle = new Triangle(2, length2);\n      // Act\n      int result = newTriangle.Side2;\n      // Assert\n      Assert.AreEqual(length2, result);\n    }\n\n  }\n}\n")),(0,i.kt)("h3",{id:"3-before-coding-confirm-the-test-fails"},"3. Before coding, confirm the test fails."),(0,i.kt)("p",null,"If we run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ dotnet test")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll get a compiler error which confirms that our test fails and there are no false positives in our code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(35,32): error CS1061: 'Triangle' does not contain a definition for 'Side2' and no accessible extension method 'Side2' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,i.kt)("h3",{id:"4-implement-the-behavior-with-the-least-amount-of-code-possible"},"4. Implement the behavior with the least amount of code possible."),(0,i.kt)("p",null,"Let's add just enough code to get beyond the compiler error. Let's update our code in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a public auto-implemented property called ",(0,i.kt)("inlineCode",{parentName:"li"},"Side2")," with a get action defined."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"length2")," as a parameter to our constructor and have it assigned as the value of our ",(0,i.kt)("inlineCode",{parentName:"li"},"Side2")," property.")),(0,i.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; }\n\n    public Triangle(int length1, int length2)\n    {\n      _side1 = length1;\n      Side2 = length2;\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4"},"5. Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,i.kt)("p",null,"We're now ready to see if the code we implemented passes our new test. "),(0,i.kt)("p",null,"When we run ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," again, we get more compiler errors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(12,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length2' of 'Triangle.Triangle(int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(21,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length2' of 'Triangle.Triangle(int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(32,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length2' of 'Triangle.Triangle(int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,i.kt)("p",null,"Three errors! Why so many? Just like in the last lesson, these compiler errors are letting us know that we are not calling our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor appropriately after we've updated it to have a second parameter. We're getting three errors for each of the three times we invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor in our test file ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs")," without the (now) required second parameter. We need to revisit step 4 and implement more code to get our test to pass. "),(0,i.kt)("h3",{id:"again-4-implement-the-behavior-with-the-least-amount-of-code-possible"},"(Again) 4. Implement the behavior with the least amount of code possible."),(0,i.kt)("p",null,"Here's how we'll fix the tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),":"),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n    [TestMethod]\n    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()\n    {\n      Triangle newTriangle = new Triangle(2, 3); // Updated!\n      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());\n    }\n\n    [TestMethod]\n    public void GetSide1_ReturnsSide1_Int()\n    {\n      // Arrange\n      int length1 = 3;\n      Triangle newTriangle = new Triangle(length1, 2); // Updated!\n      // Act\n      int result = newTriangle.Side1;\n      // Assert\n      Assert.AreEqual(length1, result);\n    }\n\n    [TestMethod]\n    public void SetSide1_SetsValueOfSide1_Void()\n    {\n      // Arrange\n      Triangle newTriangle = new Triangle(3,3); // Updated!\n      int newLength1 = 44;\n      // Act\n      newTriangle.Side1 = newLength1;\n      // Assert\n      Assert.AreEqual(newLength1, newTriangle.Side1);\n    }\n\n    [TestMethod]\n    public void GetSide2_ReturnsSide2_Int()\n    {\n      // Arrange\n      int length2 = 3;\n      Triangle newTriangle = new Triangle(2, length2); // Updated!\n      // Act\n      int result = newTriangle.Side2;\n      // Assert\n      Assert.AreEqual(length2, result);\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"5-confirm-the-test-passes-and-6-confirm-all-previous-tests-still-pass-if-they-dont-revisit-step-4"},"5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don't, revisit step 4."),(0,i.kt)("p",null,"We can run ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet test")," again and confirm all our tests are passing now."),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     4, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)")),(0,i.kt)("h3",{id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6"},"7.  Check if code can be refactored. If so, refactor and repeat step 6."),(0,i.kt)("p",null,"Our code cannot be refactored at this time, since it is still very basic."),(0,i.kt)("h3",{id:"8--commit-your-passing-code"},"8.  Commit your passing code."),(0,i.kt)("p",null,'Time to commit our passing code. The commit message this time will be "add Side2 get functionality + passing test".'),(0,i.kt)("p",null,"We're now ready for step 9: Repeat this process with the next simplest behavior."),(0,i.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,i.kt)("p",null,"The next simplest behavior we want to test for is adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," action to our public ",(0,i.kt)("inlineCode",{parentName:"p"},"Side2")," auto-implemented property."),(0,i.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior-1"},"2.  Write a coded test for this behavior."),(0,i.kt)("p",null,"Here's our new test:"),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // previous 4 tests omitted for brevity.\n\n    [TestMethod]\n    public void SetSide2_SetsValueOfSide2_Void()\n    {\n      // Arrange\n      Triangle newTriangle = new Triangle(3,4);\n      int newLength2 = 6;\n      // Act\n      newTriangle.Side2 = newLength2;\n      // Assert\n      Assert.AreEqual(newLength2, newTriangle.Side2);\n    }\n\n  }\n}\n")),(0,i.kt)("h3",{id:"3--before-coding-confirm-the-test-fails"},"3.  Before coding, confirm the test fails."),(0,i.kt)("p",null,"Let's confirm that our test fails by running ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet test")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(35,7): error CS0200: Property or indexer 'Triangle.Side2' cannot be assigned to -- it is read only [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,i.kt)("p",null,"We get a compiler error, which counts as a test failure. The error clearly lets us know that we cannot assign a value to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Side2")," property."),(0,i.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible"},"4.  Implement the behavior with the least amount of code possible."),(0,i.kt)("p",null,"We'll add a ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," action to our public ",(0,i.kt)("inlineCode",{parentName:"p"},"Side2")," auto-implemented property:"),(0,i.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; set; } // Updated code!\n\n    public Triangle(int length1, int length2)\n    {\n      _side1 = length1;\n      Side2 = length2;\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"steps-5-and-6-confirm-the-new-test-and-all-previous-tests-are-still-passing"},"Steps 5. and 6. Confirm the new test and all previous tests are still passing."),(0,i.kt)("p",null,"With the previous update, we can confirm that all of our tests are now passing: "),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     5, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)")),(0,i.kt)("h3",{id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6-1"},"7.  Check if code can be refactored. If so, refactor and repeat step 6."),(0,i.kt)("p",null,"We're still in the early stages of development, so we won't see an opportunity for refactoring for a while."),(0,i.kt)("h3",{id:"8--commit-your-passing-code-1"},"8.  Commit your passing code."),(0,i.kt)("p",null,'Commit your passing code. We\'ll use the commit message "add passing test, code for Triangle.Side2 SET".'),(0,i.kt)("h3",{id:"9--repeat-this-process-with-the-next-simplest-behavior"},"9.  Repeat this process with the next simplest behavior."),(0,i.kt)("p",null,"We've completed our get and set behavior for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Side2")," auto-implemented property and updated the constructor. In the next lesson, we'll move on to the next simplest behavior, the triangle's third side."))}h.isMDXComponent=!0}}]);