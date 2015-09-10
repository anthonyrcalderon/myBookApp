var app = angular.module('myBookApp');

app.controller('watchlistCtrl', function($scope, watchlistService, fbAuth, fbLink, $firebaseObject) {

	console.log('watchlistCtrl $scope.loggedIn=' + $scope.loggedIn)

	var ref = new Firebase(fbLink.url);

	$scope.watchlistBooks = [];
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
	
	// Pull watchlistBookIDs from Firebase, set to $scope.watchlistBookIDs
	// For each bookID, retreive Book through watchlistService.getBook(bookID);

	watchlistService.getWatchlistBooks($scope.watchlistBooks);

	$scope.removeFromWatchlist = function(bookID, title) {
		for (i in $scope.watchlistBooks) {
			if ($scope.watchlistBooks[i].id[0] === bookID) {
				$scope.watchlistBooks.splice(i, 1);
			}
		}
		watchlistService.removeFromWatchlist(bookID);

		alert('"' + title + '" has been removed from your Watchlist.');
	}

});