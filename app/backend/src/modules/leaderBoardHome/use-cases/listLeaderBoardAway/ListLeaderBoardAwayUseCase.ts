import SortLeaderBoard from '../../../../utils/SortLeaderBoard';
import { ILeaderBoard } from '../../dtos/ILeaderBoard';
import LeaderBoardAway from '../../entities/LeaderBoardAway';
import { ILeaderBoardRepository } from '../../repositories/ILeaderBoardRepository';

export default class ListLeaderBoardAwayUseCase {
  constructor(private _leaderBoardRepository: ILeaderBoardRepository) {}

  async execute(): Promise<ILeaderBoard[]> {
    const matchesAway = await this._leaderBoardRepository.findAway();
    const data: ILeaderBoard[] = matchesAway.map(({ teamName, matches }) => {
      const result = new LeaderBoardAway(teamName, matches);
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
