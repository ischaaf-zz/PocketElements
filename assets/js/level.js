function Level() {
	this.background = new createjs.Shape();
	this.background.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
	this.background.x = 0;
	this.background.y = 0;
	stage.addChild(this.background);
	this.route = new Route([new P(5, 0), new P(5, 10), new P(20, 10), new P(20, 15), new P(35, 15)]);
	this.nextCreep = 0;
	this.speed = 40;
	this.spawnTimer = 1000;
}

Level.prototype = {
	constructor: Level,
	destructor: function() {
		stage.removeChild(this.background);
		this.route.destructor();
	},
	update: function(e) {
		if (e.time > this.nextCreep) {
			this.route.startCreep(new Creep(this.speed));
			//this.speed++;
			this.nextCreep += this.spawnTimer;
		}
		this.route.update(e);
	}
}