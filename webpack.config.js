module.exports = {
	entry: [
	'./project/scripts/variables.js', 
	'./project/scripts/lineWidth.js', 
	'./project/scripts/canvasWidth.js', 
	'./project/scripts/canvasHeight.js', 
	'./project/scripts/drawLine.js',
	'./project/scripts/clearCanvas.js',
	'./project/scripts/lineColor.js',
	'./project/scripts/prev.js'
	],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};