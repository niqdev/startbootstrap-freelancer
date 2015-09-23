(function () {
  'use strict';

  describe('HomeController test', function () {

    beforeEach(module(AppConfig.name));

    var $rootScope, $scope, $controller;

    beforeEach(function() {
      inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
      });
      $controller('HomeController', {
        $scope: $scope
      });
    });

    it('should init controller', function () {
      expect($scope.isOverThreshold).toBeFalsy();
    });

  });

})();
