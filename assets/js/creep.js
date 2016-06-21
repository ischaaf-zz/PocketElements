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
		this.move(delta, this.dir);
		var offset;
		switch (this.dir) {
			case 'L':
				offset = this.sprite.x - delta - this.nextTurn;
				break;
			case 'R':
				offset = this.nextTurn - (this.sprite.x + delta);
				break;
			case 'U':
				offset = this.sprite.y - delta - this.nextTurn;
				break;
			case 'D':
				offset = this.nextTurn - (this.sprite.y + delta);
				break;
		}
		if (offset < 0) {
			this.move(delta + offset, this.dir);
			this.dir = this.route.parseDir(this.index++);
			this.nextTurn = this.parseTurnFrom(this.index, this.dir);
			this.move(-1 * offset, this.dir);
		} else {
			this.move(delta, this.dir);
		}
	},
	move: function(dist, dir) {
		if (dir == 'L') {
			this.sprite.x -= dist;
		} else if (dir == 'R') {
			this.sprite.x += dist;
		} else if (dir == 'U') {
			this.sprite.y -= dist;
		} else if (dir == 'D') {
			this.sprite.y += dist;
		} else if (dir == 'End') {
			this.route.endCreep(this);
		}
	},
	start: function() {
		this.dir = this.route.parseDir(0);
		this.nextTurn = this.parseTurnFrom(0, this.dir);
		this.index = 0;
	},
	parseTurnFrom: function(i, dir) {
		if (!dir) {
			dir = this.route.parseDir(i);
		}
		switch (dir) {
			case 'L':
			case 'R':
				return (this.route.directions[i].x + 0.5) * BLOCK_SIZE;
				break;
			case 'U':
			case 'D':
				return (this.route.directions[i].y + 0.5) * BLOCK_SIZE;
				break;
		}
	}
}