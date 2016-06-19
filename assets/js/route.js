function Route(startX, startY) {
	this.rects = [];
	
	var startRect = new createjs.Shape();
	startRect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
	startRect.x = startX * BLOCK_SIZE;
	startRect.y = startY * BLOCK_SIZE;
	this.rects.push(startRect);
	stage.addChild(startRect);
	this.x = startX;
	this.y = startY;

	// for (var i = 0; i < path.length; i++) {
	// 	if (path[i].L) {
	// 		var move = path[i].L;
	// 		for (var j = 0; j < move; j++) {
	// 			x -= 1;
	// 			var rect = new createjs.Shape();
	// 			rect.graphics.bf("White").r(0, 0, BLOCK_SIZE, BLOCK_SIZE);
	// 			rect.x = x * BLOCK_SIZE;
	// 			rect.y = y * BLOCK_SIZE;
	// 			this.rects.push(rect);
	// 			stage.addChild(rect);
	// 		}
	// 	} else if (path[i].R) {
	// 		var move = path[i].R;
	// 		for (var j = 0; j < move; j++) {
	// 			x += 1;
	// 			var rect = new createjs.Shape();
	// 			rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
	// 			rect.x = x * BLOCK_SIZE;
	// 			rect.y = y * BLOCK_SIZE;
	// 			this.rects.push(rect);
	// 			stage.addChild(rect);
	// 		}
	// 	} else if (path[i].U) {
	// 		var move = path[i].U;
	// 		for (var j = 0; j < move; j++) {
	// 			y -= 1;
	// 			var rect = new createjs.Shape();
	// 			rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
	// 			rect.x = x * BLOCK_SIZE;
	// 			rect.y = y * BLOCK_SIZE;
	// 			this.rects.push(rect);
	// 			stage.addChild(rect);
	// 		}
	// 	} else if (path[i].D) {
	// 		var move = path[i].D;
	// 		for (var j = 0; j < move; j++) {
	// 			y += 1;
	// 			var rect = new createjs.Shape();
	// 			rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
	// 			rect.x = x * BLOCK_SIZE;
	// 			rect.y = y * BLOCK_SIZE;
	// 			this.rects.push(rect);
	// 			stage.addChild(rect);
	// 		}
	// 	} else {
	// 		throw "invalid path for route";
	// 	}
	// 	line.graphics.lt(x * BLOCK_SIZE + BLOCK_SIZE / 2, y * BLOCK_SIZE + BLOCK_SIZE / 2);
	// }
	stage.addChild(this.line);
}

Route.prototype = {
	constructor: Route,
	destructor: function() {
		for (var i = 0; i < this.rects.length; i++) {
			stage.removeChild(this.rects[i]);
		}
	},
	rt: function(dir, steps) {
		if (isNaN(steps)) {
			steps = 1;
		}
		if (dir == 'L') {
			for (var i = 0; i < steps; i++) {
				this.x -= 1;
				this.createShape();
			}
		} else if (dir == 'R') {
			for (var i = 0; i < steps; i++) {
				this.x += 1;
				this.createShape();
			}
		} else if (dir == 'U') {
			for (var i = 0; i < steps; i++) {
				this.y -= 1;
				this.createShape();
			}
		} else if (dir == 'D') {
			for (var i = 0; i < steps; i++) {
				this.y += 1;
				this.createShape();
			}
		}
	},
	createShape: function() {
		var rect = new createjs.Shape();
		rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
		rect.x = this.x * BLOCK_SIZE;
		rect.y = this.y * BLOCK_SIZE;
		this.rects.push(rect);
		stage.addChild(rect);
	}
}