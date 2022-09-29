import { Router } from 'express';
import listAllMatchesController from '../modules/matches/use-cases/listAllMatches';

const MatchesRouter = Router();

MatchesRouter.get('/', listAllMatchesController.handle);

export default MatchesRouter;
