import { Request, Response } from 'express';
import ListAllTeamsUseCase from './ListAllTeamsUseCase';

export default class ListAllTeamsController {
  constructor(private _listAllTeamsUseCase: ListAllTeamsUseCase) {}

  handle = async (_request: Request, response: Response): Promise<Response> => {
    const teams = await this._listAllTeamsUseCase.execute();
    return response.status(200).json(teams);
  };
}
