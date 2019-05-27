const {src, dest} = require('gulp');
const gulpIf = require('gulp-if');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

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

module.exports = svgSprites;
