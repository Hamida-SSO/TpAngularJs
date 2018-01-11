angular.module('myModule').controller('PeopleCtrl', function($scope, StarwarsService, MemoryService) {
	$scope.liste = [];
	
	$scope.recherche = MemoryService.get('RecherchePeople');
	
	StarwarsService.getAll().then(function(list) {
		$scope.liste = list;
	});
	
	
});
