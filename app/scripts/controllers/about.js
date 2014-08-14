'use strict';

/**
 * @ngdoc function
 * @name angularUnicornLaunchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularUnicornLaunchApp
 */
angular.module('angularUnicornLaunchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
