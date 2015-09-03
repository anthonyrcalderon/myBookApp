var app = angular.module('myBookApp');

app.service('watchlistService', function($http, $q) {

	this.getBook = function(bookID) {
		var dfd = $q.defer();

		console.log("watchlistService.getBook()"); // << DELETE THIS

		$http({
			method: 'GET',
			url: '/api/goodreads/book?bookID=' + bookID
			//url: 'https://www.goodreads.com/book/bookID/' + bookID
		})
		.then(function(res) {
			dfd.resolve(res.data);
			console.log(res.data);
		},
		function(err) {
			dfd.reject(err);
			console.log(err);
		})
		return dfd.promise;


	}
})