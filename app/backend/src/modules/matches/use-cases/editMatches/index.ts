import MatchesRepository from '../../repositories/implementations/MatchesRepository';
import EditMatchesUseCase from './EditMatches.UseCase';
import EditMatchesController from './EditMatchesController';

const matchesRepository = new MatchesRepository();
const editMarchesUseCase = new EditMatchesUseCase(matchesRepository);
const editMarchesController = new EditMatchesController(editMarchesUseCase);

export default editMarchesController;
