import { IMatches } from '../dtos/IMatches';

export interface IMatchesRepository {
  findAll(): Promise<IMatches[]>
}
