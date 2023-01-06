import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
declare class TasksRepository implements ITasksRepository {
    constructor();
    listAllTask(): Promise<Task[]>;
    create({ name, user_id, description, done }: ICreateTaskDTO): Promise<Task>;
    deleteById(id: string): Promise<Response>;
    findById(id: string): Promise<Task>;
    findByName(name: string): Promise<Task>;
}
export { TasksRepository };
