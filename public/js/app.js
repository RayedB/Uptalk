var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello Mike!';

  $scope.posts = [
  	{ author: 'Mike Williams', content: 'lorem ipsum sin dolor matel', upvotes: 5},
  	{ author: 'Richard Sherman', content: 'lorem ipsum sin dolor matel', upvotes: 15},
  	{ author: 'Josh Norman', content: 'lorem ipsum sin dolor matel', upvotes: 11},
  	{ author: 'Matthew Stafford', content: 'lorem ipsum sin dolor matel', upvotes: 7},
  	{ author: 'Marshawn Lynch', content: 'lorem ipsum sin dolor matel', upvotes: 4},
  ]

  $scope.addPost = function() {
  	if (!$scope.message || $scope.message ===''){ return; }
  	$scope.posts.push({author:'Alex Smith', content: $scope.message, upvotes: 0})
  	$scope.message="";
  }

  $scope.upVote = function(post) {
  	post.upvotes ++;
  }

}]);