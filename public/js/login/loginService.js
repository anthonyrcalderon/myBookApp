var app = angular.module('myBookApp');

app.service('loginService', function($http, $q, fbLink, $firebaseObject) {

	var ref = new Firebase(fbLink.url)

	this.logIn = function(email, password) {
		ref.authWithPassword({
			email: email,
			password: password
		}, function(error, authData) {
			if (error) {
				alert('Login Failed! ' + error);
			}
			else {
				alert('Welcome, ' + email + '!');
				location.assign('#/');
			}
		})
	}

});