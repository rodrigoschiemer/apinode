import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/userRepository.js';
import AppError from '../errors/AppError.js';

export const login = async (email, senha) => {

	const user = await userRepository.findByEmail(email);

	if (!user) {
		throw new AppError('Credenciais inválidas', 401);
	}

	const senhaValida = await bcrypt.compare(senha, user.SENHA_TEMP);

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
