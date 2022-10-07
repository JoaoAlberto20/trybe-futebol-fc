import LeaderBoardRepository from '../../repositories/implementations/LeaderBoardRepository';
import ListLeaderBoardAwayController from './ListLeaderBoardAwayController';
import ListLeaderBoardAwayUseCase from './ListLeaderBoardAwayUseCase';

const leaderBoardRepository = new LeaderBoardRepository();
const lisLeaderBoardAwayUseCase = new ListLeaderBoardAwayUseCase(leaderBoardRepository);
const listLeaderBoardAwayController = new ListLeaderBoardAwayController(lisLeaderBoardAwayUseCase);

export default listLeaderBoardAwayController;
