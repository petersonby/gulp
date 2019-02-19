const gulp = require('gulp');
const gulpIf = require('gulp-if');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulpIf(isDev, sourcemaps.init()))
		.pipe(gulpIf(!isDev,babel({
			"presets": [
				[
					"@babel/preset-env",
					{
						"modules": "false"
					}
				]
			]
		})))
    .pipe(concat('bundle.js'))
		.pipe(gulpIf(!isDev, uglify()))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulp.dest('build'));
});