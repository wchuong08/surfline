'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$sce', '$log', '$scope', '$rootScope', '$http', 'bouyAPIService', function($sce, 
	$log, $scope, $rootScope, $http, bouyAPIService) {

	    $scope.trustAsHtml = function(html) {
	    	return $sce.trustAsHtml(html);
	    }

	    $scope.favoriteFilter = function(bouy) {
	    	return bouy.favorite === true;
	    }

	    bouyAPIService.parseFeed().success(function(response) {
	    	//Assume that the bouysList cache is periodically refreshed.  Currently bouysList is loaded once and reused.
	    	if ($rootScope.bouysList.length === 0) {
	    		$rootScope.bouysList = response.responseData.feed.entries;
	    		$log.debug($rootScope.bouysList);
	    	}
	    });
}]);