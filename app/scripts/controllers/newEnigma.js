'use strict';
/*global $http:false */
/*global $:false */
/*jshint unused:false */

/**
 * @ngdoc function
 * @name enigmaApp.controller:NewEnigmaCtrl
 * @description
 * # NewEnigmaCtrl
 * Controller of the enigmaApp
 */
angular
    .module('enigmaApp')
    .controller('NewEnigmaCtrl', function($scope, $http) {
        $scope.enigmaList = [];
        $http({
            method: 'GET',
            url: 'http://localhost:3000/enigmas'
        }).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            data.forEach(function(entry) {
                $scope.enigmaList.push({
                    name: entry.name,
                    author: entry.author,
                    imageUrl: entry.imageUrl
                });
            });
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //TODO
        });
        $scope.Save = function() {
            // upload to imgur
            // Authorization: Client-ID 9807c53fa2adca9
            // POST
            // https://api.imgur.com/3/image
            // image
            // base64
            $http({
                method: 'POST',
                url: 'https://api.imgur.com/3/image',
                headers: {
                    'Authorization': 'Client-ID 9807c53fa2adca9'
                },
                data: {
                    'image': window.btoa($scope.newEnigma.file),
                    'type': 'base64'
                }
            }).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.enigmaList.push({
                    name: $scope.newEnigma.name,
                    author: $scope.newEnigma.author,
                    imageUrl: data.data.link
                });

                $scope.newEnigma = {};
                var input = $('#file');
                input.replaceWith(input.val('').clone(true));

            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                //TODO
            });
        };
        $scope.IsSaveDisabled = function() {
            return $scope.newEnigma ? ($scope.newEnigma.name && $scope.newEnigma.author && $scope.newEnigma.file ? false : true) : true;
        };

    })
    .directive('fileread', [function() {
        return {
            scope: {
                fileread: '='
            },
            link: function(scope, element, attributes) {
                element.bind('change', function(changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function(loadEvent) {
                        scope.$apply(function() {
                            scope.fileread = loadEvent.target.result;
                        });
                    };
                    reader.readAsBinaryString(changeEvent.target.files[0]);
                });
            }
        };
    }]);
