# Gulp boilerplate project

## Install

#### Option 1
Click on [Use this template](https://github.com/petersonby/gulp/generate) button.
#### Option 2
Via command line:

```
git clone --depth 1 git@github.com:petersonby/gulp.git
cd gulp
git commit --amend --reset-author -m 'chore(project): init project'
git remote set-url origin <url> // <url> – new repo
git push origin main

npm install
```

## Usage
Create build and start server for development:
```
npm start
```
Create build for production:
```
npm run build
```

## Includes:

### HTML
  You can create [Nunjucks](https://github.com/mozilla/nunjucks) components and layouts that will be rendered to HTML pages.

### CSS
  You can use any [SCSS(SASS)](https://github.com/sass/sass) opportunities.

  Two PostCSS plugins: [autoprefixer](https://github.com/postcss/autoprefixer) and [postcss-combine-media-query](https://github.com/SassNinja/postcss-combine-media-query).

  In production mode styles will be optimized by [csso](https://github.com/css/csso).

### JS
  `_polyfill.js` – `ForEach` polyfill for NodeLists.

  `animated-scroll.js` – animated scroll to anchors.

  `menu.js` – script for mobile menu.

  `slider.js` – slider by [tiny-slider](https://github.com/ganlanyuan/tiny-slider).

  Template contains [ESLint](https://github.com/eslint/eslint) to style your code with `airbnb-base`.

  Your scripts will be compiled by [Babel](https://github.com/babel/babel) and minimized by [TerserPlugin](https://github.com/webpack-contrib/terser-webpack-plugin) in production mode.
