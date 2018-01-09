angular.module('myModule').controller('PersonnageCtrl', function($scope, $http, $routeParams) {
	
	$http.get('https://swapi.co/api/people/'+$routeParams.id).then(function(reponse) {
		console.log(reponse);
		$scope.personnage =reponse.data;
	});
	
}); 