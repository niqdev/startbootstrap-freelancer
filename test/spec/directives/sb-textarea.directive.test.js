(function () {
  'use strict';

  describe('Directive sbTextarea:', function () {

    var $scope, $compile;

    beforeEach(function () {
      inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
      });
    });

    function compileDirective(sbTextareaSource) {
      var source = '<form name="myForm">' + sbTextareaSource + '</form>';
      var element = $compile(source)($scope);
      $scope.$digest();
      return element;
    }

    describe('verify compilation:', function () {

      function expectToThrow(source) {
        expect(function() {
          $compile(angular.element(source))($scope);
          $scope.$digest();
        }).toThrow();
      }

      it('should fail: missing attribute ng-model', function () {
        expectToThrow('<sb-textarea></sb-textarea>');
      });
      it('should fail: missing attribute label', function () {
        expectToThrow('<sb-textarea ng-model=""></sb-textarea>');
      });
      it('should fail: missing attribute name', function () {
        expectToThrow('<sb-textarea ng-model="" label=""></sb-textarea>');
      });
      it('should fail: missing form', function () {
        expectToThrow('<sb-textarea ng-model="myModel" label="myLabel" name="myName"></sb-textarea>');
      });

    });

    describe('verify attributes:', function () {

      function findTextarea(source) {
        var element = compileDirective(source);
        var sbTextarea = element.find('textarea')[0];
        return sbTextarea;
      }

      it('should verify name without id attribute', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName"></sb-textarea>';
        var sbTextarea = findTextarea(source);

        expect(sbTextarea.name).toEqual('myName');
        expect(sbTextarea.id).toEqual('ta-myName');
      });

      it('should verify name with id attribute', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName" id="myId"></sb-textarea>';
        var sbTextarea = findTextarea(source);

        expect(sbTextarea.name).toEqual('myName');
        expect(sbTextarea.id).toEqual('ta-myId');
      });

      it('should verify placeholder', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName"></sb-textarea>';
        var sbTextarea = findTextarea(source);

        expect(sbTextarea.placeholder).toEqual('myLabel');
      });

      it('should verify default rows', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName"></sb-textarea>';
        var sbTextarea = findTextarea(source);

        expect(sbTextarea.rows).toBe(5);
      });

      it('should verify rows', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName" rows="8"></sb-textarea>';
        var sbTextarea = findTextarea(source);

        expect(sbTextarea.rows).toBe(8);
      });

    });

    describe('verify animation:', function () {
      // @see sb-input.directive.test.js
    });

    describe('verify label value:', function () {

      var findLabel = function(source) {
        var element =  compileDirective(source);
        return angular.element(element.find('label')[0]);
      };
      var expectLabelToBe = function(label, value) {
        expect(label.text().trim()).toBe(value);
      };

      it('should verify valid label', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName"></sb-textarea>';
        var label =  findLabel(source);

        expect(label.attr('for')).toBe('ta-myName');
        expectLabelToBe(label, 'myLabel');
      });

      it('should verify error label: required', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName" ng-required="true"></sb-textarea>';
        var label =  findLabel(source);

        expectLabelToBe(label, 'common.validation.required');
        $scope.myForm.myName.$setViewValue('required-text');
        expectLabelToBe(label, 'myLabel');
      });

    });

    describe('verify validation attributes:', function () {

      it('should verify required attribute', function () {
        var source = '<sb-textarea ng-model="myModel" label="myLabel" name="myName" ng-required="true"></sb-textarea>';
        compileDirective(source);

        expect($scope.myForm.myName.$error.required).toBeTrue();
        expect($scope.myForm.$invalid).toBeTrue();

        $scope.myForm.myName.$setViewValue('required-text');

        expect($scope.myForm.myName.$error).toEqual({});
        expect($scope.myForm.$valid).toBeTrue();
      });

    });

  });

})();
