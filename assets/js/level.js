function Level() {
	this.background = new createjs.Shape();
	this.background.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
	this.background.x = 0;
	this.background.y = 0;
	stage.addChild(this.background);
	this.route = new Route({x: 5, y: 0}, [{D: 10}, {R: 5}, {U: 3}, {R: 4}, {D: 17}]);
}

Level.prototype = {
	constructor: Level,
	destructor: function() {
		stage.removeChild(this.background);
		this.route.destructor();
	},
	update: function() {

	}
}