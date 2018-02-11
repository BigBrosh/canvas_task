module.exports = {
	entry: [
	'./project/scripts/Canvas.js',
	'./project/scripts/UIController.js',
	'./project/scripts/FrameHandler.js',
	'./project/scripts/drawLine.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};