"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskUseCase = void 0;
class UpdateTaskUseCase {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(id, body) {
        const task = await this.taskRepository.findById(id);
        if (!task) {
            throw new Error("Task not found");
        }
        const updatedTask = await this.taskRepository.update(id, body);
        return updatedTask;
    }
}
exports.UpdateTaskUseCase = UpdateTaskUseCase;
