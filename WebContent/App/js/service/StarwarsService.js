angular.module('myModule').service('StarwarsService', ['$http', 'PeopleService', function($http, PeopleService){
	
	var p1 =  $http.get('https://swapi.co/api/people', {params:{page:1}});
	
	this.getAll = function() {
		var p2 = p1.then(function(reponse) {
			var liste = reponse.data.results;
			var listWithId = liste.map(function(perso) {
				perso.id = PeopleService.caculateId(perso);
				return perso;
			});
			return listWithId;
		});
		return p2;
	};
	
	var ps = {};
	this.getOne = function(id) {
		if(!ps[id]) {
			ps[id] = $http.get('https://swapi.co/api/people/'+id);
		}
		var prom2 = ps[id].then(function(reponse) {
			return reponse.data
		});
		return prom2;
	};
	
}]);

// 1ere version mais n'affiche que la première page		
//var p2 = p1.then(function(reponse) {
//	var liste = reponse.data.results;
//	var listWithId = liste.map(function(perso) {
//		perso.id = PeopleService.caculateId(perso);
//		return perso;
//	});
//	return listWithId;
//});
//return p2;

// 1ere version sans memorisation de l'Id
//this.getOne = function(id) {
//	var prom1 = $http.get('https://swapi.co/api/people/'+id);
//	var prom2 = prom1.then(function(reponse) {
//		return reponse.data
//	});
//	return prom2;
//};