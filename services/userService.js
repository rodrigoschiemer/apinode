const userRepository = require('../repositories/userRepository');
const UserDTO = require('../dtos/userDTO');
const AppError = require('../errors/AppError');

exports.create = async (data)=>{
	const existing = await userRepository.findByEmail(data.email);

	if(existing){
		throw new AppError("User already exists",409);
	}

	const user = await userRepository.create(data);
	return UserDTO(user);
};

exports.findById = async (id)=>{
	const user = await userRepository.findById(id);

	if(!user){
		throw new AppError("User not found",404);
	}

	return UserDTO(user);
};

exports.findByEmail = async (email)=>{
	const user = await userRepository.findByEmail(email);

	if(!user){
		throw new AppError("Usuário não encontrado",404);
	}

	return UserDTO(user);
};
