var app = angular.module('myBookApp');

app.service('mainService', function($http, $q, fbAuth, fbLink, $firebaseObject) {
	var ref = new Firebase(fbLink.url);

	this.logOut = function() {
		ref.unauth();

		alert('Bye, ' + fbAuth.username + '!\nYou are now logged out.')
	}
});