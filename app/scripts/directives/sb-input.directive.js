(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('sbText', sbText);

  sbText.$inject = ['$log', '_'];

  var TEMPLATE_INPUT = 'scripts/directives/templates/sb-input.template.html';
  var TEMPLATE_TEXTAREA = 'scripts/directives/templates/sb-textarea.template.html';

  function sbText($log, _) {

    var compile = function (tElement, tAttrs) {
      if (_.isUndefined(tAttrs.ngModel)) throw new Error('missing attribute ng-model');
      if (_.isUndefined(tAttrs.label)) throw new Error('missing attribute label');
      if (_.isUndefined(tAttrs.name)) throw new Error('missing attribute name');
      return postLink;
    };

    var postLink = function (scope, iElement, iAttrs, controller) {
      scope.onChange = function() {
        scope.hasValue = !_.isEmpty(scope.value);
      };
    };

    function isTextarea(attrs) {
      var rows = _.parseInt(attrs.rows);
      return _.isNumber(rows) && rows > 1;
    }

    return {
      templateUrl: function(elem, attrs) {
        return isTextarea(attrs) ? TEMPLATE_TEXTAREA : TEMPLATE_INPUT;
      },
      restrict: 'E',
      replace: true,
      compile: compile,
      scope: {
        value: '=ngModel',
        label: '@',
        name: '@',
        // optional
        rows: '@',
        id: '@',
        type: '@'
      }
    };
  }

})();
