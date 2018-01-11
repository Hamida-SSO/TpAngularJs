angular.module('myModule').service('MemoryService', [function(){
	
	//Pour garder des espaces memoires
	var memory = {};
	this.get = function(key) {
		if(!memory[key]) {
			memory[key] = {};
		}
		return memory[key];
	};
	
}]);