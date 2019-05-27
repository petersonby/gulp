const {series, parallel} = require('gulp');
const clean = require('./clean');
const serve = require('./serve');
const assets = require('./assets');
const scripts = require('./scripts');
const styles = require('./styles');
const svgSprites = require('./svgSprites');
const watcher = require('./watcher');

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

exports.serve = serve;
exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;
exports.svgSprites = svgSprites;
exports.build = build;
exports.assets = assets;
exports.watcher = watcher;
exports.default =	defaultTask;