import app from './app.js';

import { testConnection } from './database/db.js';

async function start(){

	await testConnection();

	app.listen(process.env.PORT, () => {
		console.log("Server running...");
	});

}

start();
