var app = angular.module('myBookApp');

app.service('booksIveReadService', function($http, $q, fbAuth, fbLink, $firebaseObject) {

	// Goodreads
	var getBook = function(bookID) {
		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: '/api/goodreads/book?bookID=' + bookID
		})
		.then(function(res) {
			dfd.resolve(res.data);
		},
		function(err) {
			dfd.reject(err);
		})
		return dfd.promise;
	}

	this.getBooksIveRead = function(booksArray, emptyBooksIveRead) {
		var ref = new Firebase (fbLink.url + '/' + fbAuth.uid);
		var sync = $firebaseObject(ref);
		sync.$loaded().then(function() {
			var bookIDs = sync.booksIveRead;
			if (bookIDs === undefined) {
				emptyBooksIveRead = true;
			}
			else {
				emptyBooksIveRead = false;
				for (ID in bookIDs) {
					getBook(ID).then(function(book){
						booksArray.push(book);
					})
				}
			}
		})
	}

});