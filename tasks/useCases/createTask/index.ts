import { TasksRepository } from "../../repositories/tasksRepository";
import { CreateTaskController } from "./taskController";
import { CreateTaskUseCase } from "./taskUseCase";


export default () => {
const tasksRepository = new TasksRepository();
const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);


return createTaskController;
};
