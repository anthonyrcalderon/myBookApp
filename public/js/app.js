var app = angular.module('myBookApp', ['ngRoute', 'firebase', 'xml']);

app.constant('fbLink', {
	url: 'https://mybookapp.firebaseio.com/'
});

app.config(function($routeProvider, $httpProvider) {
 // $httpProvider.interceptors.push('httpRequestInterceptor');

	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl',
			resolve: {

			}
		})
		.when('/login', {
			templateUrl: 'js/login/loginTmpl.html',
			controller: 'loginCtrl'
		})
		.when('/search', {
			templateUrl: 'js/search/searchTmpl.html',
			controller: 'searchCtrl',
			resolve: {

			}
		})
		.when('/watchlist', {
			templateUrl: 'js/watchlist/watchlistTmpl.html',
			controller: 'watchlistCtrl'
		})
		.when('/booksIveRead', {
			templateUrl: 'js/booksIveRead/booksIveReadTmpl.html',
			controller: 'booksIveReadCtrl'
		})
		.when('/book/:bookID', {
			templateUrl: 'js/book/bookTmpl.html',
			controller: 'bookCtrl'
		})
		.otherwise({
			//redirectTo: '/'
		})
});

// app.config(function ($httpProvider) {
// 	$httpProvider.interceptors.push('xmlHttpInterceptor');
// })
