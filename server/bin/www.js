console.time('start server need time');
console.log('*******dir___env:  ' + __dirname);

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// 根据文件扩展名不同指定不同的响应类型
let getContentType = function (filepath) {
  let contentType = "";

  var extname = path.extname(filepath);
  switch (extname) {
    case '.html':
      contentType = "text/html";
      break;
    case '.js':
      contentType = "text/javascript";
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json'
      break;  
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.ico':
      contentType = 'image/icon';
      break;
    default:
      contentType = 'application/octet-stream';          
  }

  return contentType;
};

// 解析请求，返回响应内容
let webserver = function (req, res) {
  let reqUrl = req.url;
  console.log('*******reqUrl:   ' + reqUrl);

  var pathName = url.parse(reqUrl).pathname;
  if (path.extname(pathName) == '') {
    pathName += '/'; //指定默认访问目录
  }
  // 如果访问的是目录路径（以‘／’结尾）
  // 那么默认指向该路径下的index.html
  if (pathName.charAt(pathName.length - 1) == '/') {
    pathName += 'index.html';
  }
  // 组装实际文件路径
  var filePath = path.join('./server/webroot', pathName);
  console.log('********filepath:   ' + filePath);

  // fs.exists('./server/webroot/index.html', function (exists) {
  //   exists ? console.log('文件存在') : console.log('file not exists');
  // });
  // 注意这里需要弄清楚当前执行环境目录是flappybird
  // 判断访问文件是否存在
  fs.exists(filePath, function (exists) {
    if (exists) {
      // 响应头设置内容类型
      res.writeHead(200, {
        "Content-Type": getContentType(filePath)
      });
      // 创建读取文件流
      var fileStream = fs.createReadStream(filePath, {flags: 'r'});
      fileStream.on('error', function (err) {
        res.writeHead(404);
        res.end('<h3>404 Read Error</h3>');
      });

      fileStream.pipe(res);
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      res.end('<h3>404 NOT FOUND</h3>');
    }
  });
};

let createServer = http.createServer(webserver);

createServer.on('error', function (err) {
  console.log(err);
});

createServer.listen(3000, 'localhost', function () {
  console.log('webserver running at localhost:3000');
  console.timeEnd('start server need time');
});

createServer.on('connection', function (socket) {
  console.log('网络建立连接');
});
