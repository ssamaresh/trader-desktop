/*global require*/
'use strict';

require.config({

	deps: ['main'],

	paths: {

		//Angular
		angular: './bower_components/angular/angular',
		angularAnimate: './bower_components/angular-animate/angular-animate.min',
		angularTouch: './bower_components/angular-touch/angular-touch.min',
		angularUIRouter: './bower_components/angular-ui-router/release/angular.ui-router.min', 
		
		//Underscore
		underscore: './bower_components/underscore/underscore-min',
	},
  
	// Shim those modules that are not set up for AMD
  // http://requirejs.org/docs/api.html#config-shim
	shim: {

		angular: {
			exports: 'angular'
		},
		
		underscore: {
			exports: '_'
    },
		
		angularUIRouter: {
			deps: ['angular']
		},
		
		angularAnimate: {
			deps: ['angular']
		}
	
	}

});

require(['angular', 'main'], function (angular) {
	angular.bootstrap(document, ['trader-desktop']);
});