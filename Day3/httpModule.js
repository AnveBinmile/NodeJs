var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const data = {message:'Hello world'}
  res.write(JSON.stringify(data));
  res.end();
}).listen(8080);

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const data = {message:'Hello world'}
  res.write(JSON.stringify(data));
  res.end();
}).listen(8080);


   