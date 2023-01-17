import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";
declare class ListTasksByDoneUseCase {
    private tasksRepository;
    constructor(tasksRepository: ITasksRepository);
    execute(): Promise<Task[]>;
}
export { ListTasksByDoneUseCase };
