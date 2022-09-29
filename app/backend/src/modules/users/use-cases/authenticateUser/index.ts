import UsersRepository from '../../repositories/implementations/UsersRepository';
import AuthenticateController from './AuthenticateController';
import AuthenticateUserUserUseCase from './AuthenticateUserUserCase';

const usersRepository = new UsersRepository();
const authenticateUsersUseCase = new AuthenticateUserUserUseCase(usersRepository);
const authenticateController = new AuthenticateController(
  authenticateUsersUseCase,
);

export default authenticateController;
