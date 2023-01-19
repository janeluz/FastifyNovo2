"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksByDoneUseCase = void 0;
class ListTasksByDoneUseCase {
    tasksRepository;
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute(created_at, updated_at) {
        const tasksDone = this.tasksRepository.findByDone(created_at, updated_at);
        return tasksDone;
    }
}
exports.ListTasksByDoneUseCase = ListTasksByDoneUseCase;
