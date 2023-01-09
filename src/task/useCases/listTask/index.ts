import { TasksRepository } from "../../repositories/tasksRepository";
import { ListTasksController } from "./listTasksController";
import { ListTasksUseCase } from "./listTasksUseCase";

export default () => {
    const tasksRepository = new TasksRepository();
    const listTasksUseCase = new ListTasksUseCase(tasksRepository);
    const listTasksController = new ListTasksController(listTasksUseCase);

    return listTasksController;
};