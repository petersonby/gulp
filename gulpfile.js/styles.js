const {src, dest} = require('gulp');
const gulpIf = require('gulp-if');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


function styles() {
	const plugins = [
		autoprefixer()
	];
	
  return src('src/css/**/*.css')
		.pipe(concat('style.css'))
		.pipe(postcss(plugins))
		.pipe(gulpIf(!isDev, csso()))
	  .pipe(dest('build'));
}

module.exports = styles;