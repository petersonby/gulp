const gulp = require('gulp');
const gulpIf = require('gulp-if');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('styles', function() {
  return gulp.src('src/css/**/*.css')
		.pipe(concat('style.css'))
		.pipe(gulpIf(!isDev, csso()))
	  .pipe(gulp.dest('build'));
});