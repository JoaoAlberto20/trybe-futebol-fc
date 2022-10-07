import { Router } from 'express';
import LeaderBoardRouter from './leaderBoard.routes';
import LoginRouter from './login.routes';
import MatchesRouter from './matches.routes';
import TeamRouter from './team.routes';

const Routes = Router();

Routes.use('/login', LoginRouter);
Routes.use('/teams', TeamRouter);
Routes.use('/matches', MatchesRouter);
Routes.use('/leaderBoard', LeaderBoardRouter);

export default Routes;
