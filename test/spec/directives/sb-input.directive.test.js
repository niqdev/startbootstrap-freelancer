(function () {
  'use strict';

  describe('Directive sbInput:', function () {

    var $scope, $compile;

    beforeEach(function () {
      inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
      });
    });

    function compileDirective(sbInputSource) {
      var source = '<form name="myForm">' + sbInputSource + '</form>';
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

      function findInput(source) {
        var element = compileDirective(source);
        var sbInput = element.find('input')[0];
        return sbInput;
      }

      it('should verify name WITHOUT id attribute', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName"></sb-input>';
        var sbInput = findInput(source);

        expect(sbInput.name).toEqual('myName');
        expect(sbInput.id).toEqual('i-myName');
      });

      it('should verify name WITH id attribute', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" id="myId"></sb-input>';
        var sbInput = findInput(source);

        expect(sbInput.name).toEqual('myName');
        expect(sbInput.id).toEqual('i-myId');
      });

      it('should verify placeholder', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName"></sb-input>';
        var sbInput = findInput(source);

        expect(sbInput.placeholder).toEqual('myLabel');
      });

      it('should verify default type', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName"></sb-input>';
        var sbInput = findInput(source);

        expect(sbInput.type).toEqual('text');
      });

      it('should verify type attribute', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" type="email"></sb-input>';
        var sbInput = findInput(source);

        expect(sbInput.type).toEqual('email');
      });

      it('should verify disabled attribute', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" ng-disabled="isDisabled"></sb-input>';
        var sbInput = findInput(source);

        expect(sbInput.disabled).toBeFalse();

        $scope.$apply(function() {
          $scope.isDisabled = true;
        });

        expect(sbInput.disabled).toBeTrue();
      });

    });

    describe('verify animation:', function () {

      function getElement() {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName"></sb-input>';
        return compileDirective(source);
      }

      it('should verify default classes', function () {
        var element = getElement();
        var divFormGroup = angular.element(element.find('.floating-label-form-group')[0]);

        expect(divFormGroup.hasClass('floating-label-form-group-with-focus')).toBeFalse();
        expect(divFormGroup.hasClass('floating-label-form-group-with-value')).toBeFalse();
      });

      it('should verify on focus/blur', function () {
        var element = getElement();
        var divFormGroup = angular.element(element.find('.floating-label-form-group')[0]);
        var sbInput = angular.element(element.find('input')[0]);

        expect(divFormGroup.hasClass('floating-label-form-group-with-focus')).toBeFalse();
        sbInput.triggerHandler('focus');
        expect(divFormGroup.hasClass('floating-label-form-group-with-focus')).toBeTrue();
        sbInput.triggerHandler('blur');
        expect(divFormGroup.hasClass('floating-label-form-group-with-focus')).toBeFalse();
      });

      it('should add class when input is dirty', function () {
        var element = getElement();
        var divFormGroup = angular.element(element.find('.floating-label-form-group')[0]);

        expect(divFormGroup.hasClass('floating-label-form-group-with-value')).toBeFalse();
        expect($scope.myForm.$pristine).toBeTrue();
        expect($scope.myForm.$dirty).toBeFalse();

        $scope.myForm.myName.$setViewValue('this is a test');

        expect(divFormGroup.hasClass('floating-label-form-group-with-value')).toBeTrue();
        expect($scope.myForm.$pristine).toBeFalse();
        expect($scope.myForm.$dirty).toBeTrue();
      });

    });

    describe('verify label value:', function () {

      var findLabel = function(source) {
        var element =  compileDirective(source);
        return angular.element(element.find('label')[0]);
      };
      var expectFormToBeValid = function() {
        expect($scope.myForm.$valid).toBeTrue();
      };
      var expectFormToBeInvalid = function() {
        expect($scope.myForm.$invalid).toBeTrue();
      };
      var expectLabelToBe = function(label, value) {
        expect(label.text().trim()).toBe(value);
      };
      var expectDefaultValidLabel = function(label) {
        expectLabelToBe(label, 'myLabel');
        expectFormToBeValid();
      };
      var setInputValue = function(value) {
        $scope.myForm.myName.$setViewValue(value);
      };


      it('should verify valid label', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName"></sb-input>';
        var label =  findLabel(source);

        expect(label.attr('for')).toBe('i-myName');

        expectDefaultValidLabel(label);
      });

      it('should verify error label: required', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" ng-required="true"></sb-input>';
        var label =  findLabel(source);

        expectFormToBeInvalid();
        expectLabelToBe(label, 'common.validation.required');

        setInputValue('required-text');

        expectDefaultValidLabel(label);
      });

      it('should verify error label: minlength', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" min-length="3"></sb-input>';
        var label =  findLabel(source);

        setInputValue('XY');
        expectFormToBeInvalid();
        expectLabelToBe(label, 'common.validation.min-length');

        setInputValue('XYZ');
        expectDefaultValidLabel(label);
      });

      it('should verify error label: maxlength', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" max-length="3"></sb-input>';
        var label =  findLabel(source);

        setInputValue('XYZW');
        expectFormToBeInvalid();
        expectLabelToBe(label, 'common.validation.max-length');

        setInputValue('XYZ');
        expectDefaultValidLabel(label);
      });

      it('should verify error label: pattern', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" pattern="^\\d{2,3}$"></sb-input>';
        var label =  findLabel(source);

        setInputValue('XYZ');
        expectFormToBeInvalid();
        expectLabelToBe(label, 'common.validation.pattern');

        setInputValue('1');
        expectFormToBeInvalid();
        expectLabelToBe(label, 'common.validation.pattern');

        setInputValue('12');
        expectDefaultValidLabel(label);

        setInputValue('123');
        expectDefaultValidLabel(label);

        setInputValue('1234');
        expectFormToBeInvalid();
        expectLabelToBe(label, 'common.validation.pattern');
      });

      it('should verify error label: email', function () {
        var source = '<sb-input ng-model="myModel" label="myLabel" name="myName" type="email"></sb-input>';
        var label =  findLabel(source);

        setInputValue('myEmail');
        expectLabelToBe(label, 'common.validation.email');

        setInputValue('myEmail@google.com');
        expectDefaultValidLabel(label);
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
