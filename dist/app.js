var testeModule = angular.module('slashe.directive',[]);
testeModule.service('slasheService',slasheService);

slasheService.$inject = [];
function slasheService(){

	this.teste = 'Jeff';
	this.array = ['teste1','teste2'];

	$.get('files/seila.json',function(data){
		console.log(data);
	})

}
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