module.exports = {
	entry: [
	'./project/scripts/Canvas.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	},

};