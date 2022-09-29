import { Request, Response } from 'express';
import GetTeamUseCase from './GetTeamUseCase';

export default class GetTeamController {
  constructor(private _getTeamUseCase: GetTeamUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    const team = await this._getTeamUseCase.execute(id as unknown as number);
    return response.status(200).json(team);
  };
}
