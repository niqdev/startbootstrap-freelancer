(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('sbPortfolioItem', sbPortfolioItem);

  sbPortfolioItem.$inject = [];

  function sbPortfolioItem() {

    var postLink = function (scope, iElement, iAttrs, controller) {
    };

    return {
      templateUrl: 'scripts/directives/templates/sb-portfolio-item.template.html',
      restrict: 'E',
      replace: true,
      link: postLink,
      scope: {
        modalId: '@',
        imageUrl: '@'
      }
    };
  }

})();
