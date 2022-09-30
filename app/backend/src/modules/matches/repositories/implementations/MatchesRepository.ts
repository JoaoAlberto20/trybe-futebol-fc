import MatchModel from '../../../../database/models/matches';
import TeamModel from '../../../../database/models/teams';
import { IMatches } from '../../dtos/IMatches';
import { IMatchesRepository, IRequest } from '../IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  private _repository = MatchModel;

  async create({
    homeTeam, awayTeam, awayTeamGoals, homeTeamGoals,
  }:IRequest): Promise<IMatches> {
    const match = await this._repository.create(
      { homeTeam, awayTeam, awayTeamGoals, homeTeamGoals },
    );
    return match;
  }

  async update(id: number): Promise<void> {
    await this._repository.update({ inProgress: 0 }, { where: { id } });
  }

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
