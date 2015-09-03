var app = angular.module('myBookApp');

app.service('watchlistService', function($http, $q, fbLink, $firebaseObject) {

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
		},
		function(err) {
			dfd.reject(err);
		})
		return dfd.promise;
	}
})