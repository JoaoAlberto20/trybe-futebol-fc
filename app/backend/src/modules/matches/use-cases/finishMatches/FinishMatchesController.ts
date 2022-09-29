import { Request, Response } from 'express';
import FinishMatchesUseCase from './FinishMatchesUseCase';

export default class FinishMatchesController {
  constructor(private _finishMatchesUseCase: FinishMatchesUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    await this._finishMatchesUseCase.execute(id as unknown as number);
    return response.json({ message: 'Finished' });
  };
}
