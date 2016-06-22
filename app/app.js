'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
]).
run(function($rootScope) {
	$rootScope.bouysList = [];
}).
config(['$locationProvider', '$routeProvider', '$logProvider', function($locationProvider, $routeProvider, $logProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  	otherwise({redirectTo: '/view1'});
}]);
