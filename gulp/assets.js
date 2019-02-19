const gulp = require('gulp');

gulp.task('assets', function() {
	return gulp.src('src/assets/**', {since: gulp.lastRun('assets')})
		.pipe(gulp.dest('build'));
});