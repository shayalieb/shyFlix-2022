//creating the server and importing the modules http, fs, and url
let http = require('http')
    fs = require('fs'),
    url = require('url');


//assiging to the instance of the HTTP module, which inports the modules and allows you to use it function (creatServer)
http.createServer((request, response) => {
    let addr = request.url,
    q = url.parse(addr, true)
    filePath = '';

    if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        filePath = 'index.html';
    }

    fs.readFile(filePath, (err, data) => {
        if(err) {
            throw err;
        }

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
    });

}).listen(8080);
console.log('The test server is running on port 8080');

