import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import { loginLimiter } from '../middlewares/rateLimitMiddleware.js';
import { validateBody } from '../middlewares/validateMiddleware.js';
import { loginSchema } from '../validators/authSchemas.js';

const router = Router();

// Fluxo da requisição:
// 1. loginLimiter   → bloqueia após 5 tentativas em 15 min (proteção brute force)
// 2. validateBody   → valida e sanitiza email e senha (proteção contra dados malformados)
// 3. authController → processa o login com dados já validados e limpos
router.post('/login', loginLimiter, validateBody(loginSchema), authController.login);

export default router;
