import { Task } from "src/task/entities/task";
interface ICreateTaskDTO {
    name: string;
    user_id: string;
    description: string;
    done?: boolean;
    start_task?: Date;
    end_task?: Date;
    total: number;
    created_at?: Date;
    updated_at?: Date;
}
interface ITasksRepository {
    findByName(name: string): Promise<Task>;
    create({ name, user_id, description, done, start_task, end_task, total }: ICreateTaskDTO): Promise<Task>;
    listAllTask(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    deleteById(id: string): Promise<void>;
    findByDone(created_at: Date): Promise<Task>;
    update(id: string, body: any): Promise<Task>;
}
export { ICreateTaskDTO, ITasksRepository };
