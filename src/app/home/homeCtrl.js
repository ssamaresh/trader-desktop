
/* global angular */
/* global console */
(function() {
	 'use strict';
		
	angular
		.module('homeCtrl', [])
		.controller('homeCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
		$scope.heading = "HOMEPAGE"; 
		console.log($scope.heading);
			
//		// GET LIST OF ALL USERS	
//		$http.get('/users').
//			success(function(data, status, headers, config) {
//				$scope.users = data;	
//				$scope.myUser = $scope.users[0].name;
//			}).
//			error(function(data, status, headers, config) {
//				console.log("NO DATA", status);
//			});
//		
//		//GO TO HOMEPAGE on LOGIN
//			
//		$scope.login = function () {
//			$state.go('home');
//		};

			
		}]);
	
})();
		
