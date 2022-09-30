import MatchesRepository from '../../repositories/implementations/MatchesRepository';
import TeamsRepository from '../../repositories/implementations/TeamsRepository';
import CreaMatchesController from './CreaMatchesController';
import CreaMatchesUseCase from './CreateMatchesUseCase';

const matchesRepository = new MatchesRepository();
const teamsRepository = new TeamsRepository();
const createMatchesUseCase = new CreaMatchesUseCase(
  matchesRepository,
  teamsRepository,
);
const createMatchesController = new CreaMatchesController(createMatchesUseCase);

export default createMatchesController;
