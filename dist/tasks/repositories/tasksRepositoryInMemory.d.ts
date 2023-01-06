import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
declare class TasksRepositoryInMemory implements ITasksRepository {
    findById(id: string): Promise<Task>;
    deleteById(id: string): Promise<Response>;
    tasks: Task[];
    create({ name, user_id, description, done }: ICreateTaskDTO): Promise<Task>;
    findByName(name: string): Promise<Task>;
    findByDone(done: boolean): Promise<Task>;
    listAllTask(): Promise<Task[]>;
}
export { TasksRepositoryInMemory };
