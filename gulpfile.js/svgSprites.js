const {src, dest} = require('gulp');
const gulpIf = require('gulp-if');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');

const yargs = require('yargs');
const PROD = yargs.argv.prod;

function svgSprites() {
	return src('src/assets/img/*.svg')
		.pipe(svgSprite({
      mode: {
        stack: {
            sprite: "../sprite.svg"
        }
      },
    }))
    .pipe(gulpIf(PROD, svgo()))
		.pipe(dest('build/sprite'));
}

module.exports = svgSprites;
