const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: 'build'
	});

	browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', 
	gulp.series('build', gulp.parallel('watch', 'serve'))
);