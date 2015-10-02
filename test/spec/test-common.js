(function() {
  'use strict';

  /**
   * Runs before each test
   */
  beforeEach(function () {
    initTemplateCache();
    mockI18n();
  });

  function initTemplateCache() {
    module('ngHtml2JsPreprocessor');
  }

  function mockI18n() {
    module(AppConfig.name, function ($translateProvider) {
      $translateProvider.translations('en', {'mock': 'mock'});
    });
  }

})();
