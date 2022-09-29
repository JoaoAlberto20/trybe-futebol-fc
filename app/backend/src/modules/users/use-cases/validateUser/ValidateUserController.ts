import { Request, Response } from 'express';
import ValidateUserUseCase from './ValidateUserUseCase';

export default class ValidateUserController {
  constructor(private _validateUserUseCase: ValidateUserUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.user;
    const role = await this._validateUserUseCase.execute(id);
    return response.status(200).json({ role });
  };
}
