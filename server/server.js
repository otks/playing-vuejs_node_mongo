const http = require('http');
const Routes = require('./routes.js');

const routes = new Routes();

const server = http.createServer((req, resp) => {
	routes.processRoutes(req, resp);
}).listen(8080);