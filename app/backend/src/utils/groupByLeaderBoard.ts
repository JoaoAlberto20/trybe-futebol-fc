import { IGroupByLeaderBoard } from '../modules/leaderBoardHome/dtos/IGroupByLeaderBoard';
import { ILeaderBoard } from '../modules/leaderBoardHome/dtos/ILeaderBoard';

export default class GroupByLeaderBoar {
  private _allLeaderBoards: ILeaderBoard[];
  constructor(private allLeaderBoards: ILeaderBoard[]) {
    this._allLeaderBoards = allLeaderBoards;
  }

  get groupByLeaderBoard(): IGroupByLeaderBoard[] {
    const filterLeaderBoardRepeat = this._allLeaderBoards
      .filter((leaderBoard, index, selfArray) => index === selfArray
        .findIndex((findIndexLeaderBoard) => findIndexLeaderBoard.name === leaderBoard.name));

    const leaderBoarGroup: IGroupByLeaderBoard[] = [];

    filterLeaderBoardRepeat.filter((leaderBoard) => {
      const data: ILeaderBoard[] = [];

      this._allLeaderBoards.filter((allLeaderBoard) => {
        if (allLeaderBoard.name === leaderBoard.name) {
          data.push(allLeaderBoard);
        }
        return null;
      });

      return leaderBoarGroup.push({ name: leaderBoard.name, leaderBoard: data });
    });

    return leaderBoarGroup;
  }
}
