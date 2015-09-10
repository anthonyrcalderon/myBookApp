var app = angular.module('myBookApp');

app.controller('loginCtrl', function($scope, loginService) {
	$scope.lgEmail = '';
	$scope.lgPassword = '';

	$scope.logIn = function() {
		loginService.logIn($scope.lgEmail, $scope.lgPassword, $scope.username);
	}
});