var app = angular.module('myBookApp');

app.controller('searchCtrl', function($scope, searchService) {
	$scope.searchEntry = "Ender's Game";
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];


	$scope.getSearchResults = function() {
		searchService.searchBooks($scope.searchEntry)
		.then(function(res) {
			//console.log("console.log(res): " + res);
			//console.log("console.log(res.data): " + res.data);

			console.log('$scope.searchEntry = ' + $scope.searchEntry);

			$scope.searchBooks = res;


			// 
			// $scope.searchBooks = $scope.searchResults.GoodreadsResponse.search.results.work;



//			CONSOLE.LOG Notes for returning JSON.
//
			// console.log($scope.searchBooks)

			// for (var i = 0; i < $scope.searchBooks.length; i++) {
			// 	console.log(i + ": " + $scope.searchBooks[i].best_book[0].title[0]);
			// };

			// console.log($scope.searchResults);
			// console.log($scope.searchBooks[0]);
 		});
	}
});