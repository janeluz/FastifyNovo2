import { TasksRepository } from "../../repositories/tasksRepository";
import { DeleteTaskController } from "./deleteTaskController";
import { DeleteTaskUseCase } from "./deleteTaskUseCase";



export default () => {
    const tasksRepository = new TasksRepository();
    const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);
    const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

    return deleteTaskController;
};


