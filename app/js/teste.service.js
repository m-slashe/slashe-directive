testeModule.service('slasheService',slasheService);

slasheService.$inject = [];
function slasheService(){

	this.teste = 'Jeff';
	this.array = ['teste1','teste2'];

	$.get('files/seila.json',function(data){
		console.log(data);
	})

}