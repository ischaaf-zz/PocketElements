function Level() {
	this.background = new createjs.Shape();
	this.background.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
	this.background.x = 0;
	this.background.y = 0;
	stage.addChildAt(this.background, 0);
	this.route = new Route(5, 0);
	this.placeNext = 500;
	this.routeTemp = ['D', 'D', 'R', 'R', 'U', 'R', 'D', 'D', 'L', 'L', 'L', 'D', 'R', 'R', 'R', 'R', 'R', 'D'];
	this.rind = 0;
}

Level.prototype = {
	constructor: Level,
	destructor: function() {
		stage.removeChild(this.background);
		this.route.destructor();
	},
	update: function(e) {
		if (e.time > this.placeNext && this.rind < this.routeTemp.length) {
			this.route.rt(this.routeTemp[this.rind], 5);
			this.placeNext += 500;
			this.rind++;
		}
	}
}