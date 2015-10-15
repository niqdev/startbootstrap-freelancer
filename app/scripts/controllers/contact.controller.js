(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$log', '$scope', 'homeService', 'uiGmapGoogleMapApi'];

  function ContactController($log, $scope, homeService, uiGmapGoogleMapApi) {

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
      // milan
      $scope.map = {center: {latitude: 45.4848157, longitude: 9.2009804}, zoom: 8};
      $scope.mapOptions = {scrollwheel: false};

      uiGmapGoogleMapApi.then(function (maps) {
        $log.debug('map is ready');
      });
    }

  }

})();
