var app = angular.module('myApp',[]);
app.controller('namesCtrl',function($scope){
	$scope.names=[
	{name:'A', country:'Z'},
	{name:'B', country:'Y'},
	{name:'C',country:'X'},
	{name:'C',country:'Xma'},
	{name:'C',country:'Xnu'}];
});

/*angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
}); */