(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home')).config(HomeRoute);

  HomeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

  function HomeRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '');

    $stateProvider
      .state('home', {
        url: '',
        views: {
          '': {
            templateUrl: 'views/home.view.html'
          }
        }
      });
  }

})();
