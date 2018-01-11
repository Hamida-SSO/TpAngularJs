var app = angular.module('myModule');

app.directive('swFilms', function() {
	return {
		link: function(scope, element, attrs) {
			scope.$watch(attrs.swFilms, function(perso) {
				element.find('span').remove();	
				console.log(perso.films);
				for(var i=0; i<=perso.films.length; i++) { 
					var span =  angular.element('<span>')
						.addClass('glyphicon glyphicon-film')
					element.append(span);
					element.append('&nbsp;');	
				}
			});
		}
	};
});