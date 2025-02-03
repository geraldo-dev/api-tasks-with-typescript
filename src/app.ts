import express from 'express';
import { createTaskRoutes } from './routes/taskRoutes';
import { Knex, knex } from 'knex';
import { TaskModel } from './models/Task';

const app = express();
const PORT = process.env.PORT || 3000;

const knexConfig = require('../knexfile');
const knexInstance = knex(knexConfig.development);

app.use(express.json());

app.use('/api', createTaskRoutes(knexInstance));

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});