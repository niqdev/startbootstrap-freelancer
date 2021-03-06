(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('sbPortfolioItem', sbPortfolioItem);

  sbPortfolioItem.$inject = [];

  function sbPortfolioItem() {
    return {
      templateUrl: 'templates/sb-portfolio-item.template.html',
      restrict: 'E',
      replace: true,
      scope: {
        modalId: '@',
        imageUrl: '@'
      }
    };
  }

})();
