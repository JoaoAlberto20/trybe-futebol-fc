import { ILeaderBoard } from '../dtos/ILeaderBoard';

export default class LeaderBoardAll implements ILeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;

  constructor(name: string, private leaderBoardGrouped: ILeaderBoard[]) {
    this.name = name;
    this.totalGames = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.totalGames, 0);
    this.goalsFavor = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.goalsFavor, 0);
    this.goalsOwn = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.goalsOwn, 0);
    this.goalsBalance = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.goalsBalance, 0);
    this.totalPoints = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.totalPoints, 0);
    this.totalVictories = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.totalVictories, 0);
    this.totalDraws = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.totalDraws, 0);
    this.totalLosses = leaderBoardGrouped
      .reduce((prevState, leaderBoard) => prevState + leaderBoard.totalLosses, 0);
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  }
}
