import MatchesRepository from '../../repositories/implementations/MatchesRepository';
import ListByMatchesInProgressController from './ListByMatchesInProgressController';
import ListByMatchesInProgressUseCase from './ListByMatchesInProgressUseCase';

const matchesRepository = new MatchesRepository();
const listByMatchesInProgressUseCase = new ListByMatchesInProgressUseCase(matchesRepository);
const listByMatchesInProgressController = new ListByMatchesInProgressController(
  listByMatchesInProgressUseCase,
);

export default listByMatchesInProgressController;
