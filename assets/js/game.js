// this file contain game initialization and execution code
// this is the only file that should use the global scope

// game stage
var stage        = undefined;
var STAGE_WIDTH  = undefined;
var STAGE_HEIGHT = undefined;

// Initialize the game space
function init() {
	stage = new createjs.Stage("gameCanvas");
	STAGE_HEIGHT = stage.canvas.height;
	STAGE_WIDTH  = stage.canvas.width;
}

// simple test function to draw a circle
function testCircle(x, y, r) {
	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, r);
	circle.x = x;
	circle.y = y;
	stage.addChild(circle);
	stage.update();
}