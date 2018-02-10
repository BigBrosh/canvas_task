module.exports = {
	entry: [
	'./project/scripts/Canvas.js',
	'./project/scripts/UIController.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};