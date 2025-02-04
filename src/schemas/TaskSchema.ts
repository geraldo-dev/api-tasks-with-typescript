import { z } from "zod";


export const TaskSchema = z.object({

    title: z.string({
        required_error: 'O campo "title" é obrigatório',
        invalid_type_error: 'O campo "title" deve ser uma string',
      }).min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),

    description: z.string({
        required_error: 'O campo "description" é obrigatório',
        invalid_type_error: 'O campo "description" deve ser uma string',
      }).min(1, { message: 'O nome deve ter pelo menos 1 caracteres' }).max(300),

    completed: z.boolean({
      invalid_type_error: 'O campo "completed" deve ser uma boolean',
    }).default(true).optional()

});


export type TaskInput = z.infer<typeof TaskSchema>;
