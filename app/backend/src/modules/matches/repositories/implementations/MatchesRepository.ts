import MatchModel from '../../../../database/models/matches';
import TeamModel from '../../../../database/models/teams';
import { IMatches } from '../../dtos/IMatches';
import { IMatchesRepository } from '../IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  private _repository = MatchModel;

  async findAll(): Promise<IMatches[]> {
    const matches = await this._repository.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  async findByInProgress(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this._repository.findAll({
      where: { inProgress },
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }
}
