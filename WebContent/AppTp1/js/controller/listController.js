angular.module('myModule').controller('GlobalCtrl', function($scope) {
	$scope.list = ['Nada', 'Matcha','Dana','Dani','Nône'];
	
	$scope.choix = function(chaine) {
		$scope.yourName = chaine;
		//With emit
		//$scope.$emit('CHOIX', chaine);
		console.log("Clique sur "+chaine);
		
	}
	
});

