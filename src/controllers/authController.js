const authService = require('../services/authService');
const response = require('../utils/response');

exports.login = async (req, res, next) => {
	try {
		const { email, senha } = req.body;
		const result = await authService.login(email, senha);
		return response.success(res, result, 'Login realizado com sucesso');
	} catch (err) {
		next(err);
	}
};

