const { watch } = require('gulp');
const styles = require('./styles');
const scripts = require('./scripts');
const svgSprites = require('./svgSprites');
const assets = require('./assets');

function watcher(done) {
	watch('src/css/**/*.*', series(styles));
	watch('src/js/**/*.*', series(scripts));
	watch('src/assets/**/*.svg', series(svgSprites));
	watch('src/assets/**/*.*', series(assets));
	done();
}

module.exports = watcher;