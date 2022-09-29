import { ITeams } from '../../dtos/ITeams';
import { ITeamsRepository } from '../../repositories/ITeamsRepository';

export default class ListAllTeamsUseCase {
  constructor(private _teamsRepository: ITeamsRepository) {}

  async execute(): Promise<ITeams[]> {
    const teams = await this._teamsRepository.findAll();
    return teams;
  }
}
