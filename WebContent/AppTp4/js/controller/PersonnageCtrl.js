angular.module('myModule').controller('PersonnageCtrl', function($scope, $routeParams, StarwarsService) {

	StarwarsService.getOne($routeParams.id).then(function(reponse) {
		$scope.personnage = reponse;
	});

	//PeopleService.test(prom);
}); 