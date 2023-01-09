import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";
declare class ListTasksByDoneUseCase {
    private tasksRepository;
    constructor(tasksRepository: ITasksRepository);
    execute(done: boolean): Promise<Task>;
}
export { ListTasksByDoneUseCase };
