const {src, dest, lastRun} = require('gulp');

function assets() {
	return src('src/assets/**', {since: lastRun('assets')})
		.pipe(dest('build'));
}

exports.assets = assets;