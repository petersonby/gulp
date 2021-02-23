const { watch,series } = require('gulp');
const styles = require('./styles');
const scripts = require('./scripts');
const svgSprites = require('./svgSprites');
const assets = require('./assets');

function watcher(done) {
  watch('src/scss/**/*.*', series(styles));
  watch('src/js/**/*.*', series(scripts));
  watch('src/assets/**/svg/*.svg', series(svgSprites));
  watch('src/assets/**/*.*', series(assets));
  done();
}

module.exports = watcher;