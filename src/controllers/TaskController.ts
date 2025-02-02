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
}