import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

//router.post('/', userController.create);
//router.get('/id/:id', userController.findById);
router.get('/email/:email', userController.findByEmail);
router.get('/id/:id', authMiddleware, userController.findById);

export default router;
