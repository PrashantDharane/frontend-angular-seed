var myApp = angular.module("myApp",[
		"ui.router"
	])
	.config(function($stateProvider) {
	  $stateProvider.state("home",{
	  	url: '/',
	    templateUrl: 'views/home.html',
	    controller : 'HomeController'
	  });
	});