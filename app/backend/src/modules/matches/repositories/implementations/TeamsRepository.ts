import TeamModel from '../../../../database/models/teams';
import { ITeams } from '../../dtos/ITeams';
import { ITeamsRepository } from '../ITeamsRepository';

export default class TeamsRepository implements ITeamsRepository {
  private _repository = TeamModel;

  async findAll(): Promise<ITeams[]> {
    const teams = await this._repository.findAll();
    return teams;
  }

  async findById(id: number): Promise<ITeams | null> {
    const team = await this._repository.findByPk(id);
    return team;
  }
}
