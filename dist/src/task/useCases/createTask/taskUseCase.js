"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUseCase = void 0;
class CreateTaskUseCase {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute({ name, user_id, description, done, total }) {
        const taskAlreadyExists = this.taskRepository.findByName(name);
        console.log("UseCase", taskAlreadyExists);
        if (await taskAlreadyExists) {
            new Error(" task Already exists!");
        }
        const task = this.taskRepository.create({ name, user_id, description, done, total });
        console.log("UseCase", task);
        return task;
    }
}
exports.CreateTaskUseCase = CreateTaskUseCase;
