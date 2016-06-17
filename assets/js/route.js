function Route(start, path) {
	this.rects = [];
	var startRect = new createjs.Shape();
	startRect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
	startRect.x = start.x * BLOCK_SIZE;
	startRect.y = start.y * BLOCK_SIZE;
	this.rects.push(startRect);
	stage.addChild(startRect);
	var x = start.x;
	var y = start.y;
	var line = new createjs.Shape();
	line.graphics.setStrokeStyle(1).beginStroke("#000000").mt(start.x * BLOCK_SIZE + BLOCK_SIZE / 2, start.y * BLOCK_SIZE + BLOCK_SIZE / 2);
	for (var i = 0; i < path.length; i++) {
		if (path[i].L) {
			var move = path[i].L;
			for (var j = 0; j < move; j++) {
				x -= 1;
				var rect = new createjs.Shape();
				rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
				rect.x = x * BLOCK_SIZE;
				rect.y = y * BLOCK_SIZE;
				this.rects.push(rect);
				stage.addChild(rect);
			}
		} else if (path[i].R) {
			var move = path[i].R;
			for (var j = 0; j < move; j++) {
				x += 1;
				var rect = new createjs.Shape();
				rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
				rect.x = x * BLOCK_SIZE;
				rect.y = y * BLOCK_SIZE;
				this.rects.push(rect);
				stage.addChild(rect);
			}
		} else if (path[i].U) {
			var move = path[i].U;
			for (var j = 0; j < move; j++) {
				y -= 1;
				var rect = new createjs.Shape();
				rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
				rect.x = x * BLOCK_SIZE;
				rect.y = y * BLOCK_SIZE;
				this.rects.push(rect);
				stage.addChild(rect);
			}
		} else if (path[i].D) {
			var move = path[i].D;
			for (var j = 0; j < move; j++) {
				y += 1;
				var rect = new createjs.Shape();
				rect.graphics.beginFill("White").drawRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
				rect.x = x * BLOCK_SIZE;
				rect.y = y * BLOCK_SIZE;
				this.rects.push(rect);
				stage.addChild(rect);
			}
		} else {
			throw "invalid path for route";
		}
		line.graphics.lt(x * BLOCK_SIZE + BLOCK_SIZE / 2, y * BLOCK_SIZE + BLOCK_SIZE / 2);
	}
	stage.addChild(line);
}

Route.prototype = {
	constructor: Route,
	destructor: function() {
		for (var i = 0; i < this.rects.length; i++) {
			stage.removeChild(this.rects[i]);
		}
	}
}