const http = require('http');
const server = http.createServer((req, res) => {
//if hoempage write Hello world 
  if(req.url === '/') {
    res.write('Hello World');
    res.end();
  } else {
    res.write('Using some other domain');
    res.end();
  }
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});