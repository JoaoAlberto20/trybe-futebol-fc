import { Request, Response } from 'express';
import ValidateUserUseCase from './ValidateUserUseCase';

export default class ValidateUserController {
  constructor(private _validateUserUseCase: ValidateUserUseCase) {}

  handle = async (request: Request, response: Response): Promise<void> => {
    const { id, email } = request.user;
    console.log(email);
    const role = await this._validateUserUseCase.execute(id);
    response.status(201).json({ role });
  };
}
