import path from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Não concatenar o caminho, pois pode ser diferente em cada ambiente (Windows, Linux, etc)
// Usamos path.resolve para garantir que o caminho seja correto, independente do sistema operacional
dotenv.config({
	path: path.resolve(__dirname, '../../.env')
});

export const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

// Teste controlado (não automático)
export async function testConnection(){
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

export async function query(sql, params = []) {
   const [rows] = await pool.execute(sql, params);
   return rows;
}

export async function execute(sql, params = []) {
	const [result] = await pool.execute(sql, params);
	return result;
}
