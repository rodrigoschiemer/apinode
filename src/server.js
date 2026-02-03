const app = require('./app');

const { testConnection } = require('./database/db');

async function start(){

	await testConnection();

	app.listen(3000, () => {
		console.log("Server running...");
	});

}

start();
