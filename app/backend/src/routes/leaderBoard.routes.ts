import { Router } from 'express';
import listLeaderBoardHomeController
  from '../modules/leaderBoardHome/use-cases/listLeaderBoardHome';
import listLeaderBoardAwayController
  from '../modules/leaderBoardHome/use-cases/listLeaderBoardAway';
import listLeaderBoardAllController
  from '../modules/leaderBoardHome/use-cases/listLeaderBoardAll';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/', listLeaderBoardAllController.handle);
LeaderBoardRouter.get('/home', listLeaderBoardHomeController.handle);
LeaderBoardRouter.get('/away', listLeaderBoardAwayController.handle);

export default LeaderBoardRouter;
