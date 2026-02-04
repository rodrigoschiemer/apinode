const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const AppError = require('../errors/AppError');

exports.login = async (email, senha) => {

	const user = await userRepository.findByEmail(email);

	if (!user) {
		throw new AppError('Credenciais inválidas', 401);
	}

	const senhaValida = await bcrypt.compare(senha, user.SENHA);

	if (!senhaValida) {
		throw new AppError('Credenciais inválidas', 401);
	}

	const token = jwt.sign(
		{
			id: user.USUARIO_ID,
			email: user.EMAIL
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRES_IN
		}
	);

	return { token };

};
