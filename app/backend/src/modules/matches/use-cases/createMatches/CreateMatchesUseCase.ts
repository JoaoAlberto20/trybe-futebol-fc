import { IMatches } from '../../dtos/IMatches';
import { IMatchesRepository, IRequest } from '../../repositories/IMatchesRepository';

export default class CreaMatchesUseCase {
  constructor(private _matchesRepository: IMatchesRepository) {}

  async execute({
    homeTeam,
    awayTeam,
    awayTeamGoals,
    homeTeamGoals,
  } :IRequest): Promise<IMatches> {
    const match = await this._matchesRepository.create(
      {
        homeTeam,
        awayTeam,
        awayTeamGoals,
        homeTeamGoals,
      },
    );

    return match;
  }
}
