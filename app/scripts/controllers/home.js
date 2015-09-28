(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$log', '$scope', '$document'];

  function HomeController($log, $scope, $document) {
    $scope.isOverThreshold = false;
  }

})();
