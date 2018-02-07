module.exports = {
	entry: [
	'./project/scripts/Canvas.js',
	'./project/scripts/UIController.js',
	'./project/scripts/StateHandler.js',
	'./project/scripts/drawLine.js',
	'./project/scripts/Counter.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};