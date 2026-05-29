import { z } from 'zod';

// Schema de login
// z.object() define a "forma" esperada do body da requisição
// Cada campo tem suas regras de validação encadeadas
export const loginSchema = z.object({

	email: z
		.string({ required_error: 'Email é obrigatório' })        // deve ser string
		.min(1, 'Email não pode ser vazio')                        // mínimo 1 caractere
		.max(100, 'Email muito longo')                             // máximo 100 caracteres
		.trim(),                                                   // remove espaços antes/depois
	// Nota: não usamos .email() aqui porque seu sistema usa matrícula como "email"
	// Se migrar para e-mail real, troque .min(1,...) por .email('Email inválido')

	senha: z
		.string({ required_error: 'Senha é obrigatória' })
		.min(1, 'Senha não pode ser vazia')
		.max(128, 'Senha muito longa'),                            // proteção contra payloads gigantes

});

// Schema de criação de usuário (para uso futuro)
export const createUserSchema = z.object({

	nome: z
		.string({ required_error: 'Nome é obrigatório' })
		.min(2, 'Nome deve ter ao menos 2 caracteres')
		.max(100, 'Nome muito longo')
		.trim(),

	email: z
		.string({ required_error: 'Email é obrigatório' })
		.email('Email inválido')
		.max(100, 'Email muito longo')
		.trim()
		.toLowerCase(),                                            // normaliza para minúsculo

	senha: z
		.string({ required_error: 'Senha é obrigatória' })
		.min(8, 'Senha deve ter ao menos 8 caracteres')
		.max(128, 'Senha muito longa'),

});
