import { TasksRepository } from "../../../../src/task/repositories/tasksRepository";
import { UpdateTaskController } from "./updateTaskController";
import { UpdateTaskUseCase } from "./updateTaskUseCase";


export default () => {
    const tasksRepository = new TasksRepository();
    const updateTaskUseCase = new UpdateTaskUseCase(tasksRepository);
    const updateTaskController = new UpdateTaskController(updateTaskUseCase);
    
    return updateTaskController;
};
