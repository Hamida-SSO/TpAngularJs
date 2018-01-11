angular.module('myModule').component('fichePeople', {
	templateUrl: './html/details.html',
	/* controller : function(){}, */
	/* controlerAs : '$ctrl'  ==> PAR DEFAUT*/
	bindings: {
		personne : '=value', 
	}
});