import * as authService from '../services/authService.js';
import { success } from '../utils/response.js';

export const login = async (req, res, next) => {
	try {
		const { email, senha } = req.body;
		const result = await authService.login(email, senha);
		return success(res, result, 'Login realizado com sucesso');
	} catch (err) {
		next(err);
	}
};
