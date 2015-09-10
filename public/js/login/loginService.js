var app = angular.module('myBookApp');

app.service('loginService', function($http, $q, fbLink, $firebaseObject) {

	var ref = new Firebase(fbLink.url)

	this.logIn = function(email, password, username) {
		ref.authWithPassword({
			email: email,
			password: password
		}, function(error, authData) {
			if (error) {
				alert('Login Failed! ' + error);
			}
			else {
				var sync = $firebaseObject(ref);
				sync.$loaded().then(function() {
					alert('Welcome, ' + sync[authData.uid].username + '!');
					location.assign('#/');
				})
			}
		})
	}

});