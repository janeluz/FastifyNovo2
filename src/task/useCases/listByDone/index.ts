import { TasksRepository } from "../../repositories/tasksRepository";
import { ListTasksByDoneController } from "./listTaskController";
import { ListTasksByDoneUseCase } from "./listTaskUseCase";

export default () => {
    const tasksRepository = new TasksRepository();
    const listTasksByDoneUseCase = new ListTasksByDoneUseCase(tasksRepository);
    const listTasksByDoneController = new ListTasksByDoneController(listTasksByDoneUseCase);

    return listTasksByDoneController;
};