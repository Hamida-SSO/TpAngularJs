angular.module('myModule', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/personnages', {
		templateUrl: './html/people.html',
		controller : 'PeopleCtrl',
		
	})
	.when('/personnages/:id',{
		templateUrl: './html/personnage.html',
		controller : 'PersonnageCtrl',
	});
	$routeProvider.otherwise( {
		redirectTo : '/personnages'
	});
});