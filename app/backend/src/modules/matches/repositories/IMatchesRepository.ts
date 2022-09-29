import { IMatches } from '../dtos/IMatches';

export interface IMatchesRepository {
  findAll(): Promise<IMatches[]>
  findByInProgress(inProgress: boolean): Promise<IMatches[]>
}
