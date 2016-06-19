// this file contain game initialization and execution code
// this is the only file that should use the global scope

// game stage
var stage               = undefined;
var STAGE_WIDTH         = undefined;
var STAGE_HEIGHT        = undefined;
var BLOCK_SIZE          = 20;
var STAGE_WIDTH_BLOCKS  = undefined;
var STAGE_HEIGHT_BLOCKS = undefined;
var gridLines = undefined;

var level = undefined;



// Initialize the game space
function init() {
	stage = new createjs.Stage("gameCanvas");
	STAGE_HEIGHT = stage.canvas.height;
	STAGE_WIDTH  = stage.canvas.width;
	STAGE_WIDTH_BLOCKS = STAGE_WIDTH / BLOCK_SIZE;
	STAGE_HEIGHT_BLOCKS = STAGE_HEIGHT / BLOCK_SIZE;
	gridLines = buildGrid();
	stage.addChild(gridLines);
	level = new Level();
	createjs.Ticker.addEventListener("tick", update);
}

function update(e) {
	level.update(e);
	stage.clear();
	stage.update();
}

function buildGrid() {
	var grid = new createjs.Shape();
	grid.graphics.ss(0.5).beginStroke("#999999");
	for (var i = 0; i <= STAGE_HEIGHT_BLOCKS; i++) {
		grid.graphics.mt(0, BLOCK_SIZE * i);
		grid.graphics.lt(STAGE_WIDTH, BLOCK_SIZE * i);
	}
	for (var i = 0; i < STAGE_WIDTH_BLOCKS; i++) {
		grid.graphics.mt(BLOCK_SIZE * i, 0);
		grid.graphics.lt(BLOCK_SIZE * i, STAGE_HEIGHT);
	}
	return grid;
}