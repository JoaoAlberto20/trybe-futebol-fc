import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticate';
import authenticateController from '../modules/users/use-cases/authenticateUser';
import validateUserController from '../modules/users/use-cases/validateUser';

const LoginRoutes = Router();

LoginRoutes.post('/', authenticateController.handle);
LoginRoutes.get('/validate', ensureAuthenticated, validateUserController.handle);

export default LoginRoutes;
