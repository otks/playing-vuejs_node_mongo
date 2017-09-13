module.exports = {
	routes: function (app) {
		const {Database, aql} = require('arangojs');
		const db = new Database({
			url: 'http://vuejs:teste12345@127.0.0.1:8529',
			databaseName: 'playing_vue'
		},(err) => {
			if (!err) console.log('Database created');
			else console.error('Failed to create database:', err);
		});

		const bodyParser = require('body-parser');
		app.use(bodyParser.json()); // for parsing application/json
		app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

		/* FILE UPLOAD
		const multer = require('multer'); // v1.0.5
		const upload = multer(); // for parsing multipart/form-data

		app.post('/profile', upload.array(), function (req, res, next) {
			console.log(req.body);
			res.json(req.body);
		});
		*/

// Simple routes
		app.post('/loginAuth', (req, res) => {
			const params = req.body;
			const user = params.user;
			const pass = params.password;

			db.query('' +
				'FOR user IN Users ' +
				'FILTER user.login == "' + user +'" && user.password == "' + pass + '" ' +
				'RETURN user ',
			(err, cursor) => {
				if (!err) {
					if (!cursor.hasNext()) {
						console.log('erro1');
						res.status(200).json({ msg: 'Login ou senha incorreto', correct: false });
					} else {
						console.log('erro2');
						res.status(200).json({ msg: 'Login feito com sucesso', correct: true });
					}
				} else {
					console.log('' +
						'FOR user IN Users' +
						'FILTER user.login == "' + user +'" && user.password == "' + pass + '"' +
						'RETURN user');
					res.status(500).json({ msg: 'Falha no servidor', correct: false });
				}
			});
		});
	}
};
