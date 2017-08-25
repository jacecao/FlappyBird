// yargs 这个包的作用是识别我们输入的命令的参数
// yargs 能帮我们实现定制命令
// 例如 gulp -watch. 那么yargs就能识别watch
const yargs = require('yargs');
// 定制命令
// option('命令名字'，{命令配置})
 
const args = yargs.option('production', {
  alias: 'p',
  boolean: true,
  default: false,
  describe: 'min all scripts'
})
.option('watch', {
  alias: 'w',
  boolean: true,
  default: false,
  describe: 'watch all fles'
})
.option('verbose', {
  boolean: true,
  default: false,
  describe: 'log'
})
.option('sourcemaps', {
  describe: 'force the creation of sourcemaps'
})
.option('port', {
  string: true,
  default: 3000,
  describe: 'server port'
})
.help()
.argv

module.exports = args;