"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksUseCase = void 0;
class ListTasksUseCase {
    tasksRepository;
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute() {
        const tasks = this.tasksRepository.listAllTask();
        return tasks;
    }
}
exports.ListTasksUseCase = ListTasksUseCase;
