(function () {
  'use strict';

  // TODO
  describe('Directive sbTitle:', function () {

    var $rootScope, $compile;

    beforeEach(function () {
      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      });
    });

    describe('verify:', function () {

      function checkThatFails(source) {
        expect(function() {
          $compile(angular.element(source))($rootScope.$new());
        }).toThrow();
      }

      it('should fail:', function () {
        checkThatFails('');
      });

    });

  });

})();
