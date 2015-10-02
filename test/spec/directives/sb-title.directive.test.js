(function () {
  'use strict';

  describe('Directive sbTitle:', function () {

    var TEMPLATE = 'scripts/directives/templates/sb-title.template.html';

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

    //function checkThatFails(source) {
    //  expect(function() {
    //    $compile(angular.element(source))($rootScope.$new());
    //  }).toThrow();
    //}

    it('should fail: missing attribute title', function () {
      var element = compileDirective();
      $scope.$digest();
      console.log(element);
    });

  });

})();
