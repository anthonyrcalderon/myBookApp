var app = angular.module('myBookApp');

app.service('loginService', function($http, $q, fbLink, $firebaseObject) {
	var ref = new Firebase(fbLink.url)

	this.logIn = function(email, password) {
		ref.authWithPassword({
			email: email,
			password: password
		}, function() {
			if (error) {
				alert('Login Failed! ' + error);
			}
			else {
				alert('Authenticated successfully with payload: ', authData);
			}
		})
	}

	this.createUser = function(email, password) {
		ref.createUser({
			email: email,
			password: password
		}, function(error, userData) {
			if (error) {
				alert('Error creating user: ' + error);
			}
			else {
				alert('Successfully created user account with uid: ', userData.uid);
			}
		});
	}
});