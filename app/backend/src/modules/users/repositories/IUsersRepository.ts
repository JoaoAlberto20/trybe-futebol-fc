import { IUser } from '../dtos/IUser';

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser | null>
  findById(id: number): Promise<IUser | null>
}
