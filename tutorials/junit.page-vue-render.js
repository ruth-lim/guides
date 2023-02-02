
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Sections below explains how to use JUnit in a project.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_v("As JUnit is a third-party library, you need to add support to it specifically in your project. Given below are two ways of doing that. The Gradle option is recommended but it requires the use of an additional tool (i.e., Gradle) which has its own learning curve.")]),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("With Gradle")]},proxy:true}])},[_v(" "),_c('p',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-exclamation-sign",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('strong',[_v("Prerequisite:")]),_v(" The project is configured to use Gradle already. If you have not done that yet, follow the "),_c('a',{attrs:{"href":"/guides/tutorials/gradle.html"}},[_c('em',[_v("Gradle Tutorial")])]),_v(" to add Gradle support to the project first.")]),_v(" "),_c('p',[_c('strong',[_v("1. Update the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file")]),_v(" to include JUnit as a dependency. Here are the relevant lines that needs to be in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" (change the version number as necessary):")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("buidl.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"buidl.gradle","class":"hljs groovy"}},[_c('span',[_v("test {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("useJUnitPlatform()")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("dependencies {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("testImplementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.junit.jupiter'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'junit-jupiter-api'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'5.5.0'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("testRuntimeOnly "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.junit.jupiter'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'junit-jupiter-engine'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'5.5.0'")])]),_v("\n")]),_c('span',[_v("}\n")])])])])]),_c('p',[_c('strong',[_v("2. Add a test class")]),_v(", while following the conventions given earlier in this page. If you don't follow those conventions, Gradle will not be able to find your test class. For example, if you have a class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\main\\java\\seedu\\duke\\Todo.java")]),_v(", you can add a test class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\")]),_c('mark',[_v("test")]),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\\java\\seedu\\duke\\")]),_c('mark',[_v("TodoTest.java")]),_v(". Here's some sample code:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("package")]),_v(" seedu.duke;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" org.junit.jupiter.api.Test;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" org.junit.jupiter.api.Assertions.assertEquals;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("DukeTest")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Test")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("dummyTest")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v("{\n")]),_c('span',[_v("        assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(");\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Test")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("anotherDummyTest")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v("{\n")]),_c('span',[_v("        assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("4")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("4")]),_v(");\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Later, you can add more tests and test classes as necessary.")]),_v(" "),_c('p',[_c('strong',[_v("3. Run tests")]),_v(", either using the Intellij UI (preferred -- this makes debugging failed test cases easier) or using Gradle itself, as explained in the section below.")])]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("In Intellij, without Gradle")]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_c('p',[_v("Add a folder named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[project root]\\src\\test\\java\\")])])]),_v(" "),_c('li',[_c('p',[_v("Go to Intellij and add a new module to the project as follows.")]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("New")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Module From Existing Sources ...")])]),_v(" "),_c('li',[_v("Choose the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[project root]\\src\\test\\")]),_v(" (not the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java")]),_v(") folder.")]),_v(" "),_c('li',[_v("In the next screen, select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Create module from existing sources")])]),_v(" "),_c('li',[_v("Keep clicking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Next")]),_v(" until the process is complete")])])]),_v(" "),_c('li',[_c('p',[_v("In the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project")]),_v(" panel of Intellij, expand the newly-created "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" module, right-click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java")]),_v(" folder inside it, and choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Mark Directory as")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Test Source Root")]),_v(" (that will make the folder turn to green color).")])]),_v(" "),_c('li',[_c('p',[_v("Now, create a class inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java")]),_v(" folder and type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Test")]),_v(" inside it. A code example given below."),_c('br'),_v(" "),_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})]),_v(" Note: If you are using packages, create this class in a matching package (to test "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("duke.Duke")]),_v(" class, create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("duke.DukeTest")]),_v(" i.e., in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\test\\java\\duke\\DukeTest.java")]),_v(").")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("DukeTest")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Test")]),_v("\n")]),_c('span',[_v("}\n")])])])]),_v(" "),_c('li',[_c('p',[_v("Note how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Test")]),_v(" turn to red because Intellij (not having JUnit support yet) does not understand it. But it will pop up a hint, asking if you want to add support for JUnit. Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Add JUnit 5.* to classpath")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("In the dialog that pops up, you can optionally tick the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Sources")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JavaDocs")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Annotations")]),_v(" boxes. After that, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")]),_v(" to add the JUnit 5 to the project dependencies."),_c('br')]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("When using the dialog shown below, if the version auto-selected by Intellij is not available (i.e., it shows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Found: 0")]),_v("), change the version number to a slightly lower number (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("5.6.0")]),_v(") and click the "),_c('span',{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}}),_v(" button to try again."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/guides/tutorials/images/junit/downloadJunitDialog.png"}})])])],1),_v(" "),_c('li',[_c('p',[_v("To check if JUnit integration is working as expected,"),_c('br'),_v("\n7a. Add a dummy test method to the class e.g.,")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" org.junit.jupiter.api.Test;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" org.junit.jupiter.api.Assertions.assertEquals;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("DukeTest")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Test")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("dummyTest")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v("{\n")]),_c('span',[_v("        assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(");\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("7b. Run the test (right-click on the class and choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run DukeTest")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_v("To be able to refer to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Duke")]),_v(" from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DukeTest")]),_v(" class, you need to add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" module as a dependency of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" module you just created."),_c('br'),_v("\n8a. First, ensure there is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" module in your project, as follows:")]),_v(" "),_c('ol',[_c('li',[_v("Check if your project explorer look like this (note how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" modules show up)."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/guides/tutorials/images/junit/modulesMainAndTest.png"}}),_c('br')])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("To see other project sub-folders (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs")]),_v(") not currently shown (refer to the screenshot above), you can change the dropdown (shown at the top of the screenshot) from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project files")])])]),_v(" "),_c('ol',[_c('li',[_v("If there is no module named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(", Intellij may have failed to recognize the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" folder as the source folder and auto-created a module to include the entire project folder, usually given the same name as project folder. If there is such an extraneous module, delete that first (Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project Structure")]),_v(",  click on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Modules")]),_v(", select the module you want to delete, and click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-")]),_v(" button), followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")]),_v("/"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Apply")]),_v("."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/guides/tutorials/images/junit/removeModule.png"}})]),_v(" "),_c('li',[_v("After that, create the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" module the same way you created the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" module in an earlier step above."),_c('br'),_v("\nTip: You may have to close the project and open it again after creating the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" module, before you can see the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" module in the project explorer view.")])]),_v(" "),_c('p',[_v("8b. Now that you have the modules "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(", you can set up the dependency using one of these options:")]),_v(" "),_c('ul',[_c('li',[_v("Option 1: When you add a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Duke")]),_v(" inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DukeTest")]),_v(", Intellij will flag it as an error and will give you an option (i.e., in the bulb icon that pops up) to add the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" module as a dependency."),_c('br')]),_v(" "),_c('li',[_v("Option 2: Follow the info "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/working-with-module-dependencies.html"}},[_v("here")]),_v(" to add the dependency yourself.")])])],1)]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("As you can see from the above, setting up JUnit in Intellij is somewhat complicated. The good news is that it is easier to add JUnit to a project if you are using a build tool such as Gradle (although Gradle itself has a learning curve).")])])],1)],1),_v(" "),_c('br'),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-junit"}},[_v("Using JUnit‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#conventions-to-follow"}},[_v("Conventions to follow‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-junit-support-to-your-project"}},[_v("Adding JUnit support to your project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-tests"}},[_v("Running tests‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)])],1),_v(" "),_m(10)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-junit"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-junit"}}),_v("Using JUnit"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-junit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('a',{attrs:{"href":"https://junit.org/junit5/"}},[_v("JUnit")]),_v(" is a testing framework for Java.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"conventions-to-follow"}},[_c('span',{staticClass:"anchor",attrs:{"id":"conventions-to-follow"}}),_v("Conventions to follow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conventions-to-follow","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Add test code in a folder named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[project root]\\src\\test\\java\\")]),_v(" folder.")]),_v(" "),_c('li',[_v("Name the test class to match the class being tested ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Todo.java")]),_v(" can be tested by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TodoTest.java")]),_v("), and put it in a package to match "),_c('span',{staticClass:"dimmed"},[_v("(reason: if packages are matched, the test class can access package-private members of the target class)")]),_v(". For example,\n"),_c('ul',[_c('li',[_v("Class being tested "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.duke.Todo")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\main\\java\\seedu\\duke\\Todo.java")])]),_v(" "),_c('li',[_v("Test class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.duke.TodoTest")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\test\\java\\seedu\\duke\\TodoTest.java")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"adding-junit-support-to-your-project"}},[_c('span',{staticClass:"anchor",attrs:{"id":"adding-junit-support-to-your-project"}}),_v("Adding JUnit support to your project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-junit-support-to-your-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"running-tests"}},[_c('span',{staticClass:"anchor",attrs:{"id":"running-tests"}}),_v("Running tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-tests","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In Intellij IDEA:\n"),_c('ul',[_c('li',[_v("To run a specific JUnit test class (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/test/java/seedu/DukeTest.java")]),_v("), right-click on the test class, and choose "),_c('span',{staticClass:"text-success"},[_c('span',{staticClass:"fas fa-play",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run {classname}")]),_v(".")]),_v(" "),_c('li',[_v("To run all tests in a folder (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/test/java")]),_v(" folder), right-click on the folder, and choose "),_c('span',{staticClass:"text-success"},[_c('span',{staticClass:"fas fa-play",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run Tests in '...'")]),_v(".")])])]),_v(" "),_c('li',[_v("Using Gradle:\n"),_c('ul',[_c('li',[_v("Run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" task (runs all tests in the project)")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"resources"}},[_c('span',{staticClass:"anchor",attrs:{"id":"resources"}}),_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://junit.org/junit5/docs/current/user-guide/"}},[_v("JUnit 5 User Guide")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v(" on Thu, 2 Feb 2023, 18:55:17 GMT+8]")])])])}
}];
  