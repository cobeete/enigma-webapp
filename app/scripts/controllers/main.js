'use strict';

/**
 * @ngdoc function
 * @name enigmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enigmaApp
 */
angular.module('enigmaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
