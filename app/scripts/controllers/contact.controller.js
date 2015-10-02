(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$log', '$scope'];

  function ContactController($log, $scope) {
    $scope.btnSendContact = function() {
      $log.debug('SEND');
    };
    $scope.btnCancelContact = function() {
      $log.debug('CANCEL');
    };
  }

})();
