import { Request, Response, NextFunction } from 'express';
import { TaskModel, Task } from '../models/Task';
import { TaskSchema } from '../schemas/TaskSchema';


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

            const findTask  = await this.taskModel.findById(Number(req.params.id));
            if (findTask) {
                
                res.status(200).json(findTask);
            } else {
                
                res.status(404).json({msg: 'not find Task' });
            }
        } catch (error) {
            
            res.status(500).json({ error: 'Internal Server error' });
        }
    }

    async createTask(req: Request, res: Response): Promise<void>{
        try {
            
            const validateData = TaskSchema.parse(req.body);
            await this.taskModel.create(validateData);
            res.status(201).json({msg : 'created with success'});
        } catch (error) {
    
            res.status(500).json(error);
        }
    }

    async updateTask(req: Request, res: Response): Promise<void>{
        try {

            const validateData = TaskSchema.parse(req.body)
            const findTask = await this.taskModel.update(Number(req.params.id) ,validateData);
            if (findTask) {
                
                res.status(201).json({ message: 'Task updated successfully' });
            } else {

                res.status(404).json({  msg: 'not find Task' });
            }
        } catch (error) {
            
            res.status(500).json( error );
        }
    }

    async deleteTask(req: Request, res: Response): Promise<void>{
        try {

            const findTask = await this.taskModel.delete(Number(req.params.id));
            if (findTask) {

                res.status(200).json({  msg: 'Task deleted successfully' });
            } else {
                
                res.status(404).json({  msg: 'not find Task' });
            }
        } catch (error) {
            
            res.status(500).json({ error: 'Internal Server error' });
        }
    }
}