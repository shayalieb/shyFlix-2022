//creating the server and importing the modules http, fs, and url
let http = requir('http')
    fs = requir('fs'),
    url = requir('url');


//assiging to the instance of the HTTP module, which inports the modules and allows you to use it function (creatServer)
http.createServer((request, response) => {
    let addr = request.url,
    q = url.parse(addr, true)
    fielPath = '';

    if (q.pathname.includes('documentation')) {
        fielPath = (__dirname + '/documentation.html');
    } else {
        fielPath = 'index.html';
    }

    fs.readFile(fielPath, (err, data) => {
        if(err) {
            throw err;
        }

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
    });

}).listen(8080);
console.log('The test server is running on port 880');

