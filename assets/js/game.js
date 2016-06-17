// this file contain game initialization and execution code
// this is the only file that should use the global scope

// game stage
var stage               = undefined;
var STAGE_WIDTH         = undefined;
var STAGE_HEIGHT        = undefined;
var BLOCK_SIZE          = 20;
var STAGE_WIDTH_BLOCKS  = undefined;
var STAGE_HEIGHT_BLOCKS = undefined;

var level = undefined;



// Initialize the game space
function init() {
	stage = new createjs.Stage("gameCanvas");
	STAGE_HEIGHT = stage.canvas.height;
	STAGE_WIDTH  = stage.canvas.width;
	STAGE_WIDTH_BLOCKS = STAGE_WIDTH / BLOCK_SIZE;
	STAGE_HEIGHT_BLOCKS = STAGE_HEIGHT / BLOCK_SIZE;
	level = new Level();
	createjs.Ticker.addEventListener("tick", update);
}

// simple test function to draw a circle
function testCircle(x, y, r) {
	circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, r);
	circle.x = x;
	circle.y = y;
	stage.addChild(circle);
	stage.update();
}



function update() {
	level.update();
	stage.clear();
	stage.update();
}

function draw() {

}