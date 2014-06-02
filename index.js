var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',Router]);
app.controller('WorkoutsCreateController',['$scope','$http','$location',WorkoutsCreateController]);
app.controller('WorkoutsReadController',['$scope','$http',WorkoutsReadController]);
app.controller('WorkoutsMetricsController',['$scope','$http',WorkoutsMetricsController]);
app.controller('SetsCreateController',['$scope','$location','$http',SetsCreateController]);
app.controller('SetsReadController',['$scope','$http',SetsReadController]);
app.controller('SetsMetricsController',['$scope','$http',SetsMetricsController]);

function Router ($routeProvider) {
	$routeProvider.when('/',{templateUrl:'views/index.html'});
	$routeProvider.when('/workouts/create',{templateUrl:'views/workouts/create.html'});
	$routeProvider.when('/workouts/read',{templateUrl:'views/workouts/read.html'});
	$routeProvider.when('/workouts/metrics',{templateUrl:'views/workouts/metrics.html'});
	$routeProvider.when('/sets/create',{templateUrl:'views/sets/create.html'});
	$routeProvider.when('/sets/read',{templateUrl:'views/sets/read.html'});
	$routeProvider.when('/sets/metrics',{templateUrl:'views/sets/metrics.html'});
	$routeProvider.otherwise({redirectTo:'/'});
}

function WorkoutsMetricsController ($scope,$http) {
	$scope.busy = false;
	$scope.workouts = [];


	$scope.busy = true;
	$http.get('/workouts').success(function(data){
		$scope.workouts = data.workouts;
		$scope.busy = false;
		var data = {
			labels: [],
			datasets: []
		};
		var w = $scope.workouts;
		for (var i in w) {
			data.labels.push(new Date(w[i].start).getDate()*new Date(w[i].start).getMonth());
			$http.get('/workouts/'+w[i]._id+'/sets/names').success(function(data){
				var names = data;
				for (var j in names) {
					data.datasets.push({
						fillColor : "rgba(220,220,220,0.0)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : [125,125,135,135,155] // `Flat Bench Press` from 5 workouts in chronological order
					});
				}
			}).error(function(){
				throw new Error(arguments);
			});
		}
	}).error(function(){
		throw new Error(arguments);
	});


var data = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.0)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [125,125,135,135,155] // `Flat Bench Press` from 5 workouts in chronological order
		},
		{
			fillColor : "rgba(151,187,205,0.0)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [105,105,115,115,125] // 'Lateral Pull Downs' from same 5 workouts
		}
	]
}
var ctx = document.getElementById("workout-metrics-spline").getContext("2d");
var myNewChart = new Chart(ctx).Line(data);
}

function WorkoutsReadController ($scope,$http) {
	$scope.busy = false;
	$scope.workouts = [];
	$scope.busy = true;
	$http.get('/workouts').success(function(data){
		$scope.workouts = data.workouts;
		$scope.busy = false;
	}).error(function(){
		throw new Error(arguments);
	});
}

function WorkoutsCreateController ($scope,$http,$location) {
	$scope.busy = false;
	$scope.workout = {};
	$scope.getNow = function (position) {
		if (position == "start") {
			$scope.workout.start = new Date();
		} else {
			$scope.workout.end = new Date();
		}
	}
	$scope.onSubmit = function () {
		$scope.busy = true;
		$http.post('/workouts',$scope.workout).success(function(data){
			$scope.busy = false;
			$location.path('/sets/create');
			$location.hash(JSON.stringify(data));
		}).error(function(){
			throw new Error(arguments);
		});
	}
}

function SetsCreateController ($scope,$location,$http) {
	$scope.busy = false;
	$scope.workout = {};
	$scope.hydrateWorkout = false;
	$scope.sets = [];
	$scope.hydrateSets = false;
	if ($location.hash()) {
		$scope.hydrateWorkout = true;
		$scope.workout = JSON.parse($location.hash());
		$scope.workout.digest = function () {
			var d = "";
			d += " For Workout ";
			d += new Date($scope.workout.start).getMonth() + '/';
			d += new Date($scope.workout.start).getDate() + '/';
			d += new Date($scope.workout.start).getFullYear() + ' @ ';
			d += new Date($scope.workout.start).getHours() > 12 ? new Date($scope.workout.start).getHours() - 12 : new Date($scope.workout.start).getHours();
			d += new Date($scope.workout.start).getHours() > 12 ? 'PM-' : 'AM-';
			d += new Date($scope.workout.end).getHours() > 12 ? new Date($scope.workout.end).getHours() - 12 : new Date($scope.workout.end).getHours();
			d += new Date($scope.workout.end).getHours() > 12 ? 'PM' : 'AM';
			return d;
		}
	}
	$scope.onSubmit = function (queue) {
		$scope.busy = false;
		$scope.busy = true;
		$scope.set.wid = $scope.workout._id;
		$http.post('/sets',$scope.set).success(function(data){
			if (!$scope.hydrateSets) {
				$scope.hydrateSets = true;
			}
			$scope.sets.push(data);
			$scope.busy = false;
		}).error(function(){
			throw new Error(arguments);
		});
	}
}

function SetsReadController ($scope,$http) {
	$scope.busy = false;
	$scope.sets = [];
	$scope.busy = true;
	$http.get('/sets').success(function(data){
		$scope.sets = data.sets;
		$scope.busy = false;
	}).error(function(){
		throw new Error(arguments);
	});
}

function SetsMetricsController ($scope,$http) {
	$scope.busy = false;
	$scope.sets = [];
	$scope.busy = true;
	$http.get('/sets').success(function(data){
		$scope.sets = data.sets;
		$scope.busy = false;
	}).error(function(){
		throw new Error(arguments);
	});
	var data = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [28,48,40,19,96,27,100]
			}
		]
	};
	var ctx = document.getElementById("sets-metrics-spline").getContext("2d");
	new Chart(ctx).Line(data);
}