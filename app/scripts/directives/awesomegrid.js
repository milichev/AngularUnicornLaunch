'use strict';

/**
 * @ngdoc directive
 * @name angularUnicornLaunchApp.directive:AwesomeGrid
 * @description
 * # AwesomeGrid
 */
angular.module('angularUnicornLaunchApp')
  .directive('AwesomeGrid', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the AwesomeGrid directive');
      }
    };
  });

