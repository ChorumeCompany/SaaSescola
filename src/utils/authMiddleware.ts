import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Acesso negado! Token não fornecido.' });
  }

  try {
    const secret = process.env.SECRET;
    const decoded = jwt.verify(token, secret);
    (req as Request & { user?: unknown }).user = decoded;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: 'Token inválido ou expirado.', error });
  }
};
