/* global angular */
/*jslint browser: true*/

(function () {
  'use strict';

  angular.module('app', [
    'loginCtrl',
		'homeCtrl',
    'ui.router'  
  ])
    .run([
      "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      	return $rootScope.$stateParams;
			}
    ])
    .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
			
			if(window.history && window.history.pushState){
    		$locationProvider.html5Mode(true);
  		}
      
			$urlRouterProvider.otherwise('/'); 
      
      $stateProvider
      	.state('login', {
          url: '/',
          views: {
            'pageContent@': {
              templateUrl: 'app/login/loginpage.html',
              controller: 'loginCtrl'
						}
          }
        })
			
				.state('home', {
					url: '/home',
					views: {
						'pageContent@': {
							templateUrl: 'app/home/homepage.html',
							controller: 'homeCtrl'
						}
					}
			});
        
//        .state('portal', {
//          url: '/portal',
//          views: {
//            'pageContent@': {
//              templateUrl: 'app/templates/homepage.html',
//              controller: 'portalCtrl'
//            },
//
//            'pageHeader@portal': {
//              templateUrl: 'app/templates/page-header.html'
//            },
//
//            'homepageNotifications@portal': {
//              templateUrl: 'app/templates/homepage-notificationstab.html',
//              controller: 'notificationsCtrl',
//              resolve: {
//                'dealData': ['dataService' ,function(dataService) {
//                  return dataService.promise;
//                }]
//              }
//            },
//            
//            'homepageWidgets@portal': {
//              controller: 'portalwidgetsCtrl',
//              templateUrl: 'app/templates/homepage-widgetsContainer.html',
//              resolve: {
//                'widgetData': ['dataService', function(dataService) {
//                  return dataService.promise;
//                }]
//              }
//            }
//          }
//        })
        });
	

})();