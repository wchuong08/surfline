'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$sce', '$log', '$scope', '$rootScope', '$http', 'bouyAPIService', function($sce, 
	$log, $scope, $rootScope, $http, bouyAPIService) {

	    bouyAPIService.parseFeed().success(function(response) {
	    	//Assume that the bouysList cache is periodically refreshed.  Currently bouysList is loaded once and reused.
	    	if ($rootScope.bouysList.length === 0) {
	    		$rootScope.bouysList = response.responseData.feed.entries;
	    		$log.debug($rootScope.bouysList);
	    	}
	    });
}]);