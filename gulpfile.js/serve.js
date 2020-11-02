const browserSync = require('browser-sync').create();

function serve(done) {
  browserSync.init({
    server: 'build'
  });

  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
  done();
}

module.exports = serve;