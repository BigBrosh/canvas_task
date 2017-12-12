module.exports = {
	entry: ['./project/scripts/variables.js', './project/scripts/lineWidth.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};