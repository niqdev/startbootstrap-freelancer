(function () {
  'use strict';

  describe('ContactController test:', function () {

    var TEMPLATE = 'views/home-contact.view.html';

    var $rootScope, $scope, $controller, $compile, $templateCache;

    beforeEach(function() {
      inject(function (_$rootScope_, _$controller_, _$compile_, _$templateCache_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $compile = _$compile_;
        $templateCache = _$templateCache_;
      });
    });

    function newControllerWithTemplate() {
      var templateHtml = $templateCache.get(TEMPLATE);
      $controller('ContactController', {
        $scope: $scope
      });

      $scope.$apply(function() {
        $compile(angular.element(templateHtml))($scope);
      });
    }

    it('should init controller', function () {
      newControllerWithTemplate();

      expect($scope.showInvalidFields).toBeFalse();
    });

    it('should succeed: click button send', function () {
      $scope.contactModel = {
        name: 'name',
        email: 'name@mail.com',
        phone: '1234567',
        message: 'my message'
      };

      newControllerWithTemplate();

      $scope.$apply(function() {
        $scope.btnSend();
      });

      expect($scope.contactForm.$valid).toBeTrue();
      expect($scope.showInvalidFields).toBeFalse();
      // TODO invoke service
    });

    it('should fail: click button send', function () {
      newControllerWithTemplate();

      $scope.$apply(function() {
        $scope.btnSend();
      });

      expect($scope.contactForm.$invalid).toBeTrue();
      expect($scope.showInvalidFields).toBeTrue();
    });

    it('should click button cancel', function () {
      var CONTACT_MODEL = {
        name: null,
        email: null,
        phone: null,
        message: null
      };

      newControllerWithTemplate();

      $scope.$apply(function() {
        $scope.btnCancel();
      });

      expect($scope.showInvalidFields).toBeFalse();
      expect($scope.contactForm.$pristine).toBeTrue();
      expect($scope.contactForm.$invalid).toBeTrue();
      expect($scope.contactModel).toEqual(CONTACT_MODEL);
    });

  });

})();
