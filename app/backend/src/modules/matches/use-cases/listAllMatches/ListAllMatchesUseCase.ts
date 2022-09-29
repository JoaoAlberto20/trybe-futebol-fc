import { IMatches } from '../../dtos/IMatches';
import { IMatchesRepository } from '../../repositories/IMatchesRepository';

export default class ListAllMatchesUseCase {
  constructor(private _matchesRepository: IMatchesRepository) {}

  async execute(): Promise<IMatches[]> {
    const matches = await this._matchesRepository.findAll();
    return matches;
  }
}
