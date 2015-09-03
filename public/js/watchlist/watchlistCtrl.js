var app = angular.module('myBookApp');

app.controller('watchlistCtrl', function($scope, watchlistService) {
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

	$scope.watchlistBookIDs = [];
	$scope.watchlistBookIDs.push(1,2,3,4,5,6);// << Delete this
	// Pull watchlistBookIDs from Firebase

	$scope.watchlistBooks = [];
	$scope.watchlistBookIDs.forEach(function(item, index){
		watchlistService.getBook(item).then(function(book){
			$scope.watchlistBooks.push(book);
		})
	})
	console.log($scope.watchlistBooks);// << Delete this Console.log
});