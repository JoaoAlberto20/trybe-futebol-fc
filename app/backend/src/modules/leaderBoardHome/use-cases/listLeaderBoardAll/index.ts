import LeaderBoardRepository from '../../repositories/implementations/LeaderBoardRepository';
import ListLeaderBoardAwayUseCase from '../listLeaderBoardAway/ListLeaderBoardAwayUseCase';
import ListLeaderBoardHomeUseCase from '../listLeaderBoardHome/ListLeaderBoardHomeUseCase';
import ListLeaderBoardAllController from './ListLeaderBoardAllController';
import ListLeaderBoardAllUseCase from './ListLeaderBoardAllUseCase';

const leaderBoardRepository = new LeaderBoardRepository();
const lisLeaderBoardHomeUseCase = new ListLeaderBoardHomeUseCase(leaderBoardRepository);
const lisLeaderBoardAwayUseCase = new ListLeaderBoardAwayUseCase(leaderBoardRepository);
const listLeaderBoardAllUseCase = new ListLeaderBoardAllUseCase(
  lisLeaderBoardAwayUseCase,
  lisLeaderBoardHomeUseCase,
);
const listLeaderBoardAllController = new ListLeaderBoardAllController(listLeaderBoardAllUseCase);

export default listLeaderBoardAllController;
