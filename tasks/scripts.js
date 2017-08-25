const gulp = require('gulp');
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const named = require('vinyl-named');
const livereload = require('gulp-livereload');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const {log, colors} = require('gulp-util');

const yargs = require('./util/yargs.js');

gulp.task('scripts', () => {
  return gulp.src(['es6/index.js'])
    .pipe(plumber({
      errorHandle: function () {}
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, status.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/webroot/js'))
    .pipe(rename({
      basename: 'app',
      extname: '.min.js'
    }))
    .pipe(uglify({
      compress: {properties: false},
      output: {'quote_keys': true}
    }))
    .pipe(gulp.dest('server/webroot/js'))
    .pipe(gulpif(yargs.watch, livereload()))
})
