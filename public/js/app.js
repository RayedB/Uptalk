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
  	$scope.posts.push({title:'Post '+( $scope.posts.length + 1), content: 'lorem ipsum sin dolor matel', upvotes: 0})
  }

  $scope.upVote = function(post) {
  	post.upvotes ++;
  }

}]);