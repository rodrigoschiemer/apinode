import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
   windowMs: 15 * 60 * 1000, // 15 minutos
   max: 5, // máximo 5 tentativas
   message: {
      success: false,
      error: {
         message: 'Muitas tentativas de login. Tente novamente mais tarde.',
         code: 429
      }
   },
   standardHeaders: true,
   legacyHeaders: false
});
