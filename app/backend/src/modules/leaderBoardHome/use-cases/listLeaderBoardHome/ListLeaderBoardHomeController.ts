import { Request, Response } from 'express';
import ListLeaderBoardHomeUseCase from './ListLeaderBoardHomeUseCase';

export default class ListLeaderBoardHomeController {
  constructor(private _LisLeaderBoardHomeUseCase: ListLeaderBoardHomeUseCase) {}

  handle = async (_request: Request, response: Response): Promise<Response> => {
    const matches = await this._LisLeaderBoardHomeUseCase.execute();
    return response.json(matches);
  };
}
