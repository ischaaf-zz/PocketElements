function Creep(route) {
	this.route = route;
	this.index = 0;
	this.sprite = new createjs.Shape();
	this.sprite.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
	this.sprite.x = route[0].x;
	this.sprite.y = route[0].y;
	stage.add(this.sprite);
}

Creep.prototype = {
	constructor: Creep,
	update: function(time) {
		
	}
}