const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

gulp.task('svgSprite', function () {
	return gulp.src('src/assets/img/*.svg')
		.pipe(svgSprite({
      mode: {
        stack: {
            sprite: "../sprite.svg"
        }
      },
    }))
		.pipe(gulp.dest('src/assets/sprite'));
});
