var app = angular.module('myBookApp');

app.controller('booksIveReadCtrl', function($scope, booksIveReadService) {

	$scope.booksIveRead = [{}];
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
	
	// Pull watchlistBookIDs from Firebase, set to $scope.watchlistBookIDs
	// For each bookID, retreive Book through booksIveReadService.getBook(bookID);

	console.log('booksIveReadCtrl');
	booksIveReadService.getBooksIveRead($scope.booksIveRead);

	// $scope.removeFromWatchlist = function(bookID, title) {
	// 	for (i in $scope.booksIveRead) {
	// 		if ($scope.booksIveRead[i].id[0] === bookID) {
	// 			$scope.booksIveRead.splice(i, 1);
	// 		}
	// 	}
	// 	booksIveReadService.removeFromWatchlist(bookID);

	// 	alert('"' + title + '" has been removed from your Watchlist.');
	// }

});