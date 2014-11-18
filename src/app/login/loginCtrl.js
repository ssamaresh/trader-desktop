/* global angular */
/* global console */
(function() {
	 'use strict';
		
	angular
		.module('loginCtrl', [])
		.controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
		$scope.heading = "Log In"; 
		console.log($scope.heading);
	}]);
	
})();
		
