require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,

	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});


// Teste controlado (não automático)
async function testConnection(){
	try{

		const conn = await pool.getConnection();

		console.log("MySQL conectado com sucesso!");

		conn.release();

	}catch(err){

		console.error("ERRO AO CONECTAR NO MYSQL");
		console.error(err);

		process.exit(1); // mata a API
	}
}

async function query(sql, params = []) {
   const [rows] = await pool.execute(sql, params);
   return rows;
}


async function execute(sql, params = []) {
	const [result] = await pool.execute(sql, params);
	return result;
}

module.exports = {pool, query, execute, testConnection};
