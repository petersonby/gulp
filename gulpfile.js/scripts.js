const {src, dest} = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const TerserPlugin = require("terser-webpack-plugin");
const eslint = require('gulp-eslint');

const yargs = require('yargs');
const PROD = yargs.argv.prod;

function scripts() {
  return src(['src/js/_polyfill.js','src/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpWebpack({
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              },
            },
            exclude: /node_modules/
          }
        ]
      },
      mode: PROD ? 'production' : 'development',
      devtool: !PROD ? 'inline-source-map' : false,
      optimization: {
        minimize: PROD,
        minimizer: [new TerserPlugin()],
      },
      output: {
        filename: 'bundle.js'
      }
    }, webpack))
    .pipe(dest('build'));
}

module.exports = scripts;