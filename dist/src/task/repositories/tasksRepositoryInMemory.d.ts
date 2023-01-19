import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
declare class TasksRepositoryInMemory implements ITasksRepository {
    update(id: string, body: any): Promise<Task>;
    tasks: Task[];
    create({ name, user_id, description, done }: ICreateTaskDTO): Promise<Task>;
    findByName(name: string): Promise<Task>;
    listAllTask(): Promise<Task[]>;
    findByDone(created_at?: Date, updated_at?: Date, done?: boolean): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    deleteById(id: string): Promise<void>;
}
export { TasksRepositoryInMemory };
