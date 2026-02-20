const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

module.exports = (req, res, next) => {

	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AppError('Token não fornecido', 401);
	}

	const [, token] = authHeader.split(' ');

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded; // id, email
		next();
	} catch (err) {
		throw new AppError('Token inválido ou expirado', 401);
	}

};

