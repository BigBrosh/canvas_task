module.exports = {
	entry: ['./project/scripts/variables.js', './project/scripts/lineWidth.js', './project/scripts/canvasWidth.js', './project/scripts/canvasHeight.js', './project/scripts/drawLine.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};