(function () {
  'use strict';

  describe('Directive navScroll:', function () {

    var $rootScope, $compile, $document;

    beforeEach(function () {
      inject(function (_$rootScope_, _$compile_, _$document_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $document = _$document_;
      });
    });

    describe('verify nav:', function () {

      function checkThatFails(source) {
        expect(function() {
          $compile(angular.element(source))($rootScope.$new());
        }).toThrow();
      }

      it('should fail: missing element with class navbar-toggle', function () {
        checkThatFails('<nav nav-scroll></nav>');
      });

      it('should fail: missing element with class navbar-collapse', function () {
        checkThatFails('<nav nav-scroll><button class="navbar-toggle" /></nav>');
      });

    });

    describe('verify scroll:', function () {

      var getSource = function() {
        return '<nav nav-scroll>' +
            '<button class="navbar-toggle" />' +
            '<div class="navbar-collapse">' +
              '<ul>' +
                '<li><a id="link1" href="#target1"></a></li>' +
                '<li><a id="link2" href="#target2" duration="5000"></a></li>' +
                '<li><a id="link3"></a></li>' +
              '</ul>' +
            '</div>' +
            '<div id="target1"></div>' +
            '<div id="target2"></div>' +
          '</nav>';
      };

      function clickLink(element, id) {
        angular.element(element.find('#' + id).eq(0)).trigger('click');
      }

      it('should fail: missing href attribute', function() {

      });

      it('should succeed: scroll but not collapse', function() {

      });

      it('should succeed: scroll and collapse', inject(function() {

        spyOn($document, 'scrollToElementAnimated');

        var element = $compile(angular.element(getSource()))($rootScope.$new());
        clickLink(element, 'link1');

        var target = $document.find('#target1');
        expect($document.scrollToElementAnimated).toHaveBeenCalledWith(target, 30, 2000);
      }));

    });

  });

})();
