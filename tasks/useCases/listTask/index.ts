import { TasksRepository } from "../../repositories/tasksRepository";
import { ListTasksController } from "./listTaskController";
import { ListTasksUseCase } from "./listTaskUseCase";

export default () => {
const tasksRepository = new TasksRepository();
const listTasksUseCase = new ListTasksUseCase(tasksRepository);
const listTasksController = new ListTasksController(listTasksUseCase);

return listTasksController;
};