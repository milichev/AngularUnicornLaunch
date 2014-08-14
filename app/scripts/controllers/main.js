'use strict';

/**
 * @ngdoc function
 * @name angularUnicornLaunchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularUnicornLaunchApp
 */
angular.module('angularUnicornLaunchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
