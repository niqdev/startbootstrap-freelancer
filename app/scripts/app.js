(function () {
  'use strict';

  AppConfig.setup();

  // TODO compress i18n json
  angular.module(AppConfig.name)
    .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.useStaticFilesLoader({
        files: [{
          prefix: 'i18n/locale-',
          suffix: '.json'
        }]
      });

      $translateProvider.preferredLanguage('en');
    }]);

  // manual initialization
  angular.element(document).ready(function () {
    angular.bootstrap(document, [AppConfig.name]);
  });

})();
