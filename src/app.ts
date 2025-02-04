import express from 'express';
import { createTaskRoutes } from './routes/taskRoutes';
import { knex } from 'knex';

import { zodErrorHandler, genericErrorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

const knexConfig = require('../knexfile');
const knexInstance = knex(knexConfig.development);

app.use(express.json());

app.use('/api', createTaskRoutes(knexInstance));

app.use(zodErrorHandler);//erros de validação
app.use(genericErrorHandler);//erros internos


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});