(function () {
  'use strict';

  describe('Directive sbInput:', function () {

    var TEMPLATE = 'scripts/directives/templates/sb-input.template.html';

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

    describe('verify compilation:', function () {

      function expectToThrow(source) {
        expect(function() {
          $compile(angular.element(source))($scope);
          $scope.$digest();
        }).toThrow();
      }

      it('should fail: missing attribute ng-model', function () {
        expectToThrow('<sb-input></sb-input>');
      });
      it('should fail: missing attribute label', function () {
        expectToThrow('<sb-input ng-model=""></sb-input>');
      });
      it('should fail: missing attribute name', function () {
        expectToThrow('<sb-input ng-model="" label=""></sb-input>');
      });
      it('should fail: missing form', function () {
        expectToThrow('<sb-input ng-model="myModel" label="myLabel" name="myName"></sb-input>');
      });

    });

    describe('verify default attributes:', function () {

      it('should verify name WITHOUT id attribute', function () {
        // label
        // input
      });

      it('should verify name WITH id attribute', function () {

      });

      it('should verify placeholder', function () {

      });

      it('should verify default type', function () {

      });

      it('should verify type attribute', function () {

      });

      it('should verify disabled attribute', function () {

      });

    });

    describe('verify label animation:', function () {

      it('should verify default focus/blur', function () {

      });

      it('should verify on focus', function () {

      });

      it('should verify on blur', function () {

      });

    });

    describe('verify label value:', function () {

      it('should verify default no label', function () {

      });

      it('should verify valid label', function () {

      });

      it('should verify error label: required', function () {

      });

      it('should verify error label: minlength', function () {

      });

      it('should verify error label: maxlength', function () {

      });

      it('should verify error label: pattern', function () {

      });

      it('should verify error label: email', function () {

      });

    });

    describe('verify validation attribute:', function () {

      it('should verify required attribute', function () {

      });

      it('should verify minlength attribute', function () {

      });

      it('should verify maxlength attribute', function () {

      });

      it('should verify pattern attribute', function () {

      });

    });

  });

})();
