exports.world = function Heloo(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	}
	this.sayHello = function(){
		console.log('Hello' + name);
	}
}