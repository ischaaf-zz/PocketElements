function Level() {
	this.background = new createjs.Shape();
	this.background.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
	this.background.x = 0;
	this.background.y = 0;
	stage.addChildAt(this.background, 0);
	this.route = new Route([{x: 5, y: 0, dir: 'D'}, {x: 5, y: 10, dir: 'R'}, {x: 20, y: 10, dir: 'D'}]);
	var creep = new Creep(40);
	this.route.startCreep(creep);
}

Level.prototype = {
	constructor: Level,
	destructor: function() {
		stage.removeChild(this.background);
		this.route.destructor();
	},
	update: function(e) {
		this.route.update(e);
	}
}