(function () {
  'use strict';

  describe('HomeController test:', function () {

    var $scope, $controller, $translate;
    var CONSTANT;

    beforeEach(function() {
      inject(function (_$rootScope_, _$controller_, _$translate_, _homeConstant_) {
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $translate = _$translate_;
        CONSTANT = _homeConstant_;
      });
      $controller('HomeController', {
        $scope: $scope
      });
    });

    it('should init controller', function () {
      expect($scope.LANGUAGE).toEqual(CONSTANT.LANGUAGE);
      expect($scope.isOverThreshold).toBeFalse();
    });

    it('should change language', function () {

      var LANGUAGE_KEY = 'lang-key';

      spyOn($translate, 'fallbackLanguage');
      spyOn($translate, 'use');

      $scope.changeLanguage(LANGUAGE_KEY);

      expect($translate.fallbackLanguage).toHaveBeenCalledWith(CONSTANT.LANGUAGE.ENGLISH);
      expect($translate.use).toHaveBeenCalledWith(LANGUAGE_KEY);
    });

  });

})();
