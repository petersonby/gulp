const browserSync = require('browser-sync').create();

function serve() {
	browserSync.init({
		server: 'build'
	});

	browserSync.watch('build/**/*.*').on('change', browserSync.reload);
}

exports.serve = serve;