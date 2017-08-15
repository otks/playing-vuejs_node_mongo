const fs = require('fs');

module.exports = class Routes
{
	processRoutes(req, resp) {
		if(req.method === "GET" && req.url === "/test") {
			let file = fs.readFileSync('C:\\_neard\\www\\mio\\playing-vuejs_node_mongo\\viewTest.html');

			resp.writeHead(200, {
				'Content-Type': 'text/html',
				'X-Powered-By': 'bacon'
			});
			resp.write(file);
			resp.end();
		}
	}
};
