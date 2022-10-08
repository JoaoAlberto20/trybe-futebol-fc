import SortMatches from '../../../../utils/SortMatches';
import { ILeaderBoard } from '../../dtos/ILeaderBoard';
import LeaderBoardAway from '../../entities/LeaderBoardAway';
import { ILeaderBoardRepository } from '../../repositories/ILeaderBoardRepository';

export default class ListLeaderBoardAwayUseCase {
  constructor(private _leaderBoardRepository: ILeaderBoardRepository) {}

  async execute(): Promise<ILeaderBoard[]> {
    const matches = await this._leaderBoardRepository.findAllAway();

    const data: ILeaderBoard[] = matches.map(({ teamName, matchesAway }) => {
      const result = new LeaderBoardAway(teamName, matchesAway);
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
