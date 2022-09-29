import MatchesRepository from '../../repositories/implementations/MatchesRepository';
import ListAllMatchesController from './listAllMatchesController';
import ListAllMatchesUseCase from './ListAllMatchesUseCase';

const matchesRepository = new MatchesRepository();
const listAllMatchesUseCase = new ListAllMatchesUseCase(matchesRepository);
const listAllMatchesController = new ListAllMatchesController(listAllMatchesUseCase);

export default listAllMatchesController;
