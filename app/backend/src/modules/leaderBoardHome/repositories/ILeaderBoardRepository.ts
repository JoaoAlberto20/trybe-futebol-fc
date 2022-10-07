import { IMappersMatchesHome } from '../dtos/IMappersMatches';

export interface ILeaderBoardRepository {
  findAllHome(): Promise<IMappersMatchesHome[]>
}
