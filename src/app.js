import express from 'express';
import helmet from 'helmet';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
//import { success } from './utils/response.js';

const app = express();

// O Helmet é um middleware de segurança para Express. Ele ajuda a proteger a aplicação contra algumas vulnerabilidades comuns, 
// configurando cabeçalhos HTTP de segurança. Ele é recomendado para qualquer aplicação web, pois adiciona uma camada extra de 
// proteção contra ataques como Cross-Site Scripting (XSS), Clickjacking, MIME sniffing, Vazamento de referrer, Vazamento de tecnologia
// HTTPS downgrade, entre outros.
app.use(helmet());

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
