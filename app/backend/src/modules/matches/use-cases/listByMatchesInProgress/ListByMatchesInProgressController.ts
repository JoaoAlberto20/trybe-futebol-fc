import { Request, Response } from 'express';
import ListByMatchesInProgressUseCase from './ListByMatchesInProgressUseCase';

export default class ListByMatchesInProgressController {
  constructor(private _listAllMatchesUseCase: ListByMatchesInProgressUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { inProgress } = request.query;
    const matches = await this._listAllMatchesUseCase.execute(inProgress === 'true');
    return response.json(matches);
  };
}
