import { Request, Response } from 'express';
import ListAllMatchesUseCase from './ListAllMatchesUseCase';

export default class ListAllMatchesController {
  constructor(private _listAllMatchesUseCase: ListAllMatchesUseCase) {}

  handle = async (_request: Request, response: Response): Promise<Response> => {
    const matches = await this._listAllMatchesUseCase.execute();
    return response.json(matches);
  };
}
