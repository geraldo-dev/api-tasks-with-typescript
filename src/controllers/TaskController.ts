import { Request, Response } from 'express';
import { TaskModel, Task } from '../models/Task';


export class Taskcontroller {
    constructor(private readonly taskModel: TaskModel){}

    async getAllTasks(req: Request, res: Response): Promise<void>{
        try {

            const tasks = await this.taskModel.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            
            res.status(500).json({ error: 'Internal Server error' });
        }
    }
    
    async getTaskById(req: Request, res: Response): Promise<void>{
        try {

            const task = await this.taskModel.findById(Number(req.params.id));
            res.status(200).json(task);
        } catch (error) {
            
            res.status(500).json({ error: 'Internal Server error' });
        }
    }

    async createTask(req: Request, res: Response): Promise<void>{
        try {

            const newTasks: Task = req.body;
            const taskId = await this.taskModel.create(newTasks);
            res.status(201).json(taskId);
        } catch (error) {
            
            res.status(500).json({ error: 'Internal Server error' });
        }
    }
}