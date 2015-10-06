(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$log', '$scope'];

  // TODO test
  function ContactController($log, $scope) {

    var emptyContactModel = {
      name: null,
      email: null,
      phone: null,
      message: null
    };
    $scope.showInvalidFields = false;

    $scope.btnSend = function() {
      if ($scope.contactForm.$valid) {
        $log.debug('SEND');
      } else {
        $log.debug('INVALID');
        $scope.showInvalidFields = true;
      }
    };

    $scope.btnCancel = function() {
      $scope.showInvalidFields = false;
      $scope.contactForm.$setPristine();
      //$scope.contactForm.$setValidity();
      $scope.contactModel = angular.copy(emptyContactModel);
    };

  }

})();
