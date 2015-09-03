var app = angular.module('myBookApp');

app.service('searchService', function($http, $q) {

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
});
