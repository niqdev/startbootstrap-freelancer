(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$log', '$scope', 'homeService'];

  function ContactController($log, $scope, homeService) {

    resetContact();
    initButtons();
    initMap();

    function initButtons() {
      $scope.btnSend = function() {
        $scope.contactView.showInvalidFields = false;

        if ($scope.contactForm.$valid) {
          $scope.contactView.isBtnSendDisabled = true;
          sendMessage($scope.contactModel);
        } else {
          $log.error('INVALID');
          $scope.contactView.showInvalidFields = true;
          $scope.contactView.isBtnSendDisabled = false;
        }
      };

      $scope.btnCancel = function() {
        clearForm();
      };
    }

    function sendMessage(data) {
      homeService.sendMessage(data).then(
        function(response) {
          $log.debug('SEND_MESSAGE: ' + JSON.stringify(response));
          clearForm();
        },
        function(reason) {
          $log.error('SEND_MESSAGE: ' + JSON.stringify(reason));
        }
      );
    }

    function resetContact() {
      $scope.contactModel = {};
      $scope.contactView = {
        showInvalidFields: false,
        isBtnSendDisabled: false
      };
    }

    function clearForm() {
      resetContact();
      $scope.contactForm.$setPristine();
    }

    function initMap() {
      $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
    }

  }

})();
