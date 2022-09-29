import { Router } from 'express';
import LoginRoutes from './login.routes';

const Routes = Router();

Routes.use('/login', LoginRoutes);

export default Routes;

// secret_user
