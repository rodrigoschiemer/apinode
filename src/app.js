import helmet from 'helmet';
import cors from 'cors';
//import morgan from 'morgan';
import express from 'express';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
//import { success } from './utils/response.js';

const app = express();

// O Helmet é um middleware de segurança para Express. Ele ajuda a proteger a aplicação contra algumas vulnerabilidades comuns, 
// configurando cabeçalhos HTTP de segurança. Ele é recomendado para qualquer aplicação web, pois adiciona uma camada extra de 
// proteção contra ataques como Cross-Site Scripting (XSS), Clickjacking, MIME sniffing, Vazamento de referrer, Vazamento de tecnologia
// HTTPS downgrade, entre outros.
app.use(helmet());

// O cors é um middleware que permite controlar o acesso a recursos entre diferentes domínios.
// Ele é necessário quando a aplicação frontend e backend estão em domínios diferentes, ou seja, quando a aplicação frontend faz 
// requisições para a API backend que está hospedada em um domínio diferente. O CORS (Cross-Origin Resource Sharing) é uma política de 
// segurança implementada pelos navegadores para restringir o acesso a recursos entre diferentes origens (domínios). O CORS é necessário 
// para permitir que a aplicação frontend acesse os recursos da API backend, caso contrário, o navegador bloquearia as requisições por 
// questões de segurança. O middleware CORS pode ser configurado para permitir ou restringir o acesso a recursos específicos, dependendo 
// das necessidades da aplicação.
// O que o CORS faz?
// Ele adiciona headers (cabeçalhos) HTTP dizendo: "Eu autorizo que esta aplicação frontend acesse os recursos da minha API backend".
// Libera TODOS os domínios:
app.use(cors());
// Libera SOMENTE os domínios especificados:
/*app.use(cors({
	origin: ['http://localhost:80', 'http://localhost:3000', 'http://localhost:5173', 'http://localhost:8080', 'https://meusite.com']
}));*/

// Ele é um parser de JSON do body: pega o corpo da requisição (body) e transforma o json que vem do cliente
// em um objeto JavaScript, para que seja possível acessar os dados através de req.body
app.use(express.json());

app.use(routes);

app.use((req, res)=>{
	res.status(404).json({
		success:false,
		error: {
			message: "Route not found",
			code: 404
		}
	});
});

// middleware de erro SEMPRE por último
app.use(errorMiddleware);

export default app;
