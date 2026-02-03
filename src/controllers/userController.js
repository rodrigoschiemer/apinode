const userService = require('../services/userService');
const response = require('../utils/response');

exports.create = async (req,res,next)=>{
	try{
		const user = await userService.create(req.body);
		res.status(201).json(user);
	}catch(err){
		next(err);
	}
};

exports.findById = async (req,res,next)=>{
	try{
		const user = await userService.findById(req.params.id);
		return response.success(res, user);
	}catch(err){
		next(err);
	}
};

exports.findByEmail = async (req,res,next)=>{
	try{
		const user = await userService.findByEmail(req.params.email);
		return response.success(res, user);
	}catch(err){
		next(err);
	}
};
