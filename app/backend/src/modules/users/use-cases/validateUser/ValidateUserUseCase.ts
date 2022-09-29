import { IUsersRepository } from '../../repositories/IUsersRepository';

export default class ValidateUserUseCase {
  constructor(private _userRepository: IUsersRepository) {}

  async execute(id: number): Promise<string> {
    const user = await this._userRepository.findById(id);
    return user.role as string;
  }
}
