(function() {
  'use strict';

  /**
   * Runs before each test
   */
  beforeEach(function () {
    mockI18n();
  });

  function mockI18n() {
    module(AppConfig.name, function ($translateProvider) {
      $translateProvider.translations('en', {'mock': 'mock'});
    });
  }

})();
