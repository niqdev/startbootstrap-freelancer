(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$log', '$scope'];

  function ContactController($log, $scope) {
    $scope.btnSend = function() {
      $scope.$broadcast('show-errors-check-validity');
      $log.debug('SEND: ' + $scope.contactForm.$valid);
    };
    $scope.btnCancel = function() {
      $log.debug('CANCEL');
    };

    $scope.emailDisabled = true;
  }

})();
