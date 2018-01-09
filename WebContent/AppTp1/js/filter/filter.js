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
	
//	return function(input,longueur) {
//		return input.filter(function(mot) {
//			return ((mot.length==longueur) || (longueur == undefined));
//		}
//	}
});