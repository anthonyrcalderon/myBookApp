var app = angular.module('myBookApp');

app.service('registerService', function($http, $q, fbLink, $firebaseObject) {
	var ref = new Firebase(fbLink.url)

	var logIn = function(email, password) {
		ref.authWithPassword({
			email: email,
			password: password
		}, function(error, authData) {
			if (error) {
				alert('Login Failed! ' + error);
			}
			else {
				alert('Welcome, ' + email + '!');
				//console.log('authData: ' + authData.email);  //CONSOLE.LOG
				location.assign('#/');
			}
		})
	}

	this.createUser = function(username, email, password) {

		ref.createUser({
			email: email,
			password: password
		}, function(error, userData) {
			if (error) {
				alert('Error creating user: ' + error);
			}
			else {
				alert('Registration successful!');
				console.log(userData);
				var sync = $firebaseObject(ref);
				sync.$loaded().then(function() {
					sync[userData.uid] = {};
					sync[userData.uid].email = email;
					sync[userData.uid].username = username;
					sync.$save();

					logIn(email, password);
				});
			}
		});
	}
});