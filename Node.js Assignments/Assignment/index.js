const http = require('http');

const routes = require('../Assignment/routes');

const server = http.createServer(routes);

server.listen(6000);