import { Router } from 'express';
import listLeaderBoardHomeController
  from '../modules/leaderBoardHome/use-cases/listLeaderBoardHome';
import listLeaderBoardAwayController
  from '../modules/leaderBoardHome/use-cases/listLeaderBoardAway';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/home', listLeaderBoardHomeController.handle);
LeaderBoardRouter.get('/away', listLeaderBoardAwayController.handle);

export default LeaderBoardRouter;
