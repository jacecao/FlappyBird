const gulp = require('gulp');
const del = require('del');
const yargs = require('./util/yargs.js');

gulp.task('clean', () => {
  return del(['server/webroot/js'], ['server/webroot/css']);
});