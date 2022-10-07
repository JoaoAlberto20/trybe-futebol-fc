import { IMappersMatchesAway, IMappersMatchesHome } from '../dtos/IMappersMatches';

export interface ILeaderBoardRepository {
  findAllHome(): Promise<IMappersMatchesHome[]>
  findAllAway(): Promise<IMappersMatchesAway[]>
}
