'use strict';

angular.module('myApp.services', [])

.factory('bouyAPIService', function($http) {
    var bouyAPI = {};

    bouyAPI.parseFeed = function() {
      return $http({
        method: 'JSONP',
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' 
          + encodeURIComponent('http://www.ndbc.noaa.gov/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100')
      });
    }

    return bouyAPI;
});