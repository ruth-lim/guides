
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Imagine yourself as a director of a play. First you provision the props that you will feature in your play. These can be hand props for your actors to interact with or even set dressings just to liven up the background. You then decide where to layout the props for every scene. With a proper script in hand, you can finally approach a theatre and request for a stage. There on, it’s just a matter of pulling the curtains on your masterpiece.")]),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/javafx/JavaFxHierarchy.png"}}),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_m(12),_v(" "),_m(13),_v(" "),_m(14),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("Congratulations! You have created your first GUI application!")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_c('hr'),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#javafx-tutorial-part-1-introduction"}},[_v("JavaFX tutorial part 1 – Introduction‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#lifecycle-of-a-javafx-application"}},[_v("Lifecycle of a JavaFX  application‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-java-fx"}},[_v("Setting up Java FX‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#writing-your-first-program"}},[_v("Writing your first program‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#exercises"}},[_v("Exercises‎")])])])],1)])],1),_v(" "),_m(22)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"javafx-tutorial-part-1-introduction"}},[_c('span',{staticClass:"anchor",attrs:{"id":"javafx-tutorial-part-1-introduction"}}),_v("JavaFX tutorial part 1 – Introduction"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javafx-tutorial-part-1-introduction","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"lifecycle-of-a-javafx-application"}},[_c('span',{staticClass:"anchor",attrs:{"id":"lifecycle-of-a-javafx-application"}}),_v("Lifecycle of a JavaFX  application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#lifecycle-of-a-javafx-application","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("A JavaFX application is like a play you are directing. Instead of creating props, you create "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Nodes")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Nodes")]),_v(" are the fundamental building blocks of a JavaFX application), and place them onto a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v(" (a scene is a graph of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s). Then, you set your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v(" on a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" provided by JavaFX. When you call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage#show()")]),_v(" method, JavaFX renders a window with your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" on it.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-java-fx"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-java-fx"}}),_v("Setting up Java FX"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-java-fx","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"if-you-are-not-using-gradle"}},[_c('span',{staticClass:"anchor",attrs:{"id":"if-you-are-not-using-gradle"}}),_v("If you are not using Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#if-you-are-not-using-gradle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Download the "),_c('a',{attrs:{"href":"https://gluonhq.com/products/javafx/"}},[_v("JavaFX 11 SDK")]),_v(" and unzip it.")])]),_v(" "),_c('li',[_c('p',[_v("Import the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("libs")]),_v(" folder from the SDK into your project (note: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JAVAFX_HOME")]),_v(" is the directory in which you have unzipped the JavaFX SDK).")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project Structure")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Libraries")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("+")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Java")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{JAVAFX_HOME}/lib")])])]),_v(" "),_c('li',[_c('p',[_v("From "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Edit Configurations")]),_v(", add the following line into your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VM options")]),_v(" for each of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" classes.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--module-path {JAVAFX_HOME}/lib --add-modules javafx.controls,javafx.fxml")]),_c('br'),_v("\ne.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--module-path C:/javafx-sdk-11.0.2/lib --add-modules javafx.controls,javafx.fxml")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"if-you-are-using-gradle"}},[_c('span',{staticClass:"anchor",attrs:{"id":"if-you-are-using-gradle"}}),_v("If you are using Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#if-you-are-using-gradle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"javafx-gradle"}},[_c('p',[_v("Update your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" to include the following lines:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("repositories {\n")]),_c('span',[_v("    mavenCentral()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("dependencies {\n")]),_c('span',[_v("    String javaFxVersion = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'11'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Alternatively, you can follow the approach mentioned in "),_c('a',{attrs:{"href":"https://openjfx.io/openjfx-docs/#gradle"}},[_v("this tutorial")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"writing-your-first-program"}},[_c('span',{staticClass:"anchor",attrs:{"id":"writing-your-first-program"}}),_v("Writing your first program"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#writing-your-first-program","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("As customary, let’s start off with a simple “Hello World” program. Let's say you have a class named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Duke")]),_v(" that you want make a GUI. First, modify the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Duke")]),_v(" class to extend "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("javafx.application.Application")]),_v(". This requires you to override the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Application#start()")]),_v(" method and provide a concrete implementation. Notice that the method signature for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Application#start()")]),_v(" has a parameter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(". This is the "),_c('em',[_v("primary stage")]),_v(" that JavaFX provides.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.application.Application;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.Scene;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.control.Label;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.stage.Stage;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Duke")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Application")]),_v(" ")]),_v("{\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Override")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("start")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Stage stage)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        Label helloWorld = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Label("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Hello World!\"")]),_v("); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Creating a new Label control")]),_v("\n")]),_c('span',[_v("        Scene scene = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Scene(helloWorld); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Setting the scene to be our Label")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("        stage.setScene(scene); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Setting the stage to show our screen")]),_v("\n")]),_c('span',[_v("        stage.show(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Render the stage.")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note how we have created a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" to contain the text that we want to show. We then create the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v(" and set its content. Finally, we set the stage and show it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Next, we create another Java class, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(", as an entry point to our application.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(" class is reproduced below in its entirety.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.application.Application;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/**")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v(" * A launcher class to workaround classpath issues.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v(" */")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Launcher")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(String[] args)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        Application.launch(Duke.class, args);\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(" and you should see something like this:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/HelloWorld.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/HelloWorld.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"exercises"}},[_c('span',{staticClass:"anchor",attrs:{"id":"exercises"}}),_v("Exercises"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exercises","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("We mentioned that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s are the fundamental building blocks of JavaFX and used a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" as our root node in the HelloWorld application.")]),_v(" "),_c('ol',[_c('li',[_v("What are some of the other types of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s?")]),_v(" "),_c('li',[_v("How does JavaFX group them?")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s can be interacted with like Plain Old Java Objects (POJO).")]),_v(" "),_c('ol',[_c('li',[_v("What properties of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" can you change programmatically?")]),_v(" "),_c('li',[_v("Try changing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" to have a font of Arial at size 50.")])])]),_v(" "),_c('li',[_c('p',[_v("You’ve learnt that a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" can be thought of as a window.")]),_v(" "),_c('ol',[_c('li',[_v("Can you have more than one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" an application?")]),_v(" "),_c('li',[_v("Try creating another stage and showing it! What happens?")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/javaFx.html"}},[_c('span',{staticClass:"fas fa-arrow-up",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_v("ToC")])]),_v(" | "),_c('span',{staticClass:"badge rounded-pill bg-primary"},[_c('strong',[_c('span',{staticClass:"large"},[_v("What's next?")])])]),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/javaFxPart2.html"}},[_c('span',{staticClass:"fas fa-arrow-right",attrs:{"aria-hidden":"true"}}),_v(" JavaFX tutorial part 2 - "),_c('strong',[_v("Creating a GUI for Duke")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.1")]),_v(" on Fri, 26 Aug 2022, 10:13:53 GMT+8]")])])])}
}];
  