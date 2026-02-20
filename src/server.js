const app = require('./app');

const { testConnection } = require('./database/db');

async function start(){

	await testConnection();

	app.listen(process.env.PORT, () => {
		console.log("Server running...");
	});

}

start();

