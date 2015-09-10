var app = angular.module ('myBookApp');

app.controller('bookCtrl', function($scope, bookService, $routeParams) {
	var bookID = $routeParams.bookID;

	bookService.getBook(bookID)
	.then(function(book) {
		$scope.book = book;

		$scope.addToWatchlist = function(bookID) {
			bookService.addToWatchlist(bookID, function(added) {
				if (added) {
					alert('"' + book.title[0] + '" has been added to your Watchlist.');
				}
				else {
					alert('"' + book.title[0] + '" is already on your Watchlist!');
				}
			});
		}

		$scope.addToBooksIveRead = function(bookID) {
			bookService.addToBooksIveRead(bookID, function(added) {
				if (added) {
					alert('"' + book.title[0] + '" has been added to Books You\'ve Read!');
				}
				else {
					alert('You\'ve already read "' + book.title[0] + '"!');
				}
			});
		}
	})
});