import GroupByLeaderBoar from '../../../../utils/groupByLeaderBoard';
import SortLeaderBoard from '../../../../utils/SortLeaderBoard';
import LeaderBoardAll from '../../entities/LeaderBoardAll';
import ListLeaderBoardAwayUseCase from '../listLeaderBoardAway/ListLeaderBoardAwayUseCase';
import ListLeaderBoardHomeUseCase from '../listLeaderBoardHome/ListLeaderBoardHomeUseCase';

export default class ListLeaderBoardAllUseCase {
  constructor(
    protected _leaderBoardAwayUseCase: ListLeaderBoardAwayUseCase,
    protected _leaderBoardHomeUseCase: ListLeaderBoardHomeUseCase,
  ) {}

  async execute(): Promise<any> {
    const leaderBoardHome = await this._leaderBoardHomeUseCase.execute();
    const leaderBoardAway = await this._leaderBoardAwayUseCase.execute();

    const allLeaderBoards = [...leaderBoardAway, ...leaderBoardHome];

    const { groupByLeaderBoard } = new GroupByLeaderBoar(allLeaderBoards);

    const finalLeaderBoard = groupByLeaderBoard.map(({ name, leaderBoard }) => {
      const result = new LeaderBoardAll(name, leaderBoard);
      return result;
    });

    const sortLeaderBoard = SortLeaderBoard(finalLeaderBoard);

    return sortLeaderBoard;
  }
}
