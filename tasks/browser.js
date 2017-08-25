// 监视开发文件
// 开发文件发生变化时，便开始自动编译
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');

const yargs = require('./util/yargs.js');

gulp.task('browser', (cb) => {
  if (!yargs.watch) {
    return cb();
  }
  gulp.watch('es6/**/*.js', ['scripts']);
  gulp.watch('es6/**/*.css', ['css']);
});