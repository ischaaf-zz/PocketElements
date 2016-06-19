function Creep(speed) {
	this.index = 0;
	this.sprite = new createjs.Shape();
	this.sprite.graphics.beginFill("Red").drawCircle(0, 0, 10);
	this.speed = speed;
}

Creep.prototype = {
	constructor: Creep,
	update: function(e) {
		var delta = this.speed * (e.delta / 1000);
		//this.sprite.x += this.speed * (e.delta / 1000);
	}
}