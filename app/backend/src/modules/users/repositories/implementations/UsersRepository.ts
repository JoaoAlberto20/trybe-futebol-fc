import UserModel from '../../../../database/models/user';
import { IUser } from '../../dtos/IUser';
import { IUsersRepository } from '../IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private _repository = UserModel;

  async findByEmail(email: string): Promise<IUser> {
    const user = await this._repository.findOne({
      where: {
        email,
      },
    });
    return user as IUser;
  }

  async findById(id: number): Promise<IUser> {
    const user = await this._repository.findByPk(id);
    return user as IUser;
  }
}
