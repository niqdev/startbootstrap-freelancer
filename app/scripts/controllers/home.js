(function() {
  'use strict';

  angular.module('startbootstrapFreelancerApp', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$log', '$scope'];

  function HomeController($log, $scope) {
    $scope.awesomeThings = 'nik';
  }

})();
