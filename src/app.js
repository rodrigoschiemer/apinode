const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(routes);

app.use((req,res)=>{
   res.status(404).json({
      error:true,
      message:"Route not found"
   });
});

// middleware de erro SEMPRE por último
app.use(errorMiddleware);

module.exports = app;
