'use strict';

angular.module('startbootstrapFreelancerApp', [
  'ngAria',
  'ngCookies',
  'ngSanitize',
  'ngTouch'
]);

// manual initialization
angular.element(document).ready(function () {
  angular.bootstrap(document, ['startbootstrapFreelancerApp']);
});
