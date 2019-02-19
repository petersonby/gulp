const gulp = require('gulp');


gulp.task('build', gulp.series(
	'clean', 
	gulp.parallel('styles', 'scripts', 'assets'))
);