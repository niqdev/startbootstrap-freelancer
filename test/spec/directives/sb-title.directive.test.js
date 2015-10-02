(function () {
  'use strict';

  describe('Directive sbTitle:', function () {

    var TEMPLATE = 'scripts/directives/templates/sb-title.template.html';
    var THEME = {
      DEFAULT: 'star-primary',
      LIGHT: 'star-light'
    };

    var $scope, $compile, $templateCache;

    beforeEach(function () {
      inject(function (_$rootScope_, _$compile_, _$templateCache_) {
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
      });
    });

    function compileDirective() {
      var templateHtml = $templateCache.get(TEMPLATE);
      return $compile(angular.element(templateHtml))($scope);
    }

    it('should fail: missing attribute title', function () {
      var compileError = function() {
        $compile(angular.element('<sb-title></sb-title>'))($scope);
        $scope.$digest();
      };
      expect(compileError).toThrow();
    });

    it('should succeed: has title with default theme', function () {
      var TITLE = 'title-to-translate';
      var element = compileDirective();

      $scope.$apply(function() {
        $scope.title = TITLE;
      });
      expect(element.find('h2').length).toBe(1);
      expect(element.find('h2').text()).toEqual(TITLE);

      expect(element.find('hr').length).toBe(1);
      expect(element.find('hr').hasClass(THEME.DEFAULT)).toBe(true);
      expect(element.find('hr').hasClass(THEME.LIGHT)).toBe(false);
    });

    it('should succeed: has theme light', function () {
      var TITLE = 'my-new-title';
      var source = '<sb-title title="{{myTitle}}" theme-light></sb-title>';
      var element = $compile(source)($scope);

      $scope.$apply(function() {
        $scope.myTitle = TITLE;
      });
      expect(element.find('h2').length).toBe(1);
      expect(element.find('h2').text()).toEqual(TITLE);

      expect(element.find('hr').length).toBe(1);
      expect(element.find('hr').hasClass(THEME.DEFAULT)).toBe(false);
      expect(element.find('hr').hasClass(THEME.LIGHT)).toBe(true);
    });

  });

})();
