import MatchesRepository from '../../repositories/implementations/MatchesRepository';
import CreaMatchesController from './CreaMatchesController';
import CreaMatchesUseCase from './CreateMatchesUseCase';

const matchesRepository = new MatchesRepository();
const createMatchesUseCase = new CreaMatchesUseCase(matchesRepository);
const createMatchesController = new CreaMatchesController(createMatchesUseCase);

export default createMatchesController;
