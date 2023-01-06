import { ITasksRepository } from "../../dto/ICreateDTO";
declare class DeleteTaskUseCase {
    private tasksRepository;
    constructor(tasksRepository: ITasksRepository);
    execute(id: string): Promise<Response>;
}
export { DeleteTaskUseCase };
