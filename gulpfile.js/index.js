const {watch, series, parallel,src, dest, lastRun} = require('gulp');

function assets() {
	return src('src/assets/**', {since: lastRun('assets')})
		.pipe(dest('build'));
}

const browserSync = require('browser-sync').create();

function serve(done) {
	browserSync.init({
		server: 'build'
	});

	browserSync.watch('build/**/*.*').on('change', browserSync.reload);
	done();
}

exports.serve = serve;

const del = require('del');

function clean() {
	return del('build');
}

exports.clean = clean;

const gulpIf = require('gulp-if');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


function scripts() {
  return src('src/js/**/*.js')
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
    .pipe(dest('build'));
}

exports.scripts = scripts;

const csso = require('gulp-csso');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');


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

exports.styles = styles;

const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');

function svgSprites() {
	return src('src/assets/img/*.svg')
		.pipe(svgSprite({
      mode: {
        stack: {
            sprite: "../sprite.svg"
        }
      },
    }))
    .pipe(gulpIf(!isDev,svgo()))
		.pipe(dest('build/sprite'));
}

exports.svgSprites = svgSprites;

function watcher(done) {
	watch('src/css/**/*.*', series(styles));
	watch('src/js/**/*.*', series(scripts));
	watch('src/assets/**/*.svg', series(svgSprites));
	watch('src/assets/**/*.*', series(assets));
	done();
}

function build(done) { 
	return series(
		clean, 
		svgSprites,
		parallel(styles, scripts, assets)
	)(done)
}

function defaultTask() { 
	return series(build, parallel(watcher, serve))()
}

exports.build = build;
exports.assets = assets;
exports.watcher = watcher;
exports.default =	defaultTask;