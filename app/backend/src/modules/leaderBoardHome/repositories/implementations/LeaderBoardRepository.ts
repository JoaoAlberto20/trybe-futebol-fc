import MatchModel from '../../../../database/models/matches';
import TeamModel from '../../../../database/models/teams';
import { IMappersMatches } from '../../dtos/IMappersMatches';
import { ILeaderBoardRepository } from '../ILeaderBoardRepository';

export default class LeaderBoardRepository implements ILeaderBoardRepository {
  private _repository: typeof TeamModel;

  constructor() {
    this._repository = TeamModel;
  }

  async findHome(): Promise<IMappersMatches[]> {
    const matchesHome = await this._repository.findAll({
      include: [{ model: MatchModel, as: 'matchesHome', where: { inProgress: 0 } }],
    });
    console.log(matchesHome);
    return matchesHome.map((match: any) => ({
      teamName: match.teamName, matches: match.matchesHome,
    })) as unknown as IMappersMatches[];
  }

  async findAway(): Promise<IMappersMatches[]> {
    const matchesAway = await this._repository.findAll({
      include: [{ model: MatchModel, as: 'matchesAway', where: { inProgress: 0 } }],
    });
    return matchesAway.map((match: any) => ({
      teamName: match.teamName, matches: match.matchesAway,
    })) as unknown as IMappersMatches[];
  }
}
