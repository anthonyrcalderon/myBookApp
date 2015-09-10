var app = angular.module('myBookApp');

app.controller('booksIveReadCtrl', function($scope, booksIveReadService) {

	$scope.booksIveRead = [];
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
	$scope.emptyBooksIveRead = false;

	booksIveReadService.getBooksIveRead($scope.booksIveRead, $scope.emptyBooksIveRead);

});