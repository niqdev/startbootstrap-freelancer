(function() {
  'use strict';

  angular.module(AppConfig.name, [])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$log', '$scope'];

  function HomeController($log, $scope) {
    $scope.awesomeThings = 'startbootstrap';
  }

})();
