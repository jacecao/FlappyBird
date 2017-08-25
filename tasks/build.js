// 制定需要编译任务的顺序
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

gulp.task('build', gulpSequence('clean', 'css', 'scripts', ['browser', 'serve']));