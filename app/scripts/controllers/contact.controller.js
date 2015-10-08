(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$log', '$scope'];

  function ContactController($log, $scope) {

    var CONTACT_MODEL = {
      name: null,
      email: null,
      phone: null,
      message: null
    };
    $scope.showInvalidFields = false;

    $scope.btnSend = function() {
      $scope.showInvalidFields = false;

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
      $scope.contactModel = angular.copy(CONTACT_MODEL);
    };

  }

})();
