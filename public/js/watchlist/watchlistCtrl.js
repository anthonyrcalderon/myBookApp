var app = angular.module('myBookApp');

app.controller('watchlistCtrl', function($scope, watchlistService, fbLink, $firebaseObject, $firebaseArray) {

	var ref = new Firebase(fbLink.url);

	$scope.watchlistBooks = [];
	$scope.months = ['[Month]', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
	
	// Pull watchlistBookIDs from Firebase, set to $scope.watchlistBookIDs
	// For each bookID, retreive Book through watchlistService.getBook(bookID);

	var sync = $firebaseObject(ref);
	sync.$loaded().then(function() {
		$scope.watchlistBookIDs = sync.watchlistBookIDs;
		$scope.watchlistBookIDs.forEach(function(item, index){
			watchlistService.getBook(item).then(function(book){
				$scope.watchlistBooks.push(book);
			})
		})
	})

});