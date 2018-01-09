angular.module('myModule').controller('ListNameCtrl', function($scope, $http) {
	$scope.liste = [];

	function loadPage(p)  {
		//Parcourt par page
		$http.get('https://swapi.co/api/people', {params:{page:p}}).then(function(reponse) {
			console.log(reponse);
			//Pas adapte pour du recursif, d'ou recuperation par 10
			for(var key in reponse.data.results) {
				$scope.liste.push(reponse.data.results[key]);
			}
			if(reponse.data.next !==null) {
				loadPage(p+1);
			}
		});
	}
	loadPage(1);	 
});
