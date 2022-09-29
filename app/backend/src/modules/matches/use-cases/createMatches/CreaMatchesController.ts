import { Request, Response } from 'express';
import CreaMatchesUseCase from './CreateMatchesUseCase';

export default class CreaMatchesController {
  constructor(private _createMatchesUseCase: CreaMatchesUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { homeTeam, awayTeam, awayTeamGoals, homeTeamGoals } = request.body;

    const matche = await this._createMatchesUseCase
      .execute({ homeTeam, awayTeam, awayTeamGoals, homeTeamGoals });

    return response.status(201).json(matche);
  };
}
