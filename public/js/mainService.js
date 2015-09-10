var app = angular.module('myBookApp');

app.service('mainService', function($http, $q, fbLink, $firebaseObject) {
	var ref = new Firebase(fbLink.url);

	this.logOut = function() {
		ref.unauth();
	}
});