# Gulp boilerplate project

## Install
```
git clone --depth 1 git@github.com:petersonby/gulp.git
git commit --amend --reset-author -m 'chore(project): init project'
git remote set-url origin <url> // <url> – new repo
git push origin master

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
#### 1. Gulp tasks
  * `gulp` or `gulp default` – default task, builds assets, starts watching directories for changes and reload browser
  * `gulp build` – rebuilds all assets
  * `gulp watcher` – starts watching directories for changes
  * `gulp serve` – run browsersync server with auto reload
  * `gulp clean` – delete build folder
  * `gulp styles` – styles compilation (include: concat, minify, sourcemaps, autoprefixer)
  * `gulp scripts` – scripts compilation (include: concat, uglify, sourcemaps, babel)
  * `gulp svgSprites` – create svgSprite (include: concat, minify)
  * `gulp assets` – other assets compilation
#### 2. HTML
  Simple template for html-coding
#### 3. CSS
  Basic styles for (almost) every site
#### 4. JS
  Include: Polyfill for 'forEach', Animated scroll to anchors, mobile burger menu
