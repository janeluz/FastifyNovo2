import { Task } from "tasks/entities/task";
interface ICreateTaskDTO {
    name: string;
    user_id: string;
    description: string;
    done: boolean;
    created_at?: Date;
    updated_at?: Date;
}
interface ITasksRepository {
    findByName(name: string): Promise<Task>;
    create({ name, user_id, done, description, created_at, updated_at }: ICreateTaskDTO): Promise<Task>;
    listAllTask(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    deleteById(id: string): Promise<Response>;
}
export { ICreateTaskDTO, ITasksRepository };
