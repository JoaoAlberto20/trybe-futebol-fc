import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../config/token';
import AppError from '../error/AppError';

export default async function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction,
) {
  try {
    const token = request.headers.authorization;
    if (!token || token.length === 0) throw new AppError('Token not found', 401);
    const { id, email } = verifyToken(token);
    request.user = { id, email };
    return next();
  } catch (err) {
    console.log(err);
    throw new AppError('Token must be a valid token', 401);
  }
}
