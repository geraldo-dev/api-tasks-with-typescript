import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export function zodErrorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof z.ZodError) {
    // Personalizar a resposta de erro
    const errors = error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));

    res.status(400).json({
      message: 'Erro de validação',
      errors,
    });
  } else {
    // Se não for um erro do Zod, passar para o próximo middleware de erro
    next(error);
  }
}

export function genericErrorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({ message: 'Erro interno no servidor' });
}