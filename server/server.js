const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../assets')));
app.use(express.static(path.join(__dirname, '/../views')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../views', 'app.html'));
});

app.listen(8080, function() {
	console.log('listening on 8080');
});