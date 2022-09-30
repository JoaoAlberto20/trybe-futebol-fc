import { IMatchesRepository, IRequestUpdate } from '../../repositories/IMatchesRepository';

export default class EditMatchesUseCase {
  constructor(private _matchesRepository: IMatchesRepository) {}

  async execute(id: number, { homeTeamGoals, awayTeamGoals }: IRequestUpdate): Promise<void> {
    await this._matchesRepository.updateMatch(id, { homeTeamGoals, awayTeamGoals });
  }
}
