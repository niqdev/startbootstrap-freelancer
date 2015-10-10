(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('sbTitle', sbTitle);

  sbTitle.$inject = [];

  function sbTitle() {

    var compile = function (tElement, tAttrs) {
      if (_.isUndefined(tAttrs.title)) throw new Error('missing attribute title');
      return postLink;
    };

    var postLink = function (scope, iElement, iAttrs, controller) {
      scope.isLight = iAttrs.themeLight !== undefined;
    };

    return {
      templateUrl: 'templates/sb-title.template.html',
      restrict: 'E',
      replace: true,
      compile: compile,
      scope: {
        title: '@',
        theme: '@themeLight'
      }
    };
  }

})();
