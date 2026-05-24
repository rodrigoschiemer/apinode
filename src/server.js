import app from './app.js';

import { testConnection } from './database/db.js';

async function start(){

	await testConnection();

	app.listen(process.env.PORT || 3000, () => {
		console.log(`Server running on port ${process.env.PORT || 3000}`);
	});

}

start();
