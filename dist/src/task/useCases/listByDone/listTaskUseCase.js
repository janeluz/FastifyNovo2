"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksByDoneUseCase = void 0;
class ListTasksByDoneUseCase {
    tasksRepository;
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute(done) {
        const tasksDone = this.tasksRepository.findByDone(done);
        return tasksDone;
    }
}
exports.ListTasksByDoneUseCase = ListTasksByDoneUseCase;
