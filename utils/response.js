exports.success = (res, data, message = null, status = 200) => {
	const payload = { success: true, data };
	if (message) payload.message = message;
	return res.status(status).json(payload);
};

exports.error = (res, message, status = 500) => {
	return res.status(status).json({
		success: false,
		error: {
			message,
			code: status
		}
	});
};
