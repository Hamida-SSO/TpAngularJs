angular.module('myModule').factory('PeopleService', function($q, $timeout){
	return {
		caculateId : function(reponse) {
			var url = reponse.url; // https://swapi.co/api/people/2
			url = url.substring(0,url.length-1)
			
			var id = url.substring(url.lastIndexOf('/')+1); //2
			return parseInt(id); 
		},
		
	//	Test sur le fonctionnement d'une promesse
		test : function(prom) {
			console.log('Avant');
			prom
			.then(function() {
				console.log('OK');
			}, function() {
				console.log('KO');
			});
			console.log('Apres');
			
			prom.then(function() {
				console.log('OK2');
			}, function() {
				console.log('KO2');
			}).then(undefined,function() {
				console.log("KO3");
			});
		},
		
		test2 : function() {
			var defer = $q.defer();
			$timeout(function(){
				if(Math.random()>0.5){
					defer.resolve('YES !');
				} else {
					defer.reject('Arg !!');
				}
			}, Math.random()*100);
			return defer.promise;
		}
	};
});
