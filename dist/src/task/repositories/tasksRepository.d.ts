import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
declare class TasksRepository implements ITasksRepository {
    constructor();
    listAllTask(): Promise<Task[]>;
    create({ name, user_id, description, done, total }: ICreateTaskDTO): Promise<Task>;
    deleteById(id: string): Promise<void>;
    findById(id: string): Promise<Task>;
    findByName(name: string): Promise<Task>;
    findByDone(start_task: Date): Promise<Task>;
    update(id: string, body: any): Promise<Task>;
}
export { TasksRepository };
