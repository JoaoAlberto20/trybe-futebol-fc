import { Request, Response } from 'express';
import EditMatchesUseCase from './EditMatches.UseCase';

export default class EditMatchesController {
  constructor(private _editMatchesUseCase: EditMatchesUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    const { homeTeamGoals, awayTeamGoals } = request.body;

    await this._editMatchesUseCase.execute(
      id as unknown as number,
      { homeTeamGoals, awayTeamGoals },
    );

    return response.status(200).json({ message: 'Update finish!' });
  };
}
