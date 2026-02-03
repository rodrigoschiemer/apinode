module.exports = (user) => {
	const {
		SENHA,
		SENHA_TEMP,
		USUARIO_ID,
		USUARIO_IDH,
		...userSafe
	} = user;

	return userSafe;
};
