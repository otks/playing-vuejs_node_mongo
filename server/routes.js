const fs = require('fs');

module.exports = class Routes
{
	processRoutes(req, resp) {
		if(req.method === "GET" && req.url === "/test") {
			this._routeTestGet(req, resp);
		} else if(req.method === "GET" && (req.url === "/" || req.url === '/login')) {
			this._routeLoginGet(req, resp);
		}
	}
	_routeTestGet(req, resp) {
		let file = fs.readFileSync('C:\\_neard\\www\\mio\\playing-vuejs_node_mongo\\views\\viewTest.html');

		resp.writeHead(200, {
			'Content-Type': 'text/html',
			'X-Powered-By': 'bacon'
		});
		resp.write(file);
		resp.end();
	}
	_routeLoginGet(req, resp) {
		let file = fs.readFileSync('C:\\_neard\\www\\mio\\playing-vuejs_node_mongo\\views\\viewTest.html');

		resp.writeHead(200, {
			'Content-Type': 'text/html'
		});
		resp.write(file);
		resp.end();
	}
};
