(function () {
  'use strict';

  angular.module(AppConfig.name, AppConfig.vendors);

  // manual initialization
  angular.element(document).ready(function () {
    angular.bootstrap(document, [AppConfig.name]);
  });

})();
