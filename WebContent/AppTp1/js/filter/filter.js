angular.module('myModule').filter('deLongueur', function() {
	return function(input, longueur) {
		var output = [];
		for(var index in input) {
			if((input[index].length==longueur) || (longueur == undefined)) {
				output.push(input[index]);
			}
		}
		
		return output;
	}
});