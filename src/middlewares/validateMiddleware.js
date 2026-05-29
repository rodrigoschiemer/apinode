import { ZodError } from 'zod';
import AppError from '../errors/AppError.js';

// Middleware genérico de validação — funciona com qualquer schema Zod
// Uso: validateBody(loginSchema), validateBody(createUserSchema), etc.
//
// Como funciona:
// 1. Recebe um schema Zod como parâmetro e retorna um middleware
// 2. O middleware chama schema.parse(req.body)
// 3. Se válido: substitui req.body pelos dados limpos/transformados (trim, toLowerCase, etc.)
// 4. Se inválido: formata os erros e passa para o errorMiddleware via next()

export function validateBody(schema) {
	return (req, res, next) => {
		try {

			// .parse() lança ZodError se os dados forem inválidos
			// Também aplica transformações definidas no schema (trim, toLowerCase...)
			// O resultado é um objeto limpo e seguro
			req.body = schema.parse(req.body);

			next();

		} catch (err) {

			if (err instanceof ZodError) {

				// Formata os erros do Zod em mensagens legíveis
				// err.errors é um array de { path, message } — um por campo inválido
				const messages = err.errors.map(e => {
					const field = e.path.join('.');         // ex: "email", "senha"
					return `${field}: ${e.message}`;        // ex: "email: Email inválido"
				});

				// Retorna 400 com todas as mensagens de erro encontradas
				return next(new AppError(messages.join(' | '), 400));
			}

			// Erro inesperado (não é de validação) — deixa o errorMiddleware tratar
			next(err);
		}
	};
}
