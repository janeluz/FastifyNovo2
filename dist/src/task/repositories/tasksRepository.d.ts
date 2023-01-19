import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
declare class TasksRepository implements ITasksRepository {
    constructor();
    listAllTask(): Promise<Task[]>;
    create({ name, user_id, description, done }: ICreateTaskDTO): Promise<Task>;
    deleteById(id: string): Promise<void>;
    findById(id: string): Promise<Task>;
    findByName(name: string): Promise<Task>;
    findByDone(created_at?: Date, updated_at?: Date, done?: boolean): Promise<Task[]>;
    update(id: string, body: any): Promise<Task>;
}
export { TasksRepository };
