import { Router } from 'express';
import finishMatchesController
  from '../modules/matches/use-cases/finishMatches';
import ensureAuthenticated from '../middlewares/ensureAuthenticate';
import createMatchesController from '../modules/matches/use-cases/createMatches';
import listAllMatchesController from '../modules/matches/use-cases/listAllMatches';
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
MatchesRouter.post('/', ensureAuthenticated, createMatchesController.handle);
MatchesRouter.patch('/:id/finish', finishMatchesController.handle);

export default MatchesRouter;
