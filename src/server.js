import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_HOST) {
	console.error("ERRO: Variáveis de ambiente não carregadas. Verifique o arquivo .env");
	process.exit(1);
}

const { default: app } = await import('./app.js');
const { testConnection } = await import('./database/db.js');

async function start(){

	await testConnection();

	app.listen(process.env.PORT || 3000, () => {
		console.log(`Servidor está rodando na porta ${process.env.PORT || 3000}`);
	});

}

start();
