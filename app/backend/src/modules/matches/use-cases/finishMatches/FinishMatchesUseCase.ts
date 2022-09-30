import { IMatchesRepository } from '../../repositories/IMatchesRepository';

export default class FinishMatchesUseCase {
  constructor(private _matchesRepository: IMatchesRepository) {}

  async execute(id: number): Promise<void> {
    await this._matchesRepository.finallyMatch(id);
  }
}
