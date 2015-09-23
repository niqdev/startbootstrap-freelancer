(function () {
  'use strict';

  describe('Directive navAnimated:', function () {

    var $rootScope, $compile, $window, $timeout;

    beforeEach(function () {
      mockI18n();
      mockWindowScroll();

      inject(function (_$rootScope_, _$compile_, _$window_, _$timeout_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $window = _$window_;
        $timeout = _$timeout_;
      });
    });

    function mockI18n() {
      module(AppConfig.name, function ($translateProvider) {
        $translateProvider.translations('en', {'mock': 'mock'});
      });
    }

    function mockWindowScroll() {
      $window = {
        pageYOffset: 0
      };
      module(function($provide) {
        $provide.value('$window', $window);
      });
    }

    describe('verify attributes:', function () {

      function checkThatFails(source) {
        expect(function() {
          $compile(angular.element(source))($rootScope.$new());
        }).toThrow();
      }

      it('should fail: missing attribute scroll-threshold', function () {
        checkThatFails('<nav nav-animated></nav>');
      });
      it('should fail: empty attribute scroll-threshold', function () {
        checkThatFails('<nav nav-animated scroll-threshold></nav>');
      });
      it('should fail: invalid number attribute scroll-threshold', function () {
        checkThatFails('<nav nav-animated scroll-threshold="aaa"></nav>');
      });
      it('should fail: missing attribute ng-model', function () {
        checkThatFails('<nav nav-animated scroll-threshold="300"></nav>');
      });
      it('should fail: empty attribute ng-model', function () {
        checkThatFails('<nav nav-animated scroll-threshold="300" ng-model></nav>');
      });
      it('should fail: empty attribute ng-model', function () {
        checkThatFails('<nav nav-animated scroll-threshold="300" ng-model="aaa"></nav>');
      });
    });

    describe('verify scroll:', function () {

      var getSource = function() {
        return '<nav nav-animated scroll-threshold="300" ng-model="isOverThreshold"' +
          'data-ng-class="{\'my-class\': isOverThreshold}"></nav>';
      };

      var scrollWindow = function() {
        angular.element($window).triggerHandler('scroll');
        $timeout.flush();
      };

      it('should fail: less than threshold', function() {
        $window.pageYOffset = 299;

        var $scope = $rootScope.$new();
        $scope.isOverThreshold = false;
        var element = $compile(angular.element(getSource()))($scope);
        scrollWindow();

        expect($scope.isOverThreshold).toBe(false);
        expect(element.hasClass('my-class')).toBeFalsy();
      });

      it('should succeed: more than threshold', function() {
        $window.pageYOffset = 300;

        var $scope = $rootScope.$new();
        $scope.isOverThreshold = false;
        var element = $compile(angular.element(getSource()))($scope);
        scrollWindow();

        expect($scope.isOverThreshold).toBe(true);
        expect(element.hasClass('my-class')).toBeTruthy();
      });

    });

  });

})();
