var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './dist/index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, function(error, content)
    {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with site admin for error: ' + error.code + ' ..\n');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(8125);
console.log('Server running on port 8125');