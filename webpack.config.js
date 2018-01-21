module.exports = {
	entry: [
	'./project/scripts/StateHandler.js',
	'./project/scripts/drawLine.js',
	'./project/scripts/prev.js',
	'./project/scripts/next.js',
	'./project/scripts/clearCanvas.js',
	'./project/scripts/saveButton.js',
	'./project/scripts/canvasWidth.js',
	'./project/scripts/canvasHeight.js',
	'./project/scripts/UIController.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};