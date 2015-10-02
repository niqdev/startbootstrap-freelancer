(function() {
  'use strict';

  angular.module(AppConfig.getModuleName('home')).config(HomeRoute);

  HomeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

  function HomeRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when('', '/')
      .otherwise('/404');

    $stateProvider
      .state('index', {
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      .state('index.home', {
        url: '/',
        views: {
          '': {
            templateUrl: 'views/home.view.html',
            controller: 'HomeController'
          },
          'navigation@index.home': {
            templateUrl: 'views/home-navigation.view.html'
          },
          'header@index.home': {
            templateUrl: 'views/home-header.view.html'
          },
          'portfolio@index.home': {
            templateUrl: 'views/home-portfolio.view.html'
          },
          'about@index.home': {
            templateUrl: 'views/home-about.view.html'
          },
          'contact@index.home': {
            templateUrl: 'views/home-contact.view.html',
            controller: 'ContactController'
          },
          'footer@index.home': {
            templateUrl: 'views/home-footer.view.html'
          }
        }
      })
      .state('index.not-found', {
        url: '/404',
        templateUrl: 'views/404.view.html'
      });
  }

})();
