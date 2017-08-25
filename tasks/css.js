const gulp = require('gulp');
const gulpif = require('gulp-if');
const livereload = require('gulp-livereload');
const yargs = require('./util/yargs.js');

gulp.task('css', () => {
  return gulp.src('es6/**/*.css')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(yargs.watch, livereload()))
});