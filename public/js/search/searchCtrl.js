var app = angular.module('myBookApp');

app.controller('searchCtrl', function($scope, searchService) {
	$scope.searchEntry = "";
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];


	$scope.getSearchResults = function() {
		searchService.searchBooks($scope.searchEntry)
		.then(function(res) {
			$scope.searchBooks = res;
 		});
	}

	$scope.addToWatchlist = function(bookID, title) {
		searchService.addToWatchlist(bookID, function(added) {
			if (added) {
				alert('"' + title + '" has been added to your Watchlist');
			}
			else {
				alert('"' + title + '" is already on your Watchlist!');
			}
		});
	}

	$scope.addToBooksIveRead = function(bookID, title) {
		searchService.addToBooksIveRead(bookID, function(added) {
			if (added) {
				alert('"' + title + '" has been added to Books You\'ve Read!');
			}
			else {
				alert('You\'ve already read "' + title + '"!');
			}
		});
	}
});
