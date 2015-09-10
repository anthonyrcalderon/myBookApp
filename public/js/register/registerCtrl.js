var app = angular.module('myBookApp');

app.controller('registerCtrl', function($scope, registerService, fbAuth) {
	$scope.regUsername = '';
	$scope.regEmail = '';
	$scope.regPassword = '';
	$scope.register = function() {
		registerService.createUser($scope.regUsername, $scope.regEmail, $scope.regPassword);
	}

});