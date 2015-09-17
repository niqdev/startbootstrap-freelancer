'use strict';

var AppConfig = (function() {

  var name = 'startbootstrapFreelancerApp';

  var vendors = [
    'ngAria',
    'ngCookies',
    'ngSanitize',
    'ngTouch'
  ];

  return {
    name: name,
    vendors: vendors
  };

})();

(function () {

  angular.module(AppConfig.name, AppConfig.vendors);

  // manual initialization
  angular.element(document).ready(function () {
    angular.bootstrap(document, [AppConfig.name]);
  });

})();
