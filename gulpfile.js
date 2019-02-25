const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const hub = new HubRegistry([
  'gulp/*.js'
]);

gulp.registry(hub);

gulp.task('watch', function() {
	gulp.watch('src/css/**/*.*', gulp.series('styles'));
	gulp.watch('src/js/**/*.*', gulp.series('scripts'));
	gulp.watch('src/assets/**/*.svg', gulp.series('svgSprite'));
	gulp.watch('src/assets/**/*.*', gulp.series('assets'));
});

gulp.task('build', gulp.series(
	'clean', 
	'svgSprite',
	gulp.parallel('styles', 'scripts', 'assets')
));

gulp.task('default', 
	gulp.series('build', gulp.parallel('watch', 'serve'))
);