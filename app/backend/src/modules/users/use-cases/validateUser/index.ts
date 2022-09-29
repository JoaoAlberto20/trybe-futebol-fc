import UsersRepository from '../../repositories/implementations/UsersRepository';
import ValidateUserController from './ValidateUserController';
import ValidateUserUseCase from './ValidateUserUseCase';

const usersRepository = new UsersRepository();
const validateUserUseCase = new ValidateUserUseCase(usersRepository);
const validateUserController = new ValidateUserController(validateUserUseCase);

export default validateUserController;
