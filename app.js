var app = angular.module('flapperNews', []);
var mongoose = require('mongoose');



app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello Mike!';
}]);