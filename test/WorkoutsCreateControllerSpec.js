describe('WorkoutsCreateController',function(){
	var $httpBackend, $rootScope, $q, createController;

	beforeEach(inject(function($injector){

		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.when('POST', '/workouts').respond({wid:'workout id'});

		$rootScope = $injector.get('$rootScope');

		var $controller = $injector.get('$controller');

		createController = function () {
			return $controller('WorkoutsCreateController', {'$scope': $rootScope});
		}

		$q = $injector.get('$q');

	}));

	afterEach(function(){

		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();

	});

	it('should send workout data',function(){

		var workout = {
			type: "Anaerbolic",
			start: new Date(),
			end: new Date()
		};

		var controller = createController();
		var parent = $rootScope;
		var child = parent.$new();

		child.workout = workout;
		expect(child.onSubmit).not.toBe(null);
		child.onSubmit();

		$httpBackend.flush();

	});

});