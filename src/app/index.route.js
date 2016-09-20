(function() {
  'use strict';

  angular
    .module('cakeQaTest')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'app/components/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
