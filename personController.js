var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
	$scope.firstName = "John";
	$scope.lastName = "Doe";
	$scope.fullname = function(){
		return $scope.firstName + " " + $scope.lastName;
	}
});
