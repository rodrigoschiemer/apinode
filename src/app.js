import express from 'express';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import { success } from './utils/response.js';

const app = express();

app.use(express.json());
app.use(routes);

app.use((req,res)=>{
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
