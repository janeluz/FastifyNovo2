import { ITasksRepository } from "src/task/dto/ICreateDTO";
declare class UpdateTaskUseCase {
    private taskRepository;
    constructor(taskRepository: ITasksRepository);
    execute(id: string, body: any): Promise<import("../../entities/task").Task>;
}
export { UpdateTaskUseCase };
