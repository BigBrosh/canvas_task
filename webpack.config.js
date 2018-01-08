module.exports = {
	entry: [
	'./project/scripts/variables.js',
	'./project/scripts/drawLine.js',
	'./project/scripts/prev.js',
	'./project/scripts/next.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	}
};