import { Knex } from "knex";


export interface Task {
    id?: number;
    title: string;
    description?: string;
    completed?: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export class TaskModel {
    constructor(private readonly knex: Knex){}

    async findAll(): Promise<Task[]> {
        return this.knex('tasks').select('*');
    }

    async findById(id: number): Promise<Task[]> {
        return this.knex('tasks').where({id}).first();
    }

    async create(task: Task): Promise<number> {
        const [id] = await this.knex('tasks').insert(task);
        return id;
    }
}