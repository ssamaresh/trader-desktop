/* global angular */

(function () {
  'use strict';

  angular.module('app', [
    'loginCtrl',
    'ui.router'  
  ])
    .run([
      "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
      }
    ])
    .config(function($stateProvider, $urlRouterProvider) {

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