import { ITeams } from '../../dtos/ITeams';
import TeamsRepository from '../../repositories/implementations/TeamsRepository';

export default class GetTeamUseCase {
  constructor(private _teamsRepository: TeamsRepository) {}

  async execute(id: number): Promise<ITeams | null> {
    const team = await this._teamsRepository.findById(id);
    return team;
  }
}
