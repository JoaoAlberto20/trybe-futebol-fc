import { Request, Response } from 'express';
import AuthenticateUserUserUseCase from './AuthenticateUserUserCase';

export default class AuthenticateController {
  constructor(
    private authenticateUserUserUseCase: AuthenticateUserUserUseCase,
  ) {}

  public handle = async (request: Request, response: Response): Promise<Response> => {
    const { email, password } = request.body;
    const token = await this.authenticateUserUserUseCase.execute({ email, password });
    return response.json({ token });
  };
}
