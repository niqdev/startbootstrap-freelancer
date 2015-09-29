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
            '<button class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse"></button>' +
            '<div class="collapse navbar-collapse">' +
              '<ul class="nav navbar-nav">' +
                '<li><a id="link1" href="#target1"></a></li>' +
                '<li><a id="link2" href="#target2" duration="5000"></a></li>' +
                '<li><a id="link3"></a></li>' +
              '</ul>' +
            '</div>' +
            '<div id="target1"></div>' +
            '<div id="target2"></div>' +
          '</nav>';
      };

      function triggerClick(element, selector) {
        angular.element(element.find(selector).eq(0)).trigger('click');
      }

      it('should succeed: scroll and collapse with default duration', inject(function() {

        var element = $compile(angular.element(getSource()))($rootScope.$new());
        var navbarToggle = angular.element(element.find('.navbar-toggle'));

        spyOn($document, 'scrollToElementAnimated');
        spyOn(navbarToggle, 'click');

        triggerClick(element, '#link1');

        var target = $document.find('#target1');
        var offset = 30;
        var duration = 2000;
        expect($document.scrollToElementAnimated).toHaveBeenCalledWith(target, offset, duration);

        /*
         * TODO test collapse
         * - on small device: collapse
         * - on large device: do NOT collapse
         * - on collapse: verify trigger('click') - toggle class
         * - on collapse: verify '.navbar-collapse' hasClass('in')
         */
        //expect(navbarToggle.click).toHaveBeenCalled();
      }));

      it('should succeed: scroll with duration attribute', function() {
        spyOn($document, 'scrollToElementAnimated');
        var element = $compile(angular.element(getSource()))($rootScope.$new());

        triggerClick(element, '#link2');

        var target = $document.find('#target2');
        var offset = 30;
        // TODO parseInt
        var duration = '5000';
        expect($document.scrollToElementAnimated).toHaveBeenCalledWith(target, offset, duration);
      });

      it('should fail: missing href attribute', function() {
        spyOn($document, 'scrollToElementAnimated');
        var element = $compile(angular.element(getSource()))($rootScope.$new());

        triggerClick(element, '#link3');
        expect($document.scrollToElementAnimated).not.toHaveBeenCalled();
      });

    });

  });

})();
