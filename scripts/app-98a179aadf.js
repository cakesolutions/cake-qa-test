!function(){"use strict";angular.module("cakeQaTest",["ngResource","ngRoute","ui.bootstrap","toastr"])}(),function(){"use strict";function a(){function a(a){var e=this;e.relativeDate=a(e.creationDate).fromNow()}a.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("cakeQaTest").directive("acmeNavbar",a)}(),function(){"use strict";function a(){var a=this;a.creationDate=1474371397023}angular.module("cakeQaTest").controller("MainController",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("cakeQaTest").run(a)}(),function(){"use strict";function a(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}a.$inject=["$routeProvider"],angular.module("cakeQaTest").config(a)}(),function(){"use strict";angular.module("cakeQaTest").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function a(a,e){a.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}a.$inject=["$logProvider","toastrConfig"],angular.module("cakeQaTest").config(a)}(),angular.module("cakeQaTest").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div id=header-panel class=text-center><div class=col-sm-6><p class=lead><img class=img-responsive src=assets/images/cake.png alt="Cake Logo"><br></p></div><div class=col-sm-6><div class=well><h1>Cake Solutions Ltd</h1></div><div class=well><h3>Automation Tester Exercise</h3><ol class=pull-left><li>test it.</li></ol><br></div></div></div><div class=row><div class="col-sm-12 text-center"><h2>Perhaps start by Registering ...</h2><button class="btn btn-lg btn-primary" href=/register>Registration Form</button></div></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=http://www.ckaesoluitons.net><img class=img-responsive src=assets/images/mobius.png alt="Cake Solutions"></a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>Register</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-98a179aadf.js.map
