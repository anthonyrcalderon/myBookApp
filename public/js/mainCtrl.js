var app = angular.module('myBookApp');

app.controller('mainCtrl', function($scope, mainService, fbAuth, fbLink, $firebaseObject) {
	$scope.username = 'Log In/Register'

	var ref = new Firebase(fbLink.url);

	ref.onAuth(function(authData) {

		var ref2 = new Firebase(fbLink.url);
		var sync = $firebaseObject(ref2);

		if (authData) {
			var sync = $firebaseObject(ref);
			sync.$loaded().then(function() {
				$scope.username = 'user';
				$scope.loggedIn = true;
				console.log('ref.onAuth > authData.uid:\n  \'--> ' + authData.uid); //CONSOLE.LOG
				fbAuth.bool = true;
				fbAuth.uid = authData.uid;
				$scope.username = sync[authData.uid].username;
			})
		}
		else {
			console.log('LOGGED OUT'); //CONSOLE.LOG 
			fbAuth.bool = false;
			fbAuth.uid = '';
			$scope.username = 'Log In/Register'
		}

		$scope.loggedIn = fbAuth.bool;
	})

	$scope.logOut = function() {
		mainService.logOut();
	}
});