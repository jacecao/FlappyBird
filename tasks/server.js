const gulp = require('gulp');
const gulpif = require('gulp-if');
const liveserver = require('gulp-live-server');

const yargs = require('./util/yargs.js');

gulp.task('serve', (cb) => {
  if (!yargs.watch) {
    console.log('! no watch !');
    return cb();
  }

  var server = liveserver.new(['--harmony', 'server/bin/www.js']);
  server.start();
  // 服务器中文件出现变化，就重启服务
  gulp.watch(['server/webroot/js/*.js', 'server/webroot/css/*.css'], function (file) {
    server.notify.apply(server, [file]);
  });
})