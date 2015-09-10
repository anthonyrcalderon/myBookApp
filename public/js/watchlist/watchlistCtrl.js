var app = angular.module('myBookApp');

app.controller('watchlistCtrl', function($scope, watchlistService) {

	$scope.watchlistBooks = [];
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
	$scope.emptyWatchlist;

	watchlistService.getWatchlistBooks($scope.watchlistBooks, $scope.emptyWatchlist);

	$scope.removeFromWatchlist = function(bookID, title) {
		for (i in $scope.watchlistBooks) {
			if ($scope.watchlistBooks[i].id[0] === bookID) {
				$scope.watchlistBooks.splice(i, 1);
			}
		}
		watchlistService.removeFromWatchlist(bookID);

		alert('"' + title + '" has been removed from your Watchlist.');

		if($scope.watchlistBooks.length === 0) {
			$scope.emptyWatchlist = true;
		}
	}
});