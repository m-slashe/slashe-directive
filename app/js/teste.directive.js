testeModule.directive('helloWorld',helloWorld);

helloWorld.$inject = ['slasheService'];
function helloWorld(slasheService){

	return {
		scope : {},
		restrict: 'AE',
		replace: 'true',
		template: '<div><h3>Hello World!!{{teste}}</h3>' +
		'<div ng-repeat="n in array">'+
			'{{n}}'+
		'</div></div>',
		link: function(scope) {
	    	scope.teste = slasheService.teste;
	    	scope.array = slasheService.array;
	    }
  };

}