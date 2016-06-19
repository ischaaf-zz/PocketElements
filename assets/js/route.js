function Route(directions) {
	// keep a list of all rectangles for easy removal later
	this.rects = [];
	this.directions = directions;
	this.creeps = [];

	// [{point: createjs.Point, dir: 'U'|'D'|'l'|'R'}, ...]
	
	// setup the first directional start
	this.x = this.startX = directions[0].x;
	this.y = this.startY = directions[0].y;
	this.createShape();

	var dir = directions[0].dir;

	// loop through remaining instructions
	for (var i = 1; i < directions.length; i++) {
		while (!(this.x == directions[i].x && this.y == directions[i].y)) {
			if (!this.createShape(dir)) break;
		}
		dir = directions[i].dir;
	}

	// if the last instruction left a direction, continue to the wall
	if (dir != 'C') {
		while (this.x >= 0 && this.y >= 0 && this.x < STAGE_WIDTH_BLOCKS && this.y < STAGE_HEIGHT_BLOCKS) {
			if (!this.createShape(dir)) break;
		}
	}
}

Route.prototype = {
	constructor: Route,
	destructor: function() {
		for (var i = 0; i < this.rects.length; i++) {
			stage.removeChild(this.rects[i]);
		}
	},
	createShape: function(dir) {
		if (dir) {
			switch (dir) {
				case 'L':
					if (this.x == 0)
						return false; 
					this.x -= 1; 
					break;
				case 'R': 
					if (this.x == STAGE_WIDTH_BLOCKS - 1)
						return false;
					this.x += 1; 
					break;
				case 'U': 
					if (this.y == 0)
						return false;
					this.y -= 1; 
					break;
				case 'D': 
					if (this.y == STAGE_HEIGHT_BLOCKS - 1)
						return false;
					this.y += 1; 
					break;
			}
		}
		var rect = new createjs.Shape();
		rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
		rect.x = this.x * BLOCK_SIZE;
		rect.y = this.y * BLOCK_SIZE;
		this.rects.push(rect);
		stage.addChild(rect);
		return true;
	},
	startCreep: function(creep) {
		creep.sprite.x = this.startX * BLOCK_SIZE + BLOCK_SIZE / 2;
		creep.sprite.y = this.startY * BLOCK_SIZE + BLOCK_SIZE / 2;
		stage.addChild(creep.sprite);
		creep.dir = this.directions[0].dir;
		this.creeps.push(creep);
	},
	update: function(e) {
		for (var i = 0; i < this.creeps.length; i++) {
			this.creeps[i].update(e);
		}
	}
}