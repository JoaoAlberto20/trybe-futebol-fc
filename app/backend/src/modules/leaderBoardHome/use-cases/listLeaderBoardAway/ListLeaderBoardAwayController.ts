import { Request, Response } from 'express';
import ListLeaderBoardAwayUseCase from './ListLeaderBoardAwayUseCase';

export default class ListLeaderBoardAwayController {
  constructor(private _listLeaderBoardAwayUseCase: ListLeaderBoardAwayUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const leaderBoard = await this._listLeaderBoardAwayUseCase.execute();
    return response.json(leaderBoard);
  };
}
