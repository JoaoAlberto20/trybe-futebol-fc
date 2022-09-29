import { compare } from 'bcryptjs';
import AppError from '../../../../error/AppError';
import signUser from '../../../../config/token';
import Login from '../../entities/Login';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string
  password: string
}

export default class AuthenticateUserUserUseCase {
  constructor(private _userRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<string> {
    const login = new Login(email, password);

    const user = await this._userRepository.findByEmail(email);

    if (!user) throw new AppError('Password or email invalid!', 401);

    const passwordMatch = await compare(login.password, user.password);

    if (!passwordMatch) {
      throw new AppError('Password or email invalid!', 401);
    }

    const token = signUser(user.email, user.id as number);

    return token;
  }
}
