var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',Router]);
app.controller('WorkoutsCreateController',['$scope','$http',WorkoutsCreateController]);
app.controller('SetsCreateController',['$scope',SetsCreateController]);

function Router ($routeProvider) {
	$routeProvider.when('/',{templateUrl:'views/index.html'});
	$routeProvider.when('/workouts/create',{templateUrl:'views/workouts/create.html'});
	$routeProvider.when('/sets/create',{templateUrl:'views/sets/create.html'});
	$routeProvider.otherwise({redirectTo:'/'});
}

function WorkoutsCreateController ($scope,$http) {
	$scope.onSubmit = function () {
		$http.post('/workouts',$scope.workout).success(function(){}).error(function(){});
	}
}

function SetsCreateController ($scope) {
	$scope.onSubmit = function () {
		$http.post('/sets',$scope.set).success(function(){}).error(function(){});
	}
}