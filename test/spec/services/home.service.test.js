(function() {
  'use strict';

  describe('homeService test:', function() {

    var $q, $rootScope, $timeout;
    var homeService;

    beforeEach(function() {
      inject(function(_$q_, _$rootScope_, _$timeout_, _homeService_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        homeService = _homeService_;
      });
    });

    it('should send message: succeed', function() {
      var DATA = {};
      var response = undefined;

      homeService.sendMessage(DATA).then(
        function(value) {
          response = value;
        },
        function(reason) {
          throw Error('should not fail');
        }
      );

      expect(response).toBeUndefined();
      $rootScope.$apply();
      $timeout.flush();
      expect(response).toBeDefined();
      expect(response).toEqual({ status: 'success' });
    });

    it('should send message: fail', function() {
      var response = undefined;

      homeService.sendMessage().then(
        function(value) {
          throw Error('should not succeed');
        },
        function(reason) {
          response = reason;
        }
      );

      expect(response).toBeUndefined();
      $rootScope.$apply();
      expect(response).toBeDefined();
      expect(response).toEqual({ status: 'error', message: 'invalid data' });
    });

  });

})();
