var app = angular.module('myBookApp');

app.service('booksIveReadService', function($http, $q, fbLink, $firebaseObject) {

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

	this.getBooksIveRead = function(booksArray) {
		console.log('booksIveReadService > getBooksIveRead');
		var ref = new Firebase (fbLink.url + '/user');
		var sync = $firebaseObject(ref);
		sync.$loaded().then(function() {
			var bookIDs = sync.booksIveRead;
			console.log('bookIDs: ' + bookIDs); //CONSOLE.LOG
			for (ID in bookIDs) {
				console.log('ID:' + ID); //CONSOLE.LOG
				getBook(ID).then(function(book){
					booksArray.push(book);
					console.log(book);
				})
			}
		})
	}

	// this.removeFromWatchlist = function(bookID) {
	// 	var ref = new Firebase (fbLink.url + '/user')
	// 	var sync = $firebaseObject(ref);
	// 	sync.$loaded().then(function() {
	// 		delete sync.booksIveRead[bookID];
	// 		sync.$save();
	// 	})
	// }
});