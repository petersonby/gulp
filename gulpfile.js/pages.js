const {src, dest} = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const beautify = require('gulp-beautify');

function pages() {
  return src('src/assets/pages/*.html')
          .pipe(nunjucksRender({
            path: ['src/assets/components/']
          }))
          .pipe(beautify.html({ indent_size: 2 }))
          .pipe(dest('build'));
}

module.exports = pages;