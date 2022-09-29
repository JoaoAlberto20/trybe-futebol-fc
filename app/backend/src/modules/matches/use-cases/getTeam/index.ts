import TeamsRepository from '../../repositories/implementations/TeamsRepository';
import GetTeamUseCase from './GetTeamUseCase';
import GetTeamController from './GetTeamUserController';

const teamsRepository = new TeamsRepository();
const getTeamUseCase = new GetTeamUseCase(teamsRepository);
const getTeamController = new GetTeamController(getTeamUseCase);

export default getTeamController;
