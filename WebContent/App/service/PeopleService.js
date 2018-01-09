angular.module('myModule').value('PeopleService', {
	caculateId : function(reponse) {
		var url = reponse.url; // https://swapi.co/api/people/2
		url = url.substring(0,url.length-1)
		
		var id = url.substring(url.lastIndexOf('/')+1); //2
		return parseInt(id); 
	}
});