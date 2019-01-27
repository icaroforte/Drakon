var mongoose = require('mongoose');

module.exports = function(uri) {
	mongoose.connect(uri,
		{
			useNewUrlParser: true,
		  	poolSize: 15
		}
	);

	mongoose.connection.on('connected', () => {
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose! Desconectado de ' + uri);
	});

	mongoose.connection.on('error', (erro) => {
		console.log('Mongoose! Erro na conexão: ' + erro);
	});

	mongoose.set('debug', true);

	process.on('SIGINT', () => {
		mongoose.connection.close(() => {
			console.log('Mongoose! Desconectado pelo término da aplicação');

			process.exit(0);
		});

	});
}
