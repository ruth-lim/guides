
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('p',[_v("Scenario: You have forked a project that already had support for using Codecov in the Github Actions CI pipeline. Now you want to set up your fork to work with Codecov as well.")]),_v(" "),_c('p',[_v("Given below are the steps for achieving the above, recommended to be done by someone who has admin access to the Github organization that contains the fork.")]),_v(" "),_m(4),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("You can control if CI still passes even if Codecov task fails")]),_v(" using the line"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fail_ci_if_error: true")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fail_ci_if_error: false")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".github/workflows/gradle.yml")]),_v(".")])]),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-codecov"}},[_v("Using Codecov‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-codecov-with-github-actions"}},[_v("Setting up Codecov with GitHub actions‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(5)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-codecov"}},[_v("Using Codecov"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-codecov","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('strong',[_c('a',{attrs:{"href":"https://about.codecov.io/"}},[_v("Codecov")]),_v(" is an online service for generating test coverage reports.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-codecov-with-github-actions"}},[_v("Setting up Codecov with GitHub actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-codecov-with-github-actions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('a',{attrs:{"href":"https://app.codecov.io/signup/"}},[_c('strong',[_v("Sign up for a Codecov account")])]),_v(" using your Github account.")]),_v(" "),_c('li',[_c('strong',[_v("Authorize Codecov to access your repo")]),_v(": Go to "),_c('a',{attrs:{"href":"https://github.com/settings/connections/applications/c68c81cbfd179a50784a"}},[_v("this page")]),_v(", go to the "),_c('span',{staticClass:"large"},[_v("Organization Access")]),_v(" section, and click the "),_c('button',{staticClass:"btn btn-outline-primary btn-sm",attrs:{"type":"button"}},[_v("grant")]),_v(" button in front of your Github org's name."),_c('br'),_v("\nIf you don't have admin rights to the org in concern, you need to click on the "),_c('button',{staticClass:"btn btn-outline-primary btn-sm",attrs:{"type":"button"}},[_v("request")]),_v(" button instead, and wait for an admin to approve the request.")]),_v(" "),_c('li',[_c('strong',[_v("Sync your repo list in Codecov:")]),_v(" Login to "),_c('a',{attrs:{"href":"https://app.codecov.io"}},[_v("Codecov")]),_v(" using your Github account. Ensure your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("org/fork")]),_v(" is listed in the home page. If not, use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("re-syncing")]),_v(" link to sync Codecov data with Github (and refresh the page afterwards). Try again if it doesn't work the first time, as syncing might take some time.")]),_v(" "),_c('li',[_c('strong',[_v("Install the Codecov integration on Github:")]),_v(" Go to "),_c('a',{attrs:{"href":"https://github.com/apps/codecov"}},[_v("this page")]),_v(" and click on the green "),_c('button',{staticClass:"btn btn-success btn-sm",attrs:{"type":"button"}},[_v("Install")]),_v(" button. In the next steps, choose the org and the fork you want to set up Codecov for.")]),_v(" "),_c('li',[_c('strong',[_v("Check for coverage status:")]),_v(" Go back to "),_c('a',{attrs:{"href":"https://app.codecov.io/gh"}},[_v("your Codecov home page")]),_v(". You might still see "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("not enabled")]),_v(" in front of your org/repo name. But this should change the next time you run CI in your fork, at which point you should see the code coverage percentage in front of your fork name. An example screenshot can be seen in the step 1 of "),_c('a',{attrs:{"href":"https://docs.codecov.com/docs"}},[_v("this Codecov Quick Start guide")]),_v(".")]),_v(" "),_c('li',[_c('strong',[_v("Display the Codecov badge:")]),_v(" If your fork has a badge showing the Codecov status (e.g, "),_c('a',{attrs:{"href":"https://codecov.io/gh/se-edu/addressbook-level3/branch/master/graph/badge.svg","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://codecov.io/gh/se-edu/addressbook-level3/branch/master/graph/badge.svg","alt":"codecov"}})]),_v("), get the Markdown code for the Codecov badge provided in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://app.codecov.io/gh/{YOUR_ORG}/{YOUR_FORK}/settings/badge")]),_v(" (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://app.codecov.io/gh/se-edu/addressbook-level3/settings/badge")]),_v(")and update the appropriate page in your fork.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.0.1")]),_v(" on Sat, 26 Aug 2023, 13:00:14 GMT+8]")])])])}
}];
  