(function () {
  'use strict';

  angular
    .module(AppConfig.getModuleName('home'))
    .factory('homeService', homeService);

  homeService.$inject = ['$log', '$q', '$timeout'];

  function homeService($log, $q, $timeout) {

    function sendMessage(data) {
      var deferred = $q.defer();
      if (data) {
        // should use $http
        $timeout(function() {
          deferred.resolve({
            status: 'success'
          });
        }, 2000);
      } else {
        deferred.reject({
          status: 'error',
          message: 'invalid data'
        });
      }
      return deferred.promise;
    }

    return {
      sendMessage: sendMessage
    };
  }

})();
