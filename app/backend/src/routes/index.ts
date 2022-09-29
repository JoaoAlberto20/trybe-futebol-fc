import { Router } from 'express';
import LoginRouter from './login.routes';
import MatchesRouter from './matche.routes';
import TeamRouter from './team.routes';

const Routes = Router();

Routes.use('/login', LoginRouter);
Routes.use('/teams', TeamRouter);
Routes.use('/matches', MatchesRouter);

export default Routes;
