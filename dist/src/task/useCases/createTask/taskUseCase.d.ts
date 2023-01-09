import { ICreateTaskDTO, ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";
declare class CreateTaskUseCase {
    private taskRepository;
    constructor(taskRepository: ITasksRepository);
    execute({ name, user_id, description, done }: ICreateTaskDTO): Promise<Task>;
}
export { CreateTaskUseCase };
