import AppError from '../../../../error/AppError';
import { IMatches } from '../../dtos/IMatches';
import Matches from '../../entities/Matches';
import { IMatchesRepository, IRequest } from '../../repositories/IMatchesRepository';
import { ITeamsRepository } from '../../repositories/ITeamsRepository';

export default class CreaMatchesUseCase {
  constructor(
    private _matchesRepository: IMatchesRepository,
    private _teamsRepository: ITeamsRepository,
  ) {}

  async execute({
    homeTeam,
    awayTeam,
    awayTeamGoals,
    homeTeamGoals,
  } :IRequest): Promise<IMatches> {
    const match = new Matches(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);

    const teams = await this._teamsRepository.findTeams(match.homeTeam, match.awayTeam);

    if (teams.length < 2) throw new AppError('There is no team with such id!', 404);

    const createMatch = await this._matchesRepository.create(match);

    return createMatch;
  }
}
