# ***********
* 文件结构 **
************#

es5 --- ES5版本执行文件
 |_ index.html  展示文件
es6 --- ES6版本执行文件
 |_ 针对es5文件夹中的js文件来编写ES6模块，一一对应
res --- 所有图片静态加载资源
server --- 测试使用的服务文件（node）
tasks --- 所有gulp自动编译环境搭建
gulpfile.babel.js --- gulp针对ES6环境的主配置文件

# ********
* 启动 ***
*********#

es5 直接打开es5中的index文件即可
es6 1. npm install
    2. gulp --watch 启动服务
    3. 本地3000端口浏览服务

能够实现自动编译，但不能自动刷新文件，所以每次编译完后，需要手动刷新浏览器
（因为项目小，所以就没有使用express来搭建服务）