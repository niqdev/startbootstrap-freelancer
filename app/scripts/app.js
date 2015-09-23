(function () {
  'use strict';

  AppConfig.setup();

  angular.module(AppConfig.name)
    .config(['$locationProvider', function ($locationProvider) {
      $locationProvider.hashPrefix('!');
    }]);

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
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitize');
    }]);

  // lodash support
  angular.module(AppConfig.name).constant('_', window._);

  // manual initialization
  angular.element(document).ready(function () {
    angular.bootstrap(document, [AppConfig.name]);
  });

})();
