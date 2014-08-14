'use strict';

/**
 * @ngdoc overview
 * @name angularUnicornLaunchApp
 * @description
 * # angularUnicornLaunchApp
 *
 * Main module of the application.
 */
angular
  .module('angularUnicornLaunchApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
