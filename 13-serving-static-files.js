const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        //using fs module to read the html file in url
        const readStream = fs.createReadStream('./static/index.html');
        res.writeHead(200, {'Content-type': 'text/html'});
        readStream.pipe(res);
    }else if(req.url === '/json') {
        //using fs module to read the json file in url
        const readStream = fs.createReadStream('./static/example.json');
        res.writeHead(200, {'Content-type': 'application/json'});
        readStream.pipe(res);
    }else if(req.url === '/image') {
        //using fs module to read the image file in url
        const readStream = fs.createReadStream('./static/example.jpeg');
        res.writeHead(200, {'Content-type': 'image/png'});
        readStream.pipe(res);
    }
});

//host server on port 8000

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});