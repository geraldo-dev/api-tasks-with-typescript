import { Router } from 'express';
import { Taskcontroller } from '../controllers/TaskController';
import { TaskModel } from '../models/Task';
import { Knex } from 'knex';

export function createTaskRoutes(knex: Knex): Router {
    const router = Router();
    const taskModel = new TaskModel(knex);
    const taskController = new Taskcontroller(taskModel);

    router.get('/tasks', (req, res)=> taskController.getAllTasks(req, res));

    return router;
}