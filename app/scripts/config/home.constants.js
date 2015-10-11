(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .constant('homeConstant', homeConstant());

  function homeConstant() {
    return {
      LANGUAGE: {
        ENGLISH: 'en',
        ITALIAN: 'it'
      }
    };
  }

})();
