'use strict';

var AppConfig = (function() {

  var appName = 'startbootstrapFreelancerApp';

  var vendorsDependencies = [
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ui.router',
    'duScroll',
    'ui.bootstrap.showErrors'
  ];

  var getModuleName = function(name) {
    return appName + '.' + name;
  };

  var registerModule = function(name, dependencies) {
    // create angular module
    angular.module(getModuleName(name), dependencies || []);

    // add the module to the AngularJS configuration file
    angular.module(appName).requires.push(getModuleName(name));
  };

  var setup = function() {
    // define main module and add dependencies
    angular.module(appName, vendorsDependencies);
    // add app modules
    registerModule('home', []);
  };

  return {
    name: appName,
    getModuleName: getModuleName,
    setup: setup
  };

})();
