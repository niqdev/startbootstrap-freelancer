(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('sbInput', sbInput);

  sbInput.$inject = ['$log', '_'];

  var TEMPLATE_INPUT = 'scripts/directives/templates/sb-input.template.html';

  function sbInput($log, _) {

    var compile = function (tElement, tAttrs) {
      if (_.isUndefined(tAttrs.ngModel)) throw new Error('missing attribute ng-model');
      if (_.isUndefined(tAttrs.label)) throw new Error('missing attribute label');
      if (_.isUndefined(tAttrs.name)) throw new Error('missing attribute name');
      return postLink;
    };

    var postLink = function (scope, iElement, iAttrs, controller) {
      scope._minLength = parseLength(iAttrs.minLength);
      scope._maxLength = parseLength(iAttrs.maxLength);
      scope.sbInput = controller[scope.name];
    };

    function parseLength(value) {
      var parsed = _.parseInt(value);
      return _.isNumber(parsed) ? parsed : -1;
    }

    return {
      templateUrl: function(elem, attrs) {
        return TEMPLATE_INPUT;
      },
      restrict: 'E',
      replace: true,
      require: '^form',
      compile: compile,
      scope: {
        value: '=ngModel',
        label: '@',
        name: '@',
        // optional
        id: '@',
        type: '@',
        disabled: '=ngDisabled',
        // validation
        required: '=ngRequired',
        minLength: '@',
        maxLength: '@',
        pattern: '@'
      }
    };
  }

})();
