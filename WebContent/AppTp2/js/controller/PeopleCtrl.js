angular.module('myModule').controller('PeopleCtrl', function($scope, $http) {
	$scope.liste = [];

	function loadPage(p)  {
	
		$http.get('https://swapi.co/api/people', {params:{page:p}}).then(function(reponse) {
			console.log(reponse);
			
			for(var key in reponse.data.results) {
				var perso = reponse.data.results[key];
				
				// Pour le lien contenant les infos d'un personnage par rapport à son id 
				var url = perso.url; // https://swapi.co/api/people/2
				url = url.substring(0,url.length-1)
				
				var id = url.substring(url.lastIndexOf('/')+1); //2
				id = parseInt(id);
				perso.id = id;
				$scope.liste.push(perso);
			}
			if(reponse.data.next !==null) {
				loadPage(p+1);
			}
		});
	}
	loadPage(1);	 
});
