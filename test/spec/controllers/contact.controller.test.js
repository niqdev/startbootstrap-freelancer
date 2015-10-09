(function () {
  'use strict';

  describe('ContactController test:', function () {

    var TEMPLATE = 'views/home-contact.view.html';

    var $scope, $controller, $compile, $templateCache, $q;
    var homeService, deferred, element;

    beforeEach(function() {
      inject(function (_$rootScope_, _$controller_, _$compile_,
        _$templateCache_, _$q_, _homeService_) {

        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        $q = _$q_;
        homeService = _homeService_;
      });
    });

    function newControllerWithTemplate() {
      deferred = $q.defer();
      spyOn(homeService, 'sendMessage').and.returnValue(deferred.promise);

      var templateHtml = $templateCache.get(TEMPLATE);
      $controller('ContactController', {
        $scope: $scope
      });

      $scope.$apply(function() {
        element = $compile(angular.element(templateHtml))($scope);
      });
    }

    function submitForm() {
      var button = element.find('button[type="submit"]')[0];
      angular.element(button).trigger('submit');
    }

    function expectDefaultContact() {
      expect($scope.contactForm.$invalid).toBeTrue();
      expect($scope.contactModel).toEqual({});
      expect($scope.contactView.showInvalidFields).toBeFalse();
      expect($scope.contactView.isBtnSendDisabled).toBeFalse()
    }

    function expectClearForm() {
      expectDefaultContact();
      expect($scope.contactForm.$pristine).toBeTrue();
    }

    it('should init controller', function () {
      newControllerWithTemplate();

      expectDefaultContact();
    });

    it('should succeed: click button send', function () {
      var CONTACT_MODEL = {
        name: 'name',
        email: 'name@mail.com',
        phone: '1234567',
        message: 'my message'
      };

      newControllerWithTemplate();

      deferred.resolve({ status: 'success' });

      expectDefaultContact();

      $scope.$apply(function() {
        $scope.contactModel = CONTACT_MODEL;
      });

      expect($scope.contactForm.$valid).toBeTrue();

      submitForm();

      expect(homeService.sendMessage).toHaveBeenCalledWith(CONTACT_MODEL);
      expectClearForm();
    });

    it('should fail: error while sending message', function () {
      var CONTACT_MODEL = {
        name: 'name',
        email: 'name@mail.com',
        phone: '1234567',
        message: 'my message'
      };

      newControllerWithTemplate();

      deferred.reject({ status: 'error', message: 'invalid data' });

      expectDefaultContact();

      $scope.$apply(function() {
        $scope.contactModel = CONTACT_MODEL;
      });

      expect($scope.contactForm.$valid).toBeTrue();

      submitForm();

      expect(homeService.sendMessage).toHaveBeenCalledWith(CONTACT_MODEL);
      expect($scope.contactView.showInvalidFields).toBeFalse();
      expect($scope.contactView.isBtnSendDisabled).toBeTrue();
    });

    it('should fail: click button send', function () {
      newControllerWithTemplate();
      submitForm();

      expect($scope.contactForm.$invalid).toBeTrue();
      expect($scope.contactView.showInvalidFields).toBeTrue();
      expect($scope.contactView.isBtnSendDisabled).toBeFalse();
    });

    it('should click button cancel', function () {
      newControllerWithTemplate();

      $scope.$apply(function() {
        $scope.btnCancel();
      });

      expectClearForm();
    });

  });

})();
