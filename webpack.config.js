module.exports = {
	entry: [
	'./project/scripts/Canvas.js',
	'./project/scripts/UIController.js',
	'./project/scripts/FrameHandler.js',
	'./project/scripts/drawLine.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};