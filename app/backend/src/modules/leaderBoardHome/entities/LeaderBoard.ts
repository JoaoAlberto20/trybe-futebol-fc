/* eslint-disable class-methods-use-this */
import { ILeaderBoard } from '../dtos/ILeaderBoard';
import { IMatches } from '../dtos/IMatches';

export default class LeaderBoard implements ILeaderBoard {
  private _name: string;
  private _totalPoints: number;
  private _totalGames: number;
  private _totalVictories: number;
  private _totalDraws: number;
  private _totalLosses: number;
  private _goalsFavor: number;
  private _goalsOwn: number;
  private _goalsBalance: number;
  private _efficiency: number;

  constructor(teamName: string, matches: IMatches[]) {
    this._name = teamName;
    this._totalPoints = this.points(matches);
    this._totalGames = this.games(matches);
    this._totalVictories = this.victories(matches);
    this._totalDraws = this.draws(matches);
    this._totalLosses = this.loses(matches);
    this._goalsFavor = this.goalsScored(matches);
    this._goalsOwn = this.goalsAgain(matches);
    this._goalsBalance = this.balanceGols();
    this._efficiency = this.golsEfficiency();
  }

  private points(matches: IMatches[]): number {
    const points = matches
      .reduce((acc, match) => {
        if (match.homeTeamGoals > match.awayTeamGoals) {
          return acc + 3;
        }
        if (match.homeTeamGoals === match.awayTeamGoals) {
          return acc + 1;
        }
        if (match.homeTeamGoals < match.awayTeamGoals) {
          return acc + 3;
        }
        return acc;
      }, 0);
    return points;
  }

  private games(matches: IMatches[]): number {
    return matches.length;
  }

  private victories(matches: IMatches[]): number {
    return matches
      .reduce((acc, match) => (match.homeTeamGoals > match.awayTeamGoals ? acc + 1 : acc), 0);
  }

  private draws(matches: IMatches[]): number {
    return matches
      .reduce((acc, match) => (match.homeTeamGoals === match.awayTeamGoals ? acc + 1 : acc), 0);
  }

  private loses(matches: IMatches[]): number {
    return matches
      .reduce((acc, match) => (match.homeTeamGoals < match.awayTeamGoals ? acc + 1 : acc), 0);
  }

  private goalsScored(matches: IMatches[]): number {
    return matches
      .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  }

  private goalsAgain(matches: IMatches[]): number {
    return matches.reduce((acc, match) => acc + match.awayTeamGoals, 0);
  }

  private balanceGols(): number {
    return this._goalsFavor - this._goalsOwn;
  }

  private golsEfficiency(): number {
    return Number(((this._totalPoints / (this._totalGames * 3)) * 100).toFixed(2));
  }

  get name(): string { return this._name; }
  get totalPoints(): number { return this._totalPoints; }
  get totalGames(): number { return this._totalGames; }
  get totalVictories(): number { return this._totalVictories; }
  get totalDraws(): number { return this._totalDraws; }
  get totalLosses(): number { return this._totalLosses; }
  get goalsFavor(): number { return this._goalsFavor; }
  get goalsOwn(): number { return this._goalsOwn; }
  get goalsBalance(): number { return this._goalsBalance; }
  get efficiency(): number { return this._efficiency; }
}
