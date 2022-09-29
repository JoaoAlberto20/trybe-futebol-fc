import { Router } from 'express';
import LoginRoutes from './login.routes';
import TeamRouter from './team.routes';

const Routes = Router();

Routes.use('/login', LoginRoutes);
Routes.use('/teams', TeamRouter);

export default Routes;

// secret_user
