var app = angular.module('myBookApp');

app.service('watchlistService', function($http, $q, fbAuth, fbLink, $firebaseObject) {

	var ref = new Firebase(fbLink.url);

	// Goodreads 
	var getBook = function(bookID) {
		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: '/api/goodreads/book?bookID=' + bookID
			//url: 'https://www.goodreads.com/book/bookID/' + bookID
		})
		.then(function(res) {
			dfd.resolve(res.data);
		},
		function(err) {
			dfd.reject(err);
		})
		return dfd.promise;
	}

	this.getWatchlistBooks = function(booksArray) {
		var ref = new Firebase (fbLink.url + '/' + fbAuth.uid);
		var sync = $firebaseObject(ref);
		sync.$loaded().then(function() {
			var bookIDs = sync.watchlist;
			console.log('bookIDs: ' + bookIDs);
			for (ID in bookIDs) {
				console.log('ID:' + ID); // CONSOLE.LOG
				getBook(ID).then(function(book){
					booksArray.push(book);
					console.log(book); // CONSOLE.LOG
				})
			}
		})
	}

	this.removeFromWatchlist = function(bookID) {
		var ref = new Firebase (fbLink.url + '/' + fbAuth.uid)
		var sync = $firebaseObject(ref);
		sync.$loaded().then(function() {
			delete sync.watchlist[bookID];
			sync.$save();
		})
	}
})