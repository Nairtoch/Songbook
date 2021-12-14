import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, {'Content.type': 'text/html;charset=utf-8'});
    response.write('Hey Nat! ');
    response.write('Happy new year!');
    response.end();
}).listen(4000);