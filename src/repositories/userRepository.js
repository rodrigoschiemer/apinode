const db = require('../database/db');

exports.createUser = async (user)=>{
	const sql = `INSERT INTO usuarios (NOME_USUARIO, EMAIL, SENHA_TEMP) VALUES (?, ?, ?)`;

	const result = await db.execute(sql, [user.name, user.email, user.password]);

	return {
		id: result.insertId,
		...user
	};
};

exports.findByEmail = async (email)=>{
	const rows = await db.query(`SELECT * FROM usuarios WHERE EMAIL = ?`, [email]);
	return rows[0];
};

exports.findById = async (id)=>{
	const rows = await db.query(`SELECT * FROM usuarios WHERE USUARIO_ID = ?`, [id]);
	return rows[0];
};

