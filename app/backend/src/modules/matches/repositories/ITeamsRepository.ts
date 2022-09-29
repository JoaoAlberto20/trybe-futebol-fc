import { ITeams } from '../dtos/ITeams';

export interface ITeamsRepository {
  findAll(): Promise<ITeams[]>
  findById(id: number): Promise<ITeams | null>
}
