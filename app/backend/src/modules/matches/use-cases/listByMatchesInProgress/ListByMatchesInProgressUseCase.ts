import { IMatches } from '../../dtos/IMatches';
import { IMatchesRepository } from '../../repositories/IMatchesRepository';

export default class ListByMatchesInProgressUseCase {
  constructor(private _matchesRepository: IMatchesRepository) {}

  async execute(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this._matchesRepository.findByInProgress(inProgress);
    return matches;
  }
}
