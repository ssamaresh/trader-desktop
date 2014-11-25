/* global angular */
/* global console */

(function() {
	 'use strict';
		
	angular
		.module('loginCtrl', [])
		.controller('loginCtrl', ['$scope', '$state', 'userService', function ($scope, $state, userService) {
		$scope.heading = "Log In"; 
		console.log($scope.heading);
		
		//get list of users	from remote server
		getUsers();
			
		function getUsers() {
			console.log("get users");
			userService.getUsers()
			.then(function(users) {
				$scope.users = users.data;
				console.log($scope.users);
			});
		}
			
			
		//GO TO HOMEPAGE on LOGIN
			
		$scope.login = function () {
			userService.setActiveUser($scope.myUser);
			console.log($scope.myUser);
			$state.go('home');
		};

			
		}]);
	
})();
		
