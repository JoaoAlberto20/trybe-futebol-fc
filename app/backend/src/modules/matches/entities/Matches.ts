import AppError from '../../../error/AppError';
import { IMatches } from '../dtos/IMatches';

export default class Matches implements IMatches {
  private _homeTeam: number;
  private _homeTeamGoals: number;
  private _awayTeam: number;
  private _awayTeamGoals: number;

  constructor(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    this._homeTeam = homeTeam;
    this._awayTeam = awayTeam;
    this._homeTeamGoals = homeTeamGoals;
    this._awayTeamGoals = awayTeamGoals;
    this.validateWithTeamsEquals();
  }

  validateWithTeamsEquals(): void {
    const teamHome = this._homeTeam;
    const awayTeam = this._awayTeam;

    if (teamHome === awayTeam) {
      throw new AppError('It is not possible to create a match with two equal teams', 401);
    }
  }

  get homeTeam(): number { return this._homeTeam; }
  get homeTeamGoals(): number { return this._homeTeamGoals; }
  get awayTeam(): number { return this._awayTeam; }
  get awayTeamGoals(): number { return this._awayTeamGoals; }
}
