import * as userService from '../services/userService.js';
import { success } from '../utils/response.js';

export const create = async (req,res,next)=>{
	try{
		const user = await userService.create(req.body);
		res.status(201).json(user);
	}catch(err){
		next(err);
	}
};

export const findById = async (req,res,next)=>{
	try{
		const user = await userService.findById(req.params.id);
		return success(res, user);
	}catch(err){
		next(err);
	}
};

export const findByEmail = async (req,res,next)=>{
	try{
		const user = await userService.findByEmail(req.params.email);
		return success(res, user);
	}catch(err){
		next(err);
	}
};
