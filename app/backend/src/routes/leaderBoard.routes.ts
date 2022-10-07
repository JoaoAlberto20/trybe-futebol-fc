import { Router } from 'express';
import listLeaderBoardController from '../modules/leaderBoardHome/use-cases/listLeaderBoardHome';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/home', listLeaderBoardController.handle);

export default LeaderBoardRouter;
