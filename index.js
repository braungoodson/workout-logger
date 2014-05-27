var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',Router]);

function Router ($routeProvider) {
	$routeProvider.when('/',{templateUrl:'views/index.html'});
	$routeProvider.when('/workouts/create',{templateUrl:'views/workouts/create.html'});
	$routeProvider.when('/sets/create',{templateUrl:'views/sets/create.html'});
	$routeProvider.otherwise({redirectTo:'/'});
}