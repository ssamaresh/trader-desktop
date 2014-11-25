/*global angular*/
/*global console*/

(function() {
	'use strict';
	
	angular
		.module('app')
		.service('userService', ['$http', function($http) {
			
			var activeUser; 
			var userList = [];
			console.log("INSIDE SERVICE");
			
			// GET LIST OF ALL USERS	
			var getUsers = function() {
				console.log("INSIDE");
				
				return $http.get('/users')
					.success(function(data, status) {
						data.forEach(function(user) {
							userList[user] = user;
						});
						return userList;
					})
					.error(function(data, status) {
						return "NO DATA";	
					});
			};
			  
			// GET CURRENT USER
			var getActiveUser = function() {
				console.log("AU", activeUser);
				return activeUser;
			};
			
			// SET USER ON LOGIN
			var setActiveUser = function(myUser) {
				activeUser = myUser;
				console.log("SET", myUser, activeUser);
			};
			
			//RETURN PUBLIC API
			return({
				getUsers: getUsers,
				getActiveUser: getActiveUser,
				setActiveUser: setActiveUser
			});
	 }]);
			
		
})();