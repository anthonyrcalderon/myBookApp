var app = angular.module('myBookApp', ['ngRoute', 'firebase', 'xml']);

app.constant('fbLink', {
	url: 'https://mybookapp.firebaseio.com/'
})

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl',
			resolve: {
			}
		})
		.when('/login', {

		})
		.when('/watchlist', {
			templateUrl: 'js/watchlist/watchlistTmpl.html',
			controller: 'watchlistCtrl'
		})
		.when('/search', {
			templateUrl: 'js/search/searchTmpl.html',
			controller: 'searchCtrl',
			resolve: {

			}
		})
		.when('/book/:bookID', {
			templateUrl: 'js/book/bookIDTmpl.html',
			controller: 'bookID'
		})
		.otherwise({
			//redirectTo: '/'
		})
});

// app.config(function ($httpProvider) {
// 	$httpProvider.interceptors.push('xmlHttpInterceptor');
// })
