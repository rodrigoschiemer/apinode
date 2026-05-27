import * as userRepository from '../repositories/userRepository.js';
import userDTO from '../dtos/userDTO.js';
import AppError from '../errors/AppError.js';

export const create = async (data)=>{
	const existing = await userRepository.findByEmail(data.email);

	if(existing){
		throw new AppError("Usuário já existe",409);
	}

	const user = await userRepository.createUser(data);
	return userDTO(user);
};

export const findById = async (id)=>{
	const user = await userRepository.findById(id);

	if(!user){
		throw new AppError("Usuário não encontrado",404);
	}

	return userDTO(user);
};

export const findByEmail = async (email)=>{
	const user = await userRepository.findByEmail(email);

	if(!user){
		throw new AppError("Usuário não encontrado",404);
	}

	return userDTO(user);
};
