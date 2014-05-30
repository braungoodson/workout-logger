var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',Router]);
app.controller('WorkoutsCreateController',['$scope','$http','$location',WorkoutsCreateController]);
app.controller('SetsCreateController',['$scope','$location',SetsCreateController]);

function Router ($routeProvider) {
	$routeProvider.when('/',{templateUrl:'views/index.html'});
	$routeProvider.when('/workouts/create',{templateUrl:'views/workouts/create.html'});
	$routeProvider.when('/sets/create',{templateUrl:'views/sets/create.html'});
	$routeProvider.otherwise({redirectTo:'/'});
}

function WorkoutsCreateController ($scope,$http,$location) {
	$scope.onSubmit = function () {
		$http.post('/workouts',$scope.workout).success(function(data){
			$location.path('/sets/create');
			$location.hash(JSON.stringify(data));
		}).error(function(){
			throw new Error(arguments);
		});
	}
}

function SetsCreateController ($scope,$location) {
	$scope.workout = {};
	$scope.hydrate = false;
	if ($location.hash()) {
		$scope.hydrate = true;
		$scope.workout = JSON.parse($location.hash());
	}
	$scope.onSubmit = function () {
		$http.post('/sets',$scope.set).success(function(){}).error(function(){});
	}
}