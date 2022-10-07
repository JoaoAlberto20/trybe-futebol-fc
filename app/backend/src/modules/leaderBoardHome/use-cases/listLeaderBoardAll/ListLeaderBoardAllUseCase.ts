import { ILeaderBoardRepository } from '../../repositories/ILeaderBoardRepository';

export default class ListLeaderBoardAllUseCase {
  constructor(private _leaderBoardRepository: ILeaderBoardRepository) {}

  async execute(): Promise<void> {
    const matchesHome = await this._leaderBoardRepository.findAllHome();
    console.log(matchesHome);
  }
}
