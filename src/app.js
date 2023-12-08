const http = require('http');
const getUsers = require('./modules/users');

const server = http.createServer((request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1');
  if (request.url === '/users') {
    response.status = 200;
    response.statusMessage = 'OK';
    response.header = 'Content-Type: application/json';
    response.write(getUsers());
    response.end();
    return;
  }
  if (url.searchParams.get('hello') === '') {
    response.status = 400;
    response.statusMessage = 'OK';
    response.header = 'Content-Type: text/html';
    response.write(`Enter a name`);
    response.end();
    return;
  }
  if (url.searchParams.get('hello') !== null) {
    response.status = 200;
    response.statusMessage = 'OK';
    response.header = 'Content-Type: text/html';
    response.write(`Hello ${url.searchParams.get('hello')}.`);
    response.end();
    return;
  }
  if (!url.searchParams.has('hello') && request.url !== '/') {
    response.status = 500;
    response.end();
    return;
  }
  response.status = 200;
  response.statusMessage = 'OK';
  response.header = 'Content-Type: text/plain';
  response.write('Hello, world!');
  response.end();
});

const port = process.env.PORT || 3003;
server.listen(port, () => {
  console.log(`Сервера запущен по адресу http://127.0.0.1 с портом ${port}`);
});
