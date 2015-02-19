var log = (obj: any) => {
	console.log(obj);
}

var mockdata = {
	"name": "john",
	"age": 30,
	"pets": ["cat", "dog"]
};

/// <reference path="scripts/typings/jquery.d.ts" />
/// <reference path="scripts/typings/angular.d.ts" />
/// <reference path="scripts/typings/angular-route.d.ts" />







// Create an angular module (an angular "app")
var myApp = angular.module('demo', []);

/* 		Example 01 

// Create a controller. The $scope parameter is injected automatically by Angular. The $scope is the "model" for the view.
myApp.controller('myFirstCtrl', function($scope){

	$scope.helloWorld = 'Hello from AngularJS';

	$scope.info = 'Anything put on $scope can be accessed in the view that is loaded with the controller.';

	$scope.list = ['this', 'is', 'a', 'list', 'of', 'some', 'items'];

});

*/





/* 	Example 02  

// Create a factory. Angular differentiate between a "factory" and a "service". There are (minor) differences, 
// but using factories and calling them services is common when getting started.
myApp.factory('myFirstFactory', function($http){

	return {

		getData: function(){

			// Returns a async promise that we can wait for.
			return $http.get('http://openmockapi.azurewebsites.net/mockdata/list'); // $http is a built-in service that does http/rest operations.
		}

	}

});

myApp.controller('myFirstCtrl', function($scope, myFirstFactory) { //Notice that "myFirstFactory" is automatically injected by Angular

	var promise = myFirstFactory.getData();

	promise.success(function(response){

		$scope.persons = response;

	}).error(function(error){

		console.log(error);

	}).finally(function(){

		$scope.hasResult = $scope.persons.length > 0;

	});
});

*/









/* 	Example 03		

myApp.controller('myFirstCtrl', function($scope) { 
	
	$scope.persons = [ { name: 'jack', age: 10 }, { name: 'john', age: 15 }, { name: 'anne', age: 20 } ]

});

*/










/* 	Example 04: Routing		*/

var myRoutingApp = angular.module('demo', ['ngRoute']);

myRoutingApp.config(function($routeProvider){

	$routeProvider
		.when('/first', {
			controller: 'firstViewCtrl',
			template: '<div> <h1>{{viewIdentifier}}</h1> <a ng-href="#/second">Go to second view</a> </div>'
		})
		.when('/second', {
			controller: 'secondViewCtrl',
			template: '<div> <h1>{{viewIdentifier}}</h1> <a ng-href="#/first">Go to first view</a> </div>'
		})
		.otherwise({
			redirectTo: '/first'
		});
});

myRoutingApp.controller('firstViewCtrl', function($scope) { 
	
	$scope.viewIdentifier = "This is view #1";

});

myRoutingApp.controller('secondViewCtrl', function($scope) { 
	
	$scope.viewIdentifier = "This is view #2";

});