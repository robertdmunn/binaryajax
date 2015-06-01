module.exports = {
	dist : {
		files : 'src/binaryajax.js',
		tasks : [ 'newer:uglify:dist' ],
		options : {
			spawn : false,
	        livereload: true
		}
	}
};