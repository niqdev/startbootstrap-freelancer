(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$log', '$scope', '$translate', 'homeConstant', 'config'];

  function HomeController($log, $scope, $translate, CONSTANT, CONFIG) {
    $scope.LANGUAGE = CONSTANT.LANGUAGE;
    $scope.isOverThreshold = false;

    $scope.changeLanguage = function (langKey) {
      $translate.fallbackLanguage(CONSTANT.LANGUAGE.ENGLISH);
      $translate.use(langKey);
    };

    $log.debug('environment=' + CONFIG.name + '|debug=' + CONFIG.debug);
  }

})();
