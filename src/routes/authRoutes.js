import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import { loginLimiter } from '../middlewares/rateLimitMiddleware.js';

const router = Router();

router.post('/login', loginLimiter, authController.login);

export default router;
