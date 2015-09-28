(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('navScroll', navScroll);

  navScroll.$inject = ['$log', '$document', '_'];

  var DEFAULT = {
    OFFSET: 30,
    DURATION: 2000
  };

  /**
   * nav-scroll directive
   *
   * @description scroll smoothly with a delay and collapse navbar on click on xs-devices
   *   Note: nav-scroll is equivalent to directives 'du-smooth-scroll duration="XXX"' but
   *   does not work well with bootstrap 'data-toggle="collapse" data-target=".navbar-collapse"'
   *
   * @attr {number} duration (optional)
   *   default: 2000 ms
   *
   * @example
   * Usage
   * ```
   * <body data-spy="scroll" data-target=".navbar">
   *   <nav nav-scroll>
   *     <button class="navbar-toggle" />
   *
   *     <div class="navbar-collapse">
   *       <ul>
   *         <li><a href="#target1"></a></li>
   *         <li><a href="#target2"></a></li>
   *         <li><a href="#target3" duration="5000"></a></li>
   *       </ul>
   *     </div>
   *   </nav>
   *   <div id="target1" />
   *   <div id="target2" />
   *   <div id="target3" />
   * </body>
   * ```
   *
   * Depends on {@link https://github.com/oblador/angular-scroll}
   */
  function navScroll($log, $document, _) {

    var compile = function (tElement, tAttrs) {
      function assertExists(elemClass) {
        if (angular.element(tElement.find('.' + elemClass)[0]).length !== 1) {
          throw new Error('element with class [' + elemClass + '] not found');
        }
      }

      assertExists('navbar-toggle');
      assertExists('navbar-collapse');
      return postLink;
    };

    var postLink = function (scope, iElement, iAttrs, controller) {
      angular.element(iElement.find('.navbar-collapse li a')).on('click', function (event) {
        var target = angular.element(this).attr('href');
        var duration = angular.element(this).attr('duration');

        if (!_.isUndefined(target)) {
          scrollToElementAnimated(target, duration);
          collapseNavbarOnSmallDevice();
        }
      });
    };

    function findElement(selector) {
      // angular.element(document.querySelector(selector))
      return $document.find(selector);
    }

    function scrollToElementAnimated(element, duration) {
      $document.scrollToElementAnimated(findElement(element), DEFAULT.OFFSET, duration || DEFAULT.DURATION);
    }

    function collapseNavbarOnSmallDevice() {
      var navbarToggle = findElement('.navbar-toggle');
      if (navbarToggle.is(':visible')) {
        navbarToggle.trigger('click');
      }
    }

    return {
      restrict: 'A',
      compile: compile
    };
  }

})();
