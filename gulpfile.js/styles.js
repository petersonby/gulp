const {src, dest} = require('gulp');
const gulpIf = require('gulp-if');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const combineMediaQueries = require("postcss-combine-media-query");

const yargs = require('yargs');
const PROD = yargs.argv.prod;


function styles() {
	const plugins = [
		autoprefixer(),
		combineMediaQueries()
	];
	
  return src('src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(postcss(plugins))
		.pipe(gulpIf(PROD, csso()))
	  .pipe(dest('build/css'));
}

module.exports = styles;