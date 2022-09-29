import AppError from '../../../../error/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export default class ValidateUserUseCase {
  constructor(private _userRepository: IUsersRepository) {}

  async execute(id: number): Promise<string> {
    const user = await this._userRepository.findById(id);
    if (!user) throw new AppError('User not exist!', 401);
    return user.role as string;
  }
}
