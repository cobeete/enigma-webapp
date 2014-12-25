'use strict';

/**
 * @ngdoc function
 * @name enigmaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the enigmaApp
 */
angular.module('enigmaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
