angular.module('myModule').controller('PeopleCtrl', function($scope, $http, PeopleService) {
	$scope.liste = [];

	function loadPage(p)  {
	
		$http.get('https://swapi.co/api/people', {params:{page:p}}).then(function(reponse) {
			console.log(reponse);
			
			for(var key in reponse.data.results) {
				var perso = reponse.data.results[key];
				
				perso.id = PeopleService.caculateId(perso);
				
				$scope.liste.push(perso);
			}
			if(reponse.data.next !==null) {
				loadPage(p+1);
			}
		});
	}
	loadPage(1);	 
});

