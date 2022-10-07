import MatchModel from '../../../../database/models/matches';
import TeamModel from '../../../../database/models/teams';
import { IMappersMatchesHome } from '../../dtos/IMappersMatches';
import { ILeaderBoardRepository } from '../ILeaderBoardRepository';

export default class LeaderBoardRepository implements ILeaderBoardRepository {
  private _repository: typeof TeamModel;

  constructor() {
    this._repository = TeamModel;
  }

  async findAllHome(): Promise<IMappersMatchesHome[]> {
    const matches = await this._repository.findAll({
      include: [{ model: MatchModel, as: 'matchesHome', where: { inProgress: 0 } }],
    });
    return matches as unknown as IMappersMatchesHome[];
  }
}
