import { IMatches } from '../dtos/IMatches';

export interface IRequest {
  homeTeam: number
  awayTeam: number
  homeTeamGoals: number
  awayTeamGoals: number
}

export interface IRequestUpdate {
  homeTeamGoals: number
  awayTeamGoals: number
}
export interface IMatchesRepository {
  findAll(): Promise<IMatches[]>
  findByInProgress(inProgress: boolean): Promise<IMatches[]>
  create(data: IRequest): Promise<IMatches>
  finallyMatch(id: number): Promise<void>
  updateMatch(id: number, data: IRequestUpdate): Promise<void>
}
