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
}