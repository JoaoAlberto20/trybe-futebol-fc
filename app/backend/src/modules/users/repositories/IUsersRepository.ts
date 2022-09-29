import { IUser } from '../dtos/IUser';

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser>
  findById(id: number): Promise<IUser>
}
