var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello Mike!';

  $scope.posts = [
  	{ title: 'Post 1', content: 'lorem ipsum sin dolor matel', upvotes: 5},
  	{ title: 'Post 2', content: 'lorem ipsum sin dolor matel', upvotes: 15},
  	{ title: 'Post 3', content: 'lorem ipsum sin dolor matel', upvotes: 11},
  	{ title: 'Post 4', content: 'lorem ipsum sin dolor matel', upvotes: 7},
  	{ title: 'Post 5', content: 'lorem ipsum sin dolor matel', upvotes: 4},
  ]

  $scope.addPost = function() {
  	$scope.posts.push({title:'Post '+( $scope.posts.length + 1), content: 'lorem ipsum sin dolor matel', upvotes: 0})
  }

  $scope.upVote = function(post) {
  	$scope.upvotes ++;
  }

}]);