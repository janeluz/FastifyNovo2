import { ITasksRepository } from "src/task/dto/ICreateDTO";


class UpdateTaskUseCase {
    constructor(private taskRepository: ITasksRepository) {}

    async execute(id: string, body: any) {
        
        const task = await this.taskRepository.findById(id);
    
        if (!task) {
            throw new Error("Task not found");
        }
        
        const updatedTask = await this.taskRepository.update(id, body);

        return updatedTask;
    }
}

export { UpdateTaskUseCase };
