var app = angular.module('myBookApp', ['ngRoute', 'firebase', 'xml']);

app.constant('fbLink', {
	url: 'https://mybookapp.firebaseio.com/'
});

app.constant('fbAuth', {
	bool: false,
	uid: ''
})

app.config(function($routeProvider, $httpProvider) {
 // $httpProvider.interceptors.push('httpRequestInterceptor');

	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl',
		})
		.when('/register', {
			templateUrl: 'js/register/registerTmpl.html',
			controller: 'registerCtrl'
		})
		.when('/login', {
			templateUrl: 'js/login/loginTmpl.html',
			controller: 'loginCtrl'
		})
		.when('/search', {
			templateUrl: 'js/search/searchTmpl.html',
			controller: 'searchCtrl',
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
