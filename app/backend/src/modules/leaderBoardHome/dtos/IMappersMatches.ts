import { IMatches } from './IMatches';

export interface IMappersMatchesHome {
  id: number
  teamName: string
  matchesHome: IMatches[]
}

export interface IMappersMatchesAway {
  id: number
  teamName: string
  matchesAway: IMatches[]
}
