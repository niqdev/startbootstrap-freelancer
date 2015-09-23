(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('navAnimated', navAnimated);

  navAnimated.$inject = ['$log', '$window', '$timeout', '_'];

  /**
   * nav-animated directive
   *
   * @description update model after a threshold
   *
   * @attr {number} scroll-threshold (mandatory)
   *    threshold after which model is updated
   * @attr {boolean} ng-model (mandatory)
   *    updated if threshold is less/more than threshold, with delay
   *
   * @example
   * Usage
   * ```
   * // in controller
   * $scope.isOverThreshold = false;
   *
   * // in view
   *  <nav nav-animated scroll-threshold="300" ng-model="isOverThreshold"
   *      data-ng-class="{'my-class': isOverThreshold}"></nav>
   *
   * // in css
   * .my-class {}
   * ```
   *
   * Deliberately inspired from {@link cbpAnimatedHeader.js}
   */
  function navAnimated($log, $window, $timeout, _) {

    var compile = function (tElement, tAttrs) {
      if (_.isUndefined(tAttrs.scrollThreshold)) throw new Error('missing scroll-threshold attribute');
      if (_.isNaN(parseInt(tAttrs.scrollThreshold))) throw new Error('invalid number scroll-threshold');
      if (_.isUndefined(tAttrs.ngModel)) throw new Error('missing ng-model attribute');
      if (_.isEmpty(tAttrs.ngModel)) throw new Error('empty ng-model attribute');
      return postLink;
    };

    var postLink = function (scope, iElement, iAttrs, controller) {
      if (!_.isBoolean(scope.model)) throw new Error('invalid boolean ng-model attribute');
      var didScroll = false;

      angular.element($window).on('scroll', function (event) {
        if (!didScroll) {
          didScroll = true;

          $timeout(function() {
            scope.model = isOverThreshold(iAttrs.scrollThreshold);
            didScroll = false;
          }, 250);
        }
      });
    };

    function isOverThreshold(threshold) {
      var scrollY = $window.pageYOffset || document.documentElement.scrollTop;
      return scrollY >= threshold;
    }

    return {
      restrict: 'A',
      compile: compile,
      scope: {
        model: '=ngModel'
      }
    };
  }

})();
