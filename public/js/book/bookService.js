var app = angular.module('myBookApp');

app.service('bookService', function($http, $q, fbAuth, fbLink, $firebaseObject) {

	// Goodreads 
	this.getBook = function(bookID) {
		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: '/api/goodreads/book?bookID=' + bookID
			//url: 'https://www.goodreads.com/book/bookID/' + bookID
		})
		.then(function(res) {
			dfd.resolve(res.data);
			console.log(res);  //CONSOLE.LOG
		},
		function(err) {
			dfd.reject(err);
		})
		return dfd.promise;
	}

	this.addToWatchlist = function(bookID, message) {
		var ref = new Firebase(fbLink.url + '/' + fbAuth.uid);
		var sync = $firebaseObject(ref);

		sync.$loaded().then(function() {

			var added = false;

			if (!sync.watchlist) {
				sync.watchlist = [];
			}

			if (!sync.watchlist[bookID]) {
				sync.watchlist[bookID] = bookID;
				sync.$save();
				added = true;
			}

			message(added);
		})
	}

	this.addToBooksIveRead = function(bookID, message) {
		var ref = new Firebase(fbLink.url + '/' + fbAuth.uid);
		var sync = $firebaseObject(ref);

		sync.$loaded().then(function() {

			var added = false;

			if (!sync.booksIveRead) {
				sync.booksIveRead = [];
			}

			if (!sync.booksIveRead[bookID]) {
				sync.booksIveRead[bookID] = bookID;
				sync.$save();
				added = true;
			}

			message(added);
		})
	}
});