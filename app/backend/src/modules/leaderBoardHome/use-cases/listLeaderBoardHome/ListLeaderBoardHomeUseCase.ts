import SortLeaderBoard from '../../../../utils/SortLeaderBoard';
import { ILeaderBoard } from '../../dtos/ILeaderBoard';
import LeaderBoardHome from '../../entities/LeaderBoardHome';
import { ILeaderBoardRepository } from '../../repositories/ILeaderBoardRepository';

export default class ListLeaderBoardHomeUseCase {
  constructor(private _matchesRepository: ILeaderBoardRepository) {}
  async execute(): Promise<ILeaderBoard[]> {
    const matchesHome = await this._matchesRepository.findHome();
    const data: ILeaderBoard[] = matchesHome.map(({ teamName, matches }) => {
      const result = new LeaderBoardHome(teamName, matches);
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
    const leaderBoard = SortLeaderBoard(data);
    return leaderBoard;
  }
}
