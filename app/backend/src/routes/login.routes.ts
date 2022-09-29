import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticate';
import authenticateController from '../modules/users/use-cases/authenticateUser';
import validateUserController from '../modules/users/use-cases/validateUser';

const LoginRouter = Router();

LoginRouter.post('/', authenticateController.handle);
LoginRouter.get('/validate', ensureAuthenticated, validateUserController.handle);

export default LoginRouter;
