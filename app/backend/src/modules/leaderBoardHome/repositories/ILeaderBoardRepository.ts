import { IMappersMatches } from '../dtos/IMappersMatches';

export interface ILeaderBoardRepository {
  findHome(): Promise<IMappersMatches[]>
  findAway(): Promise<IMappersMatches[]>
}
