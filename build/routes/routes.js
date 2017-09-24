module.exports = {
	routes: function (app) {
		const {Database, aql} = require('arangojs');
		const db = new Database({
			url: 'http://playground:123456@127.0.0.1:8529',
			databaseName: 'superPlay'
		}, (err) => {
			if (!err) console.log('Database created');
			else console.error('Failed to create database:', err);
		});

		const bodyParser = require('body-parser');
		app.use(bodyParser.json()); // for parsing application/json
		app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

		const path = require('path');

		/* FILE UPLOAD
		const multer = require('multer'); // v1.0.5
		const upload = multer(); // for parsing multipart/form-data

		app.post('/profile', upload.array(), function (req, res, next) {
			console.log(req.body);
			res.json(req.body);
		});
		*/
		app.get('/', (req, res) => {
			console.error('entrei aqui');
			res.sendFile(path.join('@', '..', '/index.html'));
		});

		app.post('/loginAuth', (req, res) => {
			const params = req.body;
			const user = params.user;
			const pass = params.password;

			db.query(
				'' +
				'FOR user IN Users ' +
				'FILTER user.user == "' + user + '" && user.password == "' + pass + '" && user.isAdmin == "y" ' +
				'RETURN user ',
				(err, cursor) => {
					if (!err) {
						if (!cursor.hasNext()) {
							res.status(200).json({msg: 'Login ou senha incorreto', correct: false});
						} else {
							res.status(200).json({msg: 'Login feito com sucesso', correct: true});
						}
					} else {
						console.log('' +
							'FOR user IN Users' +
							'FILTER user.user == "' + user + '" && user.password == "' + pass + '" && user.isAdmin == "y" ' +
							'RETURN user');
						res.status(500).json({msg: 'Falha no servidor', correct: false, error: err.message});
					}
				}
			);
		});
	}
};
