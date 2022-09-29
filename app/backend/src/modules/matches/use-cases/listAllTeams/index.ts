import TeamsRepository from '../../repositories/implementations/TeamsRepository';
import ListAllTeamsController from './ListAllTeamsController';
import ListAllTeamsUseCase from './ListAllTeamsUseCase';

const teamsRepository = new TeamsRepository();
const listAllTeamsUseCase = new ListAllTeamsUseCase(teamsRepository);
const listAllTeamsController = new ListAllTeamsController(listAllTeamsUseCase);

export default listAllTeamsController;
