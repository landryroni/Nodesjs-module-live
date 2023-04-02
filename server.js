
const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world!\n');
});

server.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});