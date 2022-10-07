import SortMatches from '../../../../utils/SortMatches';
import { ILeaderBoard } from '../../dtos/ILeaderBoard';
import LeaderBoard from '../../entities/LeaderBoard';
import { ILeaderBoardRepository } from '../../repositories/ILeaderBoardRepository';

export default class ListLeaderBoardHomeUseCase {
  constructor(private _matchesRepository: ILeaderBoardRepository) {}
  async execute(): Promise<ILeaderBoard[]> {
    const matches = await this._matchesRepository.findAllHome();

    const data: ILeaderBoard[] = matches.map(({ teamName, matchesHome }) => {
      const result = new LeaderBoard(teamName, matchesHome);
      return {
        name: result.name,
        totalPoints: result.totalPoints,
        totalGames: result.totalGames,
        totalVictories: result.totalVictories,
        totalDraws: result.totalDraws,
        totalLosses: result.totalLosses,
        goalsFavor: result.goalsFavor,
        goalsOwn: result.goalsOwn,
        goalsBalance: result.goalsBalance,
        efficiency: result.efficiency,
      };
    });
    const leaderBoard = SortMatches(data);
    return leaderBoard;
  }
}
