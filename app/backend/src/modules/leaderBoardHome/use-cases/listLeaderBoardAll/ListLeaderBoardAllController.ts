import { Request, Response } from 'express';
import ListLeaderBoardAllUseCase from './ListLeaderBoardAllUseCase';

export default class ListLeaderBoardAllController {
  constructor(private _listLeaderBoardAllUseCase: ListLeaderBoardAllUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const leaderBoard = await this._listLeaderBoardAllUseCase.execute();
    return response.json(leaderBoard);
  };
}
