import express from 'express';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
//import { success } from './utils/response.js';

const app = express();

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
