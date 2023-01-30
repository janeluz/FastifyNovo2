"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUseCase = void 0;
class CreateTaskUseCase {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute({ name, user_id, description, total }) {
        const taskAlreadyExists = this.taskRepository.findByName(name);
        if (await taskAlreadyExists) {
            new Error(" task Already exists!");
        }
        const task = this.taskRepository.create({ name, user_id, description, total });
        return task;
    }
}
exports.CreateTaskUseCase = CreateTaskUseCase;
