(function() {
  'use strict';

  angular
    .module('cakeQaTest')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($log) {
    var vm = this;
    vm.registrationComplete = false;

    vm.register = function (form) {
      $log.info(vm.user);
      $log.info(form);
      if(vm.user.firstName.length > 10) {
        form.firstName.$setValidity("randomError",false);
      } else {
        vm.registrationComplete = true;
      }

    }

  }
})();
