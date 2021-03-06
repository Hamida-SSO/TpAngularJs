angular.module('myModule', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/personnages', {
		templateUrl: './html/people.html',
		controller : 'PeopleCtrl',
		
	})
	.when('/personnages/:id',{
		templateUrl: './html/personnage.html',
		controller : 'PersonnageCtrl',
	})
//	.when('/personnages/test',{
//		templateUrl: './html/test.html',
//		controller : 'TestCtrl',
//	});
	$routeProvider.otherwise( {
		redirectTo : '/personnages'
	});
});