'use strict';

/**
 * @ngdoc function
 * @name enigmaApp.controller:EnigmaListCtrl
 * @description
 * # EnigmaListCtrl
 * Controller of the enigmaApp
 */
angular.module('enigmaApp')
  .controller('EnigmaListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
