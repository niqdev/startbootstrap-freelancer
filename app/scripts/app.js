(function () {
  'use strict';

  AppConfig.setup();

  angular.module(AppConfig.name)
    .config(['$locationProvider', function ($locationProvider) {
      $locationProvider.hashPrefix('!');
    }]);

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

  angular.module(AppConfig.name)
    .config(['uiGmapGoogleMapApiProvider', 'config',
        function (uiGmapGoogleMapApiProvider, CONFIG) {

      uiGmapGoogleMapApiProvider.configure({
        key: CONFIG.common.googleMapsApiKey,
        v: '3.20',
        libraries: 'weather,geometry,visualization'
      });
    }]);

  // lodash support
  angular.module(AppConfig.name).constant('_', window._);

  // manual initialization
  angular.element(document).ready(function () {
    angular.bootstrap(document, [AppConfig.name]);
  });

})();
