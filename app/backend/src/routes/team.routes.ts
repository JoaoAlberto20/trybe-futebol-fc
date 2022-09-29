import { Router } from 'express';
import getTeamController from '../modules/teams/use-cases/getTeam';
import listAllTeamsController from '../modules/teams/use-cases/listAllTeams';

const TeamRouter = Router();

TeamRouter.get('/', listAllTeamsController.handle);
TeamRouter.get('/:id', getTeamController.handle);

export default TeamRouter;
