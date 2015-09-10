var app = angular.module('myBookApp');

app.service('searchService', function($http, $q, fbLink, $firebaseObject) {

	this.searchBooks = function(searchEntry) {
		var dfd = $q.defer();

		//console.log('searchService > this.searchbooks');

		$http({
			method: 'GET',
			url: '/api/goodreads/search?search=' + searchEntry
		}).then(function(res){
			dfd.resolve(res.data);
			console.log(res.data);
		}, function(err){
			dfd.reject(err);
			console.log(err);
		});

		return dfd.promise;
	};

	this.addToWatchlist = function(bookID, message) {
		var ref = new Firebase(fbLink.url + '/user');
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
		var ref = new Firebase(fbLink.url + '/user');
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
