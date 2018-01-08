module.exports = {
	entry: [
	'./project/scripts/variables.js',
	'./project/scripts/drawLine.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};