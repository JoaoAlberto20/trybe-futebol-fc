import MatchesRepository from '../../repositories/implementations/MatchesRepository';
import FinishMatchesController from './FinishMatchesController';
import FinishMatchesUseCase from './FinishMatchesUseCase';

const matchesRepository = new MatchesRepository();
const finishMatchesUseCase = new FinishMatchesUseCase(matchesRepository);
const finishMatchesController = new FinishMatchesController(finishMatchesUseCase);

export default finishMatchesController;
