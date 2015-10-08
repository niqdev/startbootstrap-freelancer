(function () {
  'use strict';

  angular.module(AppConfig.getModuleName('home'))
    .directive('sbTextarea', sbTextarea);

  sbTextarea.$inject = ['$log', '_'];

  var TEMPLATE_TEXTAREA = 'scripts/directives/templates/sb-textarea.template.html';
  var ROWS_DEFAULT = 5;

  function sbTextarea($log, _) {

    var compile = function (tElement, tAttrs) {
      if (_.isUndefined(tAttrs.ngModel)) throw new Error('missing attribute ng-model');
      if (_.isUndefined(tAttrs.label)) throw new Error('missing attribute label');
      if (_.isUndefined(tAttrs.name)) throw new Error('missing attribute name');
      return postLink;
    };

    var postLink = function (scope, iElement, iAttrs, controller) {
      scope._rows = parseRows(iAttrs);
      scope.sbInput = controller[scope.name];
    };

    function parseRows(attrs) {
      var rows = _.parseInt(attrs.rows);
      return _.isNaN(rows) ? ROWS_DEFAULT : rows;
    }

    return {
      templateUrl: TEMPLATE_TEXTAREA,
      restrict: 'E',
      replace: true,
      require: '^form',
      compile: compile,
      scope: {
        value: '=ngModel',
        label: '@',
        name: '@',
        // optional
        rows: '@',
        id: '@',
        required: '=ngRequired'
      }
    };
  }

})();
