const {src, dest} = require('gulp');
const gulpIf = require('gulp-if');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


function scripts() {
  return src(['src/js/_polyfill.js','src/js/**/*.js'])
    .pipe(gulpIf(isDev, sourcemaps.init()))
		.pipe(babel({
			"presets": [
				[
					"@babel/preset-env"
				]
			]
		}))
    .pipe(concat('bundle.js'))
		.pipe(gulpIf(!isDev, uglify()))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(dest('build'));
}

module.exports = scripts;