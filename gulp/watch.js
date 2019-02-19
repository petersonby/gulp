const gulp = require('gulp');


gulp.task('watch', function() {
	gulp.watch('src/css/**/*.*', gulp.series('styles'));
	gulp.watch('src/js/**/*.*', gulp.series('scripts'));
	gulp.watch('src/assets/**/*.*', gulp.series('assets'));
});