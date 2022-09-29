import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../config/token';
import AppError from '../error/AppError';
import UsersRepository from '../modules/users/repositories/implementations/UsersRepository';

interface IPayload {
  email: string
  id: number
}

export default async function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Token missing', 401);
  const [, token] = authHeader.split(' ');
  try {
    const { id, email } = verifyToken(token) as unknown as IPayload;
    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(id);
    if (!user) throw new AppError('User does not exist!', 401);
    request.user = { id, email };
    next();
  } catch (err) {
    throw new AppError('Invalid token', 401);
  }
}
