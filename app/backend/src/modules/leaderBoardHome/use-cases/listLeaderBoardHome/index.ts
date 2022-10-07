import LeaderBoardRepository from '../../repositories/implementations/LeaderBoardRepository';
import ListLeaderBoardHomeController from './ListLeaderBoardHomeController';
import ListLeaderBoardHomeUseCase from './ListLeaderBoardHomeUseCase';

const leaderBoardRepository = new LeaderBoardRepository();
const lisLeaderBoardHomeUseCase = new ListLeaderBoardHomeUseCase(leaderBoardRepository);
const listLeaderBoardController = new ListLeaderBoardHomeController(lisLeaderBoardHomeUseCase);

export default listLeaderBoardController;
