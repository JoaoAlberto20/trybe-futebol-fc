import { Router } from 'express';
import listAllMatchesController
  from '../modules/matches/use-cases/listAllMatches';
import listByMatchesInProgressController
  from '../modules/matches/use-cases/listByMatchesInProgress';

const MatchesRouter = Router();

MatchesRouter.get('/', (request, response) => {
  const { inProgress } = request.query;

  if (inProgress) {
    listByMatchesInProgressController.handle(request, response);
  } else {
    listAllMatchesController.handle(request, response);
  }
});

export default MatchesRouter;
