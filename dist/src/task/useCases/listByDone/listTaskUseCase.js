"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksByDoneUseCase = void 0;
class ListTasksByDoneUseCase {
    tasksRepository;
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute() {
        const tasksDone = this.tasksRepository.findByDone();
        return tasksDone;
    }
}
exports.ListTasksByDoneUseCase = ListTasksByDoneUseCase;
